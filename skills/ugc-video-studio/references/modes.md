# Marketing Studio Modes

`marketing_studio_video` supports several ad modes. The mode changes the *feel*
of the video — they are NOT interchangeable.

| Mode | Reads as | Use for |
|---|---|---|
| `ugc` | **Default.** Phone-shot, organic, creator talking to camera | Most UGC ads, testimonials, casual hype |
| `ugc_unboxing` | Hands opening / revealing the product | First-impression, "just arrived" excitement |
| `ugc_how_to` | Tutorial / step-by-step explanation | Demonstrating usage, reducing purchase hesitation |
| `product_review` | Honest review / opinion framing | Trust-building, comparison angles |
| `ugc_virtual_try_on` | Creator wearing/using the product | Apparel, accessories, beauty |
| `product_showcase` | Clean product-only beauty shots (no presenter) | Hero shots, e-commerce galleries |
| `tv_spot` | Broadcast-quality commercial | Premium / brand campaigns, not phone-shot |

## Rules

- Default is `ugc`. Only change it when the brief clearly calls for another format.
- **Hooks and settings** (setup items) are valid only with:
  `ugc`, `ugc_how_to`, `ugc_unboxing`, `product_review`, `ugc_virtual_try_on`.
  Do **not** pair hooks/settings with `product_showcase` or `tv_spot`.
- `tv_spot` = broadcast feel; `ugc` = organic phone feel. Picking the wrong one
  is the most common reason an ad "feels off."

## Batch tip

A strong assembly-line spread for one product is often:
`ugc` (testimonial) + `ugc_unboxing` (excitement) + `ugc_how_to` (education)
+ `product_review` (trust). Four angles, four buyer psychologies.
