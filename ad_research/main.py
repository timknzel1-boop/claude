from fastapi import FastAPI, HTTPException, BackgroundTasks
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from pydantic import BaseModel
import aiosqlite
import httpx
import os
import json
from datetime import datetime, date
from typing import Optional
from dotenv import load_dotenv
from apscheduler.schedulers.asyncio import AsyncIOScheduler
from contextlib import asynccontextmanager

load_dotenv()

META_TOKEN = os.getenv("META_ACCESS_TOKEN", "")
DB_PATH = "ad_research.db"
AD_LIBRARY_URL = "https://graph.facebook.com/v19.0/ads_archive"

# ── Database ──────────────────────────────────────────────────────────────────

async def init_db():
    async with aiosqlite.connect(DB_PATH) as db:
        await db.executescript("""
            CREATE TABLE IF NOT EXISTS daily_products (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                page_id TEXT NOT NULL,
                page_name TEXT NOT NULL,
                ad_count INTEGER DEFAULT 0,
                max_impressions INTEGER DEFAULT 0,
                has_video INTEGER DEFAULT 0,
                sample_body TEXT,
                fetch_date TEXT NOT NULL,
                vote TEXT DEFAULT 'pending',
                tags TEXT DEFAULT '[]',
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );

            CREATE TABLE IF NOT EXISTS competitors (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                page_id TEXT NOT NULL,
                page_name TEXT NOT NULL,
                niche TEXT NOT NULL,
                ad_count INTEGER DEFAULT 0,
                last_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                UNIQUE(page_id, niche)
            );

            CREATE TABLE IF NOT EXISTS competitor_ads (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                page_id TEXT NOT NULL,
                ad_id TEXT NOT NULL UNIQUE,
                body TEXT,
                start_date TEXT,
                impressions_lower INTEGER DEFAULT 0,
                impressions_upper INTEGER DEFAULT 0,
                has_video INTEGER DEFAULT 0,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );

            CREATE TABLE IF NOT EXISTS tag_preferences (
                tag TEXT PRIMARY KEY,
                likes INTEGER DEFAULT 0,
                dislikes INTEGER DEFAULT 0
            );
        """)
        await db.commit()

# ── Meta Ad Library API ───────────────────────────────────────────────────────

async def fetch_ads(
    search_terms: str = None,
    page_ids: list = None,
    country: str = "DE",
    limit: int = 200,
    ad_type: str = "ALL"
) -> list:
    params = {
        "ad_type": ad_type,
        "ad_reached_countries": json.dumps([country]),
        "ad_active_status": "ACTIVE",
        "fields": "id,ad_creation_time,ad_creative_bodies,ad_creative_link_titles,"
                  "page_name,page_id,impressions,publisher_platforms",
        "limit": limit,
        "access_token": META_TOKEN,
    }
    if search_terms:
        params["search_terms"] = search_terms
    if page_ids:
        params["search_page_ids"] = json.dumps(page_ids)

    try:
        async with httpx.AsyncClient() as client:
            resp = await client.get(AD_LIBRARY_URL, params=params, timeout=45)
            data = resp.json()
            if "error" in data:
                print(f"[API Error] {data['error'].get('message', data['error'])}")
                return []
            return data.get("data", [])
    except Exception as e:
        print(f"[Request Error] {e}")
        return []

# Broad search terms to find any trending product category
PRODUCT_KEYWORDS = [
    "shop now", "limited offer", "buy now", "free shipping",
    "new product", "bestseller", "order today", "jetzt kaufen",
    "jetzt bestellen", "gratis versand"
]

NICHE_KEYWORDS = {
    "detox_supplement": [
        "detox", "cleanse", "entgiften", "darmreinigung",
        "detox supplement", "body detox", "detox drink"
    ],
    "ai_video": [
        "AI video generator", "AI video creator", "text to video",
        "KI Video", "AI video tool", "video AI", "AI generated video"
    ],
}

MIN_IMPRESSIONS_VIDEO = 200_000  # Lower bound threshold for video ads
MIN_ADS_COUNT = 50


def parse_impressions(imp: dict) -> int:
    try:
        return int(imp.get("lower_bound", 0))
    except (ValueError, TypeError):
        return 0


def extract_tags(page_name: str, body: str) -> list:
    text = (page_name + " " + body).lower()
    mapping = {
        "health": ["health", "gesundheit", "wellness", "supplement", "vitamin", "immune"],
        "beauty": ["beauty", "skin", "skincare", "glow", "anti-aging", "kollagen", "serum"],
        "fitness": ["fitness", "gym", "workout", "protein", "muscle", "sport", "weight"],
        "fashion": ["fashion", "style", "clothing", "dress", "outfit", "mode"],
        "tech": ["tech", "app", "software", "digital", "ai", "tool", "gadget"],
        "food": ["food", "snack", "drink", "organic", "bio", "keto", "coffee"],
        "pet": ["dog", "cat", "pet", "hund", "katze", "tier"],
        "home": ["home", "kitchen", "decor", "clean", "house", "haushalt"],
    }
    tags = [tag for tag, kws in mapping.items() if any(k in text for k in kws)]
    return tags if tags else ["other"]


async def discover_products(
    min_ads: int = MIN_ADS_COUNT,
    min_video_impressions: int = MIN_IMPRESSIONS_VIDEO
) -> list:
    page_map: dict = {}

    for kw in PRODUCT_KEYWORDS[:4]:
        ads = await fetch_ads(search_terms=kw, limit=200)
        for ad in ads:
            pid = ad.get("page_id")
            if not pid:
                continue
            if pid not in page_map:
                page_map[pid] = {
                    "page_id": pid,
                    "page_name": ad.get("page_name", "Unbekannt"),
                    "ads": [],
                    "max_impressions": 0,
                    "has_video": False,
                }
            imp = parse_impressions(ad.get("impressions", {}))
            page_map[pid]["max_impressions"] = max(page_map[pid]["max_impressions"], imp)
            platforms = ad.get("publisher_platforms", [])
            if isinstance(platforms, list) and any(
                p in platforms for p in ["instagram", "facebook", "messenger"]
            ):
                page_map[pid]["has_video"] = True
            page_map[pid]["ads"].append(ad)

    # Filter: 50+ ads AND (video with 200k+ impressions OR any ad with high count)
    results = [
        v for v in page_map.values()
        if len(v["ads"]) >= min_ads
        and (v["max_impressions"] >= min_video_impressions or len(v["ads"]) >= 100)
    ]
    results.sort(key=lambda x: x["max_impressions"], reverse=True)

    products = []
    for r in results[:10]:
        sample = r["ads"][0] if r["ads"] else {}
        bodies = sample.get("ad_creative_bodies", [])
        body = bodies[0] if bodies else ""
        tags = extract_tags(r["page_name"], body)
        products.append({
            "page_id": r["page_id"],
            "page_name": r["page_name"],
            "ad_count": len(r["ads"]),
            "max_impressions": r["max_impressions"],
            "has_video": int(r["has_video"]),
            "sample_body": body[:500],
            "fetch_date": str(date.today()),
            "tags": json.dumps(tags),
        })
    return products


async def search_niche_competitors(niche: str, country: str = "DE") -> list:
    keywords = NICHE_KEYWORDS.get(niche, [niche])
    page_map: dict = {}

    for kw in keywords[:3]:
        ads = await fetch_ads(search_terms=kw, country=country, limit=200)
        for ad in ads:
            pid = ad.get("page_id")
            if not pid:
                continue
            if pid not in page_map:
                page_map[pid] = {
                    "page_id": pid,
                    "page_name": ad.get("page_name", "Unbekannt"),
                    "ad_count": 0,
                    "sample_ads": [],
                }
            page_map[pid]["ad_count"] += 1
            if len(page_map[pid]["sample_ads"]) < 3:
                bodies = ad.get("ad_creative_bodies", [])
                page_map[pid]["sample_ads"].append({
                    "id": ad.get("id"),
                    "body": bodies[0][:200] if bodies else "",
                    "start_date": ad.get("ad_creation_time", ""),
                    "impressions": parse_impressions(ad.get("impressions", {})),
                })

    results = list(page_map.values())
    results.sort(key=lambda x: x["ad_count"], reverse=True)
    return results[:30]


async def get_competitor_ads_list(page_id: str, country: str = "DE") -> list:
    ads = await fetch_ads(page_ids=[page_id], country=country, limit=100)
    result = []
    for ad in ads:
        bodies = ad.get("ad_creative_bodies", [])
        imp = ad.get("impressions", {})
        platforms = ad.get("publisher_platforms", [])
        result.append({
            "id": ad.get("id"),
            "body": bodies[0][:500] if bodies else "",
            "start_date": ad.get("ad_creation_time", ""),
            "impressions_lower": parse_impressions(imp),
            "impressions_upper": int(imp.get("upper_bound", 0)) if imp else 0,
            "has_video": any(p in (platforms or []) for p in ["instagram", "facebook"]),
        })
    result.sort(key=lambda x: x["impressions_lower"], reverse=True)
    return result

# ── Scheduler ─────────────────────────────────────────────────────────────────

async def run_daily_scrape():
    print(f"[{datetime.now().isoformat()}] Daily product scrape starting...")
    products = await discover_products()
    today = str(date.today())

    async with aiosqlite.connect(DB_PATH) as db:
        cursor = await db.execute(
            "SELECT COUNT(*) FROM daily_products WHERE fetch_date = ?", (today,)
        )
        count = (await cursor.fetchone())[0]
        if count > 0:
            print("Already scraped today.")
            return

        for p in products:
            await db.execute(
                """INSERT INTO daily_products
                   (page_id, page_name, ad_count, max_impressions, has_video, sample_body, fetch_date, tags)
                   VALUES (?,?,?,?,?,?,?,?)""",
                (p["page_id"], p["page_name"], p["ad_count"], p["max_impressions"],
                 p["has_video"], p["sample_body"], p["fetch_date"], p["tags"]),
            )
        await db.commit()
    print(f"Stored {len(products)} products for {today}")

# ── FastAPI ───────────────────────────────────────────────────────────────────

scheduler = AsyncIOScheduler()

@asynccontextmanager
async def lifespan(app: FastAPI):
    await init_db()
    scheduler.add_job(run_daily_scrape, "cron", hour=8, minute=0)
    scheduler.start()
    yield
    scheduler.shutdown()

app = FastAPI(title="Ad Research Tool", lifespan=lifespan)
app.mount("/static", StaticFiles(directory="frontend"), name="static")

@app.get("/")
async def root():
    return FileResponse("frontend/index.html")

# Products
@app.get("/api/products/today")
async def get_today_products():
    today = str(date.today())
    async with aiosqlite.connect(DB_PATH) as db:
        db.row_factory = aiosqlite.Row
        cursor = await db.execute(
            "SELECT * FROM daily_products WHERE fetch_date = ? ORDER BY max_impressions DESC",
            (today,),
        )
        rows = await cursor.fetchall()
        return [dict(r) for r in rows]

@app.post("/api/products/{product_id}/vote")
async def vote_product(product_id: int, payload: dict):
    v = payload.get("vote")
    if v not in ("liked", "disliked"):
        raise HTTPException(400, "vote must be 'liked' or 'disliked'")

    async with aiosqlite.connect(DB_PATH) as db:
        await db.execute(
            "UPDATE daily_products SET vote = ? WHERE id = ?", (v, product_id)
        )
        cursor = await db.execute(
            "SELECT tags FROM daily_products WHERE id = ?", (product_id,)
        )
        row = await cursor.fetchone()
        if row:
            tags = json.loads(row[0] or "[]")
            for tag in tags:
                if v == "liked":
                    await db.execute(
                        "INSERT INTO tag_preferences(tag, likes) VALUES(?,1) "
                        "ON CONFLICT(tag) DO UPDATE SET likes = likes + 1",
                        (tag,),
                    )
                else:
                    await db.execute(
                        "INSERT INTO tag_preferences(tag, dislikes) VALUES(?,1) "
                        "ON CONFLICT(tag) DO UPDATE SET dislikes = dislikes + 1",
                        (tag,),
                    )
        await db.commit()
    return {"status": "ok"}

@app.post("/api/products/scrape")
async def trigger_scrape(background_tasks: BackgroundTasks):
    background_tasks.add_task(run_daily_scrape)
    return {"status": "started"}

@app.get("/api/preferences")
async def get_preferences():
    async with aiosqlite.connect(DB_PATH) as db:
        db.row_factory = aiosqlite.Row
        cursor = await db.execute(
            "SELECT * FROM tag_preferences ORDER BY (likes - dislikes) DESC"
        )
        return [dict(r) for r in await cursor.fetchall()]

# Competitors
@app.get("/api/competitors/search/{niche}")
async def search_competitors(niche: str, country: str = "DE"):
    if niche not in NICHE_KEYWORDS:
        raise HTTPException(400, f"Unknown niche. Valid: {list(NICHE_KEYWORDS.keys())}")
    competitors = await search_niche_competitors(niche, country)

    async with aiosqlite.connect(DB_PATH) as db:
        for c in competitors:
            await db.execute(
                """INSERT INTO competitors (page_id, page_name, niche, ad_count)
                   VALUES (?,?,?,?)
                   ON CONFLICT(page_id, niche) DO UPDATE SET
                     ad_count = excluded.ad_count,
                     last_updated = CURRENT_TIMESTAMP""",
                (c["page_id"], c["page_name"], niche, c["ad_count"]),
            )
        await db.commit()

    return competitors

@app.get("/api/competitors/{page_id}/ads")
async def get_competitor_ads(page_id: str, country: str = "DE"):
    return await get_competitor_ads_list(page_id, country)

@app.get("/api/competitors/saved/{niche}")
async def get_saved_competitors(niche: str):
    async with aiosqlite.connect(DB_PATH) as db:
        db.row_factory = aiosqlite.Row
        cursor = await db.execute(
            "SELECT * FROM competitors WHERE niche = ? ORDER BY ad_count DESC", (niche,)
        )
        return [dict(r) for r in await cursor.fetchall()]

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
