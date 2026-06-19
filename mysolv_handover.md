# mysolv – Übergabe für neuen Chat

## Projekt-Übersicht
- Shop: mysolv.de (Schweiz, CHF)
- Produkt: DETOX COMPLEX (Kapseln: Schwarzkümmelöl, Oreganoöl, Spirulina, Chlorella)
- Zwei Workstreams: (A) HTML Ebook PDF, (B) Klaviyo Email-Templates

---

## A) EBOOK PDF – /root/mysolv_ebook_fixed.html

### Status: FERTIG (bis auf finales Print-Test durch User)

### Was wurde gemacht:
- Chrome Print-to-PDF Layout fixes
- Cover bleibt auf einer Seite (`overflow:hidden` auf `.welcome-block`, `cover-mini` auf 130px)
- Alle Bilder: kein weißer Rand/Schatten im Druck (`border:none`, `box-shadow:none`)
- Cover-Hintergrund im Druck: `background:#f5f4ed !important` (kein Gradient-Artefakt)
- `.ch-img` Float NICHT geändert — bleibt float:right wie im Screen-CSS
- Kapitel 10: "Wie du diesen Plan nutzt" auf Seite davor (kein forced break)
- Woche 1 Plan: forced page-break-before (`page-break-before:always`)
- Woche 2 Plan: forced page-break-before (`page-break-before:always`)

### Aktueller @media print Block (wichtigste Regeln):
```css
@media print{
  body{ background:#fff; }
  .wrap{ max-width:none; margin:0; padding:0 30px; }
  .cover{
    page-break-inside:avoid !important; break-inside:avoid !important;
    padding:22px 36px 18px !important;
    background:#f5f4ed !important;
  }
  .cover h1{ font-size:32pt !important; margin:6px 0 6px !important; }
  .cover .sub{ font-size:13pt !important; }
  .cover-figure{ margin:12px 0 10px !important; }
  .cover-badges{ margin-top:10px !important; }
  .cover-foot{ margin-top:10px !important; }
  .cover-mini{ width:130px !important; max-width:30% !important; border:none !important; box-shadow:none !important; border-radius:10px !important; }
  .welcome-block{ margin-top:14px !important; padding-top:14px !important; overflow:hidden !important; }
  .welcome-block h2{ font-size:18pt !important; margin:4px 0 8px !important; }
  .ch-img, .ing-thumb, .cover-figure img, img{
    border:none !important;
    box-shadow:none !important;
  }
  h1,h2,h3,h4{ break-after:avoid; page-break-after:avoid; break-inside:avoid; page-break-inside:avoid; }
  .ch-head{ break-after:avoid; page-break-after:avoid; }
  .week-band{ break-after:avoid; page-break-after:avoid; }
  p,li{ orphans:3; widows:3; }
  .callout,.pull,.day,.check-card,.ingredient,.product,.week-band,
  .ch-img,.cover-mini,.ing-thumb,.stands-for,.closing,
  img,tr,thead,tfoot{ break-inside:avoid; page-break-inside:avoid; }
  table.tracker{ break-inside:auto; }
  table.tracker thead{ display:table-header-group; }
  .ch-head + .ch-img{ break-before:avoid; }
}
```

---

## B) KLAVIYO EMAIL-TEMPLATES

### Alle Template-IDs:
| Name | ID | Status |
|------|-----|--------|
| Detox Guide E-Book | Tui2ca | ✅ Fertig (PDF Download-Button mit Shopify CDN URL) |
| PP-01 v2 | SHvWTv | ✅ Fertig (Greeting + "Was kommt als Nächstes?" + P.S. entfernt) |
| PP-02 v2 | VXQGwT | ❌ NOCH ZU ÄNDERN |
| PP-03 v2 | TJfx8V | ⚠️ Fertig, aber Button-URL = nur mysolv.de (echte Produkt-URL fehlt) |
| PP-04 | Ym38wy | ✅ Fertig |
| PP-05 | UyTQEh | ✅ Fertig |
| REP-01 | SuzbX7 | ✅ Fertig |
| REP-02 | U6iNED | ✅ Fertig |
| REP-03 | WdQXB4 | ✅ Fertig |

### Rabattcode in Shopify: TREUE10 (10%) ✅ aktiv

---

## ❌ NOCH OFFEN – Nächste Aufgaben:

### 1. PP-02 (VXQGwT) – TEXT ÄNDERN
**Aufgabe:** Einen Satz im Intro-Text ändern
- **Alt:** `dein Paket sollte jetzt bei dir angekommen sein.`
- **Neu:** `dein Paket sollte in den nächsten Tagen bei dir ankommen.`
- Template-ID: `VXQGwT`
- Werkzeug: `update_email_template` (Klaviyo MCP) oder manuell unter klaviyo.com/email-editor/VXQGwT/edit

### 2. PP-03 (TJfx8V) – Button-URL
- Button "Vorteilspaket sichern →" zeigt aktuell nur auf `https://www.mysolv.de`
- Echte Produkt-URL vom User erfragen und eintragen

### 3. Klaviyo Flows – MANUELL IN KLAVIYO UI
(Kein create_flow API vorhanden)

**Post-Purchase Flow:**
- Trigger: "Placed Order" (Metric)
- Email 1 (PP-01/SHvWTv): Sofort — Betreff: `Deine Bestellung ist eingegangen – und du machst alles richtig`
- Email 2 (PP-02/VXQGwT): 3 Tage Delay — Betreff: `So wendest du deinen DETOX COMPLEX richtig an`
- Email 3 (PP-03/TJfx8V): 4 Tage Delay (Tag 7) — Betreff: `Was andere mysolv-Kunden nach 7 Tagen sagen`
- Email 4 (PP-04/Ym38wy): 7 Tage Delay (Tag 14) — Betreff: `Was steckt wirklich im DETOX COMPLEX?`
- Email 5 (PP-05/UyTQEh): 7 Tage Delay (Tag 21) — Betreff: `Wie war deine Erfahrung? Wir freuen uns auf dein Feedback`

**Replenishment Flow:**
- Trigger: "Expected Next Order Date" (Predictive Analytics)
- Email 1 (REP-01/SuzbX7): Tag 25 — Betreff: `Wird dein Vorrat langsam knapp?`
- Email 2 (REP-02/U6iNED): 7 Tage nach Email 1 — Betreff: `Nur noch wenige Tage – 10% Rabatt auf deinen DETOX COMPLEX`
- Email 3 (REP-03/WdQXB4): 1 Tag nach Email 2 — Betreff: `Letzter Hinweis: Dein Angebot läuft ab`
- Filter bei Email 2 & 3: "Hat kein Produkt gekauft seit Flow-Eintritt"

### 4. Alte v1 Templates löschen
- PP-01, PP-02, PP-03 (ohne "v2" im Namen) in Klaviyo löschen

### 5. PDF Shopify CDN URL (bereits aktiv):
https://cdn.shopify.com/s/files/1/0780/3843/4131/files/mysolv_Detox_Guide.pdf?v=1781885485

---

## Technische Hinweise:
- WeasyPrint funktioniert NICHT (CloudFront CDN gibt 403 zurück server-seitig)
- Chrome "Print to PDF" verwenden für das Ebook
- Klaviyo unterstützt keine nativen PDF-Anhänge in Flows → PDF auf Shopify CDN hosten + Download-Button in Email
- mysolv.de gibt HTTP 403 zurück für externen Zugriff
