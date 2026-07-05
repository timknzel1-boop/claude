# Klaviyo E-Mail Vorlagen — Kontext für Terminal-Session

## Aufgabe
Erstelle Klaviyo E-Mail Vorlagen für mysolv® (mysolv.de) basierend auf dem Stil von Resilia (resilia.shop).

## Resilia Stil-Analyse (aus Gmail gelesen)

### Ton & Sprache
- Persönlich, warmherzig: "Hey friend", "Really glad you're here 💚"
- Kurze Absätze, direkte Sprache
- Emojis sparsam eingesetzt
- Kundenreviews eingebaut: 'Dana H.: "My gut feels normal for the first time in years."'
- PS-Zeile am Ende: "P.S. Questions? Just reply. We actually read these."

### Struktur der Mails
- **Welcome:** Text-basiert, persönlich, 1 klarer CTA, Problem → Lösung → Testimonial
- **Newsletter/Education:** Bild-schwer (gestapelte Bilder als Content-Blöcke)
- **Sale:** Dringlichkeit, "no code needed", % Rabatt, Deadline
- **Abandoned Cart:** "We saved your cart!", Benefit-Reminder, CTA
- **Loyalty:** Punktestand + Ablaufdatum des Codes

### Resilia Betreffzeilen-Beispiele
- "Welcome to Resilia!"
- "Is Inflammation Harming Your Health? 😔"
- "America's Biggest Resilia® Sale Starts Now"
- "Final Hours: Up To 70% OFF ⏳"
- "Your 79 points are ready to use 🥳"
- "Can I ask you something?"
- "Transform Your Health Today! 😀"

## mysolv Produkt-Info

- **Store:** mysolv.de / 2b8a33.myshopify.com
- **Hauptprodukt:** mysolv® DETOX COMPLEX (Handle: `deto`)
- **Produkt-URL:** https://www.mysolv.de/products/deto
- **Benefit:** Entgiftung, Darm-Gesundheit, natürliche Zutaten
- **Sprache:** Deutsch (Zielmarkt Deutschland)

## Zu erstellende Vorlagen (Priorität)

1. **Welcome** — Nach Newsletter-Anmeldung
   - Betreff: "Willkommen bei mysolv® 💚"
   - Ton: Warm, persönlich, Vertrauen aufbauen
   - Inhalt: Problem → Lösung (DETOX COMPLEX) → CTA → Testimonial

2. **Abandoned Cart** — Warenkorb verlassen
   - Betreff: "Dein Warenkorb wartet auf dich 🛒"
   - Inhalt: Produkt-Erinnerung, Benefit, CTA

3. **Educational** — Content-Mail
   - Betreff: "Warum die meisten Detox-Versuche scheitern 😔"
   - Inhalt: Problem erklären, mysolv als Lösung

4. **Sale** — Aktion
   - Betreff: "Bis zu 30% auf mysolv® DETOX COMPLEX ⏳"
   - Inhalt: Angebot, Dringlichkeit, CTA

5. **Re-engagement** — Inaktive Kunden
   - Betreff: "Darf ich dich etwas fragen?"
   - Inhalt: Persönlich, kurz, CTA

## Klaviyo Zugang
- Klaviyo ist über MCP verbunden (mcp__klaviyo__)
- Template erstellen: `klaviyo_create_email_template` oder `klaviyo_create_dnd_email_template`
- HTML-Template: `klaviyo_create_email_template` mit name + html

## Klaviyo Template-Variablen (für Personalisierung)
- `{{ person.first_name|default:'Freund' }}` — Vorname
- `{{ event.extra.checkout_url }}` — Warenkorb-URL (Abandoned Cart)
- `{{ organization.name }}` — Firmenname

## Nächster Schritt im Terminal

```
Lies CLAUDE.md und KLAVIYO-CONTEXT.md.
Erstelle alle 5 Klaviyo E-Mail Vorlagen für mysolv® im Resilia-Stil auf Deutsch.
Fange mit der Welcome-Mail an und erstelle sie direkt über die Klaviyo API.
```
