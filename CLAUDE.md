# mysolv Shopify + AI Assistant — Projektdokumentation

## Projektübersicht
Dieses Repo enthält eine Next.js App die als AI Coding Assistant mit Shopify-Integration dient.
Du kannst Screenshots und Links einsenden, und Claude antwortet als Senior Developer / Shopify-Experte.

## Schnellstart

```bash
git clone https://github.com/timknzel1-boop/claude
cd claude
npm install
# .env.local anlegen (siehe unten)
npm run dev
# Öffne http://localhost:3000
```

## Umgebungsvariablen (.env.local)

Erstelle eine Datei `.env.local` im Projektordner (NIEMALS ins Git committen!):

```
ANTHROPIC_API_KEY=sk-ant-...         # Von console.anthropic.com/settings/keys
SHOPIFY_SHOP_DOMAIN=2b8a33.myshopify.com
SHOPIFY_ACCESS_TOKEN=shpat_...      # Von Shopify Admin → Apps → Custom Apps
```

## Projektstruktur

```
claude/
├── app/
│   ├── page.tsx                    # Hauptseite: Chat + Shopify Sidebar
│   ├── layout.tsx                  # Dark Theme Layout
│   ├── globals.css                 # Globale Styles
│   └── api/
│       ├── chat/route.ts           # Claude API (Streaming, Vision)
│       ├── shopify/route.ts        # Shopify Store-Info
│       └── fetch-url/route.ts      # URL-Inhalt als AI-Kontext
├── components/
│   ├── Chat.tsx                    # Chat UI (Screenshot-Upload, URL-Fetch)
│   └── ShopifyPanel.tsx            # Shopify Store-Sidebar
└── .env.local                      # Credentials (lokal, nicht im Repo)
```

## Shopify Store (mysolv)

- **Store URL:** https://2b8a33.myshopify.com / https://www.mysolv.de
- **Aktives Theme:** "auch hier ?" (ID: 190696489299)
- **Entwicklungs-Theme:** "Kopie von auch hier ?" (ID: 201148989779) — UNPUBLISHED

### Uvora-Style Produktseite (DETOX COMPLEX)
- **Produkt:** mysolv® DETOX COMPLEX (Handle: `deto`)
- **Section:** `sections/uvora-product.liquid` — im Entwicklungs-Theme
- **Template:** `templates/product.uvora.json`
- **Vorschau:** https://2b8a33.myshopify.com/admin/themes/201148989779/editor

Um das Template auf dem Produkt zu aktivieren:
1. Shopify Admin → Produkte → DETOX COMPLEX
2. Rechte Seite → "Theme-Template" → "uvora" auswählen
3. Speichern

## Im Claude Code Terminal weitermachen

```bash
# 1. Claude Code CLI installieren (falls noch nicht installiert)
npm install -g @anthropic-ai/claude-code

# 2. Repo klonen
git clone https://github.com/timknzel1-boop/claude
cd claude

# 3. .env.local anlegen (Credentials von oben eintragen)

# 4. Claude Code starten
claude

# 5. Dem AI den Kontext geben:
# "Lies die CLAUDE.md und PROJECT-STATUS.md — das ist unser Projekt.
#  Wir bauen eine Uvora-style Produktseite für mysolv Shopify Store."
```

## Branch
Alle Änderungen sind auf Branch: `claude/vibrant-lamport-QKwR2`
