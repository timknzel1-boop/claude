---
name: skills-finden
description: Hilft Benutzern dabei, Agent-Skills zu entdecken und zu installieren, wenn sie Fragen stellen wie "Wie mache ich X?", "Finde einen Skill für X", "Gibt es einen Skill der...", oder Interesse daran zeigen, die Fähigkeiten zu erweitern. Dieser Skill sollte verwendet werden, wenn der Benutzer nach Funktionalität sucht, die möglicherweise als installierbarer Skill existiert.
---

# Skills finden

Dieser Skill hilft dir dabei, Skills aus dem offenen Agent-Skills-Ökosystem zu entdecken und zu installieren.

## Wann diesen Skill verwenden

Diesen Skill verwenden wenn der Benutzer:

- Fragt "Wie mache ich X?" wobei X eine häufige Aufgabe sein könnte, für die ein Skill existiert
- Sagt "Finde einen Skill für X" oder "Gibt es einen Skill für X?"
- Fragt "Kannst du X machen?" wobei X eine spezialisierte Fähigkeit ist
- Interesse daran zeigt, Agent-Fähigkeiten zu erweitern
- Nach Tools, Templates oder Workflows suchen möchte
- Erwähnt, dass sie Hilfe bei einer bestimmten Domäne wünschen (Design, Testing, Deployment, usw.)

## Was ist die Skills-CLI?

Die Skills-CLI (`npx skills`) ist der Paketmanager für das offene Agent-Skills-Ökosystem. Skills sind modulare Pakete, die Agent-Fähigkeiten mit speziellem Wissen, Workflows und Tools erweitern.

**Wichtige Befehle:**

- `npx skills find [Suchbegriff]` – Interaktiv oder per Stichwort nach Skills suchen
- `npx skills add <Paket>` – Einen Skill von GitHub oder anderen Quellen installieren
- `npx skills check` – Nach Skill-Updates suchen
- `npx skills update` – Alle installierten Skills aktualisieren

**Skills browsen unter:** https://skills.sh/

## Wie Benutzern beim Finden von Skills geholfen wird

### Schritt 1: Bedarf verstehen

Wenn ein Benutzer um Hilfe bittet, identifizieren:

1. Die Domäne (z.B. React, Testing, Design, Deployment)
2. Die spezifische Aufgabe (z.B. Tests schreiben, Animationen erstellen, PRs reviewen)
3. Ob dies häufig genug vorkommt, dass wahrscheinlich ein Skill existiert

### Schritt 2: Zuerst die Bestenliste prüfen

Vor einer CLI-Suche die [skills.sh-Bestenliste](https://skills.sh/) prüfen, um zu sehen ob ein bekannter Skill für die Domäne bereits existiert. Die Bestenliste rankt Skills nach Gesamtinstallationen und zeigt die beliebtesten und bewährtesten Optionen.

Zum Beispiel Top-Skills für Web-Entwicklung:
- `vercel-labs/agent-skills` — React, Next.js, Web-Design (je 100K+ Installationen)
- `anthropics/skills` — Frontend-Design, Dokumentenverarbeitung (100K+ Installationen)

### Schritt 3: Nach Skills suchen

Falls die Bestenliste den Bedarf nicht abdeckt, den Suchbefehl ausführen:

```bash
npx skills find [Suchbegriff]
```

Beispiele:

- Benutzer fragt "Wie mache ich meine React-App schneller?" → `npx skills find react performance`
- Benutzer fragt "Kannst du mir bei PR-Reviews helfen?" → `npx skills find pr review`
- Benutzer fragt "Ich muss ein Changelog erstellen" → `npx skills find changelog`

### Schritt 4: Qualität prüfen bevor empfohlen wird

**Keinen Skill nur aufgrund von Suchergebnissen empfehlen.** Immer verifizieren:

1. **Installationsanzahl** — Skills mit 1K+ Installationen bevorzugen. Bei unter 100 vorsichtig sein.
2. **Quellenreputation** — Offizielle Quellen (`vercel-labs`, `anthropics`, `microsoft`) sind vertrauenswürdiger als unbekannte Autoren.
3. **GitHub-Sterne** — Das Quell-Repository prüfen. Ein Skill aus einem Repo mit <100 Sternen sollte mit Skepsis behandelt werden.

### Schritt 5: Optionen dem Benutzer präsentieren

Wenn relevante Skills gefunden wurden, diese dem Benutzer präsentieren mit:

1. Skill-Name und was er macht
2. Installationsanzahl und Quelle
3. Der Installationsbefehl
4. Link zum Mehr-Erfahren auf skills.sh

Beispielantwort:

```
Ich habe einen Skill gefunden, der helfen könnte! Der "react-best-practices"-Skill
bietet React- und Next.js-Performance-Optimierungsrichtlinien von Vercel Engineering.
(185K Installationen)

Zur Installation:
npx skills add vercel-labs/agent-skills@react-best-practices

Mehr erfahren: https://skills.sh/vercel-labs/agent-skills/react-best-practices
```

### Schritt 6: Installation anbieten

Wenn der Benutzer fortfahren möchte, kann der Skill installiert werden:

```bash
npx skills add <eigentümer/repo@skill> -g -y
```

Das `-g`-Flag installiert global (Benutzerebene) und `-y` überspringt Bestätigungsaufforderungen.

## Häufige Skill-Kategorien

Bei der Suche diese häufigen Kategorien berücksichtigen:

| Kategorie       | Beispiel-Suchbegriffe                      |
| --------------- | ------------------------------------------ |
| Web-Entwicklung | react, nextjs, typescript, css, tailwind   |
| Testing         | testing, jest, playwright, e2e             |
| DevOps          | deploy, docker, kubernetes, ci-cd          |
| Dokumentation   | docs, readme, changelog, api-docs          |
| Code-Qualität   | review, lint, refactor, best-practices     |
| Design          | ui, ux, design-system, accessibility       |
| Produktivität   | workflow, automation, git                  |

## Tipps für effektive Suchen

1. **Spezifische Schlüsselwörter verwenden**: "react testing" ist besser als nur "testing"
2. **Alternative Begriffe ausprobieren**: Wenn "deploy" nicht funktioniert, "deployment" oder "ci-cd" versuchen
3. **Beliebte Quellen prüfen**: Viele Skills kommen von `vercel-labs/agent-skills` oder `ComposioHQ/awesome-claude-skills`

## Wenn keine Skills gefunden werden

Falls keine relevanten Skills existieren:

1. Darauf hinweisen, dass kein passender Skill gefunden wurde
2. Anbieten, bei der Aufgabe direkt mit allgemeinen Fähigkeiten zu helfen
3. Vorschlagen, einen eigenen Skill mit `npx skills init` zu erstellen

Beispiel:

```
Ich habe nach Skills für "xyz" gesucht, aber keine Treffer gefunden.
Ich kann bei dieser Aufgabe trotzdem direkt helfen! Soll ich fortfahren?

Falls dies etwas ist, das du öfter machst, könntest du deinen eigenen Skill erstellen:
npx skills init mein-xyz-skill
```
