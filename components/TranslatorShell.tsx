"use client";

import { useMemo, useState } from "react";
import AudioPlayer from "@/components/AudioPlayer";
import LiveInput from "@/components/LiveInput";
import MorsePanel from "@/components/MorsePanel";
import ReferenceChart from "@/components/ReferenceChart";
import SignalVisualizer from "@/components/SignalVisualizer";
import TextPanel from "@/components/TextPanel";
import { useDebounce } from "@/hooks/useDebounce";
import { useMorseAudio } from "@/hooks/useMorseAudio";
import { decodeFromMorse } from "@/lib/decoder";
import { encodeToMorse } from "@/lib/encoder";

type Mode = "textToMorse" | "morseToText";

export default function TranslatorShell() {
  const [mode, setMode] = useState<Mode>("textToMorse");
  const [text, setText] = useState("");
  const [morse, setMorse] = useState("");
  const [wpm, setWpm] = useState(16);

  const debouncedText = useDebounce(text, 300);
  const debouncedMorse = useDebounce(morse, 300);
  const { play, stop, isPlaying, activeSymbolIndex } = useMorseAudio();

  const translated = useMemo(() => {
    if (mode === "textToMorse") {
      return encodeToMorse(debouncedText);
    }
    return decodeFromMorse(debouncedMorse);
  }, [mode, debouncedText, debouncedMorse]);

  const displayText = mode === "morseToText" ? translated : text;
  const displayMorse = mode === "textToMorse" ? translated : morse;

  const handleCopy = async () => {
    const value = mode === "textToMorse" ? displayMorse : displayText;
    await navigator.clipboard.writeText(value);
  };

  const handleDownload = () => {
    const value = mode === "textToMorse" ? displayMorse : displayText;
    const blob = new Blob([value], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "morse-output.txt";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <main className="container">
      <h1>Morse Code Translator</h1>
      <p>Frontend-only Next.js translator with audio, visualizer, and live input.</p>

      <div className="controls">
        <button className="btn" onClick={() => setMode("textToMorse")}>
          Text to Morse
        </button>
        <button className="btn" onClick={() => setMode("morseToText")}>
          Morse to Text
        </button>
        <button className="btn" onClick={handleCopy}>
          Copy Output
        </button>
        <button className="btn" onClick={handleDownload}>
          Download .txt
        </button>
      </div>

      <section className="grid" style={{ marginTop: "1rem" }}>
        <TextPanel
          value={displayText}
          onChange={setText}
          readOnly={mode === "morseToText"}
        />
        <MorsePanel
          value={displayMorse}
          onChange={setMorse}
          readOnly={mode === "textToMorse"}
        />
      </section>

      <section className="row">
        <AudioPlayer
          wpm={wpm}
          setWpm={setWpm}
          isPlaying={isPlaying}
          onPlay={() => play(displayMorse, wpm)}
          onStop={stop}
        />
        <SignalVisualizer morse={displayMorse} activeIndex={activeSymbolIndex} />
        <LiveInput
          onSymbol={(symbol) => setMorse((prev) => prev + symbol)}
          onLetterGap={() => setMorse((prev) => `${prev} `)}
        />
        <ReferenceChart onInsert={(char) => setText((prev) => `${prev}${char}`)} />
      </section>
    </main>
  );
}
