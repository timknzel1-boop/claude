# Script → Video: the turnkey interface + realism playbook

**Goal:** the user pastes a script / Drehbuch (any format) and gets back
*real-looking, non-generic* UGC videos — natural movement, genuine micro-
expressions, varied voice, believable environment, and crisp product detail —
in German (or any language) with lip-synced premium audio.

This file is the "brain" for that. Combine it with `german-dubbing-workflow.md`
(audio chain), `modes.md`, `avatars.md`, `hooks-and-settings.md`,
`batch-workflow.md`, and gate output with `quality-checklist.md`.

> Runs only where the Higgsfield MCP connector is reachable (e.g. the claude.ai
> chat with Higgsfield connected). 🔎 markers = verify against live tool schemas.

## 1. Parse the script into beats

Take whatever the user pastes and structure it as:

```
HOOK   (0–1.5s)  one scroll-stopping line + a visual cue
BEAT 1           one idea: dialogue line  + visual direction
BEAT 2           ...
CTA              the action ("Link in Bio", "jetzt sichern")
```

For each beat capture: **spoken line (the German VO text)**, **mode**
(`ugc` talking, `ugc_unboxing`, `product_showcase` for b-roll…), and **visual
direction** (camera, performance, environment, product action). Confirm the
parsed beats back to the user in one short list before generating.

> Length note: `marketing_studio_video` renders one clip up to ~15s. For longer
> scripts, segment into multiple clips (one per beat group) and concatenate.
> 🔎 Confirm whether stitching is done in-platform or needs an external edit step;
> if you cap or merge, **say so** — never silently truncate the script.

## 2. The anti-generic realism levers

Generic AI ads die on stiffness. Push every lever toward "filmed on a phone by a
real person." Bake these into the generation prompt:

**Camera / framing**
- Handheld / selfie-arm feel, subtle natural shake, eye-level, 9:16.
- Occasional reframe (talking → product → back). Avoid locked-off "ad" framing
  unless `tv_spot`.

**Performance & face (Mimik)**
- Specify micro-expressions tied to the line: eyebrow raise on the hook, genuine
  smile on the benefit, slight frown on the problem.
- Natural blinks, gaze into lens then flicks to the product, head tilt, hand
  gestures, a beat of hesitation before the punchline. Name these in the prompt.

**Voice variation (Stimme verändert sich)**
- The spoken voice comes from the video generation, then is refined with
  `dubbing` (→ natural German, auto re-lipsync) or `voice_change` (swap timbre on
  a voiced clip). See `german-dubbing-workflow.md`. There is **no** tool to
  lip-sync a separate `generate_audio` track onto the video — don't design around
  that.
- Vary energy across beats via the spoken-line wording and delivery direction:
  energetic on the hook, calmer/credible on the explanation, warm on the CTA.
- Correct German pronunciation of brand/product names — spell them phonetically
  in the script line if needed.
- `generate_audio` (ElevenLabs `text2speech_v2_elevenlabs`, or `sonilo_music` /
  `mirelo_text_to_audio`) is for **separate music/SFX beds**, not the talking track.
- Match spoken-line length to clip duration (~2.3 German words/sec) so the dub fits.

**Environment (Umgebung)**
- Be specific and real: "kitchen counter, morning window light, coffee mug in
  frame" beats "modern room". Add props and depth that fit where the product is
  actually used.
- Lighting: soft, natural, slightly imperfect. Avoid over-polished studio look
  for `ugc`.

**Product detail**
- Always import the real product (`media_import_url`) and pass its reference so
  the product is accurate, not a generic stand-in.
- Add a dedicated b-roll beat (`product_showcase` or `ugc_unboxing`): close-up on
  label, texture, the product in use. Keep the product visually consistent across
  every beat and every variant.

## 3. The production chain (per beat)

1. **Import product** once → reuse `media_id` for all beats.
2. **Pick/lock avatar** (`show_marketing_studio` / `show_characters`); reuse the
   same one across the whole script for continuity. Pass avatar + product
   **explicitly** to `generate_video` (not via an ad_reference link).
3. **Talking beats:** `generate_video` → `marketing_studio_video` **with audio**
   (let it speak), with the realism direction above. 🔎 If the tool exposes an
   audio-off field in its JSON params, that's optional — but the German voice
   comes from step 5, so generating with audio is the default.
4. **B-roll beats:** `product_showcase` (no presenter needed).
5. **Natural German voice:** `dubbing` (video_id + target_language=German →
   translate + auto re-lipsync) or `voice_change` (swap voice on a voiced clip).
   Pick a voice via `list_voices`. See `german-dubbing-workflow.md`.
6. **Assemble** beats in order; **upscale** (`upscale_video`) the final. Re-display
   results with `job_display` (no `job_status`/`reveal_generation` exists).
7. **Gate** with `quality-checklist.md` — re-roll only the beat that fails.

## 4. Deliver

Final lip-synced video URL + a one-line spec (product, avatar, voice, beats).
For batches, rank variants with `virality_predictor` and surface winners first.

## Definition of done
A script becomes a delivered video when: every beat passes the quality gate
(lip-sync accurate, German natural, product accurate, movement+expressions feel
human, environment specific), beats are assembled in order, and the winner is
upscaled. That is "really good, non-generic UGC" — not the default look.
