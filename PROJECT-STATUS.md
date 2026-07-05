# Projektstatus — mysolv Shopify AI Assistant

Letzte Aktualisierung: 30. Mai 2026

---

## ✅ Fertig

### Next.js App
- [x] AI Chat Interface mit Claude (Streaming)
- [x] Screenshot-Upload (Base64 → Claude Vision)
- [x] URL-Fetch als Kontext (Link einfügen → Inhalt wird analysiert)
- [x] Shopify Store-Sidebar (Shop-Info, Bestellungen, Produkte)
- [x] Dark Theme UI

### Shopify Theme
- [x] Aktives Theme dupliziert → "Kopie von auch hier ?" (sicher zum Entwickeln)
- [x] `sections/uvora-product.liquid` erstellt (komplette Seite im Uvora-Stil)
- [x] `templates/product.uvora.json` erstellt
- [x] Alle Hauptsektionen: Hero, Trust-Bar, Stats, Zutaten, Vergleich, Reviews, FAQ
- [x] Add-to-Cart mit Shopify-nativem Formular
- [x] Varianten-Selector (1/3/6 Dosen)

---

## 🔄 In Arbeit / Noch offen

### Shopify Theme — Schema-Settings (Editor-anpassbar)
- [ ] Alle Texte per Shopify Editor änderbar machen (section.settings)
- [ ] Alle Bilder per Image-Picker austauschbar
- [ ] Farben als Color-Picker
- [ ] Blöcke: Zutaten, Reviews, FAQ als editor-anpassbare Blöcke
- **Aktion:** Im Claude Code Terminal: "Aktualisiere sections/uvora-product.liquid in Theme 201148989779 mit vollständigem Schema für alle Settings und Blocks"

### Bilder
- [ ] Produktbilder für Hero-Section optimieren
- [ ] Kapselbild, Hintergrundbilder einfügen
- **Optionen:**
  - A: Bilder manuell von Uvora-Seite downloaden → in Shopify hochladen
  - B: Mit ChatGPT/DALL-E ähnliche Bilder generieren → hochladen
  - C: Bestehende mysolv Produktbilder verwenden

### App — .env.local
- [ ] Sicherstellen dass ANTHROPIC_API_KEY noch gültig ist
  - Prüfen: https://console.anthropic.com/settings/keys
  - Ggf. neuen Key erstellen und in .env.local eintragen

---

## 📋 Nächste Schritte (Priorität)

1. **Schema-Settings** in die uvora-product.liquid einbauen (alles Editor-anpassbar)
2. **Bilder** für die Seite beschaffen und hochladen
3. **Template testen** in Shopify Theme Editor
4. **Wenn gut aussieht:** Theme aktivieren (publizieren)

---

## 🔑 Wichtige IDs & Links

| Was | Wert |
|-----|------|
| Shopify Store | 2b8a33.myshopify.com / mysolv.de |
| Aktives Theme ID | 190696489299 |
| Entwicklungs-Theme ID | 201148989779 |
| Produkt Handle | deto |
| GitHub Repo | github.com/timknzel1-boop/claude |
| Branch | claude/vibrant-lamport-QKwR2 |
| Theme Editor | https://2b8a33.myshopify.com/admin/themes/201148989779/editor |

---

## 💬 Konversation im Terminal fortsetzen

```bash
cd claude
claude
```

Dann schreibe:
```
Lies CLAUDE.md und PROJECT-STATUS.md.
Wir arbeiten an der Uvora-Style Produktseite für mysolv® DETOX COMPLEX.
Nächster Schritt: Schema-Settings in uvora-product.liquid einbauen.
```
