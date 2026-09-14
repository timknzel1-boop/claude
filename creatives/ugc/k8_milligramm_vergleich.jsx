import { useState } from "react";

const sections = [
  {
    "id": "character",
    "title": "CHARACTER, SETTING & LIGHTING",
    "content": "Character: Thomas, ein 51-jähriger Mann mit grau meliertem kurzen Haar, Brille, kariertes Hemd über einem T-Shirt.\n\nSetting: Schreibtisch am Fenster, eine Lesebrille und zwei kleine Dosen daneben, Papierstapel.\n\nLighting: Kühles Tageslicht von vorne rechts durch das Fenster, keine Lampen an.\n\nCamera: iPhone 15 Pro Frontkamera, vertikal 9:16."
  },
  {
    "id": "hook-a",
    "title": "HOOK A — Product Reveal (holds the product)",
    "productVisible": true,
    "content": "A casual selfie-style iPhone 15 Pro front-camera vertical video (9:16) filmed === AN EINEM SCHREIBTISCH AM FENSTER ===.\n\n🔴 PRODUKT-CLIP: Er hält die mysolv Softgel-Dose (kleine weiße Dose mit hellem Etikett, passt in eine Handfläche) auf Brusthöhe, locker, wie wenn er einer Freundin etwas zeigt.\n\nCharacter: Thomas, ein 51-jähriger Mann mit grau meliertem kurzen Haar, Brille, kariertes Hemd über einem T-Shirt.\n\nSetting: Schreibtisch am Fenster, eine Lesebrille und zwei kleine Dosen daneben, Papierstapel. Lighting: Kühles Tageslicht von vorne rechts durch das Fenster, keine Lampen an.\n\nActions:\n- Dreht die Dose in der Hand um, hält die Rückseite kurz zur Kamera\n- Schiebt die Brille hoch, Blick geht von der Dose zur Linse\n- Stellt sie ab, kurzes Nicken\n- Leichtes Handy-Wackeln, Frontkamera nah am Gesicht\n\nDialogue (spoken out loud by the character):\n'Ich dreh seit einem Jahr jede Dose um und lese die Rückseite. Bei der hier hab ich aufgehört zu suchen.'\n\nAudio: Nur die Stimme der Person — pure dialogue. iPhone 15 Pro mic. Keine Musik, keine Hintergrundgeräusche, keine Soundeffekte, kein Foley, kein Raumton."
  },
  {
    "id": "hook-b",
    "title": "HOOK B — Symptom Demo",
    "content": "A casual selfie-style iPhone 15 Pro front-camera vertical video (9:16) filmed === AN EINEM SCHREIBTISCH AM FENSTER ===.\n\nCharacter: Thomas, ein 51-jähriger Mann mit grau meliertem kurzen Haar, Brille, kariertes Hemd über einem T-Shirt.\n\nSetting: Schreibtisch am Fenster, eine Lesebrille und zwei kleine Dosen daneben, Papierstapel. Lighting: Kühles Tageslicht von vorne rechts durch das Fenster, keine Lampen an.\n\nActions:\n- Hält zwei Dosen nebeneinander, dreht beide zur Kamera\n- Augen weiten sich hinter der Brille, Schultern heben sich\n- Tippt mit dem Finger auf die zweite Dose\n- Leichtes Handy-Wackeln, Frontkamera nah am Gesicht\n\nDialogue (spoken out loud by the character):\n'Schau mal hier. Auf der einen steht Oregano. Auf der anderen steht, wie viel Oregano. Das ist ein Unterschied.'\n\nAudio: Nur die Stimme der Person — pure dialogue. iPhone 15 Pro mic. Keine Musik, keine Hintergrundgeräusche, keine Soundeffekte, kein Foley, kein Raumton."
  },
  {
    "id": "hook-c",
    "title": "HOOK C — Relatable Frustration",
    "content": "A casual selfie-style iPhone 15 Pro front-camera vertical video (9:16) filmed === AN EINEM SCHREIBTISCH AM FENSTER ===.\n\nCharacter: Thomas, ein 51-jähriger Mann mit grau meliertem kurzen Haar, Brille, kariertes Hemd über einem T-Shirt.\n\nSetting: Schreibtisch am Fenster, eine Lesebrille und zwei kleine Dosen daneben, Papierstapel. Lighting: Kühles Tageslicht von vorne rechts durch das Fenster, keine Lampen an.\n\nActions:\n- Nimmt die Lesebrille ab, hält sie kurz in der Hand\n- Blick flackert kurz weg, dann direkt in die Linse\n- Setzt die Brille wieder auf, Schultern sinken\n- Leichtes Handy-Wackeln, Frontkamera nah am Gesicht\n\nDialogue (spoken out loud by the character):\n'Wenn du auch schon mit Lesebrille vor einem Etikett standest und nichts Konkretes gefunden hast — ja. Kenn ich.'\n\nAudio: Nur die Stimme der Person — pure dialogue. iPhone 15 Pro mic. Keine Musik, keine Hintergrundgeräusche, keine Soundeffekte, kein Foley, kein Raumton."
  },
  {
    "id": "hook-d",
    "title": "HOOK D — Almost Made A Mistake",
    "content": "A casual selfie-style iPhone 15 Pro front-camera vertical video (9:16) filmed === AN EINEM SCHREIBTISCH AM FENSTER ===.\n\nCharacter: Thomas, ein 51-jähriger Mann mit grau meliertem kurzen Haar, Brille, kariertes Hemd über einem T-Shirt.\n\nSetting: Schreibtisch am Fenster, eine Lesebrille und zwei kleine Dosen daneben, Papierstapel. Lighting: Kühles Tageslicht von vorne rechts durch das Fenster, keine Lampen an.\n\nActions:\n- Hält eine Dose hoch, dreht sie langsam um\n- Kiefer spannt sich kurz an bei 'dreißig Franken'\n- Stellt sie mit einer kleinen abweisenden Geste weg\n- Leichtes Handy-Wackeln, Frontkamera nah am Gesicht\n\nDialogue (spoken out loud by the character):\n'Ich hätt fast eine Dose für dreißig Franken bestellt. Dann hab ich die Rückseite gelesen und es gelassen.'\n\nAudio: Nur die Stimme der Person — pure dialogue. iPhone 15 Pro mic. Keine Musik, keine Hintergrundgeräusche, keine Soundeffekte, kein Foley, kein Raumton."
  },
  {
    "id": "hook-e",
    "title": "HOOK E — Controversial Opinion",
    "content": "A casual selfie-style iPhone 15 Pro front-camera vertical video (9:16) filmed === AN EINEM SCHREIBTISCH AM FENSTER ===.\n\nCharacter: Thomas, ein 51-jähriger Mann mit grau meliertem kurzen Haar, Brille, kariertes Hemd über einem T-Shirt.\n\nSetting: Schreibtisch am Fenster, eine Lesebrille und zwei kleine Dosen daneben, Papierstapel. Lighting: Kühles Tageslicht von vorne rechts durch das Fenster, keine Lampen an.\n\nActions:\n- Dreht eine Dose demonstrativ um, hält sie still\n- Schaut über die Brille direkt in die Linse\n- Trockenes halbes Lachen, kurzes Schulterzucken\n- Leichtes Handy-Wackeln, Frontkamera nah am Gesicht\n\nDialogue (spoken out loud by the character):\n'Unpopuläre Meinung: die Vorderseite einer Dose ist Werbung. Die Rückseite ist das Produkt. Ich lese nur noch hinten.'\n\nAudio: Nur die Stimme der Person — pure dialogue. iPhone 15 Pro mic. Keine Musik, keine Hintergrundgeräusche, keine Soundeffekte, kein Foley, kein Raumton."
  },
  {
    "id": "clip-1",
    "title": "CLIP 1 — DER ANFANG",
    "content": "A casual selfie-style iPhone 15 Pro front-camera vertical video (9:16) filmed === AN EINEM SCHREIBTISCH AM FENSTER ===.\n\nCharacter: Thomas, ein 51-jähriger Mann mit grau meliertem kurzen Haar, Brille, kariertes Hemd über einem T-Shirt.\n\nSetting: Schreibtisch am Fenster, eine Lesebrille und zwei kleine Dosen daneben, Papierstapel. Lighting: Kühles Tageslicht von vorne rechts durch das Fenster, keine Lampen an.\n\nActions:\n- Lehnt sich im Bürostuhl zurück, Schultern locker\n- Blick flackert nach oben-links beim Erinnern\n- Unregelmäßiges Blinzeln, ein langsamer Lidschlag\n- Leichtes Handy-Wackeln, Frontkamera nah am Gesicht\n\nDialogue (spoken out loud by the character):\n'Ich bin einundfünfzig und nehm seit ein paar Jahren was für den Darm. Am Anfang hab ich nach dem Etikett gekauft.'\n\nAudio: Nur die Stimme der Person — pure dialogue. iPhone 15 Pro mic. Stimme ruhig, sachlich, erzählend. Keine Musik, keine Hintergrundgeräusche, keine Soundeffekte, kein Foley, kein Raumton."
  },
  {
    "id": "clip-2",
    "title": "CLIP 2 — ES WURDE SCHLIMMER",
    "content": "A casual selfie-style iPhone 15 Pro front-camera vertical video (9:16) filmed === AN EINEM SCHREIBTISCH AM FENSTER ===.\n\nCharacter: Thomas, ein 51-jähriger Mann mit grau meliertem kurzen Haar, Brille, kariertes Hemd über einem T-Shirt.\n\nSetting: Schreibtisch am Fenster, eine Lesebrille und zwei kleine Dosen daneben, Papierstapel. Lighting: Kühles Tageslicht von vorne rechts durch das Fenster, keine Lampen an.\n\nActions:\n- Hält eine Dose hoch, tippt auf die Vorderseite, dreht sie um\n- Schiebt die Brille zurecht, beugt sich leicht vor\n- Langsames Kopfschütteln bei 'fast nichts'\n- Leichtes Handy-Wackeln, Frontkamera nah am Gesicht\n\nDialogue (spoken out loud by the character):\n'Irgendwann hab ich gemerkt: vorne steht groß Oregano, hinten stehen hundert Milligramm. Das ist fast nichts.'\n\nAudio: Nur die Stimme der Person — pure dialogue. iPhone 15 Pro mic. Stimme fester, leicht ungläubig. Keine Musik, keine Hintergrundgeräusche, keine Soundeffekte, kein Foley, kein Raumton."
  },
  {
    "id": "clip-3",
    "title": "CLIP 3 — ALLES PROBIERT",
    "content": "A casual selfie-style iPhone 15 Pro front-camera vertical video (9:16) filmed === AN EINEM SCHREIBTISCH AM FENSTER ===.\n\nCharacter: Thomas, ein 51-jähriger Mann mit grau meliertem kurzen Haar, Brille, kariertes Hemd über einem T-Shirt.\n\nSetting: Schreibtisch am Fenster, eine Lesebrille und zwei kleine Dosen daneben, Papierstapel. Lighting: Kühles Tageslicht von vorne rechts durch das Fenster, keine Lampen an.\n\nActions:\n- Zeigt auf den Papierstapel neben sich\n- Zählt kurz an den Fingern ab, Blick geht über den Tisch\n- Schulterzucken, halbes Lachen über sich selbst\n- Leichtes Handy-Wackeln, Frontkamera nah am Gesicht\n\nDialogue (spoken out loud by the character):\n'Dann hab ich angefangen zu vergleichen. Sechs Dosen auf dem Tisch, Zettel daneben, Milligramm aufgeschrieben.'\n\nAudio: Nur die Stimme der Person — pure dialogue. iPhone 15 Pro mic. Aufzählungs-Energie, methodisch. Keine Musik, keine Hintergrundgeräusche, keine Soundeffekte, kein Foley, kein Raumton."
  },
  {
    "id": "clip-4",
    "title": "CLIP 4 — DAS LOW-POINT GESPRÄCH",
    "content": "A casual selfie-style iPhone 15 Pro front-camera vertical video (9:16) filmed === AN EINEM SCHREIBTISCH AM FENSTER ===.\n\nCharacter: Thomas, ein 51-jähriger Mann mit grau meliertem kurzen Haar, Brille, kariertes Hemd über einem T-Shirt.\n\nSetting: Schreibtisch am Fenster, eine Lesebrille und zwei kleine Dosen daneben, Papierstapel. Lighting: Kühles Tageslicht von vorne rechts durch das Fenster, keine Lampen an.\n\nActions:\n- Pausiert, schaut kurz zur Seite, kurzer Atem-Stopp\n- Kleines Schulterzucken bei 'kann sein'\n- Fester Blick in die Linse bei 'kaum was drin ist'\n- Leichtes Handy-Wackeln, Frontkamera nah am Gesicht\n\nDialogue (spoken out loud by the character):\n'Meine Frau fand das übertrieben. Kann sein. Aber ich zahl ungern für eine Dose, in der kaum was drin ist.'\n\nAudio: Nur die Stimme der Person — pure dialogue. iPhone 15 Pro mic. Stimme langsamer, ruhig, bestimmt. Keine Musik, keine Hintergrundgeräusche, keine Soundeffekte, kein Foley, kein Raumton."
  },
  {
    "id": "clip-5",
    "title": "CLIP 5 — DIE ENTDECKUNG",
    "content": "A casual selfie-style iPhone 15 Pro front-camera vertical video (9:16) filmed === AN EINEM SCHREIBTISCH AM FENSTER ===.\n\nCharacter: Thomas, ein 51-jähriger Mann mit grau meliertem kurzen Haar, Brille, kariertes Hemd über einem T-Shirt.\n\nSetting: Schreibtisch am Fenster, eine Lesebrille und zwei kleine Dosen daneben, Papierstapel. Lighting: Kühles Tageslicht von vorne rechts durch das Fenster, keine Lampen an.\n\nActions:\n- Nimmt die weiße Dose, dreht die Rückseite zur Kamera\n- Augenbrauen heben sich, beugt sich näher ans Etikett\n- Tippt zweimal auf die Zahl, Blick zurück zur Linse\n- Leichtes Handy-Wackeln, Frontkamera nah am Gesicht\n\nDialogue (spoken out loud by the character):\n'Und dann lag die hier auf dem Tisch. Zweihundertsiebenundfünfzig Milligramm Oreganoöl. Fünfhundert Schwarzkümmelöl.'\n\nAudio: Nur die Stimme der Person — pure dialogue. iPhone 15 Pro mic. Stimme neugierig, anerkennend. Keine Musik, keine Hintergrundgeräusche, keine Soundeffekte, kein Foley, kein Raumton."
  },
  {
    "id": "clip-6",
    "title": "CLIP 6 — DAS PRODUKT (PRODUKT SICHTBAR)",
    "productVisible": true,
    "content": "A casual selfie-style iPhone 15 Pro front-camera vertical video (9:16) filmed === AN EINEM SCHREIBTISCH AM FENSTER ===.\n\n🔴 PRODUKT-CLIP: Er hält die mysolv Softgel-Dose (kleine weiße Dose mit hellem Etikett, passt in eine Handfläche) auf Brusthöhe, locker, wie wenn er einer Freundin etwas zeigt.\n\nCharacter: Thomas, ein 51-jähriger Mann mit grau meliertem kurzen Haar, Brille, kariertes Hemd über einem T-Shirt.\n\nSetting: Schreibtisch am Fenster, eine Lesebrille und zwei kleine Dosen daneben, Papierstapel. Lighting: Kühles Tageslicht von vorne rechts durch das Fenster, keine Lampen an.\n\nActions:\n- Hält die Dose auf Brusthöhe, dreht das Etikett zur Kamera\n- Schraubt kurz den Deckel auf und wieder zu\n- Stellt sie vor sich auf den Schreibtisch\n- Leichtes Handy-Wackeln, Frontkamera nah am Gesicht\n\nDialogue (spoken out loud by the character):\n'Dazu Chlorella und Spirulina, je achthundertfünfzig. Alles in einer Softgel. Ich nehm morgens eine mit Wasser.'\n\nAudio: Nur die Stimme der Person — pure dialogue. iPhone 15 Pro mic. Stimme sachlich, faktisch, ruhig. Keine Musik, keine Hintergrundgeräusche, keine Soundeffekte, kein Foley, kein Raumton."
  },
  {
    "id": "clip-7",
    "title": "CLIP 7 — DIE ERGEBNISSE",
    "content": "A casual selfie-style iPhone 15 Pro front-camera vertical video (9:16) filmed === AN EINEM SCHREIBTISCH AM FENSTER ===.\n\nCharacter: Thomas, ein 51-jähriger Mann mit grau meliertem kurzen Haar, Brille, kariertes Hemd über einem T-Shirt.\n\nSetting: Schreibtisch am Fenster, eine Lesebrille und zwei kleine Dosen daneben, Papierstapel. Lighting: Kühles Tageslicht von vorne rechts durch das Fenster, keine Lampen an.\n\nActions:\n- Sitzt aufrechter, Blick fest in die Linse\n- Flache Hand kurz auf den Schreibtisch, betont ruhig\n- Kurzes Nicken, halbes Lächeln\n- Leichtes Handy-Wackeln, Frontkamera nah am Gesicht\n\nDialogue (spoken out loud by the character):\n'Ich sag dir nicht, was das bei dir macht. Ich sag dir nur: ich weiß endlich, was ich morgens genau zu mir nehme.'\n\nAudio: Nur die Stimme der Person — pure dialogue. iPhone 15 Pro mic. Stimme ruhig, bestimmt, ohne Übertreibung. Keine Musik, keine Hintergrundgeräusche, keine Soundeffekte, kein Foley, kein Raumton."
  },
  {
    "id": "clip-8",
    "title": "CLIP 8 — DER CTA",
    "content": "A casual selfie-style iPhone 15 Pro front-camera vertical video (9:16) filmed === AN EINEM SCHREIBTISCH AM FENSTER ===.\n\nCharacter: Thomas, ein 51-jähriger Mann mit grau meliertem kurzen Haar, Brille, kariertes Hemd über einem T-Shirt.\n\nSetting: Schreibtisch am Fenster, eine Lesebrille und zwei kleine Dosen daneben, Papierstapel. Lighting: Kühles Tageslicht von vorne rechts durch das Fenster, keine Lampen an.\n\nActions:\n- Dreht eine Dose in der Hand um, hält sie kurz hoch\n- Direkter Blickkontakt bei 'lies die Milligramm'\n- Zeigt locker nach unten, entspanntes Schulterzucken\n- Leichtes Handy-Wackeln, Frontkamera nah am Gesicht\n\nDialogue (spoken out loud by the character):\n'Mach das Gleiche wie ich. Dreh deine Dose um und lies die Milligramm. Wenn dir das gefällt, Link ist unten.'\n\nAudio: Nur die Stimme der Person — pure dialogue. iPhone 15 Pro mic. Stimme direkt, freundlich, wie ein Rat unter Kollegen. Keine Musik, keine Hintergrundgeräusche, keine Soundeffekte, kein Foley, kein Raumton."
  },
  {
    "id": "voiceover",
    "title": "VOICEOVER SPECS",
    "content": "Voice: männlich, 48 bis 55, warm und nahbar.\nAccent: Hochdeutsch mit leicht umgangssprachlichem Touch, sachlicher Mann Anfang fünfzig-Energie.\nTone: Locker, echt, wie ein Gespräch mit einer engen Freundin.\nEnergy: Beginnt müde und genervt, steigert sich zu hoffnungsvoll, endet warm und hilfreich.\n\nElevenLabs Settings:\n- Stability: 0.35\n- Similarity: 0.75\n- Style Exaggeration: 0.20\n- Speaker Boost: ON\n\nClip-by-clip delivery — match the tone described in each section's Audio block. Reminder: every video clip is DIALOGUE-ONLY. No music, no SFX, no foley, no ambient sound is added at the video-generation step; this voiceover IS the audio."
  },
  {
    "id": "full-dialogue",
    "title": "FULL DIALOGUE (export for TTS / subtitle file)",
    "content": "=== HOOK A — pick ONE hook for the actual ad ===\nIch dreh seit einem Jahr jede Dose um und lese die Rückseite. Bei der hier hab ich aufgehört zu suchen.\n\n=== CLIP 1 ===\nIch bin einundfünfzig und nehm seit ein paar Jahren was für den Darm. Am Anfang hab ich nach dem Etikett gekauft.\n\n=== CLIP 2 ===\nIrgendwann hab ich gemerkt: vorne steht groß Oregano, hinten stehen hundert Milligramm. Das ist fast nichts.\n\n=== CLIP 3 ===\nDann hab ich angefangen zu vergleichen. Sechs Dosen auf dem Tisch, Zettel daneben, Milligramm aufgeschrieben.\n\n=== CLIP 4 ===\nMeine Frau fand das übertrieben. Kann sein. Aber ich zahl ungern für eine Dose, in der kaum was drin ist.\n\n=== CLIP 5 ===\nUnd dann lag die hier auf dem Tisch. Zweihundertsiebenundfünfzig Milligramm Oreganoöl. Fünfhundert Schwarzkümmelöl.\n\n=== CLIP 6 — PRODUKT SICHTBAR ===\nDazu Chlorella und Spirulina, je achthundertfünfzig. Alles in einer Softgel. Ich nehm morgens eine mit Wasser.\n\n=== CLIP 7 ===\nIch sag dir nicht, was das bei dir macht. Ich sag dir nur: ich weiß endlich, was ich morgens genau zu mir nehme.\n\n=== CLIP 8 — CTA ===\nMach das Gleiche wie ich. Dreh deine Dose um und lies die Milligramm. Wenn dir das gefällt, Link ist unten."
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
