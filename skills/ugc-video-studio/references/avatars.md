# Avatars / Creators

The "creator" is the presenter face in the video. Two types:

| Type | Cost | Diversity | Best for |
|---|---|---|---|
| **Preset** (curated by Higgsfield) | Free | Limited but professional | Generic campaigns, fast turnaround |
| **Custom** (your Soul ID) | Cost of upload/training | Unlimited | Brand-specific face, founder, employee |

## How to discover them

- Curated: `show_marketing_studio` (lists available avatars), filter by
  attributes (gender, vibe, name).
- Custom identities you already trained: `show_characters`.

## How to pass them to generation

Avatars are passed as a list, each with an `id` and a `type`:

```json
"avatars": [
  { "id": "<avatar_id>", "type": "preset" }
]
```

- `type: "preset"` → curated avatar
- `type: "custom"` → your trained Soul ID

## Optional for UGC

For UGC modes, the avatar is **optional**. If the prompt implies a specific
person, the system can synthesize a Soul Character automatically. Provide an
explicit avatar only when the user wants a particular presenter or brand face.

## Creating a custom avatar

1. Upload the face image (`media_upload_widget` for local files, or
   `media_import_url` for a web image).
2. Register it as an avatar/identity referencing the upload.
3. Reuse its `id` with `type: "custom"` across every future video — consistency
   across a campaign is what makes a brand recognizable.
