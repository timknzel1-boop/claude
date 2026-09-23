"""Ausgabe: Markdown-Digest in ./output und (optional) Notion-Datenbank als Playbook."""

from __future__ import annotations

import json
from datetime import date

import requests

from .config import OUTPUT_DIR, STATE_DIR, Config
from .extractor import Auswertung, Kategorie, Wissen

NOTION_API = "https://api.notion.com/v1"
NOTION_VERSION = "2022-06-28"
KNOWN_TITLES_FILE = STATE_DIR / "known_titles.json"


# ---------- bekannte Themen (gegen Duplikate) ----------

def load_known_titles() -> list[str]:
    if KNOWN_TITLES_FILE.exists():
        return json.loads(KNOWN_TITLES_FILE.read_text(encoding="utf-8"))
    return []


def save_known_titles(titles: list[str]) -> None:
    STATE_DIR.mkdir(parents=True, exist_ok=True)
    KNOWN_TITLES_FILE.write_text(json.dumps(titles[-1000:], ensure_ascii=False, indent=1), encoding="utf-8")


# ---------- Markdown ----------

def _links(w: Wissen, links: dict[int, str]) -> list[str]:
    return [links[i] for i in w.quellen if links.get(i)]


def to_markdown(result: Auswertung, source: str, day: date, links: dict[int, str]) -> str:
    out = [f"# Community-Digest {day.isoformat()} ({source})", "", result.zusammenfassung, "", "## Top To-dos für mysolv", ""]
    out += [f"- [ ] {t}" for t in result.top_todos]
    order = {"Hoch": 0, "Mittel": 1, "Niedrig": 2}
    for w in sorted(result.wissen, key=lambda w: order[w.prioritaet]):
        out += [
            "",
            f"## {w.titel}",
            f"**{w.kategorie}** · Priorität: {w.prioritaet} · {w.aufwand} · {w.evidenz}"
            + (f" · {w.zahlen}" if w.zahlen else ""),
            "",
            f"**Kernaussage:** {w.kernaussage}",
            "",
            w.details,
            "",
            "**Umsetzung für mysolv:**",
        ]
        out += [f"- [ ] {s}" for s in w.umsetzung_mysolv]
        meta = f"_Von: {', '.join(w.autoren)}_"
        if src := _links(w, links):
            meta += " · " + " ".join(f"[Quelle]({u})" for u in src)
        out += ["", meta]
    return "\n".join(out) + "\n"


def write_markdown(result: Auswertung, source: str, day: date, links: dict[int, str]) -> str:
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    suffix = "" if source == "Chat" else f"-{source.lower()}"
    path = OUTPUT_DIR / f"{day.isoformat()}{suffix}.md"
    path.write_text(to_markdown(result, source, day, links), encoding="utf-8")
    return str(path)


# ---------- Notion ----------

def _headers(cfg: Config) -> dict:
    return {
        "Authorization": f"Bearer {cfg.notion_token}",
        "Notion-Version": NOTION_VERSION,
        "Content-Type": "application/json",
    }


def _text(value: str) -> list[dict]:
    return [{"type": "text", "text": {"content": value[:2000]}}] if value else []


def _select(name: str) -> dict:
    return {"select": {"name": name}}


def _options(values) -> dict:
    return {"select": {"options": [{"name": v} for v in values]}}


def create_database(cfg: Config, parent_page_id: str) -> str:
    """Legt die Playbook-Datenbank unter einer Notion-Seite an und gibt ihre ID zurück."""
    body = {
        "parent": {"type": "page_id", "page_id": parent_page_id},
        "title": _text("Community Playbook"),
        "properties": {
            "Titel": {"title": {}},
            "Typ": _options(["Wissen", "Daily Digest"]),
            "Kategorie": _options(Kategorie.__args__),
            "Priorität": _options(["Hoch", "Mittel", "Niedrig"]),
            "Aufwand": _options(["Quick Win (<1h)", "Mittel (1 Tag)", "Projekt (>1 Tag)"]),
            "Evidenz": _options(["Mit Zahlen belegt", "Erfahrungswert", "Meinung/Idee"]),
            "Status": _options(["Neu", "Testen", "Umgesetzt", "Verworfen"]),
            "Quelle": _options(["Chat", "Call"]),
            "Datum": {"date": {}},
            "Kernaussage": {"rich_text": {}},
            "Zahlen": {"rich_text": {}},
            "Von": {"rich_text": {}},
        },
    }
    r = requests.post(f"{NOTION_API}/databases", headers=_headers(cfg), json=body, timeout=30)
    r.raise_for_status()
    return r.json()["id"]


def _create_page(cfg: Config, properties: dict, children: list[dict]) -> None:
    body = {"parent": {"database_id": cfg.notion_database_id}, "properties": properties, "children": children[:100]}
    r = requests.post(f"{NOTION_API}/pages", headers=_headers(cfg), json=body, timeout=30)
    r.raise_for_status()


def _block(kind: str, text: str, **extra) -> dict:
    return {"object": "block", "type": kind, kind: {"rich_text": _text(text), **extra}}


def push_to_notion(cfg: Config, result: Auswertung, source: str, day: date, links: dict[int, str]) -> None:
    for w in result.wissen:
        children = [_block("paragraph", w.details), _block("heading_3", "Umsetzung für mysolv")]
        children += [_block("to_do", s, checked=False) for s in w.umsetzung_mysolv]
        for url in _links(w, links):
            children.append(
                {"object": "block", "type": "bookmark", "bookmark": {"url": url}}
            )
        _create_page(
            cfg,
            {
                "Titel": {"title": _text(w.titel)},
                "Typ": _select("Wissen"),
                "Kategorie": _select(w.kategorie),
                "Priorität": _select(w.prioritaet),
                "Aufwand": _select(w.aufwand),
                "Evidenz": _select(w.evidenz),
                "Status": _select("Neu"),
                "Quelle": _select(source),
                "Datum": {"date": {"start": day.isoformat()}},
                "Kernaussage": {"rich_text": _text(w.kernaussage)},
                "Zahlen": {"rich_text": _text(w.zahlen)},
                "Von": {"rich_text": _text(", ".join(w.autoren))},
            },
            children,
        )

    digest_children = [_block("paragraph", result.zusammenfassung), _block("heading_2", "Top To-dos")]
    digest_children += [_block("to_do", t, checked=False) for t in result.top_todos]
    digest_children.append(_block("heading_2", f"{len(result.wissen)} neue Einträge"))
    digest_children += [_block("bulleted_list_item", f"[{w.prioritaet}] {w.titel}") for w in result.wissen]
    _create_page(
        cfg,
        {
            "Titel": {"title": _text(f"Digest {day.isoformat()} ({source})")},
            "Typ": _select("Daily Digest"),
            "Quelle": _select(source),
            "Datum": {"date": {"start": day.isoformat()}},
            "Kernaussage": {"rich_text": _text(result.zusammenfassung)},
        },
        digest_children,
    )
