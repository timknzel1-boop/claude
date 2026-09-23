"""Liest neue Nachrichten der Community-Gruppe über den eigenen Telegram-Account."""

from __future__ import annotations

import json
from dataclasses import asdict, dataclass
from datetime import datetime, timedelta, timezone

from telethon import TelegramClient, utils
from telethon.sessions import StringSession
from telethon.tl.types import Channel

from . import config
from .config import STATE_DIR, Config

STATE_FILE = STATE_DIR / "collector.json"
# Obergrenze pro Lauf, damit der Account nicht wie ein Scraper aussieht
MAX_MESSAGES_PER_RUN = 5000


@dataclass
class ChatMessage:
    id: int
    date: str
    author: str
    text: str
    topic: str | None
    reply_to: int | None
    link: str | None
    kind: str  # text | voice | photo | video | document


def _load_state() -> dict:
    if STATE_FILE.exists():
        return json.loads(STATE_FILE.read_text(encoding="utf-8"))
    return {}


def save_state(state: dict) -> None:
    STATE_DIR.mkdir(parents=True, exist_ok=True)
    STATE_FILE.write_text(json.dumps(state, indent=2), encoding="utf-8")


def make_client(cfg: Config) -> TelegramClient:
    if not (cfg.api_id and cfg.api_hash):
        raise SystemExit("TELEGRAM_API_ID / TELEGRAM_API_HASH fehlen (siehe .env.example).")
    return TelegramClient(StringSession(cfg.session), cfg.api_id, cfg.api_hash)


async def resolve_group(client: TelegramClient, group: str):
    if not group:
        raise SystemExit("TELEGRAM_GROUP fehlt – `python -m community_brain login` zeigt die IDs deiner Gruppen.")
    await client.get_dialogs()  # füllt den Cache, damit private Gruppen per ID auflösbar sind
    target = int(group) if group.lstrip("-").isdigit() else group
    return await client.get_entity(target)


def _kind(msg) -> str:
    if msg.voice or msg.video_note:
        return "voice"
    if msg.photo:
        return "photo"
    if msg.video:
        return "video"
    if msg.document:
        return "document"
    return "text"


async def collect(cfg: Config | None = None) -> tuple[list[ChatMessage], dict]:
    """Gibt alle Nachrichten seit dem letzten Lauf zurück (plus neuen State, noch nicht gespeichert)."""
    cfg = cfg or config.load()
    state = _load_state()
    messages: list[ChatMessage] = []
    topic_titles: dict[int, str] = {}

    client = make_client(cfg)
    await client.connect()
    try:
        if not await client.is_user_authorized():
            raise SystemExit("Telegram-Session ungültig – `python -m community_brain login` neu ausführen.")
        group = await resolve_group(client, cfg.group)
        key = str(group.id)
        last_id = state.get(key, {}).get("last_id", 0)
        is_channel = isinstance(group, Channel)

        kwargs = {"reverse": True, "limit": MAX_MESSAGES_PER_RUN, "wait_time": 1}
        if last_id:
            kwargs["min_id"] = last_id
        else:
            kwargs["offset_date"] = datetime.now(timezone.utc) - timedelta(days=cfg.backfill_days)

        async for msg in client.iter_messages(group, **kwargs):
            if msg.action is not None:  # Service-Nachrichten (Beitritte etc.)
                continue
            kind = _kind(msg)
            text = msg.message or ""
            if kind == "voice" and cfg.transcribe_voice:
                text = await _transcribe_voice(msg) or text
            if not text.strip():
                continue

            topic = None
            reply_to = None
            if msg.reply_to:
                reply_to = msg.reply_to.reply_to_msg_id
                if getattr(msg.reply_to, "forum_topic", False):
                    topic_id = msg.reply_to.reply_to_top_id or msg.reply_to.reply_to_msg_id
                    topic = await _topic_title(client, group, topic_id, topic_titles)
                    if not msg.reply_to.reply_to_top_id:  # direkt im Topic, keine echte Antwort
                        reply_to = None

            sender = await msg.get_sender()
            messages.append(
                ChatMessage(
                    id=msg.id,
                    date=msg.date.isoformat(timespec="minutes"),
                    author=utils.get_display_name(sender) if sender else "Unbekannt",
                    text=text,
                    topic=topic,
                    reply_to=reply_to,
                    link=f"https://t.me/c/{group.id}/{msg.id}" if is_channel else None,
                    kind=kind,
                )
            )
            last_id = max(last_id, msg.id)

        state[key] = {"last_id": last_id, "title": utils.get_display_name(group)}
    finally:
        await client.disconnect()

    return messages, state


async def _topic_title(client, group, topic_id: int, cache: dict[int, str]) -> str:
    if topic_id not in cache:
        created = await client.get_messages(group, ids=topic_id)
        title = getattr(getattr(created, "action", None), "title", None)
        cache[topic_id] = title or f"Topic {topic_id}"
    return cache[topic_id]


async def _transcribe_voice(msg) -> str | None:
    from .transcribe import transcribe_file

    path = await msg.download_media(file=str(STATE_DIR / "voice"))
    if not path:
        return None
    return "[Sprachnachricht] " + transcribe_file(path, delete_after=True)


def as_dicts(messages: list[ChatMessage]) -> list[dict]:
    return [asdict(m) for m in messages]
