# Checkout-Erweiterungen (Countdown-Timer + 30-Tage-Garantie)

Zwei native **Shopify Checkout UI Extensions** für den Checkout von mysolv:

| Erweiterung | Was sie tut |
|---|---|
| `checkout-countdown-timer` | Roter Banner „Aufgrund hoher Nachfrage ist Ihre Bestellung reserviert für: m:ss Minuten". Standard **6 Minuten**, einstellbar im Checkout-Editor. Übersetzt: DE / EN / FR / IT. |
| `checkout-guarantee` | Graue Zeile „30 Tage Geld-zurück-Garantie" mit Häkchen-Icon, gedacht für direkt unter dem Gesamtbetrag. Übersetzt: DE / EN / FR / IT. |
| `checkout-trust-image` | Zeigt ein Bild **direkt unter dem Bestell-Button**. Bild-URL wird im Block eingestellt (kein Hardcoding). |

DE ist die Standardsprache (`de.default.json`). Shopify wählt automatisch die Sprache des Kunden.

---

## ⚠️ Wichtig – bitte zuerst lesen

1. **Checkout-Page-Extensions brauchen Shopify Plus.** Ohne Plus lassen sich diese Blöcke nicht im Checkout platzieren. (Thank-You- und Order-Status-Seite gehen auch ohne Plus.)
2. **Falls dein aktueller Timer von einer App kommt** (sehr wahrscheinlich, weil er auf Englisch ist): Dauer und Sprache sind dort meist eine **Einstellung** – dann brauchst du diesen Code gar nicht. Schau in deinen Shopify-Apps nach einem Countdown-Timer (z. B. Releasit, Checkout Plus, Octane o. Ä.).

---

## Deployment per Shopify CLI

Diese beiden Ordner gehören in den `extensions/`-Ordner einer Shopify-App.

**Du hast schon eine eigene App:**
```bash
cp -r shopify-checkout-extensions/extensions/checkout-countdown-timer  <deine-app>/extensions/
cp -r shopify-checkout-extensions/extensions/checkout-guarantee        <deine-app>/extensions/
cd <deine-app>
shopify app dev      # zum Testen in der Vorschau
shopify app deploy   # live ausspielen
```

**Du hast noch keine App:**
```bash
npm init @shopify/app@latest
# Ordner aus extensions/ hineinkopieren, dann:
shopify app dev
shopify app deploy
```

Nach dem Deploy: **Checkout-Editor** öffnen
(`Einstellungen → Checkout → Anpassen`), die beiden App-Blöcke per **„App-Block hinzufügen"** platzieren – Timer oben, Garantie unter den Gesamtbetrag.

## Dauer ändern
Im Checkout-Editor auf den Timer-Block klicken → Feld **„Reservierungsdauer in Minuten"** (Standard 6).

## Texte / Übersetzungen ändern
In den `locales/*.json` der jeweiligen Erweiterung.

## Bild unter dem Button einsetzen
1. Bild in Shopify hochladen: **Einstellungen → Dateien → Hochladen**, URL kopieren.
2. Checkout-Editor → Block **„Checkout Trust Image"** → Feld **„Bild-URL"** einfügen.

## Button-Text „Jetzt bestellen" → „Meine Bestellung sichern"
Das ist **kein Code**, sondern eine Übersetzungs-Einstellung:
**Einstellungen → Sprachen → (aktive Sprache) → Bearbeiten** → oben nach
`Jetzt bestellen` suchen → in `Meine Bestellung sichern` ändern → Speichern.
(Falls mehrere Sprachen aktiv sind, in jeder Sprache anpassen.)
