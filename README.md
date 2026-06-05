# Claude Code Skills – Deutsch

Deutsche Claude-Code-Skills für Shopify-Entwicklung und Skill-Verwaltung.

## Enthaltene Skills

| Skill | Befehl | Beschreibung |
|-------|--------|--------------|
| Shopify | `/shopify` | Apps, Erweiterungen und Themes auf der Shopify-Plattform entwickeln |
| Skills finden | `/skills-finden` | Skills aus dem offenen Ökosystem entdecken und installieren |

## Schnellinstallation

```bash
# Repository klonen
git clone <repo-url>
cd claude

# Skills ins globale Verzeichnis kopieren
mkdir -p ~/.claude/skills
cp .claude/skills/*.md ~/.claude/skills/
```

## Verwendung

Nach der Installation stehen die Skills als Slash-Befehle in Claude Code zur Verfügung:

```
/shopify          → Shopify-Entwicklungsanleitung
/skills-finden    → Skills entdecken und installieren
```

## Projektstruktur

```
.
├── CLAUDE.md
├── README.md
└── .claude/
    └── skills/
        ├── shopify.md
        └── skills-finden.md
```
