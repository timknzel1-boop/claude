---
name: ad-fabrik-realism
description: Ad Fabrik – realistische Handy-Schnappschuss-Bilder für Meta/TikTok Ads über Higgsfield (gpt_image_2_5). Nutzen bei jeder Bild-Anfrage für Creatives, UGC-Stills, Static Ads, Lifestyle-Shots oder Produktbilder in echter Umgebung (z. B. mysolv DETOX COMPLEX). Trigger: "Bild", "Creative", "Static", "UGC-Foto", "generier", "Motiv", "Ad Fabrik".
---

# Ad Fabrik – Briefing Bildgenerierung

Gilt für alle Bild-Requests. Ziel: Bilder, die wie echte Handy-Schnappschüsse aussehen, nicht wie KI oder Studio. Native wirkende Creatives schlagen im Feed polierte Ads.

## Voraussetzung
Der Higgsfield-Connector muss verbunden sein. Jede Generierung kostet Higgsfield-Credits.

## Plattform & Modell
- Generierung über `mcp__Higgsfield__generate_image` mit dem Modell `gpt_image_2_5`.
- Die Model-ID einmal pro Session mit `models_explore` (action `get`, model_id `gpt_image_2_5`) bestätigen. Nicht per Namenssuche raten.
- Defaults: `aspect_ratio` 4:5 (Feed) bzw. 9:16 bei Reel/TikTok/Story, `resolution` 2k, **`quality` high** (ohne Angabe nutzt das Modell `low`), `count` 2.
- Keine Rückfragen zum Format. Direkt den Prompt bauen und generieren. Den finalen Prompt zusätzlich im Chat als Codeblock zeigen.

## Prompt-Aufbau
- Strukturierter JSON-Prompt mit den Feldern: `scene`, `subject`, `camera_device`, `capture_behavior`, `skin_and_body_detail`, `hair`, `environment`, `lighting`, `composition`, `imperfections`, `avoid`, `rendering_note`.
- Qualität NIE beschreiben ("ultra realistic", "8K", "hyperrealistic", "masterpiece", "cinematic", "professional photo"). Stattdessen das GERÄT und sein Fehlverhalten beschreiben.

## Realismus-Standard (Pflicht in jedem Prompt)
1. **Kamera:** normales Smartphone (iPhone Haupt- oder Frontkamera), Schnappschuss von einem Freund oder Selfie. Kein Fotograf, kein Setup.
2. **Schärfe:** kleiner Sensor = durchgehende Schärfentiefe. Vordergrund UND Hintergrund scharf. Absolut kein Bokeh, keine Tiefenunschärfe, kein Porträtmodus.
3. **Bildverarbeitung:** sichtbares Luminanzrauschen/Körnung, besonders in Schatten und dunklen Stoffen. Leichtes Überschärfen mit feinen Halos an Kanten, leichte JPEG-Kompression. Smart-HDR-Look mit teilweise ausgebrannten Lichtern (Himmel, Scheinwerfer, Fenster). Weissabgleich leicht daneben bzw. Mischlicht.
4. **Haut:** echte Poren, Sommersprossen/Pigmentflecken, ungleichmässiger Hautton, feine Fältchen unter den Augen und beim Lachen, leichter Fettglanz auf Nase/Stirn, Flaum, kleine Rötungen. Keine Retusche, kein Glätten.
5. **Haare & Details:** einzelne abstehende Strähnen, Strähnen über Gesicht/Augen, nicht frisch gestylt. Nägel, Zähne, Lippen und Kleidung mit normalen kleinen Unregelmässigkeiten (Fussel, Falten, Abnutzung).
6. **Komposition:** leicht schief, Motiv nicht perfekt mittig, Ränder schneiden Dinge oder Personen an, zufällige Leute im Hintergrund, die nicht posen. Der Moment wirkt ungeplant.
7. **Licht:** vorhandenes Umgebungslicht. Kein Studio-, kein Ringlicht, kein Rim-Light, keine Lichtsetzung.
8. **Gesicht:** natürliche Asymmetrie, echter Gesichtsausdruck mitten in einer Bewegung, kein Modelblick.

## Avoid-Array (immer mitgeben)
```
bokeh, shallow depth of field, blurred background, portrait mode, studio lighting, beauty retouch, smooth/plastic skin, airbrushed, perfect symmetry, perfect white teeth, flawless makeup, glossy CGI look, cinematic color grading, teal-orange grading, HDR glow, lens flare as stylistic effect, DSLR look, professional photoshoot, overly clean background, decorative sparkle/light-streak strokes around elements
```

## Referenzen
- Wenn Referenzbilder mitkommen:
  - Gesichts-/Personenreferenz = höchste Priorität.
  - **Produkt-/Packshot-Referenz = höchste Priorität** (Etikett, Farben, Form exakt übernehmen).
  - Look-/Stil-Referenz = niedrige Priorität (nur für Kamera-Look, Körnung und Farbstimmung, nicht für Inhalt oder Gesicht).
  - Gewichtung explizit im JSON angeben.
- Referenzbilder lädt der User über das Higgsfield-Upload-Fenster hoch (`media_upload_widget`), oder sie werden per `media_upload` hochgeladen, wenn die Datei lokal lesbar ist. Normale Chat-Anhänge kann Higgsfield nicht lesen.

## Iteration
- Bei Feedback nicht neu starten. Die media_id/job_id des letzten Bildes als Referenz mitgeben, dazu `edit_instruction` / `change` / `preserve`.

---

## Ad-Fabrik-Regeln (Ergänzung für Supplement-Creatives)

### Produkt im Bild
- Produkt im Bild nur mit Packshot-Referenz. Ohne Referenz erfindet das Modell das Etikett (Compliance- und Brand-Risiko). Fehlt der Packshot, Upload anfordern oder das Produkt bewusst unscharf ins Off bzw. vom Bildrand angeschnitten setzen.
- Das Produkt soll wie benutzt aussehen: Deckel offen, Kapseln daneben, Dose zwischen Alltagskram. Kein Hero-Shot auf leerem Tisch.

### Bewährte Settings
Küchentheke morgens (Kaffee, Handy, Schlüssel), Gym-Tasche/Umkleide, Homeoffice-Schreibtisch, Auto-Mittelkonsole, Badezimmerregal, Reisekoffer/Hotel, Handtasche ausgekippt.

### Compliance (Meta + CH/EU Health-Claims)
- Keine Vorher/Nachher-Bilder, keine Körperfokus-Shots (Bauch, Waage, Massband), keine sichtbaren Symptome.
- Keine Texte im Bild mit Heilversprechen ("entgiftet", "heilt", "gegen …"). Text-Overlays nur mit zulässigen Formulierungen.
- mysolv ist ein Schweizer Shop: Copy mit "ss" statt "ß", Preise in CHF.

### Output pro Motiv
1. Den JSON-Prompt als Codeblock.
2. 2 Varianten (count 2).
3. Auf Wunsch: 2–3 Hooks (Primary Text + Headline), passend zum Bild-Angle.

### Batch-Modus (Creative-Testing)
Wenn mehrere Angles gleichzeitig gefragt sind (z. B. "5 Statics für Testing"): `generate_image_batch` mit einem eigenen Prompt pro Angle (Persona × Setting × Moment variieren), danach einmal `show_generation_by_ids`. Vorher mit `get_cost: true` die Credits checken.
