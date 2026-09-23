# Community Brain

Macht aus der Ecom-Community auf Telegram ein Playbook für mysolv, das man direkt umsetzen kann.

```
Telegram-Gruppe ──► Collector (dein Account, nur lesen)
                         │  neue Nachrichten seit dem letzten Lauf
                         ▼
                    Claude filtert die Sauce:
                    Taktik · Zahlen · Setup · „So setzt mysolv das um“
                         │
             ┌───────────┴───────────┐
             ▼                       ▼
   Notion „Community Playbook“   output/JJJJ-MM-TT.md
   (1 Eintrag pro Learning,       (Daily Digest mit
    Status Neu→Testen→Umgesetzt)   Top-To-dos)
```

Jeder Eintrag hat: **Kategorie** (Meta Ads, Creatives, Funnel, Offer, Retention …), **Kernaussage**,
**Details/Zahlen**, **Umsetzungsschritte für mysolv** als Checkboxen, **Priorität**, **Aufwand**,
**Evidenz** (mit Zahlen belegt / Erfahrungswert / Meinung), **wer es geteilt hat** und **Links zu den Originalnachrichten**.
Themen, die schon erfasst sind, werden nur als „(Update)“ neu angelegt, wenn es neue Details gibt.

## Einrichtung (einmalig, ca. 15 Minuten)

1. **Telegram-API-Zugang:** Auf https://my.telegram.org einloggen → *API development tools* → App anlegen.
   `api_id` und `api_hash` in `.env` eintragen (Vorlage: `.env.example`).
2. **Installieren:** `pip install -r requirements.txt`
3. **Login (lokal auf deinem Rechner):**
   ```bash
   python -m community_brain login
   ```
   Telegram schickt dir einen Code. Danach bekommst du den `TELEGRAM_SESSION`-String und die IDs
   deiner Gruppen. Beides in `.env` eintragen.
   ⚠️ Der Session-String ist wie ein Passwort für deinen Telegram-Account. Nie teilen, nie committen.
4. **Notion (optional, empfohlen):**
   - Auf https://www.notion.so/my-integrations eine Integration anlegen → Token als `NOTION_TOKEN` eintragen.
   - Eine Notion-Seite anlegen (z.B. „mysolv Wissen“) und über *⋯ → Connections* mit der Integration teilen.
   - `python -m community_brain setup-notion <ID-der-Seite>` → die ausgegebene `NOTION_DATABASE_ID` eintragen.
5. **Anthropic-API-Key** als `ANTHROPIC_API_KEY` eintragen.
6. **Testlauf:** `python -m community_brain run --dry-run` → schreibt nur `output/<datum>.md`.
   Beim ersten Lauf werden die letzten `BACKFILL_DAYS` Tage (Standard 30) nachgeholt.

## Täglich automatisch laufen lassen

Der Workflow `.github/workflows/community-brain.yml` läuft jeden Abend um 20 Uhr (Sommerzeit).
Dafür die Werte aus `.env` als **Repository Secrets** anlegen (GitHub → Settings → Secrets and variables → Actions):
`TELEGRAM_API_ID`, `TELEGRAM_API_HASH`, `TELEGRAM_SESSION`, `TELEGRAM_GROUP`, `ANTHROPIC_API_KEY`,
`NOTION_TOKEN`, `NOTION_DATABASE_ID`.

- Das Repo sollte **privat** sein. Die Digests landen nur in Notion und als Workflow-Artefakt (30 Tage),
  nie im Git-Verlauf.
- Telegram kann beim ersten Zugriff von einem GitHub-Server eine Login-Benachrichtigung schicken. Das ist normal.
  Wer das nicht will, lässt `python -m community_brain run` per Cron auf einem eigenen Rechner oder kleinen VPS laufen.

## Sauce Calls

Das Tool nimmt Calls **nicht** selbst auf. Aufzeichnen ist in Deutschland nur mit Einverständnis
der Sprecher erlaubt (§ 201 StGB). Außerdem verbieten viele Communities das Mitschneiden.
Wenn es offizielle Replays gibt oder der Host die Aufnahme freigegeben hat:

```bash
pip install faster-whisper
python -m community_brain call replay-2026-09-23.mp3
```

Das Replay wird lokal transkribiert (das Transkript liegt als `.txt` daneben) und genauso ausgewertet wie der Chat
(Quelle: „Call“). Mit `TRANSCRIBE_VOICE=1` werden auch Sprachnachrichten aus dem Chat transkribiert.

## Kosten

Das Tool nutzt `claude-opus-5` (über `CLAUDE_MODEL` änderbar). Ein normaler Tag mit ein paar hundert Nachrichten
liegt grob im Cent- bis niedrigen Euro-Bereich. Das erste Nachholen von 30 Tagen kostet einmalig mehr.
Falls Claude eine Anfrage ablehnt, springt automatisch ein Fallback-Modell ein (`fallbacks="default"`).

## Fair Use

- Nur für die interne Nutzung bei mysolv. Keine Inhalte aus der Community weiterverbreiten oder weiterverkaufen.
- Das Tool liest nur mit (max. 5.000 Nachrichten pro Lauf, gedrosselt). Es schreibt nichts in die Gruppe.
