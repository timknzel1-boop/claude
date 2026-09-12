import { useState } from "react";

const sections = [
  {
    "id": "character",
    "title": "CHARACTER, SETTING & LIGHTING",
    "content": "Character: Birgit, eine 52-jährige Frau mit grauen kinnlangen Haaren und Lesebrille im Haar, gestrickter Cardigan.\n\nSetting: Wohnzimmer am Vormittag, Sessel, im Hintergrund ein Bücherregal und eine Zimmerpflanze.\n\nLighting: Weiches Tageslicht von rechts durch ein großes Fenster, bedeckter Himmel.\n\nCamera: iPhone 15 Pro Frontkamera, vertikal 9:16."
  },
  {
    "id": "hook-a",
    "title": "HOOK A — Product Reveal (holds the product)",
    "productVisible": true,
    "content": "A casual selfie-style iPhone 15 Pro front-camera vertical video (9:16) filmed === IN EINEM WOHNZIMMER AM VORMITTAG ===.\n\n🔴 PRODUKT-CLIP: Sie hält die mysolv Softgel-Dose (kleine weiße Dose mit hellem Etikett, passt in eine Handfläche) auf Brusthöhe, locker, wie wenn sie einer Freundin etwas zeigt.\n\nCharacter: Birgit, eine 52-jährige Frau mit grauen kinnlangen Haaren und Lesebrille im Haar, gestrickter Cardigan.\n\nSetting: Wohnzimmer am Vormittag, Sessel, im Hintergrund ein Bücherregal und eine Zimmerpflanze. Lighting: Weiches Tageslicht von rechts durch ein großes Fenster, bedeckter Himmel.\n\nActions:\n- Macht eine Tropf-Bewegung in der Luft, stoppt, Blick zur Linse\n- Schultern heben sich beim Einatmen, Augenbraue hoch bei 'zwei Jahre'\n- Hebt die Dose auf Brusthöhe, Mundwinkel zuckt als Nachklang\n- Leichtes Handy-Wackeln, Frontkamera nah am Gesicht\n\nDialogue (spoken out loud by the character):\n'Ich hab zwei Jahre lang mit der Pipette rumgetropft. Seit dem hier nehm ich morgens eine und bin fertig.'\n\nAudio: Nur die Stimme der Person — pure dialogue. iPhone 15 Pro mic. Keine Musik, keine Hintergrundgeräusche, keine Soundeffekte, kein Foley, kein Raumton."
  },
  {
    "id": "hook-b",
    "title": "HOOK B — Symptom Demo",
    "content": "A casual selfie-style iPhone 15 Pro front-camera vertical video (9:16) filmed === IN EINEM WOHNZIMMER AM VORMITTAG ===.\n\nCharacter: Birgit, eine 52-jährige Frau mit grauen kinnlangen Haaren und Lesebrille im Haar, gestrickter Cardigan.\n\nSetting: Wohnzimmer am Vormittag, Sessel, im Hintergrund ein Bücherregal und eine Zimmerpflanze. Lighting: Weiches Tageslicht von rechts durch ein großes Fenster, bedeckter Himmel.\n\nActions:\n- Zählt mit dem Zeigefinger in der Luft, Nase rümpft sich kurz\n- Augen weiten sich, Schultern heben sich beim Einatmen vor 'jetzt schau'\n- Öffnet die Hand, trockenes halbes Lachen als Nachklang\n- Leichtes Handy-Wackeln, Frontkamera nah am Gesicht\n\nDialogue (spoken out loud by the character):\n'So sah mein Morgen aus: zwanzig Tropfen zählen, runterschlucken, Gesicht verziehen. Jetzt schau — eine Kapsel.'\n\nAudio: Nur die Stimme der Person — pure dialogue. iPhone 15 Pro mic. Keine Musik, keine Hintergrundgeräusche, keine Soundeffekte, kein Foley, kein Raumton."
  },
  {
    "id": "hook-c",
    "title": "HOOK C — Relatable Frustration",
    "content": "A casual selfie-style iPhone 15 Pro front-camera vertical video (9:16) filmed === IN EINEM WOHNZIMMER AM VORMITTAG ===.\n\nCharacter: Birgit, eine 52-jährige Frau mit grauen kinnlangen Haaren und Lesebrille im Haar, gestrickter Cardigan.\n\nSetting: Wohnzimmer am Vormittag, Sessel, im Hintergrund ein Bücherregal und eine Zimmerpflanze. Lighting: Weiches Tageslicht von rechts durch ein großes Fenster, bedeckter Himmel.\n\nActions:\n- Hält eine gedachte Pipette hoch, stoppt mitten in der Bewegung\n- Blick flackert kurz weg, dann direkt in die Linse, wissender Ausdruck\n- Schultern sinken, sie atmet sichtbar aus bei 'zwei Jahre lang'\n- Leichtes Handy-Wackeln, Frontkamera nah am Gesicht\n\nDialogue (spoken out loud by the character):\n'Wenn du morgens Tropfen zählst und schon weißt wie es gleich schmeckt — ja. Das war ich, zwei Jahre lang.'\n\nAudio: Nur die Stimme der Person — pure dialogue. iPhone 15 Pro mic. Keine Musik, keine Hintergrundgeräusche, keine Soundeffekte, kein Foley, kein Raumton."
  },
  {
    "id": "hook-d",
    "title": "HOOK D — Almost Made A Mistake",
    "content": "A casual selfie-style iPhone 15 Pro front-camera vertical video (9:16) filmed === IN EINEM WOHNZIMMER AM VORMITTAG ===.\n\nCharacter: Birgit, eine 52-jährige Frau mit grauen kinnlangen Haaren und Lesebrille im Haar, gestrickter Cardigan.\n\nSetting: Wohnzimmer am Vormittag, Sessel, im Hintergrund ein Bücherregal und eine Zimmerpflanze. Lighting: Weiches Tageslicht von rechts durch ein großes Fenster, bedeckter Himmel.\n\nActions:\n- Locker verschränkte Arme, Blick nach oben-links beim Erinnern\n- Löst die Arme bei 'achtundvierzig', eine Augenbraue hebt sich\n- Lehnt sich vor bei 'nochmal geschaut', hält den Blick zu lang\n- Leichtes Handy-Wackeln, Frontkamera nah am Gesicht\n\nDialogue (spoken out loud by the character):\n'Ich hatte die nächste Flasche für achtundvierzig Franken schon im Warenkorb. Dann hab ich nochmal geschaut.'\n\nAudio: Nur die Stimme der Person — pure dialogue. iPhone 15 Pro mic. Keine Musik, keine Hintergrundgeräusche, keine Soundeffekte, kein Foley, kein Raumton."
  },
  {
    "id": "hook-e",
    "title": "HOOK E — Controversial Opinion",
    "content": "A casual selfie-style iPhone 15 Pro front-camera vertical video (9:16) filmed === IN EINEM WOHNZIMMER AM VORMITTAG ===.\n\nCharacter: Birgit, eine 52-jährige Frau mit grauen kinnlangen Haaren und Lesebrille im Haar, gestrickter Cardigan.\n\nSetting: Wohnzimmer am Vormittag, Sessel, im Hintergrund ein Bücherregal und eine Zimmerpflanze. Lighting: Weiches Tageslicht von rechts durch ein großes Fenster, bedeckter Himmel.\n\nActions:\n- Nimmt die Lesebrille aus dem Haar, legt sie weg, Schultern heben sich\n- Schaut direkt in die Linse, eine Augenbraue hoch bei 'bitter'\n- Ruhige abweisende Handbewegung, bestimmtes Nicken als Nachklang\n- Leichtes Handy-Wackeln, Frontkamera nah am Gesicht\n\nDialogue (spoken out loud by the character):\n'Unpopuläre Meinung: Tinkturen sind nicht besser weil sie bitter sind. Sie sind nur schwerer durchzuhalten.'\n\nAudio: Nur die Stimme der Person — pure dialogue. iPhone 15 Pro mic. Keine Musik, keine Hintergrundgeräusche, keine Soundeffekte, kein Foley, kein Raumton."
  },
  {
    "id": "clip-1",
    "title": "CLIP 1 — DER ANFANG",
    "content": "A casual selfie-style iPhone 15 Pro front-camera vertical video (9:16) filmed === IN EINEM WOHNZIMMER AM VORMITTAG ===.\n\nCharacter: Birgit, eine 52-jährige Frau mit grauen kinnlangen Haaren und Lesebrille im Haar, gestrickter Cardigan.\n\nSetting: Wohnzimmer am Vormittag, Sessel, im Hintergrund ein Bücherregal und eine Zimmerpflanze. Lighting: Weiches Tageslicht von rechts durch ein großes Fenster, bedeckter Himmel.\n\nActions:\n- Lehnt sich im Sessel zurück, Schultern sinken, atmet sichtbar aus\n- Blick flackert nach oben-links beim Erinnern, an der Linse vorbei\n- Kleines resigniertes Nicken bei 'klang machbar'\n- Leichtes Handy-Wackeln, Frontkamera nah am Gesicht\n\nDialogue (spoken out loud by the character):\n'Ich hab vor zwei Jahren mit so einer Kräutertinktur angefangen. Dreimal am Tag zwanzig Tropfen. Klang machbar.'\n\nAudio: Nur die Stimme der Person — pure dialogue. iPhone 15 Pro mic. Stimme ruhig, sachlich, erzählend. Keine Musik, keine Hintergrundgeräusche, keine Soundeffekte, kein Foley, kein Raumton."
  },
  {
    "id": "clip-2",
    "title": "CLIP 2 — ES WURDE SCHLIMMER",
    "content": "A casual selfie-style iPhone 15 Pro front-camera vertical video (9:16) filmed === IN EINEM WOHNZIMMER AM VORMITTAG ===.\n\nCharacter: Birgit, eine 52-jährige Frau mit grauen kinnlangen Haaren und Lesebrille im Haar, gestrickter Cardigan.\n\nSetting: Wohnzimmer am Vormittag, Sessel, im Hintergrund ein Bücherregal und eine Zimmerpflanze. Lighting: Weiches Tageslicht von rechts durch ein großes Fenster, bedeckter Himmel.\n\nActions:\n- Langsames Kopfschütteln, eine Augenbraue hebt sich\n- Hand wandert kurz zum Hals, Kiefer spannt sich bei 'Geschmack'\n- Kleine Gewichtsverlagerung im Sessel, sie setzt sich neu hin\n- Leichtes Handy-Wackeln, Frontkamera nah am Gesicht\n\nDialogue (spoken out loud by the character):\n'War es aber nicht. Der Geschmack bleibt, und dreimal am Tag schaffst du im Alltag einfach nicht. Ich hab geschludert.'\n\nAudio: Nur die Stimme der Person — pure dialogue. iPhone 15 Pro mic. Stimme animierter, leicht genervt über sich selbst. Keine Musik, keine Hintergrundgeräusche, keine Soundeffekte, kein Foley, kein Raumton."
  },
  {
    "id": "clip-3",
    "title": "CLIP 3 — ALLES PROBIERT",
    "content": "A casual selfie-style iPhone 15 Pro front-camera vertical video (9:16) filmed === IN EINEM WOHNZIMMER AM VORMITTAG ===.\n\nCharacter: Birgit, eine 52-jährige Frau mit grauen kinnlangen Haaren und Lesebrille im Haar, gestrickter Cardigan.\n\nSetting: Wohnzimmer am Vormittag, Sessel, im Hintergrund ein Bücherregal und eine Zimmerpflanze. Lighting: Weiches Tageslicht von rechts durch ein großes Fenster, bedeckter Himmel.\n\nActions:\n- Hält die Hand hoch, zählt an den Fingern ab, Kiefer leicht angespannt\n- Kleine abweisende Geste bei 'klebrig', bitteres halbes Lachen\n- Lässt die Hände in den Schoß sinken, Schultern fallen\n- Leichtes Handy-Wackeln, Frontkamera nah am Gesicht\n\nDialogue (spoken out loud by the character):\n'Hab alles probiert. Tropfen in Wasser, noch bitterer. In Honig, klebrig. Hartkapseln, die stoßen auf.'\n\nAudio: Nur die Stimme der Person — pure dialogue. iPhone 15 Pro mic. Aufzählungs-Energie, leichte Genervtheit. Keine Musik, keine Hintergrundgeräusche, keine Soundeffekte, kein Foley, kein Raumton."
  },
  {
    "id": "clip-4",
    "title": "CLIP 4 — DAS LOW-POINT GESPRÄCH",
    "content": "A casual selfie-style iPhone 15 Pro front-camera vertical video (9:16) filmed === IN EINEM WOHNZIMMER AM VORMITTAG ===.\n\nCharacter: Birgit, eine 52-jährige Frau mit grauen kinnlangen Haaren und Lesebrille im Haar, gestrickter Cardigan.\n\nSetting: Wohnzimmer am Vormittag, Sessel, im Hintergrund ein Bücherregal und eine Zimmerpflanze. Lighting: Weiches Tageslicht von rechts durch ein großes Fenster, bedeckter Himmel.\n\nActions:\n- Pausiert, Blick sinkt auf die eigenen Hände, kurzer Atem-Stopp\n- Schluckt kurz, bevor sie 'das hat gesessen' sagt\n- Leichtes Nicken, hält den Blick danach einen Moment zu lang\n- Leichtes Handy-Wackeln, Frontkamera nah am Gesicht\n\nDialogue (spoken out loud by the character):\n'Meine Heilpraktikerin meinte, wenn du es nicht durchhältst bringt die beste Mischung nichts. Das hat gesessen.'\n\nAudio: Nur die Stimme der Person — pure dialogue. iPhone 15 Pro mic. Stimme langsamer, ernster, ehrlich. Keine Musik, keine Hintergrundgeräusche, keine Soundeffekte, kein Foley, kein Raumton."
  },
  {
    "id": "clip-5",
    "title": "CLIP 5 — DIE ENTDECKUNG",
    "content": "A casual selfie-style iPhone 15 Pro front-camera vertical video (9:16) filmed === IN EINEM WOHNZIMMER AM VORMITTAG ===.\n\nCharacter: Birgit, eine 52-jährige Frau mit grauen kinnlangen Haaren und Lesebrille im Haar, gestrickter Cardigan.\n\nSetting: Wohnzimmer am Vormittag, Sessel, im Hintergrund ein Bücherregal und eine Zimmerpflanze. Lighting: Weiches Tageslicht von rechts durch ein großes Fenster, bedeckter Himmel.\n\nActions:\n- Augenbrauen heben sich bei 'an der Form', Schultern heben sich beim Einatmen\n- Lehnt sich leicht vor, engagiert, Blick fixiert die Linse\n- Kurzes ungläubiges Lachen bei 'ach so', eine Hand öffnet sich\n- Leichtes Handy-Wackeln, Frontkamera nah am Gesicht\n\nDialogue (spoken out loud by the character):\n'Dann hab ich kapiert dass es nicht am Inhalt lag sondern an der Form. Softgel statt Tropfen. Ich so: ach so.'\n\nAudio: Nur die Stimme der Person — pure dialogue. iPhone 15 Pro mic. Stimme neugierig, leicht ungläubig. Keine Musik, keine Hintergrundgeräusche, keine Soundeffekte, kein Foley, kein Raumton."
  },
  {
    "id": "clip-6",
    "title": "CLIP 6 — DAS PRODUKT (PRODUKT SICHTBAR)",
    "productVisible": true,
    "content": "A casual selfie-style iPhone 15 Pro front-camera vertical video (9:16) filmed === IN EINEM WOHNZIMMER AM VORMITTAG ===.\n\n🔴 PRODUKT-CLIP: Sie hält die mysolv Softgel-Dose (kleine weiße Dose mit hellem Etikett, passt in eine Handfläche) auf Brusthöhe, locker, wie wenn sie einer Freundin etwas zeigt.\n\nCharacter: Birgit, eine 52-jährige Frau mit grauen kinnlangen Haaren und Lesebrille im Haar, gestrickter Cardigan.\n\nSetting: Wohnzimmer am Vormittag, Sessel, im Hintergrund ein Bücherregal und eine Zimmerpflanze. Lighting: Weiches Tageslicht von rechts durch ein großes Fenster, bedeckter Himmel.\n\nActions:\n- Greift neben den Sessel, nimmt die Dose, dreht sie einmal\n- Hält sie auf Brusthöhe, Schulterzucken bei 'man schmeckt nichts'\n- Legt sie sich auf die Armlehne, tippt einmal drauf\n- Leichtes Handy-Wackeln, Frontkamera nah am Gesicht\n\nDialogue (spoken out loud by the character):\n'Also hab ich dieses Ding bestellt. Vier Sachen in einer Softgel, morgens eine mit Wasser. Man schmeckt nichts.'\n\nAudio: Nur die Stimme der Person — pure dialogue. iPhone 15 Pro mic. Stimme locker, untertrieben, niedrige Erwartungen. Keine Musik, keine Hintergrundgeräusche, keine Soundeffekte, kein Foley, kein Raumton."
  },
  {
    "id": "clip-7",
    "title": "CLIP 7 — DIE ERGEBNISSE",
    "content": "A casual selfie-style iPhone 15 Pro front-camera vertical video (9:16) filmed === IN EINEM WOHNZIMMER AM VORMITTAG ===.\n\nCharacter: Birgit, eine 52-jährige Frau mit grauen kinnlangen Haaren und Lesebrille im Haar, gestrickter Cardigan.\n\nSetting: Wohnzimmer am Vormittag, Sessel, im Hintergrund ein Bücherregal und eine Zimmerpflanze. Lighting: Weiches Tageslicht von rechts durch ein großes Fenster, bedeckter Himmel.\n\nActions:\n- Gesicht hellt sich auf, sie sitzt aufrechter, Augen werden heller\n- Tippt einmal auf die Dose, Mundwinkel zuckt, fast ein Lächeln\n- 'daran lag es?' fast geflüstert, dann warmes Lächeln bei 'Routine'\n- Leichtes Handy-Wackeln, Frontkamera nah am Gesicht\n\nDialogue (spoken out loud by the character):\n'Nach einer Woche hab ich keinen Tag ausgelassen. Ich so, daran lag es? Nach vier Wochen ist es einfach Routine.'\n\nAudio: Nur die Stimme der Person — pure dialogue. iPhone 15 Pro mic. Energie hebt sich, ruhige Überraschung und Erleichterung. Keine Musik, keine Hintergrundgeräusche, keine Soundeffekte, kein Foley, kein Raumton."
  },
  {
    "id": "clip-8",
    "title": "CLIP 8 — DER CTA",
    "content": "A casual selfie-style iPhone 15 Pro front-camera vertical video (9:16) filmed === IN EINEM WOHNZIMMER AM VORMITTAG ===.\n\nCharacter: Birgit, eine 52-jährige Frau mit grauen kinnlangen Haaren und Lesebrille im Haar, gestrickter Cardigan.\n\nSetting: Wohnzimmer am Vormittag, Sessel, im Hintergrund ein Bücherregal und eine Zimmerpflanze. Lighting: Weiches Tageslicht von rechts durch ein großes Fenster, bedeckter Himmel.\n\nActions:\n- Ehrliches warmes Lächeln, entspannte Haltung, Schultern locker\n- Leichtes Schulterzucken bei 'weniger als die Tinktur'\n- Direkter Blickkontakt bei 'probiers', zeigt locker nach unten\n- Leichtes Handy-Wackeln, Frontkamera nah am Gesicht\n\nDialogue (spoken out loud by the character):\n'Kostet weniger als die Tinktur die ich nachbestellt hätte. Wenn du auch schludern würdest, probiers. Link unten.'\n\nAudio: Nur die Stimme der Person — pure dialogue. iPhone 15 Pro mic. Stimme warm, direkt, ruhig und bestimmt. Keine Musik, keine Hintergrundgeräusche, keine Soundeffekte, kein Foley, kein Raumton."
  },
  {
    "id": "voiceover",
    "title": "VOICEOVER SPECS",
    "content": "Voice: weiblich, 48 bis 56, warm und nahbar.\nAccent: Hochdeutsch mit leicht umgangssprachlichem Touch, erfahrene Frau Anfang fünfzig-Energie.\nTone: Locker, echt, wie ein Gespräch mit einer engen Freundin.\nEnergy: Beginnt müde und genervt, steigert sich zu hoffnungsvoll, endet warm und hilfreich.\n\nElevenLabs Settings:\n- Stability: 0.35\n- Similarity: 0.75\n- Style Exaggeration: 0.20\n- Speaker Boost: ON\n\nClip-by-clip delivery — match the tone described in each section's Audio block. Reminder: every video clip is DIALOGUE-ONLY. No music, no SFX, no foley, no ambient sound is added at the video-generation step; this voiceover IS the audio."
  },
  {
    "id": "full-dialogue",
    "title": "FULL DIALOGUE (export for TTS / subtitle file)",
    "content": "=== HOOK A — pick ONE hook for the actual ad ===\nIch hab zwei Jahre lang mit der Pipette rumgetropft. Seit dem hier nehm ich morgens eine und bin fertig.\n\n=== CLIP 1 ===\nIch hab vor zwei Jahren mit so einer Kräutertinktur angefangen. Dreimal am Tag zwanzig Tropfen. Klang machbar.\n\n=== CLIP 2 ===\nWar es aber nicht. Der Geschmack bleibt, und dreimal am Tag schaffst du im Alltag einfach nicht. Ich hab geschludert.\n\n=== CLIP 3 ===\nHab alles probiert. Tropfen in Wasser, noch bitterer. In Honig, klebrig. Hartkapseln, die stoßen auf.\n\n=== CLIP 4 ===\nMeine Heilpraktikerin meinte, wenn du es nicht durchhältst bringt die beste Mischung nichts. Das hat gesessen.\n\n=== CLIP 5 ===\nDann hab ich kapiert dass es nicht am Inhalt lag sondern an der Form. Softgel statt Tropfen. Ich so: ach so.\n\n=== CLIP 6 — PRODUKT SICHTBAR ===\nAlso hab ich dieses Ding bestellt. Vier Sachen in einer Softgel, morgens eine mit Wasser. Man schmeckt nichts.\n\n=== CLIP 7 ===\nNach einer Woche hab ich keinen Tag ausgelassen. Ich so, daran lag es? Nach vier Wochen ist es einfach Routine.\n\n=== CLIP 8 — CTA ===\nKostet weniger als die Tinktur die ich nachbestellt hätte. Wenn du auch schludern würdest, probiers. Link unten."
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
