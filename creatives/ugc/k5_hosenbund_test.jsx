import { useState } from "react";

const sections = [
  {
    "id": "character",
    "title": "CHARACTER, SETTING & LIGHTING",
    "content": "Character: Sarah, eine 34-jährige Frau mit langen braunen Haaren, offen, ungeschminkt, weites Leinenhemd.\n\nSetting: Schlafzimmer am Abend, sie sitzt auf der Bettkante, Kleiderschrank halb offen im Hintergrund.\n\nLighting: Warmes gedimmtes Licht von einer Nachttischlampe rechts, sonst dunkler Raum.\n\nCamera: iPhone 15 Pro Frontkamera, vertikal 9:16."
  },
  {
    "id": "hook-a",
    "title": "HOOK A — Product Reveal (holds the product)",
    "productVisible": true,
    "content": "A casual selfie-style iPhone 15 Pro front-camera vertical video (9:16) filmed === AUF EINER BETTKANTE AM ABEND ===.\n\n🔴 PRODUKT-CLIP: Sie hält die mysolv Softgel-Dose (kleine weiße Dose mit hellem Etikett, passt in eine Handfläche) auf Brusthöhe, locker, wie wenn sie einer Freundin etwas zeigt.\n\nCharacter: Sarah, eine 34-jährige Frau mit langen braunen Haaren, offen, ungeschminkt, weites Leinenhemd.\n\nSetting: Schlafzimmer am Abend, sie sitzt auf der Bettkante, Kleiderschrank halb offen im Hintergrund. Lighting: Warmes gedimmtes Licht von einer Nachttischlampe rechts, sonst dunkler Raum.\n\nActions:\n- Schultern heben sich beim Einatmen, Blick kurz auf die Dose, dann zur Linse\n- Mundwinkel zuckt bei 'vier Wochen', fast ein Lächeln, unterdrückt\n- Streicht sich eine lose Strähne hinters Ohr, hält die Dose locker\n- Leichtes Handy-Wackeln, Frontkamera nah am Gesicht\n\nDialogue (spoken out loud by the character):\n'Ich zeig dir kurz was. Das hier nehm ich seit vier Wochen, und mein Abend fühlt sich einfach anders an.'\n\nAudio: Nur die Stimme der Person — pure dialogue. iPhone 15 Pro mic. Keine Musik, keine Hintergrundgeräusche, keine Soundeffekte, kein Foley, kein Raumton."
  },
  {
    "id": "hook-b",
    "title": "HOOK B — Symptom Demo",
    "content": "A casual selfie-style iPhone 15 Pro front-camera vertical video (9:16) filmed === AUF EINER BETTKANTE AM ABEND ===.\n\nCharacter: Sarah, eine 34-jährige Frau mit langen braunen Haaren, offen, ungeschminkt, weites Leinenhemd.\n\nSetting: Schlafzimmer am Abend, sie sitzt auf der Bettkante, Kleiderschrank halb offen im Hintergrund. Lighting: Warmes gedimmtes Licht von einer Nachttischlampe rechts, sonst dunkler Raum.\n\nActions:\n- Deutet mit dem Daumen kurz Richtung Hüfte, Blick folgt der Bewegung\n- Augen weiten sich, Schultern heben sich beim Einatmen vor 'abends'\n- Kleines resigniertes Schulterzucken, halbes Lachen als Nachklang\n- Leichtes Handy-Wackeln, Frontkamera nah am Gesicht\n\nDialogue (spoken out loud by the character):\n'Morgens passt die Jeans. Abends machst du als Erstes den Knopf auf. Ich hab jahrelang gedacht das ist normal.'\n\nAudio: Nur die Stimme der Person — pure dialogue. iPhone 15 Pro mic. Keine Musik, keine Hintergrundgeräusche, keine Soundeffekte, kein Foley, kein Raumton."
  },
  {
    "id": "hook-c",
    "title": "HOOK C — Relatable Frustration",
    "content": "A casual selfie-style iPhone 15 Pro front-camera vertical video (9:16) filmed === AUF EINER BETTKANTE AM ABEND ===.\n\nCharacter: Sarah, eine 34-jährige Frau mit langen braunen Haaren, offen, ungeschminkt, weites Leinenhemd.\n\nSetting: Schlafzimmer am Abend, sie sitzt auf der Bettkante, Kleiderschrank halb offen im Hintergrund. Lighting: Warmes gedimmtes Licht von einer Nachttischlampe rechts, sonst dunkler Raum.\n\nActions:\n- Greift Richtung Hüfte, stoppt mitten in der Bewegung, Blick hoch\n- Blick flackert kurz weg, dann direkt in die Linse, wissender Ausdruck\n- Schultern sinken, sie atmet sichtbar aus bei 'jeden einzelnen Abend'\n- Leichtes Handy-Wackeln, Frontkamera nah am Gesicht\n\nDialogue (spoken out loud by the character):\n'Wenn du abends auf dem Sofa als Erstes den Hosenknopf aufmachst — ja. Ich auch. Jeden einzelnen Abend.'\n\nAudio: Nur die Stimme der Person — pure dialogue. iPhone 15 Pro mic. Keine Musik, keine Hintergrundgeräusche, keine Soundeffekte, kein Foley, kein Raumton."
  },
  {
    "id": "hook-d",
    "title": "HOOK D — Almost Made A Mistake",
    "content": "A casual selfie-style iPhone 15 Pro front-camera vertical video (9:16) filmed === AUF EINER BETTKANTE AM ABEND ===.\n\nCharacter: Sarah, eine 34-jährige Frau mit langen braunen Haaren, offen, ungeschminkt, weites Leinenhemd.\n\nSetting: Schlafzimmer am Abend, sie sitzt auf der Bettkante, Kleiderschrank halb offen im Hintergrund. Lighting: Warmes gedimmtes Licht von einer Nachttischlampe rechts, sonst dunkler Raum.\n\nActions:\n- Locker verschränkte Arme, Blick flackert nach oben-links beim Erinnern\n- Löst die Arme bei 'hundertfünfzig', Kiefer spannt sich an\n- Lehnt sich vor bei 'Verzweiflung', hält den Blick zu lang\n- Leichtes Handy-Wackeln, Frontkamera nah am Gesicht\n\nDialogue (spoken out loud by the character):\n'Ich war kurz davor mir ein Kur-Set für hundertfünfzig Franken zu bestellen. Aus reiner Verzweiflung.'\n\nAudio: Nur die Stimme der Person — pure dialogue. iPhone 15 Pro mic. Keine Musik, keine Hintergrundgeräusche, keine Soundeffekte, kein Foley, kein Raumton."
  },
  {
    "id": "hook-e",
    "title": "HOOK E — Controversial Opinion",
    "content": "A casual selfie-style iPhone 15 Pro front-camera vertical video (9:16) filmed === AUF EINER BETTKANTE AM ABEND ===.\n\nCharacter: Sarah, eine 34-jährige Frau mit langen braunen Haaren, offen, ungeschminkt, weites Leinenhemd.\n\nSetting: Schlafzimmer am Abend, sie sitzt auf der Bettkante, Kleiderschrank halb offen im Hintergrund. Lighting: Warmes gedimmtes Licht von einer Nachttischlampe rechts, sonst dunkler Raum.\n\nActions:\n- Legt das Handy kurz ab, nimmt es wieder, Schultern heben sich beim Einatmen\n- Schaut direkt in die Linse, eine Augenbraue hoch bei 'Zehn-Tage-Kur'\n- Zählt kurz an zwei Fingern ab, ruhiges bestimmtes Nicken\n- Leichtes Handy-Wackeln, Frontkamera nah am Gesicht\n\nDialogue (spoken out loud by the character):\n'Unpopuläre Meinung: du brauchst keine Zehn-Tage-Kur. Du brauchst was das du in Woche sechs noch nimmst.'\n\nAudio: Nur die Stimme der Person — pure dialogue. iPhone 15 Pro mic. Keine Musik, keine Hintergrundgeräusche, keine Soundeffekte, kein Foley, kein Raumton."
  },
  {
    "id": "clip-1",
    "title": "CLIP 1 — DER ANFANG",
    "content": "A casual selfie-style iPhone 15 Pro front-camera vertical video (9:16) filmed === AUF EINER BETTKANTE AM ABEND ===.\n\nCharacter: Sarah, eine 34-jährige Frau mit langen braunen Haaren, offen, ungeschminkt, weites Leinenhemd.\n\nSetting: Schlafzimmer am Abend, sie sitzt auf der Bettkante, Kleiderschrank halb offen im Hintergrund. Lighting: Warmes gedimmtes Licht von einer Nachttischlampe rechts, sonst dunkler Raum.\n\nActions:\n- Sinkt auf der Bettkante leicht zusammen, Schultern sinken\n- Blick flackert nach oben-links beim Erinnern, an der Linse vorbei\n- Unregelmäßiges Blinzeln, ein langsamer schwerer Lidschlag\n- Leichtes Handy-Wackeln, Frontkamera nah am Gesicht\n\nDialogue (spoken out loud by the character):\n'Das geht bei mir seit letztem Frühling. Morgens ist alles gut, und ab nachmittags wird der Hosenbund eng.'\n\nAudio: Nur die Stimme der Person — pure dialogue. iPhone 15 Pro mic. Stimme müde, sachlich, erzählend. Keine Musik, keine Hintergrundgeräusche, keine Soundeffekte, kein Foley, kein Raumton."
  },
  {
    "id": "clip-2",
    "title": "CLIP 2 — ES WURDE SCHLIMMER",
    "content": "A casual selfie-style iPhone 15 Pro front-camera vertical video (9:16) filmed === AUF EINER BETTKANTE AM ABEND ===.\n\nCharacter: Sarah, eine 34-jährige Frau mit langen braunen Haaren, offen, ungeschminkt, weites Leinenhemd.\n\nSetting: Schlafzimmer am Abend, sie sitzt auf der Bettkante, Kleiderschrank halb offen im Hintergrund. Lighting: Warmes gedimmtes Licht von einer Nachttischlampe rechts, sonst dunkler Raum.\n\nActions:\n- Zupft am Saum des weiten Hemds, Blick geht kurz nach unten\n- Langsames Kopfschütteln, Kiefer spannt sich bei 'nichts mehr zu planen'\n- Hand wandert kurz zum Schlüsselbein, Schultern sinken\n- Leichtes Handy-Wackeln, Frontkamera nah am Gesicht\n\nDialogue (spoken out loud by the character):\n'Wurde nicht besser. Ich hab angefangen weite Sachen zu tragen und abends nichts mehr zu planen.'\n\nAudio: Nur die Stimme der Person — pure dialogue. iPhone 15 Pro mic. Stimme leiser, resigniert. Keine Musik, keine Hintergrundgeräusche, keine Soundeffekte, kein Foley, kein Raumton."
  },
  {
    "id": "clip-3",
    "title": "CLIP 3 — ALLES PROBIERT",
    "content": "A casual selfie-style iPhone 15 Pro front-camera vertical video (9:16) filmed === AUF EINER BETTKANTE AM ABEND ===.\n\nCharacter: Sarah, eine 34-jährige Frau mit langen braunen Haaren, offen, ungeschminkt, weites Leinenhemd.\n\nSetting: Schlafzimmer am Abend, sie sitzt auf der Bettkante, Kleiderschrank halb offen im Hintergrund. Lighting: Warmes gedimmtes Licht von einer Nachttischlampe rechts, sonst dunkler Raum.\n\nActions:\n- Hält die Hand hoch, zählt an den Fingern ab, Kiefer leicht angespannt\n- Kleine abweisende Geste bei 'vierzig Franken', bitteres halbes Lachen\n- Lässt die Hände in den Schoß fallen, Schultern sinken\n- Leichtes Handy-Wackeln, Frontkamera nah am Gesicht\n\nDialogue (spoken out loud by the character):\n'Hab alles probiert. Kein Brot mehr. Tee nach dem Essen. So ein Pulver für vierzig Franken. Nichts hat sich geändert.'\n\nAudio: Nur die Stimme der Person — pure dialogue. iPhone 15 Pro mic. Aufzählungs-Energie, leichte Genervtheit. Keine Musik, keine Hintergrundgeräusche, keine Soundeffekte, kein Foley, kein Raumton."
  },
  {
    "id": "clip-4",
    "title": "CLIP 4 — DAS LOW-POINT GESPRÄCH",
    "content": "A casual selfie-style iPhone 15 Pro front-camera vertical video (9:16) filmed === AUF EINER BETTKANTE AM ABEND ===.\n\nCharacter: Sarah, eine 34-jährige Frau mit langen braunen Haaren, offen, ungeschminkt, weites Leinenhemd.\n\nSetting: Schlafzimmer am Abend, sie sitzt auf der Bettkante, Kleiderschrank halb offen im Hintergrund. Lighting: Warmes gedimmtes Licht von einer Nachttischlampe rechts, sonst dunkler Raum.\n\nActions:\n- Pausiert, Blick sinkt auf die eigenen Hände, kurzer Atem-Stopp\n- Schluckt kurz, bevor sie 'und jetzt' sagt, Augen kurz glasig\n- Leichtes Kopfschütteln, hält den Blick danach zu lang\n- Leichtes Handy-Wackeln, Frontkamera nah am Gesicht\n\nDialogue (spoken out loud by the character):\n'Meine Ärztin hat alles durchgecheckt, da war nichts. Und ich saß da und dachte, und jetzt? Damit leben?'\n\nAudio: Nur die Stimme der Person — pure dialogue. iPhone 15 Pro mic. Stimme langsamer, ernster, leichte Verletzlichkeit. Keine Musik, keine Hintergrundgeräusche, keine Soundeffekte, kein Foley, kein Raumton."
  },
  {
    "id": "clip-5",
    "title": "CLIP 5 — DIE ENTDECKUNG",
    "content": "A casual selfie-style iPhone 15 Pro front-camera vertical video (9:16) filmed === AUF EINER BETTKANTE AM ABEND ===.\n\nCharacter: Sarah, eine 34-jährige Frau mit langen braunen Haaren, offen, ungeschminkt, weites Leinenhemd.\n\nSetting: Schlafzimmer am Abend, sie sitzt auf der Bettkante, Kleiderschrank halb offen im Hintergrund. Lighting: Warmes gedimmtes Licht von einer Nachttischlampe rechts, sonst dunkler Raum.\n\nActions:\n- Augenbrauen heben sich bei 'über Wochen', Schultern heben sich beim Einatmen\n- Lehnt sich leicht vor, engagiert, Blick fixiert die Linse\n- Öffnet eine Hand bei 'nicht mit fünf Produkten', leichtes Nicken\n- Leichtes Handy-Wackeln, Frontkamera nah am Gesicht\n\nDialogue (spoken out loud by the character):\n'Dann hab ich gelesen wie Leute das über Wochen angehen statt über drei Tage. Und nicht mit fünf Produkten.'\n\nAudio: Nur die Stimme der Person — pure dialogue. iPhone 15 Pro mic. Stimme neugierig, leicht ungläubig. Keine Musik, keine Hintergrundgeräusche, keine Soundeffekte, kein Foley, kein Raumton."
  },
  {
    "id": "clip-6",
    "title": "CLIP 6 — DAS PRODUKT (PRODUKT SICHTBAR)",
    "productVisible": true,
    "content": "A casual selfie-style iPhone 15 Pro front-camera vertical video (9:16) filmed === AUF EINER BETTKANTE AM ABEND ===.\n\n🔴 PRODUKT-CLIP: Sie hält die mysolv Softgel-Dose (kleine weiße Dose mit hellem Etikett, passt in eine Handfläche) auf Brusthöhe, locker, wie wenn sie einer Freundin etwas zeigt.\n\nCharacter: Sarah, eine 34-jährige Frau mit langen braunen Haaren, offen, ungeschminkt, weites Leinenhemd.\n\nSetting: Schlafzimmer am Abend, sie sitzt auf der Bettkante, Kleiderschrank halb offen im Hintergrund. Lighting: Warmes gedimmtes Licht von einer Nachttischlampe rechts, sonst dunkler Raum.\n\nActions:\n- Greift zum Nachttisch, nimmt die Dose, dreht sie einmal\n- Hält sie auf Brusthöhe, Schulterzucken bei 'nicht viel erwartet'\n- Legt sie sich locker in den Schoß, beide Hände drumherum\n- Leichtes Handy-Wackeln, Frontkamera nah am Gesicht\n\nDialogue (spoken out loud by the character):\n'Also hab ich dieses Ding bestellt. Vier Sachen in einer Kapsel, morgens eine. Hab ehrlich nicht viel erwartet.'\n\nAudio: Nur die Stimme der Person — pure dialogue. iPhone 15 Pro mic. Stimme locker, niedrige Erwartungen, untertrieben. Keine Musik, keine Hintergrundgeräusche, keine Soundeffekte, kein Foley, kein Raumton."
  },
  {
    "id": "clip-7",
    "title": "CLIP 7 — DIE ERGEBNISSE",
    "content": "A casual selfie-style iPhone 15 Pro front-camera vertical video (9:16) filmed === AUF EINER BETTKANTE AM ABEND ===.\n\nCharacter: Sarah, eine 34-jährige Frau mit langen braunen Haaren, offen, ungeschminkt, weites Leinenhemd.\n\nSetting: Schlafzimmer am Abend, sie sitzt auf der Bettkante, Kleiderschrank halb offen im Hintergrund. Lighting: Warmes gedimmtes Licht von einer Nachttischlampe rechts, sonst dunkler Raum.\n\nActions:\n- Gesicht hellt sich auf, sie sitzt aufrechter, Augen werden heller\n- Hand geht kurz Richtung Hüfte und wieder weg, Augen kurz glasig\n- 'Moment mal' fast geflüstert, dann echtes Lächeln als Nachklang\n- Leichtes Handy-Wackeln, Frontkamera nah am Gesicht\n\nDialogue (spoken out loud by the character):\n'Nach zwei Wochen ist mir abends was aufgefallen. Ich hab den Knopf gar nicht aufgemacht. Ich so, Moment mal.'\n\nAudio: Nur die Stimme der Person — pure dialogue. iPhone 15 Pro mic. Energie hebt sich, echte Überraschung und Erleichterung. Keine Musik, keine Hintergrundgeräusche, keine Soundeffekte, kein Foley, kein Raumton."
  },
  {
    "id": "clip-8",
    "title": "CLIP 8 — DER CTA",
    "content": "A casual selfie-style iPhone 15 Pro front-camera vertical video (9:16) filmed === AUF EINER BETTKANTE AM ABEND ===.\n\nCharacter: Sarah, eine 34-jährige Frau mit langen braunen Haaren, offen, ungeschminkt, weites Leinenhemd.\n\nSetting: Schlafzimmer am Abend, sie sitzt auf der Bettkante, Kleiderschrank halb offen im Hintergrund. Lighting: Warmes gedimmtes Licht von einer Nachttischlampe rechts, sonst dunkler Raum.\n\nActions:\n- Ehrliches warmes Lächeln, entspannte Haltung, Schultern locker\n- Leichtes Schulterzucken bei 'weniger als das Set'\n- Direkter Blickkontakt bei 'deinen Abend kennst', zeigt locker nach unten\n- Leichtes Handy-Wackeln, Frontkamera nah am Gesicht\n\nDialogue (spoken out loud by the character):\n'Kostet weniger als das Set das ich fast bestellt hätte. Wenn du deinen Abend kennst, probiers. Link ist unten.'\n\nAudio: Nur die Stimme der Person — pure dialogue. iPhone 15 Pro mic. Stimme warm, direkt, Freundin-gibt-Rat-Energie. Keine Musik, keine Hintergrundgeräusche, keine Soundeffekte, kein Foley, kein Raumton."
  },
  {
    "id": "voiceover",
    "title": "VOICEOVER SPECS",
    "content": "Voice: weiblich, 30 bis 38, warm und nahbar.\nAccent: Hochdeutsch mit leicht umgangssprachlichem Touch, junge berufstätige Frau Anfang dreißig-Energie.\nTone: Locker, echt, wie ein Gespräch mit einer engen Freundin.\nEnergy: Beginnt müde und genervt, steigert sich zu hoffnungsvoll, endet warm und hilfreich.\n\nElevenLabs Settings:\n- Stability: 0.35\n- Similarity: 0.75\n- Style Exaggeration: 0.20\n- Speaker Boost: ON\n\nClip-by-clip delivery — match the tone described in each section's Audio block. Reminder: every video clip is DIALOGUE-ONLY. No music, no SFX, no foley, no ambient sound is added at the video-generation step; this voiceover IS the audio."
  },
  {
    "id": "full-dialogue",
    "title": "FULL DIALOGUE (export for TTS / subtitle file)",
    "content": "=== HOOK A — pick ONE hook for the actual ad ===\nIch zeig dir kurz was. Das hier nehm ich seit vier Wochen, und mein Abend fühlt sich einfach anders an.\n\n=== CLIP 1 ===\nDas geht bei mir seit letztem Frühling. Morgens ist alles gut, und ab nachmittags wird der Hosenbund eng.\n\n=== CLIP 2 ===\nWurde nicht besser. Ich hab angefangen weite Sachen zu tragen und abends nichts mehr zu planen.\n\n=== CLIP 3 ===\nHab alles probiert. Kein Brot mehr. Tee nach dem Essen. So ein Pulver für vierzig Franken. Nichts hat sich geändert.\n\n=== CLIP 4 ===\nMeine Ärztin hat alles durchgecheckt, da war nichts. Und ich saß da und dachte, und jetzt? Damit leben?\n\n=== CLIP 5 ===\nDann hab ich gelesen wie Leute das über Wochen angehen statt über drei Tage. Und nicht mit fünf Produkten.\n\n=== CLIP 6 — PRODUKT SICHTBAR ===\nAlso hab ich dieses Ding bestellt. Vier Sachen in einer Kapsel, morgens eine. Hab ehrlich nicht viel erwartet.\n\n=== CLIP 7 ===\nNach zwei Wochen ist mir abends was aufgefallen. Ich hab den Knopf gar nicht aufgemacht. Ich so, Moment mal.\n\n=== CLIP 8 — CTA ===\nKostet weniger als das Set das ich fast bestellt hätte. Wenn du deinen Abend kennst, probiers. Link ist unten."
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
