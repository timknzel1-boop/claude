# UGC Video Studio — Skill

Ein Agent Skill, der die komplette **Higgsfield Marketing Studio**-Logik bündelt,
damit du am Fließband perfekte UGC-Ad-Videos produzieren kannst — ohne dir
Parameter merken zu müssen.

## Was er kann

- Produkt per URL automatisch importieren
- Creator/Avatar wählen (kuratiert oder dein eigener Soul-ID) — oder automatisch
- Modus wählen: `ugc`, `ugc_unboxing`, `ugc_how_to`, `product_review`,
  `ugc_virtual_try_on`, `product_showcase`, `tv_spot`
- Hooks & Settings (Aufhänger + Umgebung) ansteuern
- **Batch / Fließband:** viele Varianten parallel erzeugen, per `virality_predictor`
  ranken, Gewinner in HD hochskalieren
- Qualitäts-Gate vor der Auslieferung (Re-Roll bei Fehlern)

## Voraussetzung

Der **Higgsfield MCP-Server** muss verbunden und über dein Higgsfield-Konto
authentifiziert sein (Einstellungen → Connectors/MCP → Higgsfield).
Ohne diese Verbindung kann der Skill keine Videos erzeugen.

## Nutzung im Cloud-Chat (claude.ai)

1. Diesen Ordner (`ugc-video-studio/`) als ZIP packen.
2. In claude.ai → **Settings → Capabilities → Skills → Skill hochladen** das ZIP hochladen.
3. Higgsfield als Connector verbinden.
4. Einfach schreiben, z. B.:
   > „Mach mir 4 UGC-Varianten für dieses Produkt: <Shop-URL>, 9:16, deutscher Hook, ranke sie."

## Nutzung in Claude Code

Liegt der Ordner unter `skills/` (oder `.claude/skills/`), wird er automatisch
als Skill erkannt. Aufruf z. B. über `/ugc-video-studio` oder per natürlicher
Anfrage.

## Struktur

```
ugc-video-studio/
├── SKILL.md                          # Einstieg + Workflow
└── references/
    ├── modes.md                      # alle Modi
    ├── avatars.md                    # Creators kuratiert vs. custom
    ├── hooks-and-settings.md         # Aufhänger + Umgebungen
    ├── batch-workflow.md             # Fließband-Varianten-Matrix
    └── quality-checklist.md          # QA-Gate vor Auslieferung
```
