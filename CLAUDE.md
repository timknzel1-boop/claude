# Claude Code – Projektdokumentation

Dieses Projekt enthält deutsche Claude-Code-Skills für Shopify-Entwicklung und Skill-Verwaltung.

## Verfügbare Skills

### `/shopify`
Umfassender Leitfaden für die Shopify-Plattformentwicklung.

**Einsatzbereiche:**
- Shopify-Apps mit OAuth, GraphQL-API und Webhooks entwickeln
- Checkout-UI-Erweiterungen für den Bestellprozess erstellen
- Admin-UI-Erweiterungen für das Dashboard bauen
- POS-Erweiterungen für den Einzelhandel implementieren
- Themes mit Liquid-Templating entwickeln
- Produkte, Bestellungen und Kunden über die API verwalten

**Schnellstart:**
```bash
shopify app init      # Neue App erstellen
shopify app dev       # Entwicklungsserver starten
shopify app deploy    # App deployen
shopify theme dev     # Theme lokal entwickeln
```

### `/skills-finden`
Hilft dabei, passende Skills aus dem offenen Agent-Skills-Ökosystem zu entdecken und zu installieren.

**Einsatzbereiche:**
- Wenn nach Funktionalität gefragt wird, die als Skill existieren könnte
- Skill-Suche per Stichwort: `npx skills find [Begriff]`
- Skill-Installation: `npx skills add <paket>`
- Skills auf skills.sh durchsuchen

## Projektstruktur

```
.
├── CLAUDE.md                        # Diese Datei
├── README.md                        # Projektübersicht
└── .claude/
    └── skills/
        ├── shopify.md               # Shopify-Entwicklungs-Skill
        └── skills-finden.md         # Skill-Entdeckungs-Skill
```

## Skills installieren (global)

```bash
# Skills-Verzeichnis anlegen falls nicht vorhanden
mkdir -p ~/.claude/skills

# Skills global verfügbar machen
cp .claude/skills/shopify.md ~/.claude/skills/
cp .claude/skills/skills-finden.md ~/.claude/skills/
```
