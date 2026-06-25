# Assembly-Line ("Fließband") Workflow

The point of this mode: from ONE product, reliably ship MANY high-quality
variants, ranked by predicted performance, so the user funds winners.

## 1. Build the variant matrix

Pick the axes that matter for the brief. Common matrix:

```
variants = modes × hooks × settings × avatars
```

Keep it deliberate, not combinatorial-explosion. Good starting spreads:

- **Angle test (1 product, 4 variants):**
  `ugc` + `ugc_unboxing` + `ugc_how_to` + `product_review`, same avatar.
- **Hook test (1 product, 1 mode, N variants):**
  same mode/avatar, N different hooks — pure hook A/B.
- **Creator test:** same script, different avatars — find the face that converts.
- **Catalog run:** loop the *same* recipe over many product URLs.

State the matrix back to the user before generating.

## 2. Estimate & confirm cost

Before a large batch:
1. `show_plans_and_credits` to read available credits.
2. Estimate: (number of variants) × (cost per video at chosen resolution/duration).
3. If it's large or near the credit limit, confirm with the user first.

## 3. Generate in parallel

- Import the product once (`media_import_url`) and reuse the `media_id` for all variants.
- Submit ALL generation jobs first (collect job IDs), THEN poll `job_status` —
  do not block on each video sequentially.
- If a job fails, re-submit that one variant; don't abort the batch.

## 4. Rank by predicted performance

- Run `virality_predictor` on each finished video.
- Sort by score. Surface top performers first.
- This turns "12 random videos" into "here are your 3 likely winners + the rest."

## 5. Finish the winners

- `upscale_video` the top picks to HD for delivery.
- `reframe` if the user also needs 1:1 (feed) or 16:9 (YouTube) cuts from the 9:16 master.

## 6. Deliver as a labeled table

| # | Mode | Hook angle | Avatar | Score | URL |
|---|---|---|---|---|---|
| 1 | ugc | problem→solution | preset-F | 0.87 | … |
| 2 | unboxing | "just arrived" | preset-F | 0.79 | … |

## Anti-patterns

- ❌ Generating sequentially when you could parallelize.
- ❌ Silently capping the batch — if you generate fewer than requested (to save
  credits or because of failures), **say so explicitly**.
- ❌ Re-importing the same product for every variant.
- ❌ Delivering unranked — always rank when producing more than ~3 videos.
