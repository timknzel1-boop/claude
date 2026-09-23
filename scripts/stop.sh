#!/usr/bin/env bash
# Stoppt den Hintergrund-Betrieb von Community Brain
set -euo pipefail
cd "$(dirname "$0")/.."

PID_FILE="state/watch.pid"
if [ -f "$PID_FILE" ] && kill -0 "$(cat "$PID_FILE")" 2>/dev/null; then
  kill "$(cat "$PID_FILE")"
  rm -f "$PID_FILE"
  echo "✅ Gestoppt."
else
  rm -f "$PID_FILE"
  echo "Läuft gerade nicht."
fi
