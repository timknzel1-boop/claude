"""CLI: python -m community_brain <login|run|watch|call|setup-notion|set-env>"""

from __future__ import annotations

import argparse
import asyncio
import sys
import time
import traceback
from datetime import date, datetime
from pathlib import Path
from zoneinfo import ZoneInfo

from . import collector, config, extractor, publish


async def cmd_login(cfg: config.Config) -> None:
    """Einmalig lokal ausführen: Login per Telegram-Code, speichert Session + Gruppe in .env."""
    from telethon.tl.types import Channel, Chat

    async with collector.make_client(cfg) as client:
        await client.start()
        me = await client.get_me()
        print(f"\nEingeloggt als {me.first_name} (@{me.username})\n")
        groups = []
        async for dialog in client.iter_dialogs():
            if isinstance(dialog.entity, (Channel, Chat)) and not getattr(dialog.entity, "broadcast", False):
                groups.append(dialog)
        for i, dialog in enumerate(groups, 1):
            print(f"  [{i:>2}] {dialog.name}")
        if not groups:
            raise SystemExit("Keine Gruppen gefunden – bist du der Community mit diesem Account beigetreten?")
        while True:
            choice = input("\nNummer deiner Ecom-Community: ").strip()
            if choice.isdigit() and 1 <= int(choice) <= len(groups):
                group = groups[int(choice) - 1]
                break
            print(f"Bitte eine Zahl von 1 bis {len(groups)} eingeben.")

        config.set_env("TELEGRAM_SESSION", client.session.save())
        config.set_env("TELEGRAM_GROUP", str(group.id))
        print(f"\n✅ Gespeichert in .env: Session + Gruppe „{group.name}“ ({group.id})")
        print("⚠️  .env enthält jetzt den Zugang zu deinem Telegram-Account – niemals teilen oder committen.")


def cmd_run(cfg: config.Config, dry_run: bool) -> None:
    messages, context, state = asyncio.run(collector.collect(cfg))
    print(f"{_now():%H:%M} · {len(messages)} neue Nachrichten")
    if messages:
        data = collector.as_dicts(messages)
        ctx = collector.as_dicts(context)
        links = {m["id"]: m["link"] for m in ctx + data}
        _process(cfg, data, "Chat", links, dry_run, ctx)
    if not dry_run:
        collector.save_state(state)


def cmd_watch(cfg: config.Config, every_minutes: int) -> None:
    """Dauerbetrieb auf einem eigenen Rechner/VPS: alle N Minuten ein Lauf."""
    while True:
        started = time.monotonic()
        try:
            cmd_run(cfg, dry_run=False)
        except Exception:  # ein fehlgeschlagener Lauf soll den Dauerbetrieb nicht beenden
            traceback.print_exc()
        time.sleep(max(60, every_minutes * 60 - (time.monotonic() - started)))


def cmd_call(cfg: config.Config, files: list[str], dry_run: bool) -> None:
    """Call-Replays / freigegebene Aufnahmen transkribieren und auswerten."""
    from .transcribe import transcribe_file

    for f in files:
        print(f"Transkribiere {f} …")
        text = transcribe_file(f)
        transcript = Path(f).with_suffix(".txt")
        transcript.write_text(text, encoding="utf-8")
        # Transkript in Absätze zerlegen, damit es wie Nachrichten verarbeitet werden kann
        parts = [p for p in text.split(". ") if p.strip()]
        blocks = [". ".join(parts[i : i + 12]) for i in range(0, len(parts), 12)]
        data = [
            {"id": i + 1, "date": date.today().isoformat(), "author": "Call", "text": b, "topic": Path(f).stem, "reply_to": None}
            for i, b in enumerate(blocks)
        ]
        _process(cfg, data, "Call", {}, dry_run)


def _now() -> datetime:
    return datetime.now(ZoneInfo(config.TIMEZONE))


def _process(
    cfg: config.Config, data: list[dict], source: str, links: dict[int, str], dry_run: bool, context: list[dict] | None = None
) -> None:
    known = publish.load_known_titles()
    result = extractor.extract(cfg, data, source, known, context)
    if not result.wissen:
        print("Keine neuen Learnings (nur Smalltalk/Fragen) – nichts veröffentlicht")
        return
    now = _now()
    path = publish.write_markdown(result, source, now, links)
    print(f"{len(result.wissen)} Wissens-Einträge → {path}")
    if dry_run:
        return
    if cfg.notion_enabled:
        publish.push_to_notion(cfg, result, source, now, links)
        print("→ in Notion gespeichert")
    publish.save_known_titles(known + [w.titel for w in result.wissen])


def main() -> None:
    parser = argparse.ArgumentParser(prog="community_brain", description="Ecom-Community → umsetzbares Playbook für mysolv")
    sub = parser.add_subparsers(dest="cmd", required=True)
    sub.add_parser("login", help="Einmaliger Telegram-Login, gibt Session-String + Gruppen-IDs aus")
    run = sub.add_parser("run", help="Neue Nachrichten holen, auswerten, Digest + Notion schreiben")
    run.add_argument("--dry-run", action="store_true", help="Nur Markdown, kein Notion, State nicht speichern")
    watch = sub.add_parser("watch", help="Dauerbetrieb: alle N Minuten neue Nachrichten auswerten")
    watch.add_argument("--every", type=int, default=90, help="Intervall in Minuten (Standard: 90)")
    call = sub.add_parser("call", help="Call-Replay(s) transkribieren und auswerten")
    call.add_argument("files", nargs="+")
    call.add_argument("--dry-run", action="store_true")
    setup = sub.add_parser("setup-notion", help="Legt die Notion-Datenbank 'Community Playbook' an")
    setup.add_argument("parent_page_id", help="ID der Notion-Seite, unter der die Datenbank entstehen soll")
    set_env = sub.add_parser("set-env", help="Wert in .env speichern (für das Setup-Skript)")
    set_env.add_argument("key")
    set_env.add_argument("value", nargs="?", help="Ohne Angabe wird der Wert von stdin gelesen")
    args = parser.parse_args()

    cfg = config.load()
    if args.cmd == "login":
        asyncio.run(cmd_login(cfg))
    elif args.cmd == "run":
        cmd_run(cfg, args.dry_run)
    elif args.cmd == "watch":
        cmd_watch(cfg, args.every)
    elif args.cmd == "call":
        cmd_call(cfg, args.files, args.dry_run)
    elif args.cmd == "setup-notion":
        if not cfg.notion_token:
            raise SystemExit("NOTION_TOKEN fehlt.")
        db_id = publish.create_database(cfg, args.parent_page_id)
        config.set_env("NOTION_DATABASE_ID", db_id)
        print(f"✅ Notion-Datenbank „Community Playbook“ angelegt und in .env gespeichert ({db_id})")
    elif args.cmd == "set-env":
        value = args.value if args.value is not None else sys.stdin.read().strip()
        config.set_env(args.key, value)


if __name__ == "__main__":
    main()
