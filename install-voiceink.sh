#!/usr/bin/env bash
#
# install-voiceink.sh — Installiert VoiceInk aus der heruntergeladenen DMG.
#
# AUF DEINEM MAC ausführen (NICHT in der Cloud-Session — VoiceInk ist eine macOS-App).
#
# Benutzung:
#   chmod +x install-voiceink.sh
#   ./install-voiceink.sh                 # sucht VoiceInk.dmg in ~/Downloads
#   ./install-voiceink.sh /pfad/zur/VoiceInk.dmg
#
set -euo pipefail

# --- 0. Plattform-Check -------------------------------------------------------
if [[ "$(uname -s)" != "Darwin" ]]; then
  echo "FEHLER: Dieses Skript läuft nur auf macOS. VoiceInk ist eine macOS-App." >&2
  exit 1
fi

# --- 1. DMG finden ------------------------------------------------------------
DMG="${1:-}"
if [[ -z "$DMG" ]]; then
  # Erst exakter Name, sonst neueste passende DMG in ~/Downloads
  if [[ -f "$HOME/Downloads/VoiceInk.dmg" ]]; then
    DMG="$HOME/Downloads/VoiceInk.dmg"
  else
    DMG="$(ls -t "$HOME"/Downloads/VoiceInk*.dmg 2>/dev/null | head -n1 || true)"
  fi
fi

if [[ -z "$DMG" || ! -f "$DMG" ]]; then
  echo "FEHLER: Keine VoiceInk-DMG gefunden." >&2
  echo "Lege VoiceInk.dmg in ~/Downloads oder gib den Pfad als Argument an:" >&2
  echo "  ./install-voiceink.sh /pfad/zur/VoiceInk.dmg" >&2
  exit 1
fi
echo "==> Verwende DMG: $DMG"

# --- 2. DMG einhängen ---------------------------------------------------------
echo "==> Hänge DMG ein ..."
MOUNT_POINT="$(mktemp -d /tmp/voiceink.XXXXXX)"
hdiutil attach "$DMG" -nobrowse -quiet -mountpoint "$MOUNT_POINT"

cleanup() {
  echo "==> Hänge DMG wieder aus ..."
  hdiutil detach "$MOUNT_POINT" -quiet || true
  rmdir "$MOUNT_POINT" 2>/dev/null || true
}
trap cleanup EXIT

# --- 3. App finden und kopieren ----------------------------------------------
APP_SRC="$(find "$MOUNT_POINT" -maxdepth 1 -name '*.app' -print -quit)"
if [[ -z "$APP_SRC" ]]; then
  echo "FEHLER: Keine .app in der DMG gefunden." >&2
  exit 1
fi
APP_NAME="$(basename "$APP_SRC")"
APP_DEST="/Applications/$APP_NAME"

if [[ -d "$APP_DEST" ]]; then
  echo "==> Alte Version gefunden, entferne $APP_DEST ..."
  rm -rf "$APP_DEST"
fi

echo "==> Kopiere $APP_NAME nach /Applications ..."
cp -R "$APP_SRC" "/Applications/"

# --- 4. Gatekeeper-Quarantäne entfernen (Beta ist nicht notariell signiert) ---
echo "==> Entferne Quarantäne-Flag (Gatekeeper) ..."
xattr -dr com.apple.quarantine "$APP_DEST" 2>/dev/null || true

# --- 5. Starten ---------------------------------------------------------------
echo "==> Starte $APP_NAME ..."
open "$APP_DEST"

cat <<'EOF'

==> Fertig! VoiceInk ist in /Applications installiert.

Beim ersten Start musst du noch zwei Berechtigungen erteilen
(Systemeinstellungen -> Datenschutz & Sicherheit):
  • Mikrofon           -> für die Aufnahme
  • Bedienungshilfen   -> damit VoiceInk Text in andere Apps einfügen kann

Falls macOS trotzdem meldet "kann nicht geöffnet werden":
  Rechtsklick auf die App -> "Öffnen" -> im Dialog erneut "Öffnen".
EOF
