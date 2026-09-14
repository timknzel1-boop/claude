import { useState } from "react";

const sections = [
  {
    "id": "character",
    "title": "CHARACTER, SETTING & LIGHTING",
    "content": "Character: Tim, ein 30-jähriger Mann mit kurzen dunklen Haaren, einfaches dunkles Sweatshirt, keine Inszenierung.\n\nSetting: Kleiner Lagerraum, gestapelte Versandkartons an der Wand, ein Rolltisch mit Papieren.\n\nLighting: Neutrale Deckenbeleuchtung, kühl, dazu Tageslicht durch eine offene Tür rechts.\n\nCamera: iPhone 15 Pro Frontkamera, vertikal 9:16.\n\nWICHTIG: Dieses Skript ist ein Geruest fuer ein echtes Gruender-Video. Der Gruender spielt sich selbst. Name, Alter und Aussehen anpassen. Jeder Satz muss vor der Produktion vom Gruender bestaetigt werden, sonst darf er nicht gesendet werden. Die Aussagen zu GMP-Produktion und Schwermetall-Pruefung pro Charge sind belegt und duerfen bleiben."
  },
  {
    "id": "hook-a",
    "title": "HOOK A — Product Reveal (holds the product)",
    "productVisible": true,
    "content": "A casual selfie-style iPhone 15 Pro front-camera vertical video (9:16) filmed === IN EINEM KLEINEN LAGERRAUM ===.\n\n🔴 PRODUKT-CLIP: Er hält die mysolv Softgel-Dose (kleine weiße Dose mit hellem Etikett, passt in eine Handfläche) auf Brusthöhe, locker, wie wenn er einer Freundin etwas zeigt.\n\nCharacter: Tim, ein 30-jähriger Mann mit kurzen dunklen Haaren, einfaches dunkles Sweatshirt, keine Inszenierung.\n\nSetting: Kleiner Lagerraum, gestapelte Versandkartons an der Wand, ein Rolltisch mit Papieren. Lighting: Neutrale Deckenbeleuchtung, kühl, dazu Tageslicht durch eine offene Tür rechts.\n\nActions:\n- Hält Dose und ein Blatt Papier nebeneinander auf Brusthöhe\n- Schultern heben sich beim Einatmen, Blick wechselt vom Blatt zur Linse\n- Legt das Blatt auf den Rolltisch, behält die Dose in der Hand\n- Leichtes Handy-Wackeln, Frontkamera nah am Gesicht\n\nDialogue (spoken out loud by the character):\n'Das hier ist unser Produkt und das daneben ist der Laborbericht dazu. Ich zeig dir mal, was da drin steht.'\n\nAudio: Nur die Stimme der Person — pure dialogue. iPhone 15 Pro mic. Keine Musik, keine Hintergrundgeräusche, keine Soundeffekte, kein Foley, kein Raumton."
  },
  {
    "id": "hook-b",
    "title": "HOOK B — Symptom Demo",
    "content": "A casual selfie-style iPhone 15 Pro front-camera vertical video (9:16) filmed === IN EINEM KLEINEN LAGERRAUM ===.\n\nCharacter: Tim, ein 30-jähriger Mann mit kurzen dunklen Haaren, einfaches dunkles Sweatshirt, keine Inszenierung.\n\nSetting: Kleiner Lagerraum, gestapelte Versandkartons an der Wand, ein Rolltisch mit Papieren. Lighting: Neutrale Deckenbeleuchtung, kühl, dazu Tageslicht durch eine offene Tür rechts.\n\nActions:\n- Hebt ein Blatt Papier vor die Kamera, hält es kurz still\n- Augen weiten sich leicht, Schultern heben sich vor 'gerade versendet wird'\n- Tippt zweimal mit dem Finger auf das Blatt, Blick zurück zur Linse\n- Leichtes Handy-Wackeln, Frontkamera nah am Gesicht\n\nDialogue (spoken out loud by the character):\n'Jede Charge geht ins Labor, bevor sie raus darf. Das hier ist der Bericht von der, die gerade versendet wird.'\n\nAudio: Nur die Stimme der Person — pure dialogue. iPhone 15 Pro mic. Keine Musik, keine Hintergrundgeräusche, keine Soundeffekte, kein Foley, kein Raumton."
  },
  {
    "id": "hook-c",
    "title": "HOOK C — Relatable Frustration",
    "content": "A casual selfie-style iPhone 15 Pro front-camera vertical video (9:16) filmed === IN EINEM KLEINEN LAGERRAUM ===.\n\nCharacter: Tim, ein 30-jähriger Mann mit kurzen dunklen Haaren, einfaches dunkles Sweatshirt, keine Inszenierung.\n\nSetting: Kleiner Lagerraum, gestapelte Versandkartons an der Wand, ein Rolltisch mit Papieren. Lighting: Neutrale Deckenbeleuchtung, kühl, dazu Tageslicht durch eine offene Tür rechts.\n\nActions:\n- Reibt sich kurz den Nacken, Schultern sinken, atmet sichtbar aus\n- Blick flackert kurz weg und kommt zurück, wissender Ausdruck\n- Zuckt einmal mit den Schultern, hält den Blick zu lang\n- Leichtes Handy-Wackeln, Frontkamera nah am Gesicht\n\nDialogue (spoken out loud by the character):\n'Wenn du bei Nahrungsergänzung auch nie weißt, wem du glauben sollst — ja. Ging mir genauso, bevor ich das hier gemacht hab.'\n\nAudio: Nur die Stimme der Person — pure dialogue. iPhone 15 Pro mic. Keine Musik, keine Hintergrundgeräusche, keine Soundeffekte, kein Foley, kein Raumton."
  },
  {
    "id": "hook-d",
    "title": "HOOK D — Almost Made A Mistake",
    "content": "A casual selfie-style iPhone 15 Pro front-camera vertical video (9:16) filmed === IN EINEM KLEINEN LAGERRAUM ===.\n\nCharacter: Tim, ein 30-jähriger Mann mit kurzen dunklen Haaren, einfaches dunkles Sweatshirt, keine Inszenierung.\n\nSetting: Kleiner Lagerraum, gestapelte Versandkartons an der Wand, ein Rolltisch mit Papieren. Lighting: Neutrale Deckenbeleuchtung, kühl, dazu Tageslicht durch eine offene Tür rechts.\n\nActions:\n- Beginnt mit locker verschränkten Armen, Blick nach oben-links\n- Löst die Arme bei 'billiger', Kiefer spannt sich kurz an\n- Lehnt sich vor bei der Pointe, direkter Blick in die Linse\n- Leichtes Handy-Wackeln, Frontkamera nah am Gesicht\n\nDialogue (spoken out loud by the character):\n'Wir hätten billiger produzieren können, ohne Prüfung pro Charge. Hab ich mir angeschaut und dann sein lassen.'\n\nAudio: Nur die Stimme der Person — pure dialogue. iPhone 15 Pro mic. Keine Musik, keine Hintergrundgeräusche, keine Soundeffekte, kein Foley, kein Raumton."
  },
  {
    "id": "hook-e",
    "title": "HOOK E — Controversial Opinion",
    "content": "A casual selfie-style iPhone 15 Pro front-camera vertical video (9:16) filmed === IN EINEM KLEINEN LAGERRAUM ===.\n\nCharacter: Tim, ein 30-jähriger Mann mit kurzen dunklen Haaren, einfaches dunkles Sweatshirt, keine Inszenierung.\n\nSetting: Kleiner Lagerraum, gestapelte Versandkartons an der Wand, ein Rolltisch mit Papieren. Lighting: Neutrale Deckenbeleuchtung, kühl, dazu Tageslicht durch eine offene Tür rechts.\n\nActions:\n- Schaut direkt in die Linse, eine Augenbraue hoch bei 'niemand danach fragt'\n- Kleine offene Handbewegung, trockenes halbes Lachen\n- Hebt das Blatt kurz an, Blick bleibt fest\n- Leichtes Handy-Wackeln, Frontkamera nah am Gesicht\n\nDialogue (spoken out loud by the character):\n'Unpopuläre Meinung: die meisten Marken zeigen ihre Laborwerte nicht, weil niemand danach fragt. Ich zeig sie trotzdem.'\n\nAudio: Nur die Stimme der Person — pure dialogue. iPhone 15 Pro mic. Keine Musik, keine Hintergrundgeräusche, keine Soundeffekte, kein Foley, kein Raumton."
  },
  {
    "id": "clip-1",
    "title": "CLIP 1 — DER ANFANG",
    "content": "A casual selfie-style iPhone 15 Pro front-camera vertical video (9:16) filmed === IN EINEM KLEINEN LAGERRAUM ===.\n\nCharacter: Tim, ein 30-jähriger Mann mit kurzen dunklen Haaren, einfaches dunkles Sweatshirt, keine Inszenierung.\n\nSetting: Kleiner Lagerraum, gestapelte Versandkartons an der Wand, ein Rolltisch mit Papieren. Lighting: Neutrale Deckenbeleuchtung, kühl, dazu Tageslicht durch eine offene Tür rechts.\n\nActions:\n- Lehnt sich an die Kartonstapel, Schultern locker\n- Blick geht kurz zur Seite, dann direkt in die Linse\n- Unregelmäßiges Blinzeln, ein langsamer Lidschlag\n- Leichtes Handy-Wackeln, Frontkamera nah am Gesicht\n\nDialogue (spoken out loud by the character):\n'Kurz zu mir: ich bin einer der beiden Gründer. Kein Labor, kein Arzt. Ich hab das Ding gebaut, das ich selber wollte.'\n\nAudio: Nur die Stimme der Person — pure dialogue. iPhone 15 Pro mic. Stimme ruhig, sachlich, ohne Verkaufs-Ton. Keine Musik, keine Hintergrundgeräusche, keine Soundeffekte, kein Foley, kein Raumton."
  },
  {
    "id": "clip-2",
    "title": "CLIP 2 — ES WURDE SCHLIMMER",
    "content": "A casual selfie-style iPhone 15 Pro front-camera vertical video (9:16) filmed === IN EINEM KLEINEN LAGERRAUM ===.\n\nCharacter: Tim, ein 30-jähriger Mann mit kurzen dunklen Haaren, einfaches dunkles Sweatshirt, keine Inszenierung.\n\nSetting: Kleiner Lagerraum, gestapelte Versandkartons an der Wand, ein Rolltisch mit Papieren. Lighting: Neutrale Deckenbeleuchtung, kühl, dazu Tageslicht durch eine offene Tür rechts.\n\nActions:\n- Langsames Kopfschütteln, eine Augenbraue hebt sich\n- Kleine abweisende Geste bei 'steht nirgends'\n- Blick geht kurz zu den Kartons und zurück\n- Leichtes Handy-Wackeln, Frontkamera nah am Gesicht\n\nDialogue (spoken out loud by the character):\n'Was mich gestört hat: Du kaufst was mit Kräutern drin und weißt nicht, ob jemand nachgemessen hat. Steht nirgends.'\n\nAudio: Nur die Stimme der Person — pure dialogue. iPhone 15 Pro mic. Stimme fester, leicht genervt. Keine Musik, keine Hintergrundgeräusche, keine Soundeffekte, kein Foley, kein Raumton."
  },
  {
    "id": "clip-3",
    "title": "CLIP 3 — ALLES PROBIERT",
    "content": "A casual selfie-style iPhone 15 Pro front-camera vertical video (9:16) filmed === IN EINEM KLEINEN LAGERRAUM ===.\n\nCharacter: Tim, ein 30-jähriger Mann mit kurzen dunklen Haaren, einfaches dunkles Sweatshirt, keine Inszenierung.\n\nSetting: Kleiner Lagerraum, gestapelte Versandkartons an der Wand, ein Rolltisch mit Papieren. Lighting: Neutrale Deckenbeleuchtung, kühl, dazu Tageslicht durch eine offene Tür rechts.\n\nActions:\n- Zählt kurz an zwei Fingern ab, Blick nach oben\n- Schulterzucken bei 'gar nicht erst reden'\n- Lässt die Hände sinken, Kiefer leicht angespannt\n- Leichtes Handy-Wackeln, Frontkamera nah am Gesicht\n\nDialogue (spoken out loud by the character):\n'Also hab ich Hersteller angefragt. Die meisten wollten über Rohstoffe und Prüfungen gar nicht erst reden.'\n\nAudio: Nur die Stimme der Person — pure dialogue. iPhone 15 Pro mic. Aufzählungs-Energie, nüchtern. Keine Musik, keine Hintergrundgeräusche, keine Soundeffekte, kein Foley, kein Raumton."
  },
  {
    "id": "clip-4",
    "title": "CLIP 4 — DAS LOW-POINT GESPRÄCH",
    "content": "A casual selfie-style iPhone 15 Pro front-camera vertical video (9:16) filmed === IN EINEM KLEINEN LAGERRAUM ===.\n\nCharacter: Tim, ein 30-jähriger Mann mit kurzen dunklen Haaren, einfaches dunkles Sweatshirt, keine Inszenierung.\n\nSetting: Kleiner Lagerraum, gestapelte Versandkartons an der Wand, ein Rolltisch mit Papieren. Lighting: Neutrale Deckenbeleuchtung, kühl, dazu Tageslicht durch eine offene Tür rechts.\n\nActions:\n- Pausiert, Blick sinkt auf die Papiere, kurzer Atem-Stopp\n- Schluckt kurz, bevor er 'fast einfacher' sagt\n- Leichtes Kopfschütteln, hält den Blick danach zu lang\n- Leichtes Handy-Wackeln, Frontkamera nah am Gesicht\n\nDialogue (spoken out loud by the character):\n'Das hat gedauert und es war teurer als geplant. Es gab einen Punkt, da hätte ich es fast einfacher gemacht.'\n\nAudio: Nur die Stimme der Person — pure dialogue. iPhone 15 Pro mic. Stimme langsamer, ehrlich, leichte Verletzlichkeit. Keine Musik, keine Hintergrundgeräusche, keine Soundeffekte, kein Foley, kein Raumton."
  },
  {
    "id": "clip-5",
    "title": "CLIP 5 — DIE ENTDECKUNG",
    "content": "A casual selfie-style iPhone 15 Pro front-camera vertical video (9:16) filmed === IN EINEM KLEINEN LAGERRAUM ===.\n\nCharacter: Tim, ein 30-jähriger Mann mit kurzen dunklen Haaren, einfaches dunkles Sweatshirt, keine Inszenierung.\n\nSetting: Kleiner Lagerraum, gestapelte Versandkartons an der Wand, ein Rolltisch mit Papieren. Lighting: Neutrale Deckenbeleuchtung, kühl, dazu Tageslicht durch eine offene Tür rechts.\n\nActions:\n- Steht aufrechter, Schultern gehen zurück\n- Hebt das Blatt auf Brusthöhe, hält es ruhig\n- Tippt bei 'jede Charge' zweimal auf das Papier\n- Leichtes Handy-Wackeln, Frontkamera nah am Gesicht\n\nDialogue (spoken out loud by the character):\n'Wir produzieren jetzt nach GMP und lassen jede Charge im Labor auf Schwermetalle prüfen. Das ist der Deal, den ich wollte.'\n\nAudio: Nur die Stimme der Person — pure dialogue. iPhone 15 Pro mic. Stimme klar, bestimmt, erleichtert. Keine Musik, keine Hintergrundgeräusche, keine Soundeffekte, kein Foley, kein Raumton."
  },
  {
    "id": "clip-6",
    "title": "CLIP 6 — DAS PRODUKT (PRODUKT SICHTBAR)",
    "productVisible": true,
    "content": "A casual selfie-style iPhone 15 Pro front-camera vertical video (9:16) filmed === IN EINEM KLEINEN LAGERRAUM ===.\n\n🔴 PRODUKT-CLIP: Er hält die mysolv Softgel-Dose (kleine weiße Dose mit hellem Etikett, passt in eine Handfläche) auf Brusthöhe, locker, wie wenn er einer Freundin etwas zeigt.\n\nCharacter: Tim, ein 30-jähriger Mann mit kurzen dunklen Haaren, einfaches dunkles Sweatshirt, keine Inszenierung.\n\nSetting: Kleiner Lagerraum, gestapelte Versandkartons an der Wand, ein Rolltisch mit Papieren. Lighting: Neutrale Deckenbeleuchtung, kühl, dazu Tageslicht durch eine offene Tür rechts.\n\nActions:\n- Nimmt die Dose vom Rolltisch, dreht sie einmal in der Hand\n- Hält sie auf Brusthöhe, dreht das Etikett zur Kamera\n- Stellt sie neben das Blatt Papier, beide nebeneinander\n- Leichtes Handy-Wackeln, Frontkamera nah am Gesicht\n\nDialogue (spoken out loud by the character):\n'Das ist das Produkt. Vier Sachen in einer Softgel. Ohne Gluten, ohne Laktose, ohne Soja, ohne Zucker, ohne Füllstoffe.'\n\nAudio: Nur die Stimme der Person — pure dialogue. iPhone 15 Pro mic. Stimme sachlich, ruhig, faktisch. Keine Musik, keine Hintergrundgeräusche, keine Soundeffekte, kein Foley, kein Raumton."
  },
  {
    "id": "clip-7",
    "title": "CLIP 7 — DIE ERGEBNISSE",
    "content": "A casual selfie-style iPhone 15 Pro front-camera vertical video (9:16) filmed === IN EINEM KLEINEN LAGERRAUM ===.\n\nCharacter: Tim, ein 30-jähriger Mann mit kurzen dunklen Haaren, einfaches dunkles Sweatshirt, keine Inszenierung.\n\nSetting: Kleiner Lagerraum, gestapelte Versandkartons an der Wand, ein Rolltisch mit Papieren. Lighting: Neutrale Deckenbeleuchtung, kühl, dazu Tageslicht durch eine offene Tür rechts.\n\nActions:\n- Dreht die Dose um, zeigt auf die Unterseite\n- Direkter Blick in die Linse, kurzes Nicken\n- Hält Dose und Blatt nochmal kurz nebeneinander\n- Leichtes Handy-Wackeln, Frontkamera nah am Gesicht\n\nDialogue (spoken out loud by the character):\n'Wenn du den Bericht zu deiner Charge sehen willst, schreib uns. Chargennummer steht unten auf der Dose. Wir schicken ihn.'\n\nAudio: Nur die Stimme der Person — pure dialogue. iPhone 15 Pro mic. Stimme direkt, einladend, ohne Pathos. Keine Musik, keine Hintergrundgeräusche, keine Soundeffekte, kein Foley, kein Raumton."
  },
  {
    "id": "clip-8",
    "title": "CLIP 8 — DER CTA",
    "content": "A casual selfie-style iPhone 15 Pro front-camera vertical video (9:16) filmed === IN EINEM KLEINEN LAGERRAUM ===.\n\nCharacter: Tim, ein 30-jähriger Mann mit kurzen dunklen Haaren, einfaches dunkles Sweatshirt, keine Inszenierung.\n\nSetting: Kleiner Lagerraum, gestapelte Versandkartons an der Wand, ein Rolltisch mit Papieren. Lighting: Neutrale Deckenbeleuchtung, kühl, dazu Tageslicht durch eine offene Tür rechts.\n\nActions:\n- Ehrliches halbes Lächeln, entspannte Haltung\n- Kleines Schulterzucken bei 'mehr hab ich gar nicht'\n- Direkter Blickkontakt, zeigt locker nach unten\n- Leichtes Handy-Wackeln, Frontkamera nah am Gesicht\n\nDialogue (spoken out loud by the character):\n'Mehr hab ich gar nicht. Kein Versprechen, nur ein Blatt Papier und eine Dose. Schau es dir an, Link ist unten.'\n\nAudio: Nur die Stimme der Person — pure dialogue. iPhone 15 Pro mic. Stimme warm, unaufgeregt, ehrlich. Keine Musik, keine Hintergrundgeräusche, keine Soundeffekte, kein Foley, kein Raumton."
  },
  {
    "id": "voiceover",
    "title": "VOICEOVER SPECS",
    "content": "Voice: männlich, 28 bis 34, warm und nahbar.\nAccent: Hochdeutsch mit leicht umgangssprachlichem Touch, junger Gründer, unaufgeregt-Energie.\nTone: Locker, echt, wie ein Gespräch mit einer engen Freundin.\nEnergy: Beginnt müde und genervt, steigert sich zu hoffnungsvoll, endet warm und hilfreich.\n\nElevenLabs Settings:\n- Stability: 0.35\n- Similarity: 0.75\n- Style Exaggeration: 0.20\n- Speaker Boost: ON\n\nClip-by-clip delivery — match the tone described in each section's Audio block. Reminder: every video clip is DIALOGUE-ONLY. No music, no SFX, no foley, no ambient sound is added at the video-generation step; this voiceover IS the audio."
  },
  {
    "id": "full-dialogue",
    "title": "FULL DIALOGUE (export for TTS / subtitle file)",
    "content": "=== HOOK A — pick ONE hook for the actual ad ===\nDas hier ist unser Produkt und das daneben ist der Laborbericht dazu. Ich zeig dir mal, was da drin steht.\n\n=== CLIP 1 ===\nKurz zu mir: ich bin einer der beiden Gründer. Kein Labor, kein Arzt. Ich hab das Ding gebaut, das ich selber wollte.\n\n=== CLIP 2 ===\nWas mich gestört hat: Du kaufst was mit Kräutern drin und weißt nicht, ob jemand nachgemessen hat. Steht nirgends.\n\n=== CLIP 3 ===\nAlso hab ich Hersteller angefragt. Die meisten wollten über Rohstoffe und Prüfungen gar nicht erst reden.\n\n=== CLIP 4 ===\nDas hat gedauert und es war teurer als geplant. Es gab einen Punkt, da hätte ich es fast einfacher gemacht.\n\n=== CLIP 5 ===\nWir produzieren jetzt nach GMP und lassen jede Charge im Labor auf Schwermetalle prüfen. Das ist der Deal, den ich wollte.\n\n=== CLIP 6 — PRODUKT SICHTBAR ===\nDas ist das Produkt. Vier Sachen in einer Softgel. Ohne Gluten, ohne Laktose, ohne Soja, ohne Zucker, ohne Füllstoffe.\n\n=== CLIP 7 ===\nWenn du den Bericht zu deiner Charge sehen willst, schreib uns. Chargennummer steht unten auf der Dose. Wir schicken ihn.\n\n=== CLIP 8 — CTA ===\nMehr hab ich gar nicht. Kein Versprechen, nur ein Blatt Papier und eine Dose. Schau es dir an, Link ist unten."
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
