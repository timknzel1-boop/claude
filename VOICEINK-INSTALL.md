# VoiceInk installieren

VoiceInk ist eine **macOS-App** (benötigt macOS 14.4 oder neuer). Sie kann nur
auf einem Mac installiert und ausgeführt werden – nicht in einer Linux-/Cloud-Umgebung.

Du hast drei Dateien:

| Datei | Inhalt | Wofür |
|-------|--------|-------|
| `VoiceInk.dmg` | fertig gebaute App | **Zum Installieren – das willst du** |
| `VoiceInk2.0beta.2.zip` / `.tar.gz` | Quellcode (Xcode-Projekt) | Nur zum Selbst-Kompilieren |

## Schnellster Weg: Installer-Skript

1. Lade `VoiceInk.dmg` in deinen `Downloads`-Ordner (falls noch nicht dort).
2. Lade `install-voiceink.sh` aus diesem Repo auf deinen Mac.
3. Im Terminal:

   ```bash
   chmod +x install-voiceink.sh
   ./install-voiceink.sh
   ```

Das Skript hängt die DMG ein, kopiert `VoiceInk.app` nach `/Applications`,
entfernt die Gatekeeper-Quarantäne und startet die App.

## Manuell (ohne Skript)

1. `VoiceInk.dmg` doppelklicken.
2. `VoiceInk.app` in den Ordner **Programme / Applications** ziehen.
3. App starten. Bei der Gatekeeper-Warnung: Rechtsklick → **Öffnen** → erneut **Öffnen**.

## Erste Berechtigungen

Beim ersten Start unter **Systemeinstellungen → Datenschutz & Sicherheit**:

- **Mikrofon** – für die Aufnahme
- **Bedienungshilfen** – damit VoiceInk Text in andere Apps einfügen kann

## Aus dem Quellcode bauen (optional, nur für Entwickler)

Auf dem Mac mit installiertem Xcode:

```bash
cd VoiceInk-2.0-beta.2
make local          # baut ohne Apple-Developer-Zertifikat
open ~/Downloads/VoiceInk.app
```
