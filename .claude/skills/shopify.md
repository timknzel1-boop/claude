---
name: shopify
description: Shopify-Anwendungen, Erweiterungen und Themes entwickeln mit GraphQL/REST-APIs, Shopify CLI, Polaris-UI-Komponenten und Liquid-Templating. Funktionen umfassen App-Entwicklung mit OAuth-Authentifizierung, Checkout-UI-Erweiterungen zur Anpassung des Bestellprozesses, Admin-UI-Erweiterungen für Dashboard-Integration, POS-Erweiterungen für den Einzelhandel, Theme-Entwicklung mit Liquid, Webhook-Verwaltung, Abrechnungs-API-Integration sowie Produkt-, Bestell- und Kundenverwaltung. Verwenden wenn: Shopify-Apps gebaut werden, Checkout-Anpassungen implementiert werden, Admin-Oberflächen erstellt werden, Themes entwickelt werden, Zahlungsabwicklung integriert wird, Store-Daten über APIs verwaltet werden oder Shopify-Funktionalität erweitert wird.
---

# Shopify-Entwicklung

Umfassender Leitfaden für die Entwicklung auf der Shopify-Plattform: Apps, Erweiterungen, Themes und API-Integrationen.

## Plattformübersicht

**Kernkomponenten:**
- **Shopify CLI** – Entwicklungs-Workflow-Tool
- **GraphQL Admin API** – Primäre API für Datenoperationen (empfohlen)
- **REST Admin API** – Legacy-API (Wartungsmodus)
- **Polaris UI** – Design-System für konsistente Oberflächen
- **Liquid** – Template-Sprache für Themes

**Erweiterungspunkte:**
- Checkout UI – Bestellprozess anpassen
- Admin UI – Admin-Dashboard erweitern
- POS UI – Point-of-Sale-Anpassung
- Customer Account – Seiten nach dem Kauf
- Theme App Extensions – Eingebettete Theme-Funktionalität

## Schnellstart

### Voraussetzungen

```bash
# Shopify CLI installieren
npm install -g @shopify/cli@latest

# Installation prüfen
shopify version
```

### Neue App erstellen

```bash
# App initialisieren
shopify app init

# Entwicklungsserver starten
shopify app dev

# Erweiterung generieren
shopify app generate extension --type checkout_ui_extension

# Deployen
shopify app deploy
```

### Theme-Entwicklung

```bash
# Theme initialisieren
shopify theme init

# Lokale Vorschau starten
shopify theme dev

# Vom Store herunterladen
shopify theme pull --live

# Zum Store hochladen
shopify theme push --development
```

## Entwicklungs-Workflow

### 1. App-Entwicklung

**Einrichtung:**
```bash
shopify app init
cd meine-app
```

**Zugriffsbereiche konfigurieren** (`shopify.app.toml`):
```toml
[access_scopes]
scopes = "read_products,write_products,read_orders"
```

**Entwicklung starten:**
```bash
shopify app dev  # Startet lokalen Server mit Tunnel
```

**Erweiterungen hinzufügen:**
```bash
shopify app generate extension --type checkout_ui_extension
```

**Deployen:**
```bash
shopify app deploy  # Baut und lädt zu Shopify hoch
```

### 2. Erweiterungsentwicklung

**Verfügbare Typen:**
- Checkout UI – `checkout_ui_extension`
- Admin Action – `admin_action`
- Admin Block – `admin_block`
- POS UI – `pos_ui_extension`
- Function – `function` (Rabatte, Zahlung, Lieferung, Validierung)

**Workflow:**
```bash
shopify app generate extension
# Typ auswählen, konfigurieren
shopify app dev   # Lokal testen
shopify app deploy  # Veröffentlichen
```

### 3. Theme-Entwicklung

**Einrichtung:**
```bash
shopify theme init
# Dawn (Referenz-Theme) wählen oder neu beginnen
```

**Lokale Entwicklung:**
```bash
shopify theme dev
# Vorschau unter localhost:9292
# Synchronisiert automatisch mit Entwicklungs-Theme
```

**Deployment:**
```bash
shopify theme push --development   # In Entwicklungs-Theme hochladen
shopify theme publish --theme=123  # Als Live-Theme setzen
```

## Wann was gebaut werden sollte

### Eine App bauen wenn:
- Externe Dienste integriert werden
- Funktionalität für mehrere Stores hinzugefügt wird
- Händler-seitige Admin-Tools gebaut werden
- Store-Daten programmatisch verwaltet werden
- Komplexe Geschäftslogik implementiert wird
- Für Funktionalität abgerechnet wird

### Eine Erweiterung bauen wenn:
- Der Bestellprozess angepasst wird
- Felder/Funktionen zu Admin-Seiten hinzugefügt werden
- POS-Aktionen für den Einzelhandel erstellt werden
- Rabatt-/Zahlungs-/Versandregeln implementiert werden
- Kundenkonto-Seiten erweitert werden

### Ein Theme bauen wenn:
- Benutzerdefiniertes Storefront-Design erstellt wird
- Einzigartige Einkaufserlebnisse gebaut werden
- Produkt-/Kategorieseiten angepasst werden
- Markenspezifische Layouts implementiert werden
- Homepage/Inhaltsseiten geändert werden

### Kombinations-Ansatz:
**App + Theme-Erweiterung:**
- App übernimmt Backend-Logik und Daten
- Theme-Erweiterung liefert Storefront-UI
- Beispiel: Produktbewertungen, Wunschlisten, Größentabellen

## Wesentliche Muster

### GraphQL-Produktabfrage

```graphql
query GetProducts($first: Int!) {
  products(first: $first) {
    edges {
      node {
        id
        title
        handle
        variants(first: 5) {
          edges {
            node {
              id
              price
              inventoryQuantity
            }
          }
        }
      }
    }
    pageInfo {
      hasNextPage
      endCursor
    }
  }
}
```

### Checkout-Erweiterung (React)

```javascript
import { reactExtension, BlockStack, TextField, Checkbox } from '@shopify/ui-extensions-react/checkout';

export default reactExtension('purchase.checkout.block.render', () => <Extension />);

function Extension() {
  const [message, setMessage] = useState('');

  return (
    <BlockStack>
      <TextField label="Geschenksnachricht" value={message} onChange={setMessage} />
    </BlockStack>
  );
}
```

### Liquid-Produktanzeige

```liquid
{% for product in collection.products %}
  <div class="product-card">
    <img src="{{ product.featured_image | img_url: 'medium' }}" alt="{{ product.title }}">
    <h3>{{ product.title }}</h3>
    <p>{{ product.price | money }}</p>
    <a href="{{ product.url }}">Details ansehen</a>
  </div>
{% endfor %}
```

## Best Practices

**API-Nutzung:**
- GraphQL gegenüber REST für neue Entwicklungen bevorzugen
- Nur benötigte Felder abfragen, um Kosten zu reduzieren
- Paginierung für große Datensätze implementieren
- Bulk-Operationen für Batch-Verarbeitung verwenden
- Rate-Limits beachten (kostenbasiert für GraphQL)

**Sicherheit:**
- API-Zugangsdaten in Umgebungsvariablen speichern
- Webhook-Signaturen verifizieren
- OAuth für öffentliche Apps verwenden
- Minimale Zugriffsbereiche anfordern
- Session-Tokens für eingebettete Apps implementieren

**Performance:**
- API-Antworten bei Bedarf cachen
- Bilder in Themes optimieren
- Liquid-Logik-Komplexität minimieren
- Asynchrones Laden für Erweiterungen verwenden
- Query-Kosten in GraphQL überwachen

**Testen:**
- Entwicklungs-Stores zum Testen verwenden
- Auf verschiedenen Store-Plänen testen
- Mobile Responsiveness prüfen
- Barrierefreiheit prüfen (Tastatur, Screenreader)
- DSGVO-Konformität validieren

## Fehlerbehebung

**Rate-Limit-Fehler:**
- `X-Shopify-Shop-Api-Call-Limit`-Header überwachen
- Exponentielles Backoff implementieren
- Bulk-Operationen für große Datensätze nutzen

**Authentifizierungsfehler:**
- Gültigkeit des Access-Tokens prüfen
- Erforderliche Berechtigungen verifizieren
- Sicherstellen, dass der OAuth-Flow abgeschlossen wurde

**Erweiterung erscheint nicht:**
- Korrektes Erweiterungsziel prüfen
- Prüfen ob Erweiterung veröffentlicht ist
- Sicherstellen, dass die App im Store installiert ist

**Webhook empfängt nichts:**
- Prüfen ob Webhook-URL erreichbar ist
- Signaturvalidierung kontrollieren
- Logs im Partner-Dashboard prüfen

## Ressourcen

**Offizielle Dokumentation:**
- Shopify Docs: https://shopify.dev/docs
- GraphQL API: https://shopify.dev/docs/api/admin-graphql
- Shopify CLI: https://shopify.dev/docs/api/shopify-cli
- Polaris: https://polaris.shopify.com

**Tools:**
- GraphiQL Explorer (Admin → Einstellungen → Apps → Apps entwickeln)
- Partner-Dashboard (App-Verwaltung)
- Entwicklungs-Stores (kostenlos zum Testen)

**API-Versionierung:**
- Vierteljährliche Releases (Format: JJJJ-MM)
- Aktuell: 2025-01
- 12 Monate Support pro Version
- Vor Versions-Updates testen
