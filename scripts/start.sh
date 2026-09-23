#!/usr/bin/env bash
# Startet Community Brain im Hintergrund (alle 90 Minuten, oder: bash scripts/start.sh 60)
set -euo pipefail
cd "$(dirname "$0")/.."

EVERY="${1:-90}"
PID_FILE="state/watch.pid"
mkdir -p logs state

if [ -f "$PID_FILE" ] && kill -0 "$(cat "$PID_FILE")" 2>/dev/null; then
  echo "Läuft bereits (PID $(cat "$PID_FILE")). Log: tail -f logs/community_brain.log"
  exit 0
fi

nohup .venv/bin/python -u -m community_brain watch --every "$EVERY" >> logs/community_brain.log 2>&1 &
echo $! > "$PID_FILE"
echo "✅ Läuft im Hintergrund alle $EVERY Minuten (PID $!)."
echo "   Log:    tail -f logs/community_brain.log"
echo "   Stopp:  bash scripts/stop.sh"
echo "   Hinweis: Läuft nur, solange der Rechner an ist und nicht schläft."
