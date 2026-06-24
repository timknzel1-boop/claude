---
name: mysolv-email-templates
description: >-
  Build tailored mysolv email templates in Klaviyo from examples, screenshots,
  or reference newsletters (esp. Resilia). Use whenever the user wants to create,
  redesign, or refine a mysolv marketing email (PP-01…PP-05, Detox Guide, etc.),
  adapt a design to a reference brand, or set up a test/real campaign. Encodes
  mysolv brand rules, hard-won email-HTML constraints, the Klaviyo workflow, and
  the Resilia "hybrid" design system.
---

# mysolv Email Templates

Master skill for producing **mysolv** marketing emails. It captures the brand
system, the email-HTML lessons learned the hard way, the Klaviyo MCP workflow,
and how to adapt designs from reference newsletters (Resilia). Keep this file
**living** — append every new lesson, brand decision, or reference insight.

## 0. Operating principles (read first)

- **Match the reference, not a generic "nice email."** When the user sends a
  screenshot / `.eml` / says "like Resilia", reproduce *that* layout, spacing,
  shapes, and rhythm. Name the concrete elements you're copying.
- **Editable HTML + real visuals ("hybrid"), NOT one big baked image.** The user
  rejected full-image emails (bad spelling in AI text, no personalization, image
  blocking). Text stays live HTML; images are images.
- **Never bake long German text into an AI image.** Higgsfield/nano-banana
  misspells German + umlauts. If a layout seems to need text-on-image, warn the
  user *prominently and up front*, and offer the editable route first.
- **Klaviyo's web editor preview lies.** It misrenders floats/`align` and scales
  images wrong. The real inbox is the source of truth → verify with a test send
  to the **Nadja** list, not the editor.
- **Confirm one master, then roll out.** Establish the design on ONE template,
  get explicit sign-off, *then* apply to the rest. Don't mass-edit on spec.
- **Change only what was asked.** Don't "improve" untouched blocks; it triggers
  rework. If you spot something, mention it — don't silently change it.

## 1. Brand system

| Token | Value | Use |
|---|---|---|
| Leitfarbe (dark green) | `#085947` | CTAs, accent band, headings accents, checkmarks |
| Heading green | `#0c2f24` | h2 / strong dark text |
| Sage bg light | `#eef6ee` | outer canvas, soft inner cards, footer |
| Sage bg panel | `#f1f7ec` | section panels (e.g. "Warum mysolv?" block) |
| Near-white | `#fffffe` | white content areas (Gmail dark-mode hardening — see §3) |
| Body text | `#444444` / `#3d4a3d` | paragraphs |
| Muted/footer text | `#7a887a`, `#888888`, `#aaaaaa` | footer links + legal |
| Gold stars | `#E8A93B` | review stars |
| Accent-band text | `#eaf3ec` | text on dark-green band |

- **Sender:** from_email `support@mysolv.de`, from_label `mysolv`.
- **Product:** `mysolv® DETOX COMPLEX` (4 actives: Schwarzkümmelöl, Oreganoöl,
  Spirulina, Chlorella). Social proof: ★★★★★ `4,8/5 · über 22.000 Bewertungen`.
- **Trust badges (3, each two lines):** `100 % / natürlich` · `Labor- / geprüft`
  · `30 Tage / Rückgabe`. Note the line break in "Labor-/geprüft".
- **Logo (Shopify CDN):**
  `https://www.mysolv.de/cdn/shop/files/Logo-removebg-preview_223daff1-a283-4112-ab46-2ee38a176e9d.png?v=1763393988&width=200`
- **Links:** tracking → `https://www.mysolv.de/apps/parcelpanel` (NOT trackingmore;
  changed 2026-06). Versand `/policies/shipping-policy`, Rückgabe
  `/policies/refund-policy`, Kontakt `mailto:support@mysolv.de`, Live-Chat im Shop,
  home `https://www.mysolv.de`. (FAQ link was removed from PP-01 footer per user.)
- **Voice:** warm, du-Form, concrete, no hype. German.

## 2. Email-HTML constraints (hard-won — do not relearn these)

- **Table-based layout, 580px max container**, centered on a sage canvas with
  `padding:28px 16px`. Inner table `border-radius:12px;overflow:hidden`.
- **`object-fit:cover` is unsupported in many clients** (Apple Mail, Gmail). If
  you force `width:124;height:220;object-fit:cover` on a square source, those
  clients **ignore object-fit and honor the height → the image renders huge and
  square**, blowing up the layout. This caused repeated "image too big / text
  auseinandergezogen" failures. → Use images at their **native aspect ratio** at a
  controlled size; don't rely on object-fit to crop.
- **Text beside an image:** two robust options —
  1. **2-column table** (image cell fixed `width="124"` + text cell, both
     `valign="middle"`). Use this when the text must stay **beside** the image and
     NOT wrap underneath. This was the fix the user finally wanted for PP-01.
  2. **Float** via `align="left"/"right"` on the `<img>` + flowing `<p>`. Lets
     text wrap *around* the image, but text flows *under* it once it's long, and
     the Klaviyo editor renders it badly. Prefer the 2-column table for
     "text strictly to the side".
- **Half-circle / rounded images:** `border-top-left-radius` +
  `border-bottom-left-radius` (curve faces the text). Mirror for the other side.
  A square box with both corners on one side at `radius = box height` → a clean
  half-circle (the browser clamps to a semicircle).
- **"Bleed to edge":** set the container cell padding to `0` on the side the image
  touches (e.g. block 1: `padding:24px 0 24px 40px`, image floats/sits right).
- **`border-radius`, `position:absolute`, true text-on-curve wrap: NOT possible**
  reliably in email. Curve-hugging text only exists as an image (rejected here).
- **Force exact line breaks** with `<br/>` + wrap each line in
  `<span style="white-space:nowrap;">…</span>` and a small enough font so it can't
  re-wrap on mobile. (This is how the dark-green 2-line quote was nailed at 12px.)
- **Gmail strips `<style>`/`<head>`** for some accounts → media queries unreliable.
  Keep everything inline; design mobile-safe by default.
- **Always set an explicit `background-color` on every `<td>`** (not just body).

## 3. Dark-mode color stability

- **Apple Mail / iOS:** add to `<head>` — this is reliably honored:
  ```html
  <meta name="color-scheme" content="light only"/>
  <meta name="supported-color-schemes" content="light only"/>
  <style type="text/css">:root{color-scheme:light only;supported-color-schemes:light only}</style>
  ```
- **Gmail ignores the above.** Gmail dark mode recolors **pure `#ffffff`**. Trick:
  use **`#fffffe`** (near-white) for white content areas — Gmail's algorithm
  tends to leave non-pure-white alone. Apply to container + all white `<td>`s.
- **No HTML-only method is 100% in Gmail Android dark mode.** The only absolute
  guarantee is an image-based email (with its accessibility/personalization
  trade-offs). Tell the user this honestly; default to the `#fffffe` route.

## 4. Klaviyo MCP workflow

- Templates are **CODE** editor type → edit via `update_email_template` with full
  `html`. Read current with `get_email_template` (fields `["html"]`).
- **No send tool exists.** You can only build **drafts**. The user must click
  "Überprüfen & Senden" in Klaviyo. Always give the campaign URL:
  `https://www.klaviyo.com/campaign/{CAMPAIGN_ID}/wizard`.
- **Assigning a template to a campaign message CLONES it** ("Clone of X"). So the
  campaign holds a *snapshot*. If you edit the master template afterwards,
  **re-assign** to refresh the campaign's clone.
- **Cannot create lists via API.** Ask the user to create them in the UI.
- **Test sends go to the "Nadja" list, id `UH4Fr2`** (NOT "Test Liste Nadja"
  `S7jEW2`). Only change the recipient list when explicitly told. Add a recipient
  with `subscribe_profile_to_marketing` (email + `subscriptions.email.marketing.consent=SUBSCRIBED`,
  optional list relationship).
- **Campaign names must be unique** — append a date/time suffix.
- Build flow:
  1. `update_email_template` (master) →
  2. `create_campaign` (DRAFT, audiences.included = list, from/subject/preview) →
  3. `assign_template_to_campaign_message` (clones master) →
  4. give the wizard URL; user sends.

### Known template IDs (mysolv account)
- `TdSkFk` — **PP-01 v5** "Willkommen in der mysolv Familie" (the design master).
- `X5ugUM` — **Detox Guide allgemein** (order-processing → free guide; button →
  `mysolv.de/pages/detox-guide`).
- PP-02 `VXQGwT`, PP-03 `TJfx8V`, PP-04 `Ym38wy`, PP-05 `UyTQEh` (verify before use).
- Lists: Nadja `UH4Fr2` (tests), Detox-audience `Vu6UbD`.

## 5. The PP-01 design system (the proven master)

Vertical order (all on 580px container):
1. **Hero image** with the mysolv logo baked into the image + headline
   "Willkommen in der mysolv Familie" (Abril-Fatface-style serif). White bg.
2. **Intro** "Hallo {{ first_name|default:"" }}," + thank-you paragraph. **White**.
3. **Section starts here in sage `#f1f7ec`:** centered h2 "Warum mysolv?"
   (no decorative divider line — user removed it).
4. **Block 1** — 2-column: text left / half-circle image right (bleeds to right
   edge, curve faces text), `valign:middle`. Sage bg.
5. **Block 2** — mirror: half-circle image left (bleeds to left edge) / text
   right. Sage bg.
6. **Dark-green accent band `#085947`** with a 2-line serif quote
   (`white-space:nowrap` per line, ~12px): „Keine Kompromisse bei der Qualität." /
   „Kein unnötiger Füllstoff."
7. **"Was kommt als Nächstes?"** soft `#eef6ee` card on white.
8. **CTA** pill button `#085947` (e.g. "📦 Sendung verfolgen" → parcelpanel).
9. **Signature** "Auf deine Gesundheit, / dein mysolv Team".
10. **Social proof** pill (gold stars 4,8/5 · 22.000).
11. **Trust badges** row (3, two-line each) with thin dividers.
12. **Footer** sage `#eef6ee`: link row (Sendungsverfolgung · Versand · Rückgabe ·
    Kontakt), "Fragen? support@mysolv.de oder Live-Chat", mysolv.de, unsubscribe.

This block library (hero, intro, sage section, 2-col image blocks, accent band,
next-steps card, CTA, social proof, trust badges, footer) is the **kit** to
recombine per email. The live HTML of `TdSkFk` is the canonical reference —
read it before building a sibling so the markup matches exactly.

## 6. Reference newsletters (Resilia) — analysis loop

Goal: keep mysolv mails visually on par with **Resilia**'s newsletters, and over
time need only images from the user (or generate them with Higgsfield).

- **Source:** the user's **Gmail**. Pull the latest Resilia newsletters yourself
  via the Gmail MCP (`search_threads` query `from:resilia OR Resilia`, then
  `get_thread` FULL_CONTENT for the HTML), analyze layout/spacing/shapes/CTA
  rhythm, and fold concrete findings into §5/§7 below.
- **If Gmail token is expired** (it was on 2026-06-24): ask the user to
  re-authorize the Gmail MCP, or to forward the `.eml`/screenshots. Don't block —
  offer both.
### Resilia structural truth (analyzed 2026-06-24, 3 real .eml newsletters)
**Resilia's real newsletters are FULL-IMAGE "image-stack" emails**, not hybrid HTML:
- **600px** container on a light-gray canvas `#f7f7f7` (rgb 247,247,247).
- The body = a vertical **stack of full-width JPEG "sections"** (each section is a
  professionally designed image with ALL text + layout baked in). Examples:
  - *Oil of Oregano*: 3 stacked content images ("Shop Now & Save Big" /
    "Transforms How You Feel" / "75,000+ Happy Customers") → logo → footer.
  - *Grab Your Cart*: 5 stacked "We saved your cart" images → logo → footer.
  - *Final Hours 70% OFF*: hero image → **image CTA button** "Shop Now →" →
    benefit image → image CTA button "Try Resilia® Softgels →" → product image →
    logo → footer.
- **CTAs are images too** (e.g. an "Shop Now →" / "Try Resilia® Softgels →" JPEG
  wrapped in an `<a>` link), not HTML buttons.
- **Footer is image-based:** a menu of small image links — Blogs · Contact us ·
  Track your order (row 1), Shipping & delivery · Returns policy · Terms of
  service (row 2) — then "Find us on social media" + Facebook / Instagram /
  TikTok icons, then the Resilia logo. Each is a clickable image (`klclick`
  tracking links). Font where any live text exists: Ubuntu/Helvetica/Arial.
- Images hosted on Klaviyo CDN (`d3k81ch9hvuctc.cloudfront.net/company/.../images/`).
- **No live body copy, no personalization, no real text** — pure design images.

**Implication / fork for mysolv:** Resilia's polish comes *entirely from designed
images*. To truly clone the look you need designed section images (Canva / a
designer / user-provided) — **NOT Higgsfield text** (bakes misspelled German).
So there are two honest routes, and the user must pick per email:
- **A — Full-image Resilia clone:** 600px image-stack + image CTA + image footer
  menu + social icons. Max visual fidelity, Gmail-dark-mode-proof, but no live
  text/personalization and you can't auto-generate the text images. Needs the
  user to supply (or approve Canva-built) section graphics.
- **B — Hybrid (our PP-01 system):** borrow Resilia's *structure & rhythm*
  (stacked sections, low social proof, image-rich, rich footer) but keep live
  HTML text + `{{ first_name }}`. What we already validated and the user liked.
  Use photographic images (user/Higgsfield, no baked text).

**Adopt into mysolv regardless of route:** stacked-section rhythm; image CTA
*style* (pill "→" affordance); a richer footer menu (we can do it as HTML links
mirroring Blogs/Contact/Track/Shipping/Returns/Terms + social row); 600px option;
keep social proof a dedicated section, not the top.

## 7. Asset pipeline (images)

- Prefer **user-provided images** for each mail. The user often points to "the
  last file in the Shopify files" — confirm the exact filename if ambiguous (a
  weird auto-generated name can still be the intended hero).
- Otherwise **generate with Higgsfield** (`generate_image`, model
  `nano_banana_pro`): product/ingredient shots, hero scenes — **no baked text**.
  Import web images via `media_import_url` first; never pass raw URLs into
  generation `medias[]`.
- Klaviyo image hosting: `upload_image_from_url` (returns a Klaviyo CDN URL) for
  assets you want stored in the account.
- Shopify CDN transforms: append `?width=&height=&crop=center` to crop server-side.

## 8. Definition of done (per template)

- [ ] Matches the agreed reference/design; only requested blocks changed.
- [ ] 580px, table-based, every `<td>` has explicit bg, `#fffffe` whites.
- [ ] Dark-mode head block present.
- [ ] Images native-aspect at controlled size (no object-fit crop reliance).
- [ ] Text-beside-image uses 2-column table where it must not wrap under.
- [ ] Correct links (parcelpanel tracking, policies, support mail).
- [ ] first_name uses `{{ first_name|default:"" }}`.
- [ ] Test campaign drafted to **Nadja (UH4Fr2)**, unique name, wizard URL given.
- [ ] Re-assigned template if the master changed after first assignment.

## Changelog (append every session)
- 2026-06-22 — Built PP-01 master (TdSkFk): hero+logo, 2-col half-circle blocks,
  2-line accent band, social proof low, trust badges, rich footer. Learned:
  object-fit blow-up; float vs 2-column; `white-space:nowrap` for exact line count.
- 2026-06-24 — Color split (white intro → sage from "Warum mysolv?"); removed
  divider line; footer FAQ removed, Kontakt inline; dark-mode `color-scheme` +
  `#fffffe` Gmail hardening; tracking link → parcelpanel. Detox Guide (X5ugUM)
  body rewritten (order-processing → free guide). Standard test list = Nadja
  (UH4Fr2). Gmail token expired → couldn't auto-pull Resilia.
