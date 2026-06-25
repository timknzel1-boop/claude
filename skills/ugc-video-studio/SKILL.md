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

Turn a product, a brief, **or a full script/Drehbuch** into **finished,
scroll-stopping, non-generic UGC ad videos** — one at a time or a whole batch —
using Higgsfield's `marketing_studio_video` model via the Higgsfield MCP tools.

> **Where this runs:** this skill needs the **Higgsfield MCP connector to be
> reachable in the current environment**. That is the case in the claude.ai chat
> with Higgsfield connected. It is NOT available in remote/headless sessions
> (e.g. Claude Code on the web), where interactively-authenticated connectors are
> not bridged in — there, only build/maintain the skill, don't try to generate.
> If the Higgsfield tools aren't loadable, tell the user to run this in a chat
> where Higgsfield is connected, and stop — never fabricate a result.

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
| **Generate the video** | `generate_video` (model `marketing_studio_video`) — pass avatar + product **explicitly** |
| Re-display a result | `job_display` (one job id per call) |
| Browse past outputs | `show_generations` / `show_marketing_studio_generations` |
| German voice / dub | `dubbing` (translate+re-lipsync), `voice_change` (swap voice) — see `references/german-dubbing-workflow.md` |
| Score before scaling spend | `virality_predictor` |
| Finish (HD / reframe) | `upscale_video`, `reframe` |

> **No polling tool exists.** `generate_*` tools render a **self-polling widget**
> that live-updates to a terminal state — you do not call a status endpoint. To
> re-show a result later use `job_display`; to browse history use
> `show_generations` / `show_marketing_studio_generations`. There is no
> `job_status` or `reveal_generation`.

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
6. **Generate** with `generate_video` → `marketing_studio_video`, passing the
   `media_id`(s), avatar, mode, hook/setting, duration, resolution, aspect_ratio
   **explicitly** (avatar/product are not auto-pulled from an ad_reference).
7. **Watch the result.** The generation tool renders a self-updating widget that
   runs to a terminal state — no status call needed. Re-display later with
   `job_display`; browse history with `show_marketing_studio_generations`.
8. **German voice (optional):** dub or swap the voice — see
   `references/german-dubbing-workflow.md` (`dubbing` / `voice_change`).
9. **Finish** (optional): `upscale_video` to HD, `reframe` for other formats.
10. **Deliver** the URL(s) + a one-line summary of the angle used.

## Assembly-line / "Fließband" mode

This is the headline feature. When the user wants many videos:

1. Build a **variant matrix** — see `references/batch-workflow.md`. Typically:
   N hooks × M settings × K avatars, or one product across several modes.
2. Generate variants **in parallel** (submit all generations), not one by one.
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
- `references/german-dubbing-workflow.md` — natural German voice via the real
  paths: `dubbing` (translate + auto re-lipsync) or `voice_change` (swap voice)
- `references/script-to-video.md` — **turnkey "paste a script → great UGC" interface**
  + the anti-generic realism playbook (movement, micro-expressions, voice
  variation, environment, product detail)

## Guardrails

- Don't invent avatar/hook/setting IDs — always discover them live first.
- Don't claim a video exists until the generation widget reaches a success state
  (re-check with `job_display`). There is no `job_status`/`reveal_generation`.
- Respect credits: estimate first, confirm large batches, report what was skipped.
