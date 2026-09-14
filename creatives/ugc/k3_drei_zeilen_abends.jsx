import { useState } from "react";

const sections = [
  {
    "id": "character",
    "title": "CHARACTER, SETTING & LIGHTING",
    "content": "Character: Nadine, eine 41-jährige Frau mit halblangen braunen Haaren, offen, ungeschminkt, weite Strickjacke.\n\nSetting: Sofa im Wohnzimmer am Abend, eine Decke über der Lehne, ein Wasserglas auf dem Beistelltisch.\n\nLighting: Eine warme Stehlampe schräg hinter ihr, sonst dunkel, Fenster zeigt Abendblau.\n\nCamera: iPhone 15 Pro Frontkamera, vertikal 9:16."
  },
  {
    "id": "hook-a",
    "title": "HOOK A — Product Reveal (holds the product)",
    "productVisible": true,
    "content": "A casual selfie-style iPhone 15 Pro front-camera vertical video (9:16) filmed === AUF EINEM SOFA AM ABEND ===.\n\n🔴 PRODUKT-CLIP: Sie hält die mysolv Softgel-Dose (kleine weiße Dose mit hellem Etikett, passt in eine Handfläche) auf Brusthöhe, locker, wie wenn sie einer Freundin etwas zeigt.\n\nCharacter: Nadine, eine 41-jährige Frau mit halblangen braunen Haaren, offen, ungeschminkt, weite Strickjacke.\n\nSetting: Sofa im Wohnzimmer am Abend, eine Decke über der Lehne, ein Wasserglas auf dem Beistelltisch. Lighting: Eine warme Stehlampe schräg hinter ihr, sonst dunkel, Fenster zeigt Abendblau.\n\nActions:\n- Hebt ein kleines Notizheft neben die Dose, beide auf Brusthöhe\n- Schultern heben sich beim Einatmen, Blick geht vom Heft zur Linse\n- Legt das Heft weg, behält die Dose in der Hand, kurzes Schulterzucken\n- Leichtes Handy-Wackeln, Frontkamera nah am Gesicht\n\nDialogue (spoken out loud by the character):\n'Ich hab acht Wochen lang aufgeschrieben, wie ich mich abends fühle. Dann hab ich das hier bestellt.'\n\nAudio: Nur die Stimme der Person — pure dialogue. iPhone 15 Pro mic. Keine Musik, keine Hintergrundgeräusche, keine Soundeffekte, kein Foley, kein Raumton."
  },
  {
    "id": "hook-b",
    "title": "HOOK B — Symptom Demo",
    "content": "A casual selfie-style iPhone 15 Pro front-camera vertical video (9:16) filmed === AUF EINEM SOFA AM ABEND ===.\n\nCharacter: Nadine, eine 41-jährige Frau mit halblangen braunen Haaren, offen, ungeschminkt, weite Strickjacke.\n\nSetting: Sofa im Wohnzimmer am Abend, eine Decke über der Lehne, ein Wasserglas auf dem Beistelltisch. Lighting: Eine warme Stehlampe schräg hinter ihr, sonst dunkel, Fenster zeigt Abendblau.\n\nActions:\n- Legt die flache Hand auf den Bauch, schaut kurz nach unten\n- Augen weiten sich, Schultern heben sich beim Einatmen vor 'jeden Abend'\n- Kleines resigniertes Lachen, Blick zurück in die Linse\n- Leichtes Handy-Wackeln, Frontkamera nah am Gesicht\n\nDialogue (spoken out loud by the character):\n'Abends um acht saß ich immer genau so da. Hand am Bauch, Hose auf. Jeden Abend dasselbe Bild.'\n\nAudio: Nur die Stimme der Person — pure dialogue. iPhone 15 Pro mic. Keine Musik, keine Hintergrundgeräusche, keine Soundeffekte, kein Foley, kein Raumton."
  },
  {
    "id": "hook-c",
    "title": "HOOK C — Relatable Frustration",
    "content": "A casual selfie-style iPhone 15 Pro front-camera vertical video (9:16) filmed === AUF EINEM SOFA AM ABEND ===.\n\nCharacter: Nadine, eine 41-jährige Frau mit halblangen braunen Haaren, offen, ungeschminkt, weite Strickjacke.\n\nSetting: Sofa im Wohnzimmer am Abend, eine Decke über der Lehne, ein Wasserglas auf dem Beistelltisch. Lighting: Eine warme Stehlampe schräg hinter ihr, sonst dunkel, Fenster zeigt Abendblau.\n\nActions:\n- Zieht die Strickjacke enger, Schultern sinken, sie atmet sichtbar aus\n- Blick flackert kurz weg und kommt zurück, wissender Ausdruck\n- Langsames Nicken, hält den Blick einen Moment zu lang\n- Leichtes Handy-Wackeln, Frontkamera nah am Gesicht\n\nDialogue (spoken out loud by the character):\n'Wenn du morgens schon weißt, wie du dich abends fühlen wirst — ja. Genau das war mein Problem.'\n\nAudio: Nur die Stimme der Person — pure dialogue. iPhone 15 Pro mic. Keine Musik, keine Hintergrundgeräusche, keine Soundeffekte, kein Foley, kein Raumton."
  },
  {
    "id": "hook-d",
    "title": "HOOK D — Almost Made A Mistake",
    "content": "A casual selfie-style iPhone 15 Pro front-camera vertical video (9:16) filmed === AUF EINEM SOFA AM ABEND ===.\n\nCharacter: Nadine, eine 41-jährige Frau mit halblangen braunen Haaren, offen, ungeschminkt, weite Strickjacke.\n\nSetting: Sofa im Wohnzimmer am Abend, eine Decke über der Lehne, ein Wasserglas auf dem Beistelltisch. Lighting: Eine warme Stehlampe schräg hinter ihr, sonst dunkel, Fenster zeigt Abendblau.\n\nActions:\n- Hält das Handy kurz seitlich, als würde sie auf eine Seite zeigen\n- Kiefer spannt sich an bei 'hundertfünfzig', Arme lösen sich\n- Lehnt sich vor bei der Pointe, eine Augenbraue hoch\n- Leichtes Handy-Wackeln, Frontkamera nah am Gesicht\n\nDialogue (spoken out loud by the character):\n'Eine Liste im Internet hat mir erzählt, ich hätte fünf von fünf. Fast hätt ich für hundertfünfzig Franken bestellt.'\n\nAudio: Nur die Stimme der Person — pure dialogue. iPhone 15 Pro mic. Keine Musik, keine Hintergrundgeräusche, keine Soundeffekte, kein Foley, kein Raumton."
  },
  {
    "id": "hook-e",
    "title": "HOOK E — Controversial Opinion",
    "content": "A casual selfie-style iPhone 15 Pro front-camera vertical video (9:16) filmed === AUF EINEM SOFA AM ABEND ===.\n\nCharacter: Nadine, eine 41-jährige Frau mit halblangen braunen Haaren, offen, ungeschminkt, weite Strickjacke.\n\nSetting: Sofa im Wohnzimmer am Abend, eine Decke über der Lehne, ein Wasserglas auf dem Beistelltisch. Lighting: Eine warme Stehlampe schräg hinter ihr, sonst dunkel, Fenster zeigt Abendblau.\n\nActions:\n- Schaut direkt in die Linse, eine Augenbraue hoch bei 'Werbung'\n- Abweisende Handbewegung, trockenes halbes Lachen als Nachklang\n- Tippt zweimal auf das Notizheft neben sich, Blick bleibt fest\n- Leichtes Handy-Wackeln, Frontkamera nah am Gesicht\n\nDialogue (spoken out loud by the character):\n'Unpopuläre Meinung: diese Symptom-Checklisten im Netz sind Werbung. Ich hab mir meine eigene geschrieben.'\n\nAudio: Nur die Stimme der Person — pure dialogue. iPhone 15 Pro mic. Keine Musik, keine Hintergrundgeräusche, keine Soundeffekte, kein Foley, kein Raumton."
  },
  {
    "id": "clip-1",
    "title": "CLIP 1 — DER ANFANG",
    "content": "A casual selfie-style iPhone 15 Pro front-camera vertical video (9:16) filmed === AUF EINEM SOFA AM ABEND ===.\n\nCharacter: Nadine, eine 41-jährige Frau mit halblangen braunen Haaren, offen, ungeschminkt, weite Strickjacke.\n\nSetting: Sofa im Wohnzimmer am Abend, eine Decke über der Lehne, ein Wasserglas auf dem Beistelltisch. Lighting: Eine warme Stehlampe schräg hinter ihr, sonst dunkel, Fenster zeigt Abendblau.\n\nActions:\n- Lehnt sich in die Sofaecke, Schultern sinken, sie atmet sichtbar aus\n- Blick flackert nach oben-links beim Erinnern, leicht an der Linse vorbei\n- Unregelmäßiges Blinzeln, ein langsamer schwerer Lidschlag\n- Leichtes Handy-Wackeln, Frontkamera nah am Gesicht\n\nDialogue (spoken out loud by the character):\n'Im Frühjahr hab ich angefangen, abends kurz aufzuschreiben, wie es mir geht. Nur drei Zeilen, nichts Wildes.'\n\nAudio: Nur die Stimme der Person — pure dialogue. iPhone 15 Pro mic. Stimme ruhig, sachlich, erzählend. Keine Musik, keine Hintergrundgeräusche, keine Soundeffekte, kein Foley, kein Raumton."
  },
  {
    "id": "clip-2",
    "title": "CLIP 2 — ES WURDE SCHLIMMER",
    "content": "A casual selfie-style iPhone 15 Pro front-camera vertical video (9:16) filmed === AUF EINEM SOFA AM ABEND ===.\n\nCharacter: Nadine, eine 41-jährige Frau mit halblangen braunen Haaren, offen, ungeschminkt, weite Strickjacke.\n\nSetting: Sofa im Wohnzimmer am Abend, eine Decke über der Lehne, ein Wasserglas auf dem Beistelltisch. Lighting: Eine warme Stehlampe schräg hinter ihr, sonst dunkel, Fenster zeigt Abendblau.\n\nActions:\n- Blättert eine gedachte Seite um, Blick nach unten\n- Kiefer spannt sich kurz an, sie schluckt vor 'komisches Gefühl'\n- Langsames Kopfschütteln, Augen kurz zur Seite\n- Leichtes Handy-Wackeln, Frontkamera nah am Gesicht\n\nDialogue (spoken out loud by the character):\n'Nach vier Wochen hab ich es durchgelesen. Drei Sachen standen da fast jeden Abend. Das war ein komisches Gefühl.'\n\nAudio: Nur die Stimme der Person — pure dialogue. iPhone 15 Pro mic. Stimme leiser, etwas betroffen. Keine Musik, keine Hintergrundgeräusche, keine Soundeffekte, kein Foley, kein Raumton."
  },
  {
    "id": "clip-3",
    "title": "CLIP 3 — ALLES PROBIERT",
    "content": "A casual selfie-style iPhone 15 Pro front-camera vertical video (9:16) filmed === AUF EINEM SOFA AM ABEND ===.\n\nCharacter: Nadine, eine 41-jährige Frau mit halblangen braunen Haaren, offen, ungeschminkt, weite Strickjacke.\n\nSetting: Sofa im Wohnzimmer am Abend, eine Decke über der Lehne, ein Wasserglas auf dem Beistelltisch. Lighting: Eine warme Stehlampe schräg hinter ihr, sonst dunkel, Fenster zeigt Abendblau.\n\nActions:\n- Hält die Hand hoch, zählt an den Fingern ab, Kiefer angespannt\n- Kleine abweisende Geste bei 'angeblich alles', bitteres halbes Lachen\n- Lässt die Hände in den Schoß sinken, Schultern fallen\n- Leichtes Handy-Wackeln, Frontkamera nah am Gesicht\n\nDialogue (spoken out loud by the character):\n'Ich hab dann gegoogelt und bin in diesen Checklisten gelandet. Fünf von fünf. Plötzlich hatte ich angeblich alles.'\n\nAudio: Nur die Stimme der Person — pure dialogue. iPhone 15 Pro mic. Aufzählungs-Energie, leichte Genervtheit. Keine Musik, keine Hintergrundgeräusche, keine Soundeffekte, kein Foley, kein Raumton."
  },
  {
    "id": "clip-4",
    "title": "CLIP 4 — DAS LOW-POINT GESPRÄCH",
    "content": "A casual selfie-style iPhone 15 Pro front-camera vertical video (9:16) filmed === AUF EINEM SOFA AM ABEND ===.\n\nCharacter: Nadine, eine 41-jährige Frau mit halblangen braunen Haaren, offen, ungeschminkt, weite Strickjacke.\n\nSetting: Sofa im Wohnzimmer am Abend, eine Decke über der Lehne, ein Wasserglas auf dem Beistelltisch. Lighting: Eine warme Stehlampe schräg hinter ihr, sonst dunkel, Fenster zeigt Abendblau.\n\nActions:\n- Pausiert, Blick sinkt auf die eigenen Hände, kurzer Atem-Stopp\n- Schluckt kurz, bevor sie 'Angst' sagt\n- Leichtes Kopfschütteln, hält den Blick danach einen Moment zu lang\n- Leichtes Handy-Wackeln, Frontkamera nah am Gesicht\n\nDialogue (spoken out loud by the character):\n'Mein Mann meinte, du liest dich da rein. Und er hatte recht. Ich hatte Angst wegen einer Liste von Fremden.'\n\nAudio: Nur die Stimme der Person — pure dialogue. iPhone 15 Pro mic. Stimme langsamer, ernster, leichte Verletzlichkeit. Keine Musik, keine Hintergrundgeräusche, keine Soundeffekte, kein Foley, kein Raumton."
  },
  {
    "id": "clip-5",
    "title": "CLIP 5 — DIE ENTDECKUNG",
    "content": "A casual selfie-style iPhone 15 Pro front-camera vertical video (9:16) filmed === AUF EINEM SOFA AM ABEND ===.\n\nCharacter: Nadine, eine 41-jährige Frau mit halblangen braunen Haaren, offen, ungeschminkt, weite Strickjacke.\n\nSetting: Sofa im Wohnzimmer am Abend, eine Decke über der Lehne, ein Wasserglas auf dem Beistelltisch. Lighting: Eine warme Stehlampe schräg hinter ihr, sonst dunkel, Fenster zeigt Abendblau.\n\nActions:\n- Nimmt das Heft wieder in die Hand, hält es locker\n- Sitzt aufrechter, Schultern gehen zurück, Blick fixiert die Linse\n- Tippt zweimal auf die Seite bei 'wirklich stand'\n- Leichtes Handy-Wackeln, Frontkamera nah am Gesicht\n\nDialogue (spoken out loud by the character):\n'Also zurück zu meinem Heft. Meine drei Zeilen. Keine Liste von irgendwem, nur das, was bei mir wirklich stand.'\n\nAudio: Nur die Stimme der Person — pure dialogue. iPhone 15 Pro mic. Stimme fester, klarer, erleichtert. Keine Musik, keine Hintergrundgeräusche, keine Soundeffekte, kein Foley, kein Raumton."
  },
  {
    "id": "clip-6",
    "title": "CLIP 6 — DAS PRODUKT (PRODUKT SICHTBAR)",
    "productVisible": true,
    "content": "A casual selfie-style iPhone 15 Pro front-camera vertical video (9:16) filmed === AUF EINEM SOFA AM ABEND ===.\n\n🔴 PRODUKT-CLIP: Sie hält die mysolv Softgel-Dose (kleine weiße Dose mit hellem Etikett, passt in eine Handfläche) auf Brusthöhe, locker, wie wenn sie einer Freundin etwas zeigt.\n\nCharacter: Nadine, eine 41-jährige Frau mit halblangen braunen Haaren, offen, ungeschminkt, weite Strickjacke.\n\nSetting: Sofa im Wohnzimmer am Abend, eine Decke über der Lehne, ein Wasserglas auf dem Beistelltisch. Lighting: Eine warme Stehlampe schräg hinter ihr, sonst dunkel, Fenster zeigt Abendblau.\n\nActions:\n- Greift neben sich, nimmt die Dose, dreht sie einmal in der Hand\n- Hält sie auf Brusthöhe, Schulterzucken bei 'nichts'\n- Schraubt kurz den Deckel auf und wieder zu, stellt sie neben sich\n- Leichtes Handy-Wackeln, Frontkamera nah am Gesicht\n\nDialogue (spoken out loud by the character):\n'Dafür hab ich das hier genommen. Vier Sachen in einer Softgel, morgens eine. Kein Pulver, kein Kalender, nichts.'\n\nAudio: Nur die Stimme der Person — pure dialogue. iPhone 15 Pro mic. Stimme locker, niedrige Erwartungen, untertrieben. Keine Musik, keine Hintergrundgeräusche, keine Soundeffekte, kein Foley, kein Raumton."
  },
  {
    "id": "clip-7",
    "title": "CLIP 7 — DIE ERGEBNISSE",
    "content": "A casual selfie-style iPhone 15 Pro front-camera vertical video (9:16) filmed === AUF EINEM SOFA AM ABEND ===.\n\nCharacter: Nadine, eine 41-jährige Frau mit halblangen braunen Haaren, offen, ungeschminkt, weite Strickjacke.\n\nSetting: Sofa im Wohnzimmer am Abend, eine Decke über der Lehne, ein Wasserglas auf dem Beistelltisch. Lighting: Eine warme Stehlampe schräg hinter ihr, sonst dunkel, Fenster zeigt Abendblau.\n\nActions:\n- Gesicht hellt sich auf, sie sitzt aufrechter, Augen werden heller\n- Hält das Heft kurz hoch, Augen kurz glasig\n- 'das reicht mir' fast geflüstert, dann echtes Lächeln\n- Leichtes Handy-Wackeln, Frontkamera nah am Gesicht\n\nDialogue (spoken out loud by the character):\n'Nach drei Wochen hab ich das Heft nochmal gelesen. Eine von den drei Zeilen kam kaum noch vor. Das reicht mir.'\n\nAudio: Nur die Stimme der Person — pure dialogue. iPhone 15 Pro mic. Energie hebt sich, ruhige echte Überraschung. Keine Musik, keine Hintergrundgeräusche, keine Soundeffekte, kein Foley, kein Raumton."
  },
  {
    "id": "clip-8",
    "title": "CLIP 8 — DER CTA",
    "content": "A casual selfie-style iPhone 15 Pro front-camera vertical video (9:16) filmed === AUF EINEM SOFA AM ABEND ===.\n\nCharacter: Nadine, eine 41-jährige Frau mit halblangen braunen Haaren, offen, ungeschminkt, weite Strickjacke.\n\nSetting: Sofa im Wohnzimmer am Abend, eine Decke über der Lehne, ein Wasserglas auf dem Beistelltisch. Lighting: Eine warme Stehlampe schräg hinter ihr, sonst dunkel, Fenster zeigt Abendblau.\n\nActions:\n- Ehrliches warmes Lächeln, entspannte Haltung, Schultern locker\n- Hält drei Finger hoch bei 'drei Zeilen'\n- Direkter Blickkontakt bei 'falls du magst', zeigt locker nach unten\n- Leichtes Handy-Wackeln, Frontkamera nah am Gesicht\n\nDialogue (spoken out loud by the character):\n'Schreib drei Zeilen am Abend, zwei Wochen lang. Dann weißt du mehr als jede Liste. Link ist unten, falls du magst.'\n\nAudio: Nur die Stimme der Person — pure dialogue. iPhone 15 Pro mic. Stimme warm, direkt, Freundin-gibt-Rat-Energie. Keine Musik, keine Hintergrundgeräusche, keine Soundeffekte, kein Foley, kein Raumton."
  },
  {
    "id": "voiceover",
    "title": "VOICEOVER SPECS",
    "content": "Voice: weiblich, 38 bis 45, warm und nahbar.\nAccent: Hochdeutsch mit leicht umgangssprachlichem Touch, nüchterne Frau Anfang vierzig-Energie.\nTone: Locker, echt, wie ein Gespräch mit einer engen Freundin.\nEnergy: Beginnt müde und genervt, steigert sich zu hoffnungsvoll, endet warm und hilfreich.\n\nElevenLabs Settings:\n- Stability: 0.35\n- Similarity: 0.75\n- Style Exaggeration: 0.20\n- Speaker Boost: ON\n\nClip-by-clip delivery — match the tone described in each section's Audio block. Reminder: every video clip is DIALOGUE-ONLY. No music, no SFX, no foley, no ambient sound is added at the video-generation step; this voiceover IS the audio."
  },
  {
    "id": "full-dialogue",
    "title": "FULL DIALOGUE (export for TTS / subtitle file)",
    "content": "=== HOOK A — pick ONE hook for the actual ad ===\nIch hab acht Wochen lang aufgeschrieben, wie ich mich abends fühle. Dann hab ich das hier bestellt.\n\n=== CLIP 1 ===\nIm Frühjahr hab ich angefangen, abends kurz aufzuschreiben, wie es mir geht. Nur drei Zeilen, nichts Wildes.\n\n=== CLIP 2 ===\nNach vier Wochen hab ich es durchgelesen. Drei Sachen standen da fast jeden Abend. Das war ein komisches Gefühl.\n\n=== CLIP 3 ===\nIch hab dann gegoogelt und bin in diesen Checklisten gelandet. Fünf von fünf. Plötzlich hatte ich angeblich alles.\n\n=== CLIP 4 ===\nMein Mann meinte, du liest dich da rein. Und er hatte recht. Ich hatte Angst wegen einer Liste von Fremden.\n\n=== CLIP 5 ===\nAlso zurück zu meinem Heft. Meine drei Zeilen. Keine Liste von irgendwem, nur das, was bei mir wirklich stand.\n\n=== CLIP 6 — PRODUKT SICHTBAR ===\nDafür hab ich das hier genommen. Vier Sachen in einer Softgel, morgens eine. Kein Pulver, kein Kalender, nichts.\n\n=== CLIP 7 ===\nNach drei Wochen hab ich das Heft nochmal gelesen. Eine von den drei Zeilen kam kaum noch vor. Das reicht mir.\n\n=== CLIP 8 — CTA ===\nSchreib drei Zeilen am Abend, zwei Wochen lang. Dann weißt du mehr als jede Liste. Link ist unten, falls du magst."
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
