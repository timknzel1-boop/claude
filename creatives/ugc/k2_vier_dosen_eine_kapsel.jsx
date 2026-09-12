import { useState } from "react";

const sections = [
  {
    "id": "character",
    "title": "CHARACTER, SETTING & LIGHTING",
    "content": "Character: Marco, ein 45-jähriger Mann mit kurzen grauen Haaren und Dreitagebart, einfaches dunkles T-Shirt.\n\nSetting: Esstisch in einer Wohnküche, im Hintergrund ein Regal mit Gläsern.\n\nLighting: Warmes Tageslicht von der Seite, späte Nachmittagssonne, keine Lampen an.\n\nCamera: iPhone 15 Pro Frontkamera, vertikal 9:16."
  },
  {
    "id": "hook-a",
    "title": "HOOK A — Product Reveal (holds the product)",
    "productVisible": true,
    "content": "A casual selfie-style iPhone 15 Pro front-camera vertical video (9:16) filmed === AN EINEM ESSTISCH ===.\n\n🔴 PRODUKT-CLIP: Er hält die mysolv Softgel-Dose (kleine weiße Dose mit hellem Etikett, passt in eine Handfläche) auf Brusthöhe, locker, wie wenn er einer Freundin etwas zeigt.\n\nCharacter: Marco, ein 45-jähriger Mann mit kurzen grauen Haaren und Dreitagebart, einfaches dunkles T-Shirt.\n\nSetting: Esstisch in einer Wohnküche, im Hintergrund ein Regal mit Gläsern. Lighting: Warmes Tageslicht von der Seite, späte Nachmittagssonne, keine Lampen an.\n\nActions:\n- Zeigt mit der freien Hand auf eine leere Stelle auf dem Tisch, dann Blick zur Linse\n- Schultern heben sich beim Einatmen, eine Augenbraue hebt sich bei 'vier'\n- Hebt die Dose auf Brusthöhe, kurzes Schulterzucken als Nachklang\n- Leichtes Handy-Wackeln, Frontkamera nah am Gesicht\n\nDialogue (spoken out loud by the character):\n'Hier standen mal vier Dosen. Jeden Morgen vier Stück aufmachen. Heute ist es nur noch das hier.'\n\nAudio: Nur die Stimme der Person — pure dialogue. iPhone 15 Pro mic. Keine Musik, keine Hintergrundgeräusche, keine Soundeffekte, kein Foley, kein Raumton."
  },
  {
    "id": "hook-b",
    "title": "HOOK B — Symptom Demo",
    "content": "A casual selfie-style iPhone 15 Pro front-camera vertical video (9:16) filmed === AN EINEM ESSTISCH ===.\n\nCharacter: Marco, ein 45-jähriger Mann mit kurzen grauen Haaren und Dreitagebart, einfaches dunkles T-Shirt.\n\nSetting: Esstisch in einer Wohnküche, im Hintergrund ein Regal mit Gläsern. Lighting: Warmes Tageslicht von der Seite, späte Nachmittagssonne, keine Lampen an.\n\nActions:\n- Zeigt mit vier Fingern, hält sie kurz in die Kamera\n- Augen weiten sich, Schultern heben sich beim Einatmen vor 'jetzt schau'\n- Klappt die Finger bis auf einen zu, trockenes halbes Lachen\n- Leichtes Handy-Wackeln, Frontkamera nah am Gesicht\n\nDialogue (spoken out loud by the character):\n'Das war mein Regal im Januar. Vier Dosen, jeden Morgen vier mal aufmachen. Jetzt schau — eine.'\n\nAudio: Nur die Stimme der Person — pure dialogue. iPhone 15 Pro mic. Keine Musik, keine Hintergrundgeräusche, keine Soundeffekte, kein Foley, kein Raumton."
  },
  {
    "id": "hook-c",
    "title": "HOOK C — Relatable Frustration",
    "content": "A casual selfie-style iPhone 15 Pro front-camera vertical video (9:16) filmed === AN EINEM ESSTISCH ===.\n\nCharacter: Marco, ein 45-jähriger Mann mit kurzen grauen Haaren und Dreitagebart, einfaches dunkles T-Shirt.\n\nSetting: Esstisch in einer Wohnküche, im Hintergrund ein Regal mit Gläsern. Lighting: Warmes Tageslicht von der Seite, späte Nachmittagssonne, keine Lampen an.\n\nActions:\n- Macht eine Schraubbewegung in der Luft, stoppt mitten drin\n- Blick flackert kurz weg, dann direkt in die Linse, wissender Ausdruck\n- Reibt sich den Nacken, Schultern sinken, er atmet sichtbar aus\n- Leichtes Handy-Wackeln, Frontkamera nah am Gesicht\n\nDialogue (spoken out loud by the character):\n'Wenn du morgens vier Dosen aufmachst und abends merkst du hast zwei vergessen — ja. Kenn ich.'\n\nAudio: Nur die Stimme der Person — pure dialogue. iPhone 15 Pro mic. Keine Musik, keine Hintergrundgeräusche, keine Soundeffekte, kein Foley, kein Raumton."
  },
  {
    "id": "hook-d",
    "title": "HOOK D — Almost Made A Mistake",
    "content": "A casual selfie-style iPhone 15 Pro front-camera vertical video (9:16) filmed === AN EINEM ESSTISCH ===.\n\nCharacter: Marco, ein 45-jähriger Mann mit kurzen grauen Haaren und Dreitagebart, einfaches dunkles T-Shirt.\n\nSetting: Esstisch in einer Wohnküche, im Hintergrund ein Regal mit Gläsern. Lighting: Warmes Tageslicht von der Seite, späte Nachmittagssonne, keine Lampen an.\n\nActions:\n- Locker verschränkte Arme, Blick nach oben-links beim Rechnen\n- Löst die Arme bei 'hundert Franken', Kiefer spannt sich an\n- Lehnt sich vor bei 'gelassen', hält den Blick zu lang\n- Leichtes Handy-Wackeln, Frontkamera nah am Gesicht\n\nDialogue (spoken out loud by the character):\n'Ich hatte vier neue Dosen im Warenkorb, über hundert Franken. Dann hab ich kurz nachgerechnet und es gelassen.'\n\nAudio: Nur die Stimme der Person — pure dialogue. iPhone 15 Pro mic. Keine Musik, keine Hintergrundgeräusche, keine Soundeffekte, kein Foley, kein Raumton."
  },
  {
    "id": "hook-e",
    "title": "HOOK E — Controversial Opinion",
    "content": "A casual selfie-style iPhone 15 Pro front-camera vertical video (9:16) filmed === AN EINEM ESSTISCH ===.\n\nCharacter: Marco, ein 45-jähriger Mann mit kurzen grauen Haaren und Dreitagebart, einfaches dunkles T-Shirt.\n\nSetting: Esstisch in einer Wohnküche, im Hintergrund ein Regal mit Gläsern. Lighting: Warmes Tageslicht von der Seite, späte Nachmittagssonne, keine Lampen an.\n\nActions:\n- Greift nach dem Handy, legt es zurück, Schultern heben sich beim Einatmen\n- Schaut direkt in die Linse, zählt kurz an zwei Fingern ab\n- Abweisende Handbewegung bei 'mehr Dosen', trockenes halbes Lachen\n- Leichtes Handy-Wackeln, Frontkamera nah am Gesicht\n\nDialogue (spoken out loud by the character):\n'Unpopuläre Meinung: die meisten Kuren verkaufen dir vor allem eins. Mehr Dosen. Nicht mehr Ergebnis.'\n\nAudio: Nur die Stimme der Person — pure dialogue. iPhone 15 Pro mic. Keine Musik, keine Hintergrundgeräusche, keine Soundeffekte, kein Foley, kein Raumton."
  },
  {
    "id": "clip-1",
    "title": "CLIP 1 — DER ANFANG",
    "content": "A casual selfie-style iPhone 15 Pro front-camera vertical video (9:16) filmed === AN EINEM ESSTISCH ===.\n\nCharacter: Marco, ein 45-jähriger Mann mit kurzen grauen Haaren und Dreitagebart, einfaches dunkles T-Shirt.\n\nSetting: Esstisch in einer Wohnküche, im Hintergrund ein Regal mit Gläsern. Lighting: Warmes Tageslicht von der Seite, späte Nachmittagssonne, keine Lampen an.\n\nActions:\n- Lehnt sich am Tisch zurück, Schultern sinken, er atmet sichtbar aus\n- Blick flackert nach oben-links beim Erinnern, leicht an der Linse vorbei\n- Tippt beim Aufzählen leicht mit dem Finger auf die Tischplatte\n- Leichtes Handy-Wackeln, Frontkamera nah am Gesicht\n\nDialogue (spoken out loud by the character):\n'Ich hab letztes Jahr angefangen. Erst eine Dose, dann zwei. Irgendwann standen vier auf dem Küchenregal.'\n\nAudio: Nur die Stimme der Person — pure dialogue. iPhone 15 Pro mic. Stimme ruhig, sachlich, erzählend. Keine Musik, keine Hintergrundgeräusche, keine Soundeffekte, kein Foley, kein Raumton."
  },
  {
    "id": "clip-2",
    "title": "CLIP 2 — ES WURDE SCHLIMMER",
    "content": "A casual selfie-style iPhone 15 Pro front-camera vertical video (9:16) filmed === AN EINEM ESSTISCH ===.\n\nCharacter: Marco, ein 45-jähriger Mann mit kurzen grauen Haaren und Dreitagebart, einfaches dunkles T-Shirt.\n\nSetting: Esstisch in einer Wohnküche, im Hintergrund ein Regal mit Gläsern. Lighting: Warmes Tageslicht von der Seite, späte Nachmittagssonne, keine Lampen an.\n\nActions:\n- Langsames Kopfschütteln, eine Augenbraue hebt sich\n- Hand wandert kurz zum Nacken, Kiefer spannt sich bei 'kein Plan mehr'\n- Kleine Gewichtsverlagerung, er setzt sich neu hin\n- Leichtes Handy-Wackeln, Frontkamera nah am Gesicht\n\nDialogue (spoken out loud by the character):\n'Und dann vergisst du halt. Montag zwei genommen, Dienstag keine. Nach einem Monat war das kein Plan mehr.'\n\nAudio: Nur die Stimme der Person — pure dialogue. iPhone 15 Pro mic. Stimme animierter, leicht genervt über sich selbst. Keine Musik, keine Hintergrundgeräusche, keine Soundeffekte, kein Foley, kein Raumton."
  },
  {
    "id": "clip-3",
    "title": "CLIP 3 — ALLES PROBIERT",
    "content": "A casual selfie-style iPhone 15 Pro front-camera vertical video (9:16) filmed === AN EINEM ESSTISCH ===.\n\nCharacter: Marco, ein 45-jähriger Mann mit kurzen grauen Haaren und Dreitagebart, einfaches dunkles T-Shirt.\n\nSetting: Esstisch in einer Wohnküche, im Hintergrund ein Regal mit Gläsern. Lighting: Warmes Tageslicht von der Seite, späte Nachmittagssonne, keine Lampen an.\n\nActions:\n- Hält die Hand hoch, zählt an den Fingern ab, Kiefer leicht angespannt\n- Kleine abweisende Geste bei 'ignoriert', bitteres halbes Lachen\n- Lässt die Hände auf den Tisch fallen, Schultern sinken\n- Leichtes Handy-Wackeln, Frontkamera nah am Gesicht\n\nDialogue (spoken out loud by the character):\n'Hab alles probiert. Wochendose, zu klein für vier. Wecker am Handy, ignoriert. Zusammen über hundert im Monat.'\n\nAudio: Nur die Stimme der Person — pure dialogue. iPhone 15 Pro mic. Aufzählungs-Energie, leichte Genervtheit. Keine Musik, keine Hintergrundgeräusche, keine Soundeffekte, kein Foley, kein Raumton."
  },
  {
    "id": "clip-4",
    "title": "CLIP 4 — DAS LOW-POINT GESPRÄCH",
    "content": "A casual selfie-style iPhone 15 Pro front-camera vertical video (9:16) filmed === AN EINEM ESSTISCH ===.\n\nCharacter: Marco, ein 45-jähriger Mann mit kurzen grauen Haaren und Dreitagebart, einfaches dunkles T-Shirt.\n\nSetting: Esstisch in einer Wohnküche, im Hintergrund ein Regal mit Gläsern. Lighting: Warmes Tageslicht von der Seite, späte Nachmittagssonne, keine Lampen an.\n\nActions:\n- Pausiert, Blick sinkt auf die Hände, kurzer Atem-Stopp\n- Schluckt kurz, bevor er 'sie hatte recht' sagt\n- Leichtes Kopfnicken, hält den Blick danach zu lang\n- Leichtes Handy-Wackeln, Frontkamera nah am Gesicht\n\nDialogue (spoken out loud by the character):\n'Meine Frau meinte irgendwann, entweder machst du es richtig oder du lässt es. Und sie hatte halt recht.'\n\nAudio: Nur die Stimme der Person — pure dialogue. iPhone 15 Pro mic. Stimme langsamer, ernster, ehrlich. Keine Musik, keine Hintergrundgeräusche, keine Soundeffekte, kein Foley, kein Raumton."
  },
  {
    "id": "clip-5",
    "title": "CLIP 5 — DIE ENTDECKUNG",
    "content": "A casual selfie-style iPhone 15 Pro front-camera vertical video (9:16) filmed === AN EINEM ESSTISCH ===.\n\nCharacter: Marco, ein 45-jähriger Mann mit kurzen grauen Haaren und Dreitagebart, einfaches dunkles T-Shirt.\n\nSetting: Esstisch in einer Wohnküche, im Hintergrund ein Regal mit Gläsern. Lighting: Warmes Tageslicht von der Seite, späte Nachmittagssonne, keine Lampen an.\n\nActions:\n- Augenbrauen heben sich beim Wort 'Softgel', Schultern heben sich beim Einatmen\n- Lehnt sich vor, Unterarme auf den Tisch, Blick fixiert die Linse\n- Kurzes ungläubiges Lachen bei 'warum macht das keiner'\n- Leichtes Handy-Wackeln, Frontkamera nah am Gesicht\n\nDialogue (spoken out loud by the character):\n'Dann seh ich, dass die vier Sachen zusammen in eine Softgel passen. Ich so: und warum macht das keiner?'\n\nAudio: Nur die Stimme der Person — pure dialogue. iPhone 15 Pro mic. Stimme neugierig, leicht ungläubig. Keine Musik, keine Hintergrundgeräusche, keine Soundeffekte, kein Foley, kein Raumton."
  },
  {
    "id": "clip-6",
    "title": "CLIP 6 — DAS PRODUKT (PRODUKT SICHTBAR)",
    "productVisible": true,
    "content": "A casual selfie-style iPhone 15 Pro front-camera vertical video (9:16) filmed === AN EINEM ESSTISCH ===.\n\n🔴 PRODUKT-CLIP: Er hält die mysolv Softgel-Dose (kleine weiße Dose mit hellem Etikett, passt in eine Handfläche) auf Brusthöhe, locker, wie wenn er einer Freundin etwas zeigt.\n\nCharacter: Marco, ein 45-jähriger Mann mit kurzen grauen Haaren und Dreitagebart, einfaches dunkles T-Shirt.\n\nSetting: Esstisch in einer Wohnküche, im Hintergrund ein Regal mit Gläsern. Lighting: Warmes Tageslicht von der Seite, späte Nachmittagssonne, keine Lampen an.\n\nActions:\n- Greift neben sich, nimmt die Dose, dreht sie einmal in der Hand\n- Hält sie auf Brusthöhe, Schulterzucken bei 'mehr mach ich nicht'\n- Stellt sie mit einem kleinen Klopfen auf den Tisch\n- Leichtes Handy-Wackeln, Frontkamera nah am Gesicht\n\nDialogue (spoken out loud by the character):\n'Also hab ich dieses Ding bestellt. Vier Wirkstoffe in einer Kapsel, morgens eine mit Wasser. Mehr mach ich nicht.'\n\nAudio: Nur die Stimme der Person — pure dialogue. iPhone 15 Pro mic. Stimme locker, untertrieben, niedrige Erwartungen. Keine Musik, keine Hintergrundgeräusche, keine Soundeffekte, kein Foley, kein Raumton."
  },
  {
    "id": "clip-7",
    "title": "CLIP 7 — DIE ERGEBNISSE",
    "content": "A casual selfie-style iPhone 15 Pro front-camera vertical video (9:16) filmed === AN EINEM ESSTISCH ===.\n\nCharacter: Marco, ein 45-jähriger Mann mit kurzen grauen Haaren und Dreitagebart, einfaches dunkles T-Shirt.\n\nSetting: Esstisch in einer Wohnküche, im Hintergrund ein Regal mit Gläsern. Lighting: Warmes Tageslicht von der Seite, späte Nachmittagssonne, keine Lampen an.\n\nActions:\n- Gesicht hellt sich auf, er sitzt aufrechter\n- Tippt einmal auf die Dose, Mundwinkel zuckt, fast ein Lächeln\n- 'echt jetzt?' fast geflüstert, dann offenes Lächeln bei 'Routine'\n- Leichtes Handy-Wackeln, Frontkamera nah am Gesicht\n\nDialogue (spoken out loud by the character):\n'Nach einer Woche hab ich zum ersten Mal keinen Tag vergessen. Ich so, echt jetzt? Nach einem Monat ist es Routine.'\n\nAudio: Nur die Stimme der Person — pure dialogue. iPhone 15 Pro mic. Energie hebt sich, trockene Überraschung. Keine Musik, keine Hintergrundgeräusche, keine Soundeffekte, kein Foley, kein Raumton."
  },
  {
    "id": "clip-8",
    "title": "CLIP 8 — DER CTA",
    "content": "A casual selfie-style iPhone 15 Pro front-camera vertical video (9:16) filmed === AN EINEM ESSTISCH ===.\n\nCharacter: Marco, ein 45-jähriger Mann mit kurzen grauen Haaren und Dreitagebart, einfaches dunkles T-Shirt.\n\nSetting: Esstisch in einer Wohnküche, im Hintergrund ein Regal mit Gläsern. Lighting: Warmes Tageslicht von der Seite, späte Nachmittagssonne, keine Lampen an.\n\nActions:\n- Ehrliches warmes Lächeln, entspannte Haltung, Schultern locker\n- Leichtes Schulterzucken bei 'weniger als die vier zusammen'\n- Direkter Blickkontakt bei 'probiers', zeigt locker nach unten\n- Leichtes Handy-Wackeln, Frontkamera nah am Gesicht\n\nDialogue (spoken out loud by the character):\n'Kostet weniger als die vier Dosen zusammen. Wenn bei dir auch alles rumsteht, probiers. Link ist unten.'\n\nAudio: Nur die Stimme der Person — pure dialogue. iPhone 15 Pro mic. Stimme warm, direkt, Kumpel-gibt-Tipp-Energie. Keine Musik, keine Hintergrundgeräusche, keine Soundeffekte, kein Foley, kein Raumton."
  },
  {
    "id": "voiceover",
    "title": "VOICEOVER SPECS",
    "content": "Voice: männlich, 42 bis 50, warm und nahbar.\nAccent: Hochdeutsch mit leicht umgangssprachlichem Touch, bodenständiger Mann Mitte vierzig-Energie.\nTone: Locker, echt, wie ein Gespräch mit einer engen Freundin.\nEnergy: Beginnt müde und genervt, steigert sich zu hoffnungsvoll, endet warm und hilfreich.\n\nElevenLabs Settings:\n- Stability: 0.35\n- Similarity: 0.75\n- Style Exaggeration: 0.20\n- Speaker Boost: ON\n\nClip-by-clip delivery — match the tone described in each section's Audio block. Reminder: every video clip is DIALOGUE-ONLY. No music, no SFX, no foley, no ambient sound is added at the video-generation step; this voiceover IS the audio."
  },
  {
    "id": "full-dialogue",
    "title": "FULL DIALOGUE (export for TTS / subtitle file)",
    "content": "=== HOOK A — pick ONE hook for the actual ad ===\nHier standen mal vier Dosen. Jeden Morgen vier Stück aufmachen. Heute ist es nur noch das hier.\n\n=== CLIP 1 ===\nIch hab letztes Jahr angefangen. Erst eine Dose, dann zwei. Irgendwann standen vier auf dem Küchenregal.\n\n=== CLIP 2 ===\nUnd dann vergisst du halt. Montag zwei genommen, Dienstag keine. Nach einem Monat war das kein Plan mehr.\n\n=== CLIP 3 ===\nHab alles probiert. Wochendose, zu klein für vier. Wecker am Handy, ignoriert. Zusammen über hundert im Monat.\n\n=== CLIP 4 ===\nMeine Frau meinte irgendwann, entweder machst du es richtig oder du lässt es. Und sie hatte halt recht.\n\n=== CLIP 5 ===\nDann seh ich, dass die vier Sachen zusammen in eine Softgel passen. Ich so: und warum macht das keiner?\n\n=== CLIP 6 — PRODUKT SICHTBAR ===\nAlso hab ich dieses Ding bestellt. Vier Wirkstoffe in einer Kapsel, morgens eine mit Wasser. Mehr mach ich nicht.\n\n=== CLIP 7 ===\nNach einer Woche hab ich zum ersten Mal keinen Tag vergessen. Ich so, echt jetzt? Nach einem Monat ist es Routine.\n\n=== CLIP 8 — CTA ===\nKostet weniger als die vier Dosen zusammen. Wenn bei dir auch alles rumsteht, probiers. Link ist unten."
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
