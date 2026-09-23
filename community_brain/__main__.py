"""CLI: python -m community_brain <login|run|call|setup-notion>"""

from __future__ import annotations

import argparse
import asyncio
from datetime import date
from pathlib import Path

from . import collector, config, extractor, publish


async def cmd_login(cfg: config.Config) -> None:
    """Einmalig lokal ausführen: Login per Telegram-Code, gibt TELEGRAM_SESSION aus."""
    from telethon.tl.types import Channel, Chat

    async with collector.make_client(cfg) as client:
        await client.start()
        me = await client.get_me()
        print(f"\nEingeloggt als {me.first_name} (@{me.username})\n")
        print("Deine Gruppen (ID → Name):")
        async for dialog in client.iter_dialogs():
            if isinstance(dialog.entity, (Channel, Chat)) and not getattr(dialog.entity, "broadcast", False):
                print(f"  {dialog.id:>16}  {dialog.name}")
        print("\nTrage in .env ein:")
        print(f"TELEGRAM_SESSION={client.session.save()}")
        print("TELEGRAM_GROUP=<ID der Community von oben>")
        print("\n⚠️  Den Session-String wie ein Passwort behandeln – er gibt vollen Zugriff auf deinen Account.")


def cmd_run(cfg: config.Config, dry_run: bool) -> None:
    messages, state = asyncio.run(collector.collect(cfg))
    print(f"{len(messages)} neue Nachrichten")
    if not messages:
        if not dry_run:
            collector.save_state(state)
        return

    data = collector.as_dicts(messages)
    links = {m["id"]: m["link"] for m in data}
    _process(cfg, data, "Chat", links, dry_run)
    if not dry_run:
        collector.save_state(state)


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


def _process(cfg: config.Config, data: list[dict], source: str, links: dict[int, str], dry_run: bool) -> None:
    known = publish.load_known_titles()
    result = extractor.extract(cfg, data, source, known)
    today = date.today()
    path = publish.write_markdown(result, source, today, links)
    print(f"{len(result.wissen)} Wissens-Einträge → {path}")
    if dry_run:
        return
    if cfg.notion_enabled:
        publish.push_to_notion(cfg, result, source, today, links)
        print("→ in Notion gespeichert")
    publish.save_known_titles(known + [w.titel for w in result.wissen])


def main() -> None:
    parser = argparse.ArgumentParser(prog="community_brain", description="Ecom-Community → umsetzbares Playbook für mysolv")
    sub = parser.add_subparsers(dest="cmd", required=True)
    sub.add_parser("login", help="Einmaliger Telegram-Login, gibt Session-String + Gruppen-IDs aus")
    run = sub.add_parser("run", help="Neue Nachrichten holen, auswerten, Digest + Notion schreiben")
    run.add_argument("--dry-run", action="store_true", help="Nur Markdown, kein Notion, State nicht speichern")
    call = sub.add_parser("call", help="Call-Replay(s) transkribieren und auswerten")
    call.add_argument("files", nargs="+")
    call.add_argument("--dry-run", action="store_true")
    setup = sub.add_parser("setup-notion", help="Legt die Notion-Datenbank 'Community Playbook' an")
    setup.add_argument("parent_page_id", help="ID der Notion-Seite, unter der die Datenbank entstehen soll")
    args = parser.parse_args()

    cfg = config.load()
    if args.cmd == "login":
        asyncio.run(cmd_login(cfg))
    elif args.cmd == "run":
        cmd_run(cfg, args.dry_run)
    elif args.cmd == "call":
        cmd_call(cfg, args.files, args.dry_run)
    elif args.cmd == "setup-notion":
        if not cfg.notion_token:
            raise SystemExit("NOTION_TOKEN fehlt.")
        db_id = publish.create_database(cfg, args.parent_page_id)
        print(f"Datenbank angelegt. In .env eintragen:\nNOTION_DATABASE_ID={db_id}")


if __name__ == "__main__":
    main()
