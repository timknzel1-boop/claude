# Community Brain

Macht aus der Ecom-Community auf Telegram ein Playbook für mysolv, das man direkt umsetzen kann.

```
Telegram-Gruppe ──► Collector (dein Account, nur lesen) – alle 90 Minuten
                         │  neue Nachrichten seit dem letzten Lauf
                         │  + die letzten 40 als Kontext (Frage 12:00, Antworten 13:40)
                         ▼
                    Claude filtert die Sauce:
                    Taktik · Zahlen · Setup · „So setzt mysolv das um“
                         │
             ┌───────────┴───────────┐
             ▼                       ▼
   Notion „Community Playbook“   Daily Digest (Notion + output/JJJJ-MM-TT.md)
   (1 Eintrag pro Learning,       jeder Lauf hängt einen Abschnitt
    Status Neu→Testen→Umgesetzt)   mit Uhrzeit + Top-To-dos an
```

Jeder Eintrag hat: **Kategorie** (Meta Ads, Creatives, Funnel, Offer, Retention …), **Kernaussage**,
**Details/Zahlen**, **Umsetzungsschritte für mysolv** als Checkboxen, **Priorität**, **Aufwand**,
**Evidenz** (mit Zahlen belegt / Erfahrungswert / Meinung), **wer es geteilt hat** und **Links zu den Originalnachrichten**.
Themen, die schon erfasst sind, werden nur als „(Update)“ neu angelegt, wenn es neue Details gibt.

## Schnellstart im Terminal (Mac/Linux)

```bash
git clone https://github.com/timknzel1-boop/claude.git && cd claude
git checkout claude/telegram-community-integration-53zzj2   # bis der PR gemergt ist
bash scripts/setup.sh      # führt Schritt für Schritt durch alles unten
bash scripts/start.sh      # startet den Betrieb alle 90 Minuten im Hintergrund
tail -f logs/community_brain.log   # zuschauen
bash scripts/stop.sh       # stoppen
```

Das Setup-Skript fragt alle Zugangsdaten ab (Secrets verdeckt) und speichert sie in `.env` (nur für dich lesbar).
Beim Login wählst du deine Community per Nummer aus. Du kannst es jederzeit erneut ausführen.

## Einrichtung von Hand (was das Setup-Skript macht)

1. **Telegram-API-Zugang:** Auf https://my.telegram.org einloggen → *API development tools* → App anlegen.
   `api_id` und `api_hash` in `.env` eintragen (Vorlage: `.env.example`).
2. **Installieren:** `pip install -r requirements.txt`
3. **Login (lokal auf deinem Rechner):**
   ```bash
   python -m community_brain login
   ```
   Telegram schickt dir einen Code. Danach wählst du deine Community per Nummer aus.
   Session und Gruppe werden automatisch in `.env` gespeichert.
   ⚠️ Der Session-String ist wie ein Passwort für deinen Telegram-Account. Nie teilen, nie committen.
4. **Notion (optional, empfohlen):**
   - Auf https://www.notion.so/my-integrations eine Integration anlegen → Token als `NOTION_TOKEN` eintragen.
   - Eine Notion-Seite anlegen (z.B. „mysolv Wissen“) und über *⋯ → Connections* mit der Integration teilen.
   - `python -m community_brain setup-notion <ID-der-Seite>` → legt die Datenbank an und speichert die ID in `.env`.
5. **Anthropic-API-Key** als `ANTHROPIC_API_KEY` eintragen.
6. **Testlauf:** `python -m community_brain run --dry-run` → schreibt nur `output/<datum>.md`.
   Beim ersten Lauf werden die letzten `BACKFILL_DAYS` Tage (Standard 30) nachgeholt.

## Alle 90 Minuten automatisch laufen lassen

Läufe ohne neue Nachrichten oder ohne echte Learnings (nur Smalltalk) erzeugen keinen Eintrag und kosten
praktisch nichts. Zwei Varianten:

**A) Eigener Rechner oder kleiner VPS (empfohlen):**
```bash
python -m community_brain watch            # alle 90 Minuten, läuft dauerhaft
python -m community_brain watch --every 60 # anderes Intervall
```
Bei Telegram meldet sich immer dieselbe Maschine an. Das ist am unauffälligsten für deinen Account.
Dauerhaft betreiben z.B. mit `tmux`, `systemd` oder `pm2`.

**B) GitHub Actions (ohne eigenen Server):**
Der Workflow `.github/workflows/community-brain.yml` läuft alle 90 Minuten rund um die Uhr. GitHub startet
geplante Läufe unter Last teils einige Minuten später.
Dafür die Werte aus `.env` als **Repository Secrets** anlegen (GitHub → Settings → Secrets and variables → Actions):
`TELEGRAM_API_ID`, `TELEGRAM_API_HASH`, `TELEGRAM_SESSION`, `TELEGRAM_GROUP`, `ANTHROPIC_API_KEY`,
`NOTION_TOKEN`, `NOTION_DATABASE_ID`.

- Das Repo sollte **privat** sein. Die Digests landen nur in Notion und als Workflow-Artefakt (30 Tage),
  nie im Git-Verlauf.
- Bei GitHub Actions kommt jeder Lauf von einem anderen Server. Telegram kann dann Login-Hinweise schicken.
  Wenn das häufiger passiert, auf Variante A wechseln.

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

Das Tool nutzt `claude-opus-5` (über `CLAUDE_MODEL` änderbar). 16 Läufe pro Tag mit zusammen ein paar hundert
Nachrichten liegen grob im niedrigen Euro-Bereich pro Tag. Läufe ohne neue Nachrichten rufen Claude gar nicht erst auf.
Das erste Nachholen von 30 Tagen kostet einmalig mehr.
Falls Claude eine Anfrage ablehnt, springt automatisch ein Fallback-Modell ein (`fallbacks="default"`).

## Fair Use

- Nur für die interne Nutzung bei mysolv. Keine Inhalte aus der Community weiterverbreiten oder weiterverkaufen.
- Das Tool liest nur mit (max. 5.000 Nachrichten pro Lauf, gedrosselt). Es schreibt nichts in die Gruppe.
