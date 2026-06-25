# German Premium Dubbing Workflow (2-stage: silent video + TTS + lipsync)

**Problem this solves:** the default in-model voice of `marketing_studio_video`
can sound unnatural in German. Fix: generate the video **silent**, generate a
**premium German voiceover separately**, then **lip-sync** the avatar to that
audio.

> ⚠️ **Verify-live markers (🔎):** items below marked 🔎 must be confirmed against
> the connected Higgsfield MCP tool schemas at runtime. The official skill docs
> document only non-speech audio (`mirelo_text_to_audio`) and music
> (`sonilo_music`); speech-TTS, voice selection, and the exact lipsync tool are
> NOT in the public docs, so confirm them live before asserting them as fact.
> Never fabricate a result — if a tool/param doesn't exist, tell the user.

## Tools involved (Higgsfield MCP)

| Purpose | Tool | Notes |
|---|---|---|
| Import product image from URL | `media_import_url` | returns a `media_id` |
| Generate silent branded video | `generate_video` (`marketing_studio_video`) | set audio generation **off** |
| Generate German voiceover | `generate_audio` | 🔎 confirm it supports speech TTS + a `voice_id` |
| List available voices | `list_voices` | 🔎 find a high-quality German voice id |
| **Lip-sync video to audio** | `dubbing` | 🔎 **most likely the correct lipsync tool** |
| Change voice timbre of audio | `voice_change` | ❌ NOT lipsync — do not use for merging |
| Upload final file | `media_upload` + `media_confirm` | returns a shareable URL |
| Poll / reveal | `job_status`, `reveal_generation` | |

## Step 1 — Capture product data
- `media_import_url` with the product page or hero image URL.
- Keep the returned `product`/`media_id`, title, description, hero images.

## Step 2 — Generate the SILENT video
- `generate_video` → model `marketing_studio_video`.
- Pass the product id, chosen avatar/presenter, mode (`ugc` etc.), duration,
  resolution 720p, aspect_ratio `9:16`.
- **Disable audio:** the model supports a generate-audio flag — set it to
  **false** (`--generate-audio false`). This yields a mute video whose lips can
  be re-driven in step 4.
- Poll `job_status`; keep the silent video's media reference.

## Step 3 — Generate premium German audio
- 🔎 `list_voices` → pick a high-quality **German** voice id.
- 🔎 `generate_audio` with the German script (the spoken text) and that voice id.
  - The user's brief named model `"elevenlabs"` and a `voice_id` — confirm the
    real model name and voice catalog live before sending.
- Keep the resulting audio media reference.
- Tip: write the script for ~natural pacing at the video's duration (≈ 2.3
  German words/second for 10–15s clips). Match script length to video length so
  lipsync doesn't run out of mouth or video.

## Step 4 — Merge via lipsync
- 🔎 Use **`dubbing`** (the likely lipsync tool): input = the silent video from
  step 2, plus the German audio from step 3 → output = lip-synced German video.
- ❌ Do **not** use `voice_change` for this — it changes an audio clip's voice,
  it does not align lips to audio.
- If `dubbing` expects an *already-voiced* video, an alternative is to dub the
  audio-on version of the video directly into German in one step — confirm the
  tool's actual input contract live and pick the path that matches.
- Poll `job_status` until the lip-synced video is ready.

## Step 5 — Deliver
- `media_upload` + `media_confirm` (or `reveal_generation`) to get the final
  CDN/share URL.
- Present the URL plus a one-line summary: product, avatar, mode, German voice used.
- Run the `quality-checklist.md` gate — especially **lip-sync accuracy** and
  **German audio naturalness** — and re-roll the failing stage only.

## Assembly-line note
For batches, generate all silent videos in parallel (step 2), generate each
German voiceover (step 3), then lipsync each pair (step 4). Reuse one imported
product across variants. Rank with `virality_predictor` before upscaling winners.

## Security
Never hardcode API keys/secrets into files or prompts. The MCP connector
authenticates via the user's Higgsfield account — raw `API key`/`secret` pairs
are not needed and must never be committed. If a user pastes credentials, advise
them to rotate those credentials.
