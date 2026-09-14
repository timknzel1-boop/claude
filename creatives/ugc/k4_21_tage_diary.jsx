import { useState } from "react";

const sections = [
  {
    "id": "character",
    "title": "CHARACTER, SETTING & LIGHTING",
    "content": "Character: Jasmin, eine 29-jährige Frau mit dunklen Haaren im Dutt, Sommersprossen, schlichtes graues Shirt.\n\nSetting: Schlafzimmer vor einem Spiegelschrank, ein ungemachtes Bett unscharf im Hintergrund.\n\nLighting: Morgenlicht durch einen halb offenen Vorhang, leicht diesig, keine Lampen an.\n\nCamera: iPhone 15 Pro Frontkamera, vertikal 9:16."
  },
  {
    "id": "hook-a",
    "title": "HOOK A — Product Reveal (holds the product)",
    "productVisible": true,
    "content": "A casual selfie-style iPhone 15 Pro front-camera vertical video (9:16) filmed === IN EINEM SCHLAFZIMMER VOR EINEM SPIEGEL ===.\n\n🔴 PRODUKT-CLIP: Sie hält die mysolv Softgel-Dose (kleine weiße Dose mit hellem Etikett, passt in eine Handfläche) auf Brusthöhe, locker, wie wenn sie einer Freundin etwas zeigt.\n\nCharacter: Jasmin, eine 29-jährige Frau mit dunklen Haaren im Dutt, Sommersprossen, schlichtes graues Shirt.\n\nSetting: Schlafzimmer vor einem Spiegelschrank, ein ungemachtes Bett unscharf im Hintergrund. Lighting: Morgenlicht durch einen halb offenen Vorhang, leicht diesig, keine Lampen an.\n\nActions:\n- Hält die Dose neben das Gesicht, Blick wechselt zwischen Dose und Linse\n- Schultern heben sich beim Einatmen, entschlossener Ausdruck\n- Kurzes Nicken zu sich selbst, halbes Lächeln\n- Leichtes Handy-Wackeln, Frontkamera nah am Gesicht\n\nDialogue (spoken out loud by the character):\n'Tag eins von einundzwanzig. Ich dokumentier das jetzt durch, egal was rauskommt. Das hier ist alles, was ich nehme.'\n\nAudio: Nur die Stimme der Person — pure dialogue. iPhone 15 Pro mic. Keine Musik, keine Hintergrundgeräusche, keine Soundeffekte, kein Foley, kein Raumton."
  },
  {
    "id": "hook-b",
    "title": "HOOK B — Symptom Demo",
    "content": "A casual selfie-style iPhone 15 Pro front-camera vertical video (9:16) filmed === IN EINEM SCHLAFZIMMER VOR EINEM SPIEGEL ===.\n\nCharacter: Jasmin, eine 29-jährige Frau mit dunklen Haaren im Dutt, Sommersprossen, schlichtes graues Shirt.\n\nSetting: Schlafzimmer vor einem Spiegelschrank, ein ungemachtes Bett unscharf im Hintergrund. Lighting: Morgenlicht durch einen halb offenen Vorhang, leicht diesig, keine Lampen an.\n\nActions:\n- Zeigt mit flacher Hand vor den Oberkörper, Blick kurz nach unten\n- Augen weiten sich, Schultern heben sich vor 'einundzwanzig Tagen'\n- Kleines nervöses Lachen, Blick zurück in die Linse\n- Leichtes Handy-Wackeln, Frontkamera nah am Gesicht\n\nDialogue (spoken out loud by the character):\n'So sah mein Bauch heute Morgen aus. Merk dir das. In einundzwanzig Tagen zeig ich dir dasselbe Bild nochmal.'\n\nAudio: Nur die Stimme der Person — pure dialogue. iPhone 15 Pro mic. Keine Musik, keine Hintergrundgeräusche, keine Soundeffekte, kein Foley, kein Raumton."
  },
  {
    "id": "hook-c",
    "title": "HOOK C — Relatable Frustration",
    "content": "A casual selfie-style iPhone 15 Pro front-camera vertical video (9:16) filmed === IN EINEM SCHLAFZIMMER VOR EINEM SPIEGEL ===.\n\nCharacter: Jasmin, eine 29-jährige Frau mit dunklen Haaren im Dutt, Sommersprossen, schlichtes graues Shirt.\n\nSetting: Schlafzimmer vor einem Spiegelschrank, ein ungemachtes Bett unscharf im Hintergrund. Lighting: Morgenlicht durch einen halb offenen Vorhang, leicht diesig, keine Lampen an.\n\nActions:\n- Hält drei Finger hoch, lässt sie langsam sinken\n- Blick flackert kurz weg, kommt zurück, wissender Ausdruck\n- Schultern sinken, sie atmet sichtbar aus, halbes Lachen\n- Leichtes Handy-Wackeln, Frontkamera nah am Gesicht\n\nDialogue (spoken out loud by the character):\n'Wenn du auch schon drei Kuren angefangen und keine zu Ende gebracht hast — ja. Willkommen im Club.'\n\nAudio: Nur die Stimme der Person — pure dialogue. iPhone 15 Pro mic. Keine Musik, keine Hintergrundgeräusche, keine Soundeffekte, kein Foley, kein Raumton."
  },
  {
    "id": "hook-d",
    "title": "HOOK D — Almost Made A Mistake",
    "content": "A casual selfie-style iPhone 15 Pro front-camera vertical video (9:16) filmed === IN EINEM SCHLAFZIMMER VOR EINEM SPIEGEL ===.\n\nCharacter: Jasmin, eine 29-jährige Frau mit dunklen Haaren im Dutt, Sommersprossen, schlichtes graues Shirt.\n\nSetting: Schlafzimmer vor einem Spiegelschrank, ein ungemachtes Bett unscharf im Hintergrund. Lighting: Morgenlicht durch einen halb offenen Vorhang, leicht diesig, keine Lampen an.\n\nActions:\n- Beginnt mit verschränkten Armen, Blick nach oben-links beim Erinnern\n- Löst die Arme bei 'sieben Shakes', Augenbraue hebt sich\n- Lehnt sich vor bei der Pointe, hält den Blick zu lang\n- Leichtes Handy-Wackeln, Frontkamera nah am Gesicht\n\nDialogue (spoken out loud by the character):\n'Ich hatte schon eine Sechs-Tage-Kur mit sieben Shakes am Tag im Warenkorb. Dann hab ich auf meinen Kalender geschaut.'\n\nAudio: Nur die Stimme der Person — pure dialogue. iPhone 15 Pro mic. Keine Musik, keine Hintergrundgeräusche, keine Soundeffekte, kein Foley, kein Raumton."
  },
  {
    "id": "hook-e",
    "title": "HOOK E — Controversial Opinion",
    "content": "A casual selfie-style iPhone 15 Pro front-camera vertical video (9:16) filmed === IN EINEM SCHLAFZIMMER VOR EINEM SPIEGEL ===.\n\nCharacter: Jasmin, eine 29-jährige Frau mit dunklen Haaren im Dutt, Sommersprossen, schlichtes graues Shirt.\n\nSetting: Schlafzimmer vor einem Spiegelschrank, ein ungemachtes Bett unscharf im Hintergrund. Lighting: Morgenlicht durch einen halb offenen Vorhang, leicht diesig, keine Lampen an.\n\nActions:\n- Schaut direkt in die Linse, eine Augenbraue hoch bei 'Tag vier'\n- Abweisende Handbewegung, trockenes halbes Lachen\n- Zuckt einmal mit den Schultern, Blick bleibt fest\n- Leichtes Handy-Wackeln, Frontkamera nah am Gesicht\n\nDialogue (spoken out loud by the character):\n'Unpopuläre Meinung: die meisten Kuren scheitern nicht am Produkt. Die scheitern an Tag vier, weil sie zu kompliziert sind.'\n\nAudio: Nur die Stimme der Person — pure dialogue. iPhone 15 Pro mic. Keine Musik, keine Hintergrundgeräusche, keine Soundeffekte, kein Foley, kein Raumton."
  },
  {
    "id": "clip-1",
    "title": "CLIP 1 — DER ANFANG",
    "content": "A casual selfie-style iPhone 15 Pro front-camera vertical video (9:16) filmed === IN EINEM SCHLAFZIMMER VOR EINEM SPIEGEL ===.\n\nCharacter: Jasmin, eine 29-jährige Frau mit dunklen Haaren im Dutt, Sommersprossen, schlichtes graues Shirt.\n\nSetting: Schlafzimmer vor einem Spiegelschrank, ein ungemachtes Bett unscharf im Hintergrund. Lighting: Morgenlicht durch einen halb offenen Vorhang, leicht diesig, keine Lampen an.\n\nActions:\n- Steht aufrecht vor dem Spiegel, Schultern heben sich beim Einatmen\n- Blick wandert kurz zum eigenen Spiegelbild und zurück zur Linse\n- Kurzes bestimmtes Nicken zu sich selbst\n- Leichtes Handy-Wackeln, Frontkamera nah am Gesicht\n\nDialogue (spoken out loud by the character):\n'Tag eins. Ich mach das öffentlich, weil ich es sonst wieder abbreche. Einundzwanzig Tage, jeden Morgen eine Softgel.'\n\nAudio: Nur die Stimme der Person — pure dialogue. iPhone 15 Pro mic. Stimme wach, ein bisschen nervös, entschlossen. Keine Musik, keine Hintergrundgeräusche, keine Soundeffekte, kein Foley, kein Raumton."
  },
  {
    "id": "clip-2",
    "title": "CLIP 2 — ES WURDE SCHLIMMER",
    "content": "A casual selfie-style iPhone 15 Pro front-camera vertical video (9:16) filmed === IN EINEM SCHLAFZIMMER VOR EINEM SPIEGEL ===.\n\nCharacter: Jasmin, eine 29-jährige Frau mit dunklen Haaren im Dutt, Sommersprossen, schlichtes graues Shirt.\n\nSetting: Schlafzimmer vor einem Spiegelschrank, ein ungemachtes Bett unscharf im Hintergrund. Lighting: Morgenlicht durch einen halb offenen Vorhang, leicht diesig, keine Lampen an.\n\nActions:\n- Lehnt sich an den Spiegelschrank, Schultern sinken\n- Kiefer spannt sich an bei 'aufgehört', Blick kurz zur Seite\n- Langsames Kopfschütteln, dann fester Blick bei 'diesmal'\n- Leichtes Handy-Wackeln, Frontkamera nah am Gesicht\n\nDialogue (spoken out loud by the character):\n'Tag vier. Ich merk ehrlich gesagt nichts. Genau hier hab ich letztes Mal aufgehört. Diesmal mach ich weiter.'\n\nAudio: Nur die Stimme der Person — pure dialogue. iPhone 15 Pro mic. Stimme flacher, etwas enttäuscht, aber trotzig. Keine Musik, keine Hintergrundgeräusche, keine Soundeffekte, kein Foley, kein Raumton."
  },
  {
    "id": "clip-3",
    "title": "CLIP 3 — ALLES PROBIERT",
    "content": "A casual selfie-style iPhone 15 Pro front-camera vertical video (9:16) filmed === IN EINEM SCHLAFZIMMER VOR EINEM SPIEGEL ===.\n\nCharacter: Jasmin, eine 29-jährige Frau mit dunklen Haaren im Dutt, Sommersprossen, schlichtes graues Shirt.\n\nSetting: Schlafzimmer vor einem Spiegelschrank, ein ungemachtes Bett unscharf im Hintergrund. Lighting: Morgenlicht durch einen halb offenen Vorhang, leicht diesig, keine Lampen an.\n\nActions:\n- Zählt an den Fingern ab, schaut dabei nach oben\n- Kleine abweisende Geste bei 'drei Farben', halbes Lachen\n- Lässt die Hände sinken, Schulterzucken\n- Leichtes Handy-Wackeln, Frontkamera nah am Gesicht\n\nDialogue (spoken out loud by the character):\n'Kleiner Rückblick: Pulver, Shakes, Tropfen, ein Kalender mit drei Farben. Alles gekauft, nichts durchgezogen.'\n\nAudio: Nur die Stimme der Person — pure dialogue. iPhone 15 Pro mic. Aufzählungs-Energie, selbstironisch. Keine Musik, keine Hintergrundgeräusche, keine Soundeffekte, kein Foley, kein Raumton."
  },
  {
    "id": "clip-4",
    "title": "CLIP 4 — DAS LOW-POINT GESPRÄCH",
    "content": "A casual selfie-style iPhone 15 Pro front-camera vertical video (9:16) filmed === IN EINEM SCHLAFZIMMER VOR EINEM SPIEGEL ===.\n\nCharacter: Jasmin, eine 29-jährige Frau mit dunklen Haaren im Dutt, Sommersprossen, schlichtes graues Shirt.\n\nSetting: Schlafzimmer vor einem Spiegelschrank, ein ungemachtes Bett unscharf im Hintergrund. Lighting: Morgenlicht durch einen halb offenen Vorhang, leicht diesig, keine Lampen an.\n\nActions:\n- Pausiert, Blick sinkt nach unten, kurzer Atem-Stopp\n- Schluckt kurz, bevor sie 'das hat gesessen' sagt\n- Leichtes Kopfschütteln, hält den Blick danach zu lang\n- Leichtes Handy-Wackeln, Frontkamera nah am Gesicht\n\nDialogue (spoken out loud by the character):\n'Tag sieben. Meine Mitbewohnerin hat gefragt, ob das nicht wieder so ein Ding ist. Das hat gesessen, ehrlich.'\n\nAudio: Nur die Stimme der Person — pure dialogue. iPhone 15 Pro mic. Stimme langsamer, ernster, leichte Verletzlichkeit. Keine Musik, keine Hintergrundgeräusche, keine Soundeffekte, kein Foley, kein Raumton."
  },
  {
    "id": "clip-5",
    "title": "CLIP 5 — DIE ENTDECKUNG",
    "content": "A casual selfie-style iPhone 15 Pro front-camera vertical video (9:16) filmed === IN EINEM SCHLAFZIMMER VOR EINEM SPIEGEL ===.\n\nCharacter: Jasmin, eine 29-jährige Frau mit dunklen Haaren im Dutt, Sommersprossen, schlichtes graues Shirt.\n\nSetting: Schlafzimmer vor einem Spiegelschrank, ein ungemachtes Bett unscharf im Hintergrund. Lighting: Morgenlicht durch einen halb offenen Vorhang, leicht diesig, keine Lampen an.\n\nActions:\n- Augenbrauen heben sich, Schultern heben sich beim Einatmen\n- Zeigt kurz auf die Hüfte, lehnt sich leicht vor\n- Leichtes ungläubiges Lachen, eine Hand öffnet sich\n- Leichtes Handy-Wackeln, Frontkamera nah am Gesicht\n\nDialogue (spoken out loud by the character):\n'Tag zehn. Erste echte Notiz: ich hab abends den Hosenknopf nicht aufgemacht. Kleinigkeit, aber ich hab es gemerkt.'\n\nAudio: Nur die Stimme der Person — pure dialogue. iPhone 15 Pro mic. Stimme neugierig, vorsichtig überrascht. Keine Musik, keine Hintergrundgeräusche, keine Soundeffekte, kein Foley, kein Raumton."
  },
  {
    "id": "clip-6",
    "title": "CLIP 6 — DAS PRODUKT (PRODUKT SICHTBAR)",
    "productVisible": true,
    "content": "A casual selfie-style iPhone 15 Pro front-camera vertical video (9:16) filmed === IN EINEM SCHLAFZIMMER VOR EINEM SPIEGEL ===.\n\n🔴 PRODUKT-CLIP: Sie hält die mysolv Softgel-Dose (kleine weiße Dose mit hellem Etikett, passt in eine Handfläche) auf Brusthöhe, locker, wie wenn sie einer Freundin etwas zeigt.\n\nCharacter: Jasmin, eine 29-jährige Frau mit dunklen Haaren im Dutt, Sommersprossen, schlichtes graues Shirt.\n\nSetting: Schlafzimmer vor einem Spiegelschrank, ein ungemachtes Bett unscharf im Hintergrund. Lighting: Morgenlicht durch einen halb offenen Vorhang, leicht diesig, keine Lampen an.\n\nActions:\n- Greift zur Kommode, nimmt die Dose, dreht sie einmal in der Hand\n- Hält sie auf Brusthöhe, Schulterzucken bei 'mit Wasser'\n- Schraubt kurz den Deckel auf und wieder zu, stellt sie zurück\n- Leichtes Handy-Wackeln, Frontkamera nah am Gesicht\n\nDialogue (spoken out loud by the character):\n'Falls du fragst, was ich nehme: das hier. Vier Sachen in einer Softgel, geschmacksneutral, eine am Morgen mit Wasser.'\n\nAudio: Nur die Stimme der Person — pure dialogue. iPhone 15 Pro mic. Stimme locker, sachlich, ohne Werbe-Ton. Keine Musik, keine Hintergrundgeräusche, keine Soundeffekte, kein Foley, kein Raumton."
  },
  {
    "id": "clip-7",
    "title": "CLIP 7 — DIE ERGEBNISSE",
    "content": "A casual selfie-style iPhone 15 Pro front-camera vertical video (9:16) filmed === IN EINEM SCHLAFZIMMER VOR EINEM SPIEGEL ===.\n\nCharacter: Jasmin, eine 29-jährige Frau mit dunklen Haaren im Dutt, Sommersprossen, schlichtes graues Shirt.\n\nSetting: Schlafzimmer vor einem Spiegelschrank, ein ungemachtes Bett unscharf im Hintergrund. Lighting: Morgenlicht durch einen halb offenen Vorhang, leicht diesig, keine Lampen an.\n\nActions:\n- Steht aufrecht, Gesicht hellt sich auf, Augen werden heller\n- Flache Hand geht kurz vor den Bauch, Augen kurz glasig\n- Echtes Lächeln bei 'durchgezogen', kurzes Nicken\n- Leichtes Handy-Wackeln, Frontkamera nah am Gesicht\n\nDialogue (spoken out loud by the character):\n'Tag einundzwanzig. Kein Wunder, kein anderer Mensch. Aber ich fühl mich abends leichter und ich hab es durchgezogen.'\n\nAudio: Nur die Stimme der Person — pure dialogue. iPhone 15 Pro mic. Energie hebt sich, ruhiger Stolz. Keine Musik, keine Hintergrundgeräusche, keine Soundeffekte, kein Foley, kein Raumton."
  },
  {
    "id": "clip-8",
    "title": "CLIP 8 — DER CTA",
    "content": "A casual selfie-style iPhone 15 Pro front-camera vertical video (9:16) filmed === IN EINEM SCHLAFZIMMER VOR EINEM SPIEGEL ===.\n\nCharacter: Jasmin, eine 29-jährige Frau mit dunklen Haaren im Dutt, Sommersprossen, schlichtes graues Shirt.\n\nSetting: Schlafzimmer vor einem Spiegelschrank, ein ungemachtes Bett unscharf im Hintergrund. Lighting: Morgenlicht durch einen halb offenen Vorhang, leicht diesig, keine Lampen an.\n\nActions:\n- Ehrliches warmes Lächeln, entspannte Haltung, Schultern locker\n- Hält einen Finger hoch bei 'eine Kapsel'\n- Direkter Blickkontakt bei 'Link ist unten', zeigt locker nach unten\n- Leichtes Handy-Wackeln, Frontkamera nah am Gesicht\n\nDialogue (spoken out loud by the character):\n'Wenn du auch schon dreimal abgebrochen hast, nimm was Einfaches. Eine Kapsel, einundzwanzig Tage. Link ist unten.'\n\nAudio: Nur die Stimme der Person — pure dialogue. iPhone 15 Pro mic. Stimme warm, direkt, Freundin-gibt-Rat-Energie. Keine Musik, keine Hintergrundgeräusche, keine Soundeffekte, kein Foley, kein Raumton."
  },
  {
    "id": "voiceover",
    "title": "VOICEOVER SPECS",
    "content": "Voice: weiblich, 27 bis 32, warm und nahbar.\nAccent: Hochdeutsch mit leicht umgangssprachlichem Touch, junge Frau Ende zwanzig-Energie.\nTone: Locker, echt, wie ein Gespräch mit einer engen Freundin.\nEnergy: Beginnt müde und genervt, steigert sich zu hoffnungsvoll, endet warm und hilfreich.\n\nElevenLabs Settings:\n- Stability: 0.35\n- Similarity: 0.75\n- Style Exaggeration: 0.20\n- Speaker Boost: ON\n\nClip-by-clip delivery — match the tone described in each section's Audio block. Reminder: every video clip is DIALOGUE-ONLY. No music, no SFX, no foley, no ambient sound is added at the video-generation step; this voiceover IS the audio."
  },
  {
    "id": "full-dialogue",
    "title": "FULL DIALOGUE (export for TTS / subtitle file)",
    "content": "=== HOOK A — pick ONE hook for the actual ad ===\nTag eins von einundzwanzig. Ich dokumentier das jetzt durch, egal was rauskommt. Das hier ist alles, was ich nehme.\n\n=== CLIP 1 ===\nTag eins. Ich mach das öffentlich, weil ich es sonst wieder abbreche. Einundzwanzig Tage, jeden Morgen eine Softgel.\n\n=== CLIP 2 ===\nTag vier. Ich merk ehrlich gesagt nichts. Genau hier hab ich letztes Mal aufgehört. Diesmal mach ich weiter.\n\n=== CLIP 3 ===\nKleiner Rückblick: Pulver, Shakes, Tropfen, ein Kalender mit drei Farben. Alles gekauft, nichts durchgezogen.\n\n=== CLIP 4 ===\nTag sieben. Meine Mitbewohnerin hat gefragt, ob das nicht wieder so ein Ding ist. Das hat gesessen, ehrlich.\n\n=== CLIP 5 ===\nTag zehn. Erste echte Notiz: ich hab abends den Hosenknopf nicht aufgemacht. Kleinigkeit, aber ich hab es gemerkt.\n\n=== CLIP 6 — PRODUKT SICHTBAR ===\nFalls du fragst, was ich nehme: das hier. Vier Sachen in einer Softgel, geschmacksneutral, eine am Morgen mit Wasser.\n\n=== CLIP 7 ===\nTag einundzwanzig. Kein Wunder, kein anderer Mensch. Aber ich fühl mich abends leichter und ich hab es durchgezogen.\n\n=== CLIP 8 — CTA ===\nWenn du auch schon dreimal abgebrochen hast, nimm was Einfaches. Eine Kapsel, einundzwanzig Tage. Link ist unten."
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
