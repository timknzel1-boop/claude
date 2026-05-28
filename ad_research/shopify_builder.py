import os
import re
import json
import httpx
from dotenv import load_dotenv

load_dotenv()

ANTHROPIC_KEY = os.getenv("ANTHROPIC_API_KEY", "")
SHOPIFY_STORE = os.getenv("SHOPIFY_STORE", "")   # e.g. mystore.myshopify.com
SHOPIFY_TOKEN = os.getenv("SHOPIFY_ACCESS_TOKEN", "")
SHOPIFY_API_VERSION = "2024-01"


async def _ask_claude(prompt: str, max_tokens: int = 2500) -> str:
    try:
        import anthropic
    except ImportError:
        raise RuntimeError("anthropic-Paket fehlt. Bitte: pip install anthropic")
    if not ANTHROPIC_KEY:
        raise RuntimeError("ANTHROPIC_API_KEY nicht gesetzt")

    client = anthropic.AsyncAnthropic(api_key=ANTHROPIC_KEY)
    msg = await client.messages.create(
        model="claude-opus-4-7",
        max_tokens=max_tokens,
        messages=[{"role": "user", "content": prompt}],
    )
    return msg.content[0].text


def _extract_json(text: str) -> dict:
    match = re.search(r"\{.*\}", text, re.DOTALL)
    if match:
        return json.loads(match.group())
    raise ValueError(f"Kein JSON in Antwort gefunden: {text[:300]}")


# ── AI Content Generation ─────────────────────────────────────────────────────

async def generate_store_content(
    product_name: str,
    niche: str,
    target_audience: str,
    ad_copy: str = "",
    language: str = "de",
) -> dict:
    lang = "German" if language == "de" else "English"
    prompt = f"""You are a world-class e-commerce conversion rate optimization expert.
Create high-converting Shopify store content for the following product.

Product / Niche: {product_name}
Target Audience: {target_audience}
Category: {niche}
{f"Reference Ad Copy: {ad_copy}" if ad_copy else ""}
Output Language: {lang}

Respond ONLY with a valid JSON object — no markdown, no explanation:
{{
  "store_name": "memorable brand name",
  "tagline": "short compelling slogan max 8 words",
  "product_title": "SEO-optimized product title",
  "product_description": "3-5 benefit-focused emotional sentences",
  "hero_headline": "homepage big headline max 10 words",
  "hero_subtext": "1-2 sentences supporting the headline",
  "usps": ["unique benefit 1", "unique benefit 2", "unique benefit 3"],
  "faq": [
    {{"question": "Q1?", "answer": "A1"}},
    {{"question": "Q2?", "answer": "A2"}},
    {{"question": "Q3?", "answer": "A3"}}
  ],
  "cta_text": "buy button text 3-5 words",
  "meta_title": "SEO meta title max 60 chars",
  "meta_description": "SEO meta description max 155 chars"
}}"""

    text = await _ask_claude(prompt)
    return _extract_json(text)


async def generate_video_script(
    product_name: str,
    ad_copy: str = "",
    niche: str = "",
    language: str = "de",
) -> dict:
    lang = "German" if language == "de" else "English"
    prompt = f"""You are a viral short-form video ad expert for direct-response e-commerce brands.

Product: {product_name}
Category: {niche}
{f"Reference Ad Copy: {ad_copy}" if ad_copy else ""}
Output Language: {lang}

Create a 30-second AI-video script optimized for Seedance / Kling AI / Runway Gen-3.
Respond ONLY with valid JSON, no markdown:
{{
  "hook": "0-3s — attention-grabbing opening line or question",
  "problem": "3-8s — pain point the audience recognizes",
  "solution": "8-20s — how the product solves the problem",
  "social_proof": "20-25s — result, testimonial, or stat",
  "cta": "25-30s — call to action",
  "voice_over": "complete voice-over text to read aloud",
  "visual_description": "detailed scene-by-scene visual description",
  "seedance_prompt": "ready-to-paste Seedance/Kling prompt: scene, style (cinematic/lifestyle/UGC), camera movement, lighting, mood",
  "duration_seconds": 30
}}"""

    text = await _ask_claude(prompt, max_tokens=1400)
    return _extract_json(text)


# ── Shopify Admin API ─────────────────────────────────────────────────────────

def _shopify_headers() -> dict:
    return {
        "X-Shopify-Access-Token": SHOPIFY_TOKEN,
        "Content-Type": "application/json",
    }


def _shopify_url(path: str) -> str:
    return f"https://{SHOPIFY_STORE}/admin/api/{SHOPIFY_API_VERSION}/{path}"


def _shopify_not_configured() -> dict | None:
    if not SHOPIFY_STORE or not SHOPIFY_TOKEN:
        return {
            "error": "Shopify nicht konfiguriert. "
                     "Bitte SHOPIFY_STORE und SHOPIFY_ACCESS_TOKEN in .env eintragen."
        }
    return None


async def create_shopify_product(content: dict, price: str = "29.99") -> dict:
    if err := _shopify_not_configured():
        return err

    usps_html = "".join(f"<li>{u}</li>" for u in content.get("usps", []))
    faq_html = "".join(
        f"<p><strong>{f['question']}</strong><br/>{f['answer']}</p>"
        for f in content.get("faq", [])
    )

    data = {
        "product": {
            "title": content.get("product_title", "Neues Produkt"),
            "body_html": (
                f"<p>{content.get('product_description', '')}</p>"
                f"<h3>Deine Vorteile</h3><ul>{usps_html}</ul>"
                f"<h3>Häufige Fragen</h3>{faq_html}"
            ),
            "vendor": content.get("store_name", ""),
            "status": "draft",
            "variants": [{"price": str(price), "requires_shipping": True}],
            "metafields": [
                {
                    "namespace": "global",
                    "key": "title_tag",
                    "value": content.get("meta_title", ""),
                    "type": "single_line_text_field",
                },
                {
                    "namespace": "global",
                    "key": "description_tag",
                    "value": content.get("meta_description", ""),
                    "type": "single_line_text_field",
                },
            ],
        }
    }

    async with httpx.AsyncClient() as c:
        resp = await c.post(
            _shopify_url("products.json"), json=data,
            headers=_shopify_headers(), timeout=30,
        )
        return resp.json()


async def create_shopify_page(content: dict) -> dict:
    if err := _shopify_not_configured():
        return err

    usps_html = "".join(
        f'<div style="flex:1;min-width:200px;text-align:center;padding:16px;">'
        f'<p style="font-size:1rem;color:#333;">{u}</p></div>'
        for u in content.get("usps", [])
    )
    faq_html = "".join(
        f'<div style="margin-bottom:24px;">'
        f'<h3 style="margin-bottom:8px;">{f["question"]}</h3>'
        f'<p style="color:#555;">{f["answer"]}</p></div>'
        for f in content.get("faq", [])
    )

    liquid = f"""
<section style="text-align:center;padding:64px 24px;background:linear-gradient(135deg,#f0f4ff,#fff);">
  <h1 style="font-size:clamp(1.8rem,4vw,2.8rem);font-weight:800;line-height:1.2;margin-bottom:16px;">{content.get("hero_headline","")}</h1>
  <p style="font-size:1.1rem;color:#555;max-width:560px;margin:0 auto 32px;">{content.get("hero_subtext","")}</p>
  <a href="/collections/all" style="display:inline-block;background:#000;color:#fff;padding:16px 48px;font-size:1rem;font-weight:600;text-decoration:none;border-radius:6px;">{content.get("cta_text","Jetzt kaufen")}</a>
</section>
<section style="display:flex;justify-content:center;gap:24px;padding:48px 24px;flex-wrap:wrap;max-width:900px;margin:0 auto;">
  {usps_html}
</section>
<section style="max-width:680px;margin:0 auto;padding:48px 24px;">
  <h2 style="text-align:center;font-size:1.6rem;margin-bottom:32px;">Häufige Fragen</h2>
  {faq_html}
</section>
"""

    data = {
        "page": {
            "title": content.get("store_name", "Neue Landingpage"),
            "body_html": liquid,
            "published": False,
        }
    }

    async with httpx.AsyncClient() as c:
        resp = await c.post(
            _shopify_url("pages.json"), json=data,
            headers=_shopify_headers(), timeout=30,
        )
        return resp.json()


async def create_shopify_collection(content: dict) -> dict:
    if err := _shopify_not_configured():
        return err

    data = {
        "custom_collection": {
            "title": content.get("store_name", "Neue Collection"),
            "body_html": f"<p>{content.get('tagline', '')}</p>",
            "published": False,
        }
    }

    async with httpx.AsyncClient() as c:
        resp = await c.post(
            _shopify_url("custom_collections.json"), json=data,
            headers=_shopify_headers(), timeout=30,
        )
        return resp.json()
