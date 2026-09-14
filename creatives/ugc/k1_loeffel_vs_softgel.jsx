import { useState } from "react";

const sections = [
  {
    "id": "character",
    "title": "CHARACTER, SETTING & LIGHTING",
    "content": "Character: Lena, eine 38-jährige Frau mit dunkelblonden Haaren zum Zopf gebunden, ungeschminkt, Sweatshirt.\n\nSetting: Küche am Morgen, offene Schranktür im Hintergrund, eine benutzte Kaffeetasse auf der Arbeitsplatte.\n\nLighting: Tageslicht von links durch ein Fenster, leicht bewölkt, keine Lampen an.\n\nCamera: iPhone 15 Pro Frontkamera, vertikal 9:16."
  },
  {
    "id": "hook-a",
    "title": "HOOK A — Product Reveal (holds the product)",
    "productVisible": true,
    "content": "A casual selfie-style iPhone 15 Pro front-camera vertical video (9:16) filmed === IN EINER KUECHE AM MORGEN ===.\n\n🔴 PRODUKT-CLIP: Sie hält die mysolv Softgel-Dose (kleine weiße Dose mit hellem Etikett, passt in eine Handfläche) auf Brusthöhe, locker, wie wenn sie einer Freundin etwas zeigt.\n\nCharacter: Lena, eine 38-jährige Frau mit dunkelblonden Haaren zum Zopf gebunden, ungeschminkt, Sweatshirt.\n\nSetting: Küche am Morgen, offene Schranktür im Hintergrund, eine benutzte Kaffeetasse auf der Arbeitsplatte. Lighting: Tageslicht von links durch ein Fenster, leicht bewölkt, keine Lampen an.\n\nActions:\n- Schultern heben sich sichtbar beim Einatmen, dann Blick kurz auf die Dose, dann zurück zur Linse\n- Eine Augenbraue hebt sich stärker als die andere beim Wort 'Löffel'\n- Kurzes Schütteln, als würde sie den Geschmack abschütteln, dann halbes Lachen\n- Leichtes Handy-Wackeln, Frontkamera nah am Gesicht\n\nDialogue (spoken out loud by the character):\n'Okay warte, ich muss dir was zeigen. Ich hab drei Wochen Öl vom Löffel genommen. Seit dem hier nie wieder.'\n\nAudio: Nur die Stimme der Person — pure dialogue. iPhone 15 Pro mic. Keine Musik, keine Hintergrundgeräusche, keine Soundeffekte, kein Foley, kein Raumton."
  },
  {
    "id": "hook-b",
    "title": "HOOK B — Symptom Demo",
    "content": "A casual selfie-style iPhone 15 Pro front-camera vertical video (9:16) filmed === IN EINER KUECHE AM MORGEN ===.\n\nCharacter: Lena, eine 38-jährige Frau mit dunkelblonden Haaren zum Zopf gebunden, ungeschminkt, Sweatshirt.\n\nSetting: Küche am Morgen, offene Schranktür im Hintergrund, eine benutzte Kaffeetasse auf der Arbeitsplatte. Lighting: Tageslicht von links durch ein Fenster, leicht bewölkt, keine Lampen an.\n\nActions:\n- Hand wandert kurz zum Brustbein, Blick folgt der Hand nach unten\n- Augen weiten sich, Schultern heben sich beim Einatmen vor 'jetzt schau'\n- Kleine offene Handbewegung, ungläubiges halbes Lachen als Nachklang\n- Leichtes Handy-Wackeln, Frontkamera nah am Gesicht\n\nDialogue (spoken out loud by the character):\n'Früher hab ich nach dem Löffel Öl zwanzig Minuten lang aufgestoßen. Jetzt schau — ich merk gar nichts.'\n\nAudio: Nur die Stimme der Person — pure dialogue. iPhone 15 Pro mic. Keine Musik, keine Hintergrundgeräusche, keine Soundeffekte, kein Foley, kein Raumton."
  },
  {
    "id": "hook-c",
    "title": "HOOK C — Relatable Frustration",
    "content": "A casual selfie-style iPhone 15 Pro front-camera vertical video (9:16) filmed === IN EINER KUECHE AM MORGEN ===.\n\nCharacter: Lena, eine 38-jährige Frau mit dunkelblonden Haaren zum Zopf gebunden, ungeschminkt, Sweatshirt.\n\nSetting: Küche am Morgen, offene Schranktür im Hintergrund, eine benutzte Kaffeetasse auf der Arbeitsplatte. Lighting: Tageslicht von links durch ein Fenster, leicht bewölkt, keine Lampen an.\n\nActions:\n- Greift nach einem gedachten Löffel, stoppt mitten in der Bewegung\n- Nase rümpft sich kurz beim Wort 'Löffel', Blick flackert weg und kommt zurück\n- Schultern sinken, sie atmet sichtbar aus, wissender Ausdruck zur Linse\n- Leichtes Handy-Wackeln, Frontkamera nah am Gesicht\n\nDialogue (spoken out loud by the character):\n'Wenn du schon mal Schwarzkümmelöl vom Löffel genommen und danach das Gesicht verzogen hast — ja. Ich auch.'\n\nAudio: Nur die Stimme der Person — pure dialogue. iPhone 15 Pro mic. Keine Musik, keine Hintergrundgeräusche, keine Soundeffekte, kein Foley, kein Raumton."
  },
  {
    "id": "hook-d",
    "title": "HOOK D — Almost Made A Mistake",
    "content": "A casual selfie-style iPhone 15 Pro front-camera vertical video (9:16) filmed === IN EINER KUECHE AM MORGEN ===.\n\nCharacter: Lena, eine 38-jährige Frau mit dunkelblonden Haaren zum Zopf gebunden, ungeschminkt, Sweatshirt.\n\nSetting: Küche am Morgen, offene Schranktür im Hintergrund, eine benutzte Kaffeetasse auf der Arbeitsplatte. Lighting: Tageslicht von links durch ein Fenster, leicht bewölkt, keine Lampen an.\n\nActions:\n- Beginnt mit locker verschränkten Armen, Blick flackert nach oben-links beim Erinnern\n- Löst die Arme bei 'hundertfünfzig', Kiefer spannt sich kurz an\n- Lehnt sich vor bei der Pointe, hält den Blick einen Moment zu lang\n- Leichtes Handy-Wackeln, Frontkamera nah am Gesicht\n\nDialogue (spoken out loud by the character):\n'Ich hatte schon ein Kur-Set für hundertfünfzig Franken im Warenkorb. Dann hab ich gemerkt, ich brauch das gar nicht.'\n\nAudio: Nur die Stimme der Person — pure dialogue. iPhone 15 Pro mic. Keine Musik, keine Hintergrundgeräusche, keine Soundeffekte, kein Foley, kein Raumton."
  },
  {
    "id": "hook-e",
    "title": "HOOK E — Controversial Opinion",
    "content": "A casual selfie-style iPhone 15 Pro front-camera vertical video (9:16) filmed === IN EINER KUECHE AM MORGEN ===.\n\nCharacter: Lena, eine 38-jährige Frau mit dunkelblonden Haaren zum Zopf gebunden, ungeschminkt, Sweatshirt.\n\nSetting: Küche am Morgen, offene Schranktür im Hintergrund, eine benutzte Kaffeetasse auf der Arbeitsplatte. Lighting: Tageslicht von links durch ein Fenster, leicht bewölkt, keine Lampen an.\n\nActions:\n- Legt das Handy kurz ab, nimmt es wieder, Schultern heben sich beim Einatmen\n- Schaut direkt in die Linse, eine Augenbraue hoch beim Wort 'eklig'\n- Abweisende Handbewegung, bitteres halbes Lachen als Nachklang\n- Leichtes Handy-Wackeln, Frontkamera nah am Gesicht\n\nDialogue (spoken out loud by the character):\n'Unpopuläre Meinung: die meisten Darmkuren sind vor allem eins — eklig. Und genau deshalb hält sie keiner durch.'\n\nAudio: Nur die Stimme der Person — pure dialogue. iPhone 15 Pro mic. Keine Musik, keine Hintergrundgeräusche, keine Soundeffekte, kein Foley, kein Raumton."
  },
  {
    "id": "clip-1",
    "title": "CLIP 1 — DER ANFANG",
    "content": "A casual selfie-style iPhone 15 Pro front-camera vertical video (9:16) filmed === IN EINER KUECHE AM MORGEN ===.\n\nCharacter: Lena, eine 38-jährige Frau mit dunkelblonden Haaren zum Zopf gebunden, ungeschminkt, Sweatshirt.\n\nSetting: Küche am Morgen, offene Schranktür im Hintergrund, eine benutzte Kaffeetasse auf der Arbeitsplatte. Lighting: Tageslicht von links durch ein Fenster, leicht bewölkt, keine Lampen an.\n\nActions:\n- Lehnt sich an die Arbeitsplatte, Schultern sinken, sie atmet sichtbar aus\n- Blick flackert nach oben-links beim Erinnern, leicht an der Linse vorbei\n- Unregelmäßiges Blinzeln, ein langsamer schwerer Lidschlag\n- Leichtes Handy-Wackeln, Frontkamera nah am Gesicht\n\nDialogue (spoken out loud by the character):\n'Ich hab im Februar mit Schwarzkümmelöl angefangen. Eine Freundin hat geschwärmt. Ich dachte, probier ich halt.'\n\nAudio: Nur die Stimme der Person — pure dialogue. iPhone 15 Pro mic. Stimme müde, sachlich, erzählend. Keine Musik, keine Hintergrundgeräusche, keine Soundeffekte, kein Foley, kein Raumton."
  },
  {
    "id": "clip-2",
    "title": "CLIP 2 — ES WURDE SCHLIMMER",
    "content": "A casual selfie-style iPhone 15 Pro front-camera vertical video (9:16) filmed === IN EINER KUECHE AM MORGEN ===.\n\nCharacter: Lena, eine 38-jährige Frau mit dunkelblonden Haaren zum Zopf gebunden, ungeschminkt, Sweatshirt.\n\nSetting: Küche am Morgen, offene Schranktür im Hintergrund, eine benutzte Kaffeetasse auf der Arbeitsplatte. Lighting: Tageslicht von links durch ein Fenster, leicht bewölkt, keine Lampen an.\n\nActions:\n- Langsames Kopfschütteln, eine Augenbraue hebt sich\n- Hand wandert zum Hals, Kiefer spannt sich an beim Wort 'Geschmack'\n- Blick geht kurz zur Seite, als würde sie die Flasche dort sehen\n- Leichtes Handy-Wackeln, Frontkamera nah am Gesicht\n\nDialogue (spoken out loud by the character):\n'Nach zwei Wochen hab ich den Löffel gehasst. Der Geschmack bleibt einfach oben. Ich hab die Flasche nur noch angeschaut.'\n\nAudio: Nur die Stimme der Person — pure dialogue. iPhone 15 Pro mic. Stimme animierter, genervt. Keine Musik, keine Hintergrundgeräusche, keine Soundeffekte, kein Foley, kein Raumton."
  },
  {
    "id": "clip-3",
    "title": "CLIP 3 — ALLES PROBIERT",
    "content": "A casual selfie-style iPhone 15 Pro front-camera vertical video (9:16) filmed === IN EINER KUECHE AM MORGEN ===.\n\nCharacter: Lena, eine 38-jährige Frau mit dunkelblonden Haaren zum Zopf gebunden, ungeschminkt, Sweatshirt.\n\nSetting: Küche am Morgen, offene Schranktür im Hintergrund, eine benutzte Kaffeetasse auf der Arbeitsplatte. Lighting: Tageslicht von links durch ein Fenster, leicht bewölkt, keine Lampen an.\n\nActions:\n- Hält die Hand hoch, zählt an den Fingern ab, Kiefer leicht angespannt\n- Kleine abweisende Geste bei 'noch schlimmer', bitteres halbes Lachen\n- Lässt die Hände in Niederlage sinken, Schultern fallen\n- Leichtes Handy-Wackeln, Frontkamera nah am Gesicht\n\nDialogue (spoken out loud by the character):\n'Hab alles probiert. Öl in Saft, noch schlimmer. Hartkapseln für dreißig Franken, die stoßen auf. Tropfen brennen.'\n\nAudio: Nur die Stimme der Person — pure dialogue. iPhone 15 Pro mic. Aufzählungs-Energie, leichte Genervtheit. Keine Musik, keine Hintergrundgeräusche, keine Soundeffekte, kein Foley, kein Raumton."
  },
  {
    "id": "clip-4",
    "title": "CLIP 4 — DAS LOW-POINT GESPRÄCH",
    "content": "A casual selfie-style iPhone 15 Pro front-camera vertical video (9:16) filmed === IN EINER KUECHE AM MORGEN ===.\n\nCharacter: Lena, eine 38-jährige Frau mit dunkelblonden Haaren zum Zopf gebunden, ungeschminkt, Sweatshirt.\n\nSetting: Küche am Morgen, offene Schranktür im Hintergrund, eine benutzte Kaffeetasse auf der Arbeitsplatte. Lighting: Tageslicht von links durch ein Fenster, leicht bewölkt, keine Lampen an.\n\nActions:\n- Pausiert, Blick sinkt auf die eigenen Hände, kurzer Atem-Stopp\n- Schluckt kurz, bevor sie 'lass das doch einfach' sagt\n- Leichtes Kopfschütteln, hält den Blick danach einen Moment zu lang\n- Leichtes Handy-Wackeln, Frontkamera nah am Gesicht\n\nDialogue (spoken out loud by the character):\n'Meine Schwester meinte dann, lass das mit den Kuren doch einfach. Und ich dachte, ja vielleicht. Aber es hat mich gestört.'\n\nAudio: Nur die Stimme der Person — pure dialogue. iPhone 15 Pro mic. Stimme langsamer, ernster, leichte Verletzlichkeit. Keine Musik, keine Hintergrundgeräusche, keine Soundeffekte, kein Foley, kein Raumton."
  },
  {
    "id": "clip-5",
    "title": "CLIP 5 — DIE ENTDECKUNG",
    "content": "A casual selfie-style iPhone 15 Pro front-camera vertical video (9:16) filmed === IN EINER KUECHE AM MORGEN ===.\n\nCharacter: Lena, eine 38-jährige Frau mit dunkelblonden Haaren zum Zopf gebunden, ungeschminkt, Sweatshirt.\n\nSetting: Küche am Morgen, offene Schranktür im Hintergrund, eine benutzte Kaffeetasse auf der Arbeitsplatte. Lighting: Tageslicht von links durch ein Fenster, leicht bewölkt, keine Lampen an.\n\nActions:\n- Augenbrauen heben sich beim Wort 'Softgel', Schultern heben sich beim Einatmen\n- Lehnt sich leicht vor, engagiert, Blick fixiert die Linse\n- Leichtes ungläubiges Lachen bei 'erst jetzt', eine Hand öffnet sich\n- Leichtes Handy-Wackeln, Frontkamera nah am Gesicht\n\nDialogue (spoken out loud by the character):\n'Dann les ich, dass es die Öle längst als Softgel gibt. Geschmacksneutral. Ich so: warum weiß ich das erst jetzt?'\n\nAudio: Nur die Stimme der Person — pure dialogue. iPhone 15 Pro mic. Stimme neugierig, leicht ungläubig. Keine Musik, keine Hintergrundgeräusche, keine Soundeffekte, kein Foley, kein Raumton."
  },
  {
    "id": "clip-6",
    "title": "CLIP 6 — DAS PRODUKT (PRODUKT SICHTBAR)",
    "productVisible": true,
    "content": "A casual selfie-style iPhone 15 Pro front-camera vertical video (9:16) filmed === IN EINER KUECHE AM MORGEN ===.\n\n🔴 PRODUKT-CLIP: Sie hält die mysolv Softgel-Dose (kleine weiße Dose mit hellem Etikett, passt in eine Handfläche) auf Brusthöhe, locker, wie wenn sie einer Freundin etwas zeigt.\n\nCharacter: Lena, eine 38-jährige Frau mit dunkelblonden Haaren zum Zopf gebunden, ungeschminkt, Sweatshirt.\n\nSetting: Küche am Morgen, offene Schranktür im Hintergrund, eine benutzte Kaffeetasse auf der Arbeitsplatte. Lighting: Tageslicht von links durch ein Fenster, leicht bewölkt, keine Lampen an.\n\nActions:\n- Greift neben sich, nimmt die Dose, dreht sie einmal in der Hand\n- Hält sie auf Brusthöhe, Schulterzucken bei 'nicht viel erwartet'\n- Schraubt kurz den Deckel auf und wieder zu, stellt sie neben sich\n- Leichtes Handy-Wackeln, Frontkamera nah am Gesicht\n\nDialogue (spoken out loud by the character):\n'Also hab ich dieses Ding bestellt. Vier Sachen in einer Kapsel, morgens eine mit Wasser. Hab echt nicht viel erwartet.'\n\nAudio: Nur die Stimme der Person — pure dialogue. iPhone 15 Pro mic. Stimme locker, niedrige Erwartungen, untertrieben. Keine Musik, keine Hintergrundgeräusche, keine Soundeffekte, kein Foley, kein Raumton."
  },
  {
    "id": "clip-7",
    "title": "CLIP 7 — DIE ERGEBNISSE",
    "content": "A casual selfie-style iPhone 15 Pro front-camera vertical video (9:16) filmed === IN EINER KUECHE AM MORGEN ===.\n\nCharacter: Lena, eine 38-jährige Frau mit dunkelblonden Haaren zum Zopf gebunden, ungeschminkt, Sweatshirt.\n\nSetting: Küche am Morgen, offene Schranktür im Hintergrund, eine benutzte Kaffeetasse auf der Arbeitsplatte. Lighting: Tageslicht von links durch ein Fenster, leicht bewölkt, keine Lampen an.\n\nActions:\n- Gesicht hellt sich auf, sie sitzt aufrechter, Augen werden heller\n- Flache Hand geht kurz vor den Bauch, Augen kurz glasig\n- 'das wars?' fast geflüstert, dann echtes Lächeln bei 'leichter'\n- Leichtes Handy-Wackeln, Frontkamera nah am Gesicht\n\nDialogue (spoken out loud by the character):\n'Erste Woche: kein Aufstoßen, kein Geschmack. Ich so, das wars? Nach drei Wochen fühl ich mich abends einfach leichter.'\n\nAudio: Nur die Stimme der Person — pure dialogue. iPhone 15 Pro mic. Energie hebt sich, echte Überraschung und Erleichterung. Keine Musik, keine Hintergrundgeräusche, keine Soundeffekte, kein Foley, kein Raumton."
  },
  {
    "id": "clip-8",
    "title": "CLIP 8 — DER CTA",
    "content": "A casual selfie-style iPhone 15 Pro front-camera vertical video (9:16) filmed === IN EINER KUECHE AM MORGEN ===.\n\nCharacter: Lena, eine 38-jährige Frau mit dunkelblonden Haaren zum Zopf gebunden, ungeschminkt, Sweatshirt.\n\nSetting: Küche am Morgen, offene Schranktür im Hintergrund, eine benutzte Kaffeetasse auf der Arbeitsplatte. Lighting: Tageslicht von links durch ein Fenster, leicht bewölkt, keine Lampen an.\n\nActions:\n- Ehrliches warmes Lächeln, entspannte Haltung, Schultern locker\n- Leichtes Schulterzucken bei 'weniger als das Set'\n- Direkter Blickkontakt bei 'probiers', zeigt locker nach unten\n- Leichtes Handy-Wackeln, Frontkamera nah am Gesicht\n\nDialogue (spoken out loud by the character):\n'Kostet weniger als das Set das ich fast gekauft hätte. Wenn dich der Löffel auch nervt, probiers. Link ist unten.'\n\nAudio: Nur die Stimme der Person — pure dialogue. iPhone 15 Pro mic. Stimme warm, direkt, Freundin-gibt-Rat-Energie. Keine Musik, keine Hintergrundgeräusche, keine Soundeffekte, kein Foley, kein Raumton."
  },
  {
    "id": "voiceover",
    "title": "VOICEOVER SPECS",
    "content": "Voice: weiblich, 35 bis 42, warm und nahbar.\nAccent: Hochdeutsch mit leicht umgangssprachlichem Touch, berufstätige Frau Ende dreißig-Energie.\nTone: Locker, echt, wie ein Gespräch mit einer engen Freundin.\nEnergy: Beginnt müde und genervt, steigert sich zu hoffnungsvoll, endet warm und hilfreich.\n\nElevenLabs Settings:\n- Stability: 0.35\n- Similarity: 0.75\n- Style Exaggeration: 0.20\n- Speaker Boost: ON\n\nClip-by-clip delivery — match the tone described in each section's Audio block. Reminder: every video clip is DIALOGUE-ONLY. No music, no SFX, no foley, no ambient sound is added at the video-generation step; this voiceover IS the audio."
  },
  {
    "id": "full-dialogue",
    "title": "FULL DIALOGUE (export for TTS / subtitle file)",
    "content": "=== HOOK A — pick ONE hook for the actual ad ===\nOkay warte, ich muss dir was zeigen. Ich hab drei Wochen Öl vom Löffel genommen. Seit dem hier nie wieder.\n\n=== CLIP 1 ===\nIch hab im Februar mit Schwarzkümmelöl angefangen. Eine Freundin hat geschwärmt. Ich dachte, probier ich halt.\n\n=== CLIP 2 ===\nNach zwei Wochen hab ich den Löffel gehasst. Der Geschmack bleibt einfach oben. Ich hab die Flasche nur noch angeschaut.\n\n=== CLIP 3 ===\nHab alles probiert. Öl in Saft, noch schlimmer. Hartkapseln für dreißig Franken, die stoßen auf. Tropfen brennen.\n\n=== CLIP 4 ===\nMeine Schwester meinte dann, lass das mit den Kuren doch einfach. Und ich dachte, ja vielleicht. Aber es hat mich gestört.\n\n=== CLIP 5 ===\nDann les ich, dass es die Öle längst als Softgel gibt. Geschmacksneutral. Ich so: warum weiß ich das erst jetzt?\n\n=== CLIP 6 — PRODUKT SICHTBAR ===\nAlso hab ich dieses Ding bestellt. Vier Sachen in einer Kapsel, morgens eine mit Wasser. Hab echt nicht viel erwartet.\n\n=== CLIP 7 ===\nErste Woche: kein Aufstoßen, kein Geschmack. Ich so, das wars? Nach drei Wochen fühl ich mich abends einfach leichter.\n\n=== CLIP 8 — CTA ===\nKostet weniger als das Set das ich fast gekauft hätte. Wenn dich der Löffel auch nervt, probiers. Link ist unten."
  }
];

const getTagInfo = (id) => {
  if (id === "character") return { label: "CHARACTER", color: "#60a5fa" };
  if (id.startsWith("hook-")) return { label: "HOOK", color: "#f97316" };
  if (id.startsWith("clip-")) return { label: "CLIP", color: "#34d399" };
  if (id === "voiceover") return { label: "VOICEOVER", color: "#a78bfa" };
  if (id === "full-dialogue") return { label: "DIALOGUE", color: "#f472b6" };
  return { label: "SECTION", color: "#888" };
};

export default function UGCScriptViewer() {
  const [expanded, setExpanded] = useState({});
  const [copied, setCopied] = useState({});

  const toggleSection = (id) => setExpanded((p) => ({ ...p, [id]: !p[id] }));

  const copyToClipboard = (id, content, e) => {
    e.stopPropagation();
    try { navigator.clipboard.writeText(content); }
    catch {
      const ta = document.createElement("textarea");
      ta.value = content;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    setCopied((p) => ({ ...p, [id]: true }));
    setTimeout(() => setCopied((p) => ({ ...p, [id]: false })), 2000);
  };

  return (
    <div style={{ backgroundColor: "#0a0a0a", minHeight: "100vh", padding: "20px", fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
      {sections.map((section) => {
        const tag = getTagInfo(section.id);
        const isExpanded = expanded[section.id];
        const isCopied = copied[section.id];
        const isProduct = section.productVisible === true;
        return (
          <div key={section.id} style={{ backgroundColor: isExpanded ? "#1a1a1a" : "#111", border: isProduct ? "2px solid #dc2626" : "1px solid #2a2a2a", boxShadow: isProduct ? "0 0 0 1px rgba(220, 38, 38, 0.25)" : "none", borderRadius: "8px", marginBottom: "8px", overflow: "hidden" }}>
            <div onClick={() => toggleSection(section.id)} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 16px", cursor: "pointer" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span style={{ backgroundColor: `${tag.color}20`, color: tag.color, fontSize: "10px", fontWeight: "bold", textTransform: "uppercase", padding: "4px 8px", borderRadius: "4px" }}>{tag.label}</span>
                {isProduct && (<span style={{ backgroundColor: "#dc262620", color: "#fca5a5", fontSize: "10px", fontWeight: "bold", textTransform: "uppercase", padding: "4px 8px", borderRadius: "4px" }}>PRODUCT VISIBLE — ATTACH REF IMAGE</span>)}
                <span style={{ color: "#e5e5e5", fontSize: "14px" }}>{section.title}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <button onClick={(e) => copyToClipboard(section.id, section.content, e)} style={{ backgroundColor: "transparent", border: "1px solid #333", borderRadius: "4px", padding: "6px 10px", color: isCopied ? "#34d399" : "#888", fontSize: "12px", cursor: "pointer" }}>{isCopied ? "Copied" : "Copy"}</button>
                <span style={{ color: "#666", fontSize: "14px", transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)" }}>▾</span>
              </div>
            </div>
            {isExpanded && (
              <div style={{ padding: "16px", borderTop: "1px solid #2a2a2a", backgroundColor: "#0f0f0f" }}>
                <pre style={{ color: "#ccc", fontSize: "12.5px", lineHeight: "1.7", fontFamily: '"SF Mono", "Fira Code", "JetBrains Mono", monospace', whiteSpace: "pre-wrap", margin: 0 }}>{section.content}</pre>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
