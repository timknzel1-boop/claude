#!/usr/bin/env bash
# Community Brain – geführtes Setup im Terminal.
# Start:  bash scripts/setup.sh
# Kann jederzeit erneut ausgeführt werden; schon erledigte Schritte lassen sich überspringen.
set -euo pipefail

cd "$(dirname "$0")/.."
PY=".venv/bin/python"

bold() { printf "\n\033[1m%s\033[0m\n" "$1"; }
ok()   { printf "\033[32m✅ %s\033[0m\n" "$1"; }
ask()  { local reply; read -r -p "$1 [j/n] " reply; [[ "$reply" =~ ^[jJyY]$ ]]; }
env_has() { [ -f .env ] && grep -Eq "^$1=.+" .env; }

# Fragt einen Wert ab (Secrets verdeckt) und speichert ihn in .env
set_secret() {
  local key="$1" prompt="$2" hidden="${3:-}" value
  if env_has "$key" && ! ask "$key ist schon gesetzt. Neu eingeben?"; then return; fi
  if [ -n "$hidden" ]; then read -r -s -p "$prompt: " value; echo; else read -r -p "$prompt: " value; fi
  printf '%s' "$value" | "$PY" -m community_brain set-env "$key"
  ok "$key gespeichert"
}

bold "Schritt 1/6 · Python-Umgebung"
if ! command -v python3 >/dev/null; then
  echo "python3 fehlt. Mac: 'brew install python'  ·  Ubuntu: 'sudo apt install python3 python3-venv'"; exit 1
fi
python3 -c 'import sys; sys.exit(sys.version_info < (3, 10))' || { echo "Python 3.10 oder neuer nötig."; exit 1; }
[ -d .venv ] || python3 -m venv .venv
"$PY" -m pip install -q --upgrade pip
"$PY" -m pip install -q -r requirements.txt
[ -f .env ] || cp .env.example .env
chmod 600 .env
ok "Abhängigkeiten installiert, .env angelegt"

bold "Schritt 2/6 · Telegram-API-Zugang"
echo "Öffne https://my.telegram.org → 'API development tools' → App anlegen (Name/Kurzname egal)."
set_secret TELEGRAM_API_ID "api_id"
set_secret TELEGRAM_API_HASH "api_hash" hidden

bold "Schritt 3/6 · Telegram-Login + Community auswählen"
if env_has TELEGRAM_SESSION && ! ask "Du bist schon eingeloggt. Neu einloggen / andere Gruppe wählen?"; then
  :
else
  echo "Gib deine Telefonnummer mit Ländervorwahl ein (z.B. +41…). Telegram schickt dir einen Code in die App."
  "$PY" -m community_brain login
fi

bold "Schritt 4/6 · Claude"
echo "API-Key erstellen: https://console.anthropic.com → API Keys"
set_secret ANTHROPIC_API_KEY "ANTHROPIC_API_KEY (sk-ant-…)" hidden

bold "Schritt 5/6 · Notion (optional, empfohlen)"
if env_has NOTION_DATABASE_ID && ! ask "Notion ist schon eingerichtet. Neu einrichten?"; then
  :
elif ask "Notion-Playbook einrichten?"; then
  echo "1. https://www.notion.so/my-integrations → 'New integration' → Token kopieren"
  echo "2. In Notion eine Seite anlegen (z.B. 'mysolv Wissen') → ⋯ → Connections → deine Integration hinzufügen"
  echo "3. Seiten-ID = die 32 Zeichen am Ende des Seiten-Links"
  set_secret NOTION_TOKEN "Notion-Token (ntn_… / secret_…)" hidden
  read -r -p "Seiten-ID: " page_id
  "$PY" -m community_brain setup-notion "$page_id"
else
  echo "Übersprungen – Ergebnisse landen dann nur in output/<datum>.md"
fi

bold "Schritt 6/6 · Testlauf"
if ask "Jetzt einen Testlauf machen? (holt die letzten 30 Tage, schreibt nur output/, dauert einige Minuten)"; then
  "$PY" -m community_brain run --dry-run
  ls -1 output/ 2>/dev/null | tail -n 3 | sed 's/^/   output\//'
fi

bold "Fertig 🎉"
cat <<'EOF'
Dauerbetrieb starten (alle 90 Minuten):   bash scripts/start.sh
Live-Log ansehen:                         tail -f logs/community_brain.log
Stoppen:                                  bash scripts/stop.sh
Einzelnen Lauf sofort:                    .venv/bin/python -m community_brain run
Call-Replay auswerten:                    .venv/bin/pip install faster-whisper
                                          .venv/bin/python -m community_brain call replay.mp3
EOF
