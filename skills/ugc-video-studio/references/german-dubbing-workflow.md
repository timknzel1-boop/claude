# Natural German Voice Workflow (real Higgsfield tool paths)

**Problem this solves:** the default in-model voice of `marketing_studio_video`
can sound unnatural in German. We make it sound natural using the tools that
actually exist.

> ⚠️ **Reality check (corrected):** there is **no tool that lip-syncs an arbitrary
> external audio file onto a video.** A previous draft proposed "silent video +
> separate `generate_audio` TTS + lipsync merge" — that is **not buildable** with
> the available tools. Use the two real paths below instead. 🔎 = still verify the
> exact JSON params live.

## The tools, as they actually behave

| Tool | What it really does |
|---|---|
| `generate_video` (`marketing_studio_video`) | Generates the ad clip. Avatar + product must be passed **explicitly** at generation time (linking them on an ad_reference does not auto-apply). |
| `dubbing` | Input: **`video_id` + `target_language` only.** Translates the video's *own* spoken audio into the target language and **re-lip-syncs** automatically. Does **not** accept a separate audio track. |
| `voice_change` | Swaps the **voice/timbre** on an **already-voiced** clip (same language). Keeps existing lip-sync. |
| `generate_audio` | Real TTS (ElevenLabs = model `text2speech_v2_elevenlabs`) with `voice_id`/`voice_type`, plus `mirelo_text_to_audio` (SFX) and `sonilo_music` (music). Produces a **standalone** audio asset — it **cannot** be lip-synced onto a video. Use it for music/SFX beds, not for the talking track. |
| `list_voices` | Lists available voices (incl. for `voice_change`). |
| `media_import_url` | Import product image/photo from a URL → `media_id`. |
| `show_marketing_studio_generations` / `job_display` | Re-display generation results (see polling note below). |

> **Polling note:** there is **no `job_status` / `reveal_generation` tool.** The
> `generate_*` tools render a **self-polling widget** that live-updates to a
> terminal state. To re-show a result later: `job_display` (one job id per call).
> To browse history: `show_generations` / `show_marketing_studio_generations`.

## Path A — Generate with audio, then dub to German (recommended)

Best when you want a guaranteed-natural German voice regardless of the source.

1. **Import product** — `media_import_url` → keep `media_id`.
2. **Generate the talking video WITH audio** — `generate_video` →
   `marketing_studio_video`, passing the avatar and product **explicitly**, mode,
   duration, 720p, `9:16`. (Let it speak — any source language is fine.)
3. **Dub to German** — `dubbing` with that `video_id` and `target_language`
   = German. It translates and **re-lip-syncs** to natural German automatically.
4. **Finish** — `upscale_video`; re-display with `job_display` if needed.

## Path B — Generate voiced, then swap the voice (same language)

Best when the clip already speaks German but the voice timbre feels off.

1. Import product, generate the voiced video (as above).
2. **`voice_change`** on that clip → pick a better voice (`list_voices`). Lip-sync
   is preserved; this only changes the voice/timbre.

## Which path?
- Want German guaranteed + automatic lip-sync → **Path A** (`dubbing`).
- Already-German clip, just want a nicer voice → **Path B** (`voice_change`).
- Need background music or SFX → add `generate_audio` (`sonilo_music` /
  `mirelo_text_to_audio`) as a **separate bed** (not lip-synced).

## Script length
Write the spoken script for ~2.3 German words/second so the dialogue fits the
clip duration (10–15s) and the dub doesn't run out of mouth or video.

## Deliver
Present the final video URL + a one-line spec (product, avatar, mode, path used).
Gate with `quality-checklist.md` — especially **lip-sync accuracy** and **German
naturalness** — and re-roll only the failing stage.

## Assembly-line note
Generate all clips, then dub/voice-change each. Reuse one imported product across
variants. Rank with `virality_predictor` before upscaling winners.

## Security
Never hardcode API keys/secrets. The MCP connector authenticates via the user's
Higgsfield account — raw key/secret pairs are not needed and must never be
committed. If a user pastes credentials, advise rotating them.
