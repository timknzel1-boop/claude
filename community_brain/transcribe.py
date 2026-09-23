"""Lokale Transkription von Sprachnachrichten und Call-Replays (faster-whisper).

Nur für Aufnahmen verwenden, für die eine Erlaubnis vorliegt (offizielle Replays
oder Calls, bei denen der Host/die Teilnehmer der Aufnahme zugestimmt haben).
"""

from __future__ import annotations

import os
from functools import lru_cache


@lru_cache(maxsize=1)
def _model():
    try:
        from faster_whisper import WhisperModel
    except ImportError as exc:
        raise SystemExit("Für Transkription: `pip install faster-whisper`") from exc
    size = os.environ.get("WHISPER_MODEL", "small")
    return WhisperModel(size, device="auto", compute_type="int8")


def transcribe_file(path: str, delete_after: bool = False) -> str:
    segments, _ = _model().transcribe(path, language="de", vad_filter=True)
    text = " ".join(seg.text.strip() for seg in segments)
    if delete_after:
        os.remove(path)
    return text
