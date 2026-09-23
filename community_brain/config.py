"""Konfiguration aus Umgebungsvariablen (oder einer lokalen .env-Datei)."""

import os
from dataclasses import dataclass
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
STATE_DIR = ROOT / "state"
OUTPUT_DIR = ROOT / "output"


def _load_dotenv() -> None:
    env_file = ROOT / ".env"
    if not env_file.exists():
        return
    for line in env_file.read_text(encoding="utf-8").splitlines():
        line = line.strip()
        if not line or line.startswith("#") or "=" not in line:
            continue
        key, value = line.split("=", 1)
        os.environ.setdefault(key.strip(), value.strip().strip('"').strip("'"))


_load_dotenv()


def set_env(key: str, value: str) -> None:
    """Setzt/ersetzt KEY=VALUE in der .env-Datei (legt sie aus .env.example an, falls nötig)."""
    env_file = ROOT / ".env"
    if not env_file.exists():
        example = ROOT / ".env.example"
        env_file.write_text(example.read_text(encoding="utf-8") if example.exists() else "", encoding="utf-8")
    lines = env_file.read_text(encoding="utf-8").splitlines()
    for i, line in enumerate(lines):
        if line.split("=", 1)[0].strip() == key:
            lines[i] = f"{key}={value}"
            break
    else:
        lines.append(f"{key}={value}")
    env_file.write_text("\n".join(lines) + "\n", encoding="utf-8")
    env_file.chmod(0o600)
    os.environ[key] = value

TIMEZONE = os.environ.get("TIMEZONE") or "Europe/Zurich"


@dataclass(frozen=True)
class Config:
    api_id: int
    api_hash: str
    session: str
    group: str
    backfill_days: int
    model: str
    notion_token: str
    notion_database_id: str
    transcribe_voice: bool

    @property
    def notion_enabled(self) -> bool:
        return bool(self.notion_token and self.notion_database_id)


def load() -> Config:
    return Config(
        api_id=int(os.environ.get("TELEGRAM_API_ID") or 0),
        api_hash=os.environ.get("TELEGRAM_API_HASH", ""),
        session=os.environ.get("TELEGRAM_SESSION", ""),
        group=os.environ.get("TELEGRAM_GROUP", ""),
        backfill_days=int(os.environ.get("BACKFILL_DAYS") or 30),
        model=os.environ.get("CLAUDE_MODEL") or "claude-opus-5",
        notion_token=os.environ.get("NOTION_TOKEN", ""),
        notion_database_id=os.environ.get("NOTION_DATABASE_ID", ""),
        transcribe_voice=os.environ.get("TRANSCRIBE_VOICE", "0") == "1",
    )
