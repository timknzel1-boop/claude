"""Claude filtert aus Chat-Nachrichten und Call-Transkripten das umsetzbare Ecom-Wissen."""

from __future__ import annotations

from typing import Literal

import anthropic
from pydantic import BaseModel, Field

from .config import Config

Kategorie = Literal[
    "Meta Ads & Media Buying",
    "Creatives & Hooks",
    "Copywriting & Angles",
    "Funnel & CRO",
    "Offer & Pricing",
    "E-Mail/SMS & Retention",
    "Produkt & Sourcing",
    "Fulfillment & Ops",
    "Tracking & Analytics",
    "Tools & KI",
    "Scaling, Team & Finanzen",
    "Recht & Compliance",
]


class Wissen(BaseModel):
    titel: str = Field(description="Kurzer, konkreter Titel, z.B. '3-2-2 Testing mit 50 CHF/Adset'")
    kategorie: Kategorie
    kernaussage: str = Field(description="Die Sauce in 1-2 Sätzen")
    details: str = Field(description="Setup, Zahlen, Bedingungen, Einschränkungen – alles was man zum Nachbauen braucht")
    umsetzung_mysolv: list[str] = Field(description="Konkrete nächste Schritte für mysolv, als abhakbare To-dos")
    prioritaet: Literal["Hoch", "Mittel", "Niedrig"]
    aufwand: Literal["Quick Win (<1h)", "Mittel (1 Tag)", "Projekt (>1 Tag)"]
    evidenz: Literal["Mit Zahlen belegt", "Erfahrungswert", "Meinung/Idee"]
    zahlen: str = Field(description="Genannte KPIs/Ergebnisse, z.B. 'CPA 38→24 CHF'. Leer, wenn keine.")
    autoren: list[str] = Field(description="Wer das geteilt hat (für Rückfragen)")
    quellen: list[int] = Field(description="IDs der Nachrichten, aus denen das stammt")


class Auswertung(BaseModel):
    zusammenfassung: str = Field(description="1-5 Sätze: Was war in diesem Zeitraum in der Community los?")
    top_todos: list[str] = Field(description="Die maximal 5 wichtigsten Dinge, die mysolv jetzt umsetzen sollte")
    wissen: list[Wissen]


SYSTEM_PROMPT = """Du bist Co-Founder und Head of Growth von mysolv (mysolv.de): eine Supplement-Brand \
aus der Schweiz (CHF), Hauptprodukt DETOX COMPLEX (Kapseln mit Schwarzkümmelöl, Oreganoöl, Spirulina, \
Chlorella). Rund 100K Umsatz pro Monat, Traffic fast komplett über Meta Ads, Shop auf Shopify, \
E-Mail über Klaviyo, Creatives vor allem UGC.

Du bekommst Nachrichten aus einer bezahlten Ecom-Community (Brüderschaft mit ca. 500 Mitgliedern, \
tägliche Sauce Calls) oder Transkripte dieser Calls. Deine Aufgabe: Das Wissen herausziehen, das \
mysolv direkt anwenden kann, und für jedes Stück Wissen konkrete Umsetzungsschritte für mysolv schreiben.

Regeln:
- Nur echte Substanz: Taktiken, Setups, Zahlen, Learnings, Tools, Fehler, die man vermeiden sollte. \
Ignoriere Smalltalk, Motivationssprüche, Eigenwerbung und reine Fragen ohne Antwort.
- Eine Frage mit guten Antworten aus der Community ist Wissen. Fasse die Antworten zusammen.
- Übernimm Zahlen und Setups exakt (Budgets, ROAS, CPA, Zeiträume, Tools). Erfinde nichts dazu.
- Wenn sich Leute widersprechen, nenne beide Positionen in `details`.
- `umsetzung_mysolv` muss so konkret sein, dass jemand es morgen abarbeiten kann, zugeschnitten auf \
Supplements, DACH und Meta. Wenn etwas für mysolv nicht passt (z.B. reines Dropshipping, Amazon-only), \
setze die Priorität auf Niedrig und sag in einem Schritt, warum.
- Bei Health Claims: Denk an die EU-Health-Claims-Verordnung und an die Meta-Richtlinien. Weise darauf hin, \
wenn eine Taktik dort Risiken hat.
- Themen, die in der Liste 'Bereits erfasst' schon stehen, nur erneut aufnehmen, wenn es wirklich neue \
Details oder Zahlen gibt. Dann den Titel mit '(Update)' ergänzen.
- Schreibe auf Deutsch, direkt und ohne Fülltext."""

MAX_CHARS_PER_CHUNK = 120_000


def format_messages(messages: list[dict]) -> str:
    lines = []
    for m in messages:
        meta = f"#{m['id']} | {m['date']} | {m['author']}"
        if m.get("topic"):
            meta += f" | Topic: {m['topic']}"
        if m.get("reply_to"):
            meta += f" | Antwort auf #{m['reply_to']}"
        lines.append(f"[{meta}]\n{m['text'].strip()}")
    return "\n\n".join(lines)


def _chunks(messages: list[dict]) -> list[list[dict]]:
    chunks, current, size = [], [], 0
    for m in messages:
        length = len(m["text"]) + 120
        if current and size + length > MAX_CHARS_PER_CHUNK:
            chunks.append(current)
            current, size = [], 0
        current.append(m)
        size += length
    if current:
        chunks.append(current)
    return chunks


def _extract_chunk(
    client: anthropic.Anthropic, cfg: Config, body: str, source: str, known_titles: list[str], context: str
) -> Auswertung:
    known = "\n".join(f"- {t}" for t in known_titles[-300:]) or "(noch nichts)"
    if context:
        context = (
            "<kontext>\nBereits im letzten Lauf ausgewertet. Nur zum Verständnis von Antworten nutzen, "
            f"nicht erneut auswerten.\n{context}\n</kontext>\n\n"
        )
    response = client.beta.messages.parse(
        model=cfg.model,
        max_tokens=16000,
        thinking={"type": "adaptive"},
        output_config={"effort": "high"},
        betas=["server-side-fallback-2026-07-01"],
        fallbacks="default",
        cache_control={"type": "ephemeral"},
        system=SYSTEM_PROMPT,
        messages=[
            {
                "role": "user",
                "content": f"Quelle: {source}\n\nBereits erfasst:\n{known}\n\n{context}<inhalt>\n{body}\n</inhalt>",
            }
        ],
        output_format=Auswertung,
    )
    if response.stop_reason == "refusal":
        raise RuntimeError(f"Claude hat die Auswertung abgelehnt: {response.stop_details}")
    if response.stop_reason == "max_tokens" or response.parsed_output is None:
        raise RuntimeError("Antwort abgeschnitten – MAX_CHARS_PER_CHUNK verkleinern.")
    return response.parsed_output


def extract(
    cfg: Config, messages: list[dict], source: str, known_titles: list[str], context: list[dict] | None = None
) -> Auswertung:
    """Wertet Nachrichten aus. Große Mengen werden in mehrere Anfragen aufgeteilt und zusammengeführt."""
    client = anthropic.Anthropic()
    results = []
    known = list(known_titles)
    ctx = format_messages(context or [])
    for chunk in _chunks(messages):
        result = _extract_chunk(client, cfg, format_messages(chunk), source, known, ctx)
        ctx = ""  # Kontext nur für den ersten Block
        known += [w.titel for w in result.wissen]
        results.append(result)

    if len(results) == 1:
        return results[0]
    wissen = [w for r in results for w in r.wissen]
    prio = {"Hoch": 0, "Mittel": 1, "Niedrig": 2}
    todos = [t for r in sorted(results, key=lambda r: min((prio[w.prioritaet] for w in r.wissen), default=3)) for t in r.top_todos]
    return Auswertung(
        zusammenfassung=" ".join(r.zusammenfassung for r in results),
        top_todos=todos[:5],
        wissen=wissen,
    )
