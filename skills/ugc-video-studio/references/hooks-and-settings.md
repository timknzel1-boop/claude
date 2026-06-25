# Hooks & Settings (Setup Items)

Setup items are **optional, reusable context** for `marketing_studio_video`.
They are not required, but they meaningfully improve results.

## Hook

- Defines the **opening angle / ad hook** — the first line/scene that stops the scroll.
- Mechanically, it prepends context to your main prompt.
- Examples of hook *angles*: discount/offer, problem→solution, "POV: you just…",
  shocking claim, social proof.

## Setting

- Defines the **scene/environment context** (kitchen, gym, bathroom, street, studio…).
- Helps the video feel native to where the audience expects to see the product used.

## Discover them live

```
show_marketing_studio   → returns available hooks and settings (with IDs)
```
Filter by keyword to find relevant ones quickly. **Never invent IDs** — always
list them first and pass the real ID.

## Pass them to generation

Include the IDs alongside the other generation params:

```json
{
  "model": "marketing_studio_video",
  "hook_id": "<hook_id>",
  "setting_id": "<setting_id>"
}
```

## Constraints

- Valid only with modes: `ugc`, `ugc_how_to`, `ugc_unboxing`, `product_review`,
  `ugc_virtual_try_on`.
- Cannot be combined with ad reference videos.
- When using a hook, always provide product context — it makes the hook land harder.
