#!/bin/bash
set -e

echo "=== Ad Research Tool ==="
echo ""

# Check Python
if ! command -v python3 &> /dev/null; then
  echo "❌ Python3 nicht gefunden. Bitte installieren."
  exit 1
fi

# Install deps if venv doesn't exist
if [ ! -d ".venv" ]; then
  echo "📦 Erstelle virtuelle Umgebung..."
  python3 -m venv .venv
fi

source .venv/bin/activate

echo "📦 Installiere Abhängigkeiten..."
pip install -q -r requirements.txt

echo ""
echo "🚀 Starte Server auf http://localhost:8000"
echo "   Drücke Ctrl+C zum Beenden."
echo ""

python main.py
