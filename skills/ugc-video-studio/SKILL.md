---
name: ugc-video-studio
description: >-
  Produce scroll-stopping UGC ad videos at scale with Higgsfield Marketing
  Studio. Use whenever the user wants UGC content, creator/avatar ads, product
  videos, unboxings, tutorials, reviews, TV spots, or "ads at the assembly line
  / am Fließband". Handles product import by URL, avatar selection, hooks,
  settings, modes, batch variants, quality checks and delivery.
license: MIT
---

# UGC Video Studio (Higgsfield Marketing Studio)

Turn a product (or a brief) into **finished, scroll-stopping UGC ad videos** —
one at a time or a whole batch — using Higgsfield's `marketing_studio_video`
model via the Higgsfield MCP tools.

This skill is built for **assembly-line ("Fließband") production**: give it a
product and an angle, and it produces multiple polished variants you can A/B
test, without you having to remember any parameters.

## When to use this skill

Trigger this skill when the user asks for any of:
- UGC videos / creator ads / "talking" creator content
- Product showcase, unboxing, how-to/tutorial, review, virtual try-on, or TV-spot ads
- "Make ads from this product URL", "batch of UGC variants", "Fließband"-style output
- TikTok / Reels / Shorts ad creatives (9:16)

## Required tools (Higgsfield MCP)

This skill orchestrates the Higgsfield MCP server. The key tools:

| Step | Tool |
|---|---|
| Check credits before a batch | `show_plans_and_credits` / `balance` |
| Inspect studio (avatars, hooks, settings, modes) | `show_marketing_studio` |
| Import a product image/photo from a web URL | `media_import_url` |
| Upload a local product/avatar image | `media_upload_widget` (Apps UI) or `media_upload` + `media_confirm` |
| List trained creator identities | `show_characters` |
| **Generate the video** | `generate_video` (model `marketing_studio_video`) |
| Poll / show result | `job_status`, `job_display`, `reveal_generation` |
| See past studio outputs | `show_marketing_studio_generations` |
| Score before scaling spend | `virality_predictor` |
| Finish (HD / reframe) | `upscale_video`, `reframe` |

> If the Higgsfield MCP server is not connected, tell the user to connect it
> (settings → MCP → Higgsfield, authenticate via their Higgsfield account) and
> stop — do not fabricate results.

## The minimum to make ONE UGC video

Only four things are truly required by `marketing_studio_video`:

1. **prompt** — what happens / what's said (the creative angle)
2. **duration** — up to 15s (default 10s for UGC pacing)
3. **resolution** — 480p or 720p (use 720p for delivery)
4. **aspect_ratio** — `9:16` for TikTok/Reels/Shorts

Everything else (product, avatar, hook, setting, mode) is **optional** but is
what makes the ad actually good. Defaults: `mode: ugc`, avatar auto-synthesized
if a person is implied in the prompt.

## Core workflow (single video)

1. **Confirm the brief.** Product + angle + platform/format. If a product URL
   is given, note it. If anything critical is missing, ask one concise question.
2. **Check credits** with `show_plans_and_credits` (only before a batch).
3. **Import the product** — `media_import_url` with the product image/URL; keep
   the returned `media_id`. Never pass raw URLs into generation params.
4. **Pick the creator.** Call `show_marketing_studio` / `show_characters`.
   - Curated avatar → pass with `type: "preset"`.
   - Trained custom identity (Soul ID) → `type: "custom"`.
   - Or omit and let the model synthesize one (fine for generic UGC).
5. **Choose mode + hook + setting** (see `references/modes.md` and
   `references/hooks-and-settings.md`). Hook = opening angle; Setting =
   environment. Both optional, both boost quality.
6. **Generate** with `generate_video` → `marketing_studio_video`, passing
   `media_id`(s), avatars, mode, hook/setting, duration, resolution, aspect_ratio.
7. **Poll** `job_status` until done; show with `reveal_generation` / `job_display`.
8. **Finish** (optional): `upscale_video` to HD, `reframe` for other formats.
9. **Deliver** the URL(s) + a one-line summary of the angle used.

## Assembly-line / "Fließband" mode

This is the headline feature. When the user wants many videos:

1. Build a **variant matrix** — see `references/batch-workflow.md`. Typically:
   N hooks × M settings × K avatars, or one product across several modes.
2. Generate variants **in parallel** (submit all jobs, then poll), not one by one.
3. After generation, run `virality_predictor` on each, **rank**, and surface the
   top performers first so the user funds winners, not guesses.
4. Deliver as a labeled table: variant → angle → mode → score → URL.

Always tell the user the credit cost estimate before launching a large batch,
and **log anything you capped** (e.g. "generated top 8 of 12 requested to save
credits") — never silently truncate.

## Quality bar (non-negotiable for "perfect" output)

Before delivering, self-check against `references/quality-checklist.md`:
hook lands in the first ~1.5s, product is recognizable, avatar feels native to
the platform, CTA present, correct aspect ratio, no warped text/hands. Re-roll
any variant that fails — that re-roll loop is what makes output "Fließband-perfect."

## References (load as needed)

- `references/modes.md` — every mode and when to use it
- `references/avatars.md` — curated vs custom creators, how to pass them
- `references/hooks-and-settings.md` — hooks & settings (setup items)
- `references/batch-workflow.md` — the assembly-line variant matrix + parallel runs
- `references/quality-checklist.md` — the pre-delivery QA gate
- `references/german-dubbing-workflow.md` — natural German (or any-language) dubbing:
  silent video + premium TTS voiceover + lip-sync merge

## Guardrails

- Don't invent avatar/hook/setting IDs — always discover them live first.
- Don't claim a video exists until `job_status` reports success.
- Respect credits: estimate first, confirm large batches, report what was skipped.
