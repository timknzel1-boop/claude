# Pre-Delivery Quality Gate

Run every finished video through this gate before delivering. Re-roll any
variant that fails a ❗ item. This loop is what makes output consistently good
rather than hit-or-miss.

## ❗ Must pass (re-roll if it fails)

- [ ] **Hook lands in the first ~1.5s** — the opening grabs attention immediately.
- [ ] **Product is recognizable** — matches the imported reference, not warped or generic.
- [ ] **Correct aspect ratio** — 9:16 for TikTok/Reels/Shorts (as briefed).
- [ ] **No obvious AI artifacts** — warped hands, melting text, extra fingers, glitching logo.
- [ ] **Avatar feels native** — looks like real creator content for the platform, not an ad.

## ✅ Should pass (improves performance)

- [ ] **Clear CTA** — the prompt drives toward an action ("link in bio", "shop now").
- [ ] **Pacing** — no dead air; ~10–15s, tight.
- [ ] **Setting fits the product** — environment matches where the product is used.
- [ ] **Caption-friendly** — works with sound off (most social viewing is muted).
- [ ] **On-brand** — same avatar/tone across a campaign for recognition.

## Re-roll guidance

If a variant fails:
1. Identify which item failed.
2. Adjust the lever, not everything: bad hook → change `hook_id`; warped product →
   re-check the imported `media_id`/reference image; off-feel → switch mode
   (`tv_spot` ↔ `ugc`) or avatar.
3. Re-generate just that variant. Keep the passing ones.

## Definition of "Fließband-perfect"

A batch is delivery-ready when every shipped variant passes all ❗ items, the
set is ranked by `virality_predictor`, and the top picks are upscaled to HD.
