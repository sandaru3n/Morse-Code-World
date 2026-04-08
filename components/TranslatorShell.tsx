"use client";

import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import LiveInput from "@/components/LiveInput";
import PulseWaveform from "@/components/PulseWaveform";
import {
  IconAccount,
  IconCopy,
  IconDelete,
  IconDownload,
  IconLightbulb,
  IconPause,
  IconPlay,
  IconRepeat,
  IconSettings,
  IconShare,
  IconStop,
  IconTune,
  IconVerified,
  IconVibration,
  IconVolume
} from "@/components/SignalPulseIcons";
import { useDebounce } from "@/hooks/useDebounce";
import { useMorseAudio } from "@/hooks/useMorseAudio";
import type { MorsePlaybackOptions } from "@/lib/audioEngine";
import { decodeFromMorse } from "@/lib/decoder";
import { encodeToMorse } from "@/lib/encoder";
import type { TranslateMode } from "@/lib/morsePlayback";
import { morseForPlayback, morseToSteps } from "@/lib/morsePlayback";
import { normalizeMorseInput } from "@/lib/translate";
import { morseStepsToWavBlob } from "@/lib/wavRender";

const QUICK_REF = [
  ["A", ".-"],
  ["B", "-..."],
  ["C", "-.-."],
  ["D", "-.."],
  ["E", "."],
  ["F", "..-."]
];

function signalIdFromInput(s: string): string {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (Math.imul(31, h) + s.charCodeAt(i)) | 0;
  const hex = (h >>> 0).toString(16).toUpperCase().padStart(6, "0").slice(0, 6);
  return `PULSE-${hex}`;
}

export default function TranslatorShell() {
  const [mode, setMode] = useState<TranslateMode>("encode");
  const [input, setInput] = useState("");
  const [speed, setSpeed] = useState(20);
  const [pitch, setPitch] = useState(600);
  const [volume, setVolume] = useState(85);
  const [repeat, setRepeat] = useState(false);
  const [soundOn, setSoundOn] = useState(true);
  /** White full-screen flash in time with Morse during PLAY (visual signal). */
  const [screenBlinkEnabled, setScreenBlinkEnabled] = useState(false);
  const [lightTheme, setLightTheme] = useState(false);
  const [vibrateOn, setVibrateOn] = useState(false);
  const [configureOpen, setConfigureOpen] = useState(false);
  const [screenFlashPanelOpen, setScreenFlashPanelOpen] = useState(false);
  const [bulbClickGlow, setBulbClickGlow] = useState(false);
  const [showLiveInput, setShowLiveInput] = useState(true);

  const debouncedInput = useDebounce(input, 300);
  const output = useMemo(() => {
    if (mode === "encode") return encodeToMorse(debouncedInput);
    return decodeFromMorse(normalizeMorseInput(debouncedInput));
  }, [mode, debouncedInput]);

  const { startPlayback, stop, pause, resume, isPlaying, isPaused, activeSymbolIndex, screenFlashPhase } =
    useMorseAudio();

  const repeatRef = useRef(repeat);
  const playbackStateRef = useRef({
    input,
    mode,
    speed,
    pitch,
    volume,
    soundOn,
    vibrateOn,
    screenBlinkEnabled
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", !lightTheme);
  }, [lightTheme]);

  const beginPlaybackRef = useRef<() => void>(null);

  const buildPlaybackOptions = useCallback((): MorsePlaybackOptions => {
    const s = playbackStateRef.current;
    return {
      wpm: s.speed,
      pitchHz: s.pitch,
      volume: s.volume / 100,
      soundEnabled: s.soundOn,
      vibrateEnabled: s.vibrateOn,
      screenFlashEnabled: s.screenBlinkEnabled,
      onComplete: () => {
        if (repeatRef.current) {
          queueMicrotask(() => beginPlaybackRef.current?.());
        }
      }
    };
  }, []);

  const beginPlayback = useCallback(() => {
    const s = playbackStateRef.current;
    const morse = morseForPlayback(s.input, s.mode);
    const steps = morseToSteps(morse, s.speed);
    if (steps.length === 0) return;
    startPlayback(steps, buildPlaybackOptions());
  }, [buildPlaybackOptions, startPlayback]);

  useLayoutEffect(() => {
    repeatRef.current = repeat;
    playbackStateRef.current = {
      input,
      mode,
      speed,
      pitch,
      volume,
      soundOn,
      vibrateOn,
      screenBlinkEnabled
    };
    beginPlaybackRef.current = beginPlayback;
  }, [repeat, input, mode, speed, pitch, volume, soundOn, vibrateOn, screenBlinkEnabled, beginPlayback]);

  const handlePlay = useCallback(() => {
    if (isPaused) {
      resume();
      return;
    }
    beginPlayback();
  }, [beginPlayback, isPaused, resume]);

  const handleSaveAudio = useCallback(async () => {
    const s = playbackStateRef.current;
    const morse = morseForPlayback(s.input, s.mode);
    const steps = morseToSteps(morse, s.speed);
    const blob = await morseStepsToWavBlob(steps, s.pitch, s.volume / 100);
    if (!blob) return;
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "morse-audio.wav";
    a.click();
    URL.revokeObjectURL(url);
  }, []);

  const handleShare = useCallback(async () => {
    const text = output || input;
    if (!text.trim()) return;
    try {
      if (navigator.share) {
        await navigator.share({ title: "morsecodeworld.org", text });
      } else {
        await navigator.clipboard.writeText(text);
      }
    } catch {
      /* cancelled */
    }
  }, [input, output]);

  const handleCopy = useCallback(async () => {
    const text = output || "";
    if (!text) return;
    await navigator.clipboard.writeText(text);
  }, [output]);

  const handleDownloadTxt = useCallback(() => {
    const text = output || "";
    if (!text) return;
    const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "signal-output.txt";
    a.click();
    URL.revokeObjectURL(url);
  }, [output]);

  const vizMorse = useMemo(() => {
    if (mode === "encode") return output;
    return normalizeMorseInput(input).replace(/[^.\- /]/g, "");
  }, [mode, input, output]);

  const saveDisabled = morseToSteps(morseForPlayback(input, mode), speed).length === 0;

  const sid = useMemo(() => signalIdFromInput(input), [input]);

  const navLink =
    "font-headline text-sm font-bold tracking-tight transition-colors duration-300 hover:text-emerald-400 md:text-base dark:text-[#DFE2EF] dark:hover:text-emerald-300";
  const navActive = "border-b-2 border-emerald-400 pb-1 text-emerald-400";

  return (
    <div className="relative flex min-h-screen flex-col bg-neutral-100 text-neutral-900 selection:bg-primary-container selection:text-on-primary-container dark:bg-surface-container-lowest dark:text-on-surface">
      <header className="fixed top-0 z-50 flex h-[4.5rem] w-full items-center justify-between bg-neutral-100/80 px-4 shadow-[0_16px_32px_rgba(0,0,0,0.12)] backdrop-blur-xl dark:bg-[#0A0E17]/80 dark:shadow-[0_16px_32px_rgba(0,0,0,0.38)] md:px-8">
        <div className="flex min-w-0 flex-1 items-center gap-3 md:flex-none">
          <span className="truncate font-headline text-base font-black tracking-tight text-emerald-500 dark:text-[#50FA7B] sm:text-lg md:text-xl lg:text-2xl">
            morsecodeworld.org
          </span>
        </div>
        <nav className="hidden flex-1 items-center justify-center gap-8 lg:gap-10 md:flex">
          <a className={`${navLink} ${navActive}`} href="#">
            Translator
          </a>
          <a className={navLink} href="#">
            History
          </a>
          <a className={navLink} href="#">
            Frequency
          </a>
          <a className={navLink} href="#">
            Settings
          </a>
        </nav>
        <div className="flex flex-shrink-0 items-center gap-1 md:gap-3">
          <button
            type="button"
            className="scale-95 text-neutral-700 transition-colors hover:text-emerald-600 active:scale-90 dark:text-on-surface dark:hover:text-primary-container"
            aria-label="Configure"
            onClick={() => setConfigureOpen(true)}
          >
            <IconSettings className="h-6 w-6" />
          </button>
          <button
            type="button"
            className="scale-95 text-neutral-700 transition-colors hover:text-emerald-600 active:scale-90 dark:text-on-surface dark:hover:text-primary-container"
            aria-label="Account"
          >
            <IconAccount className="h-6 w-6" />
          </button>
        </div>
      </header>

      <div className="flex flex-1 pt-[4.5rem]">
        <main className="flex-1 overflow-y-auto p-3 sm:p-5 lg:p-8">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 lg:grid-cols-12">
            <div className="space-y-5 lg:col-span-8">
              <div className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-4 shadow-xl dark:border-transparent dark:bg-surface-container sm:p-5">
                <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
                    <span className="font-label text-[10px] uppercase tracking-widest text-slate-500 dark:text-slate-400">
                      Mode
                    </span>
                    <div className="flex w-full items-stretch rounded-full bg-slate-100 p-1 dark:bg-surface-container-low sm:w-auto sm:p-0.5">
                      <button
                        type="button"
                        onClick={() => setMode("encode")}
                        className={`min-h-[44px] flex-1 rounded-full px-3 py-2 text-sm font-bold transition-all sm:min-h-0 sm:flex-none sm:px-3 sm:py-1 sm:text-[11px] ${
                          mode === "encode"
                            ? "bg-primary-container text-on-primary-container dark:text-on-primary-container"
                            : "text-slate-500 hover:text-neutral-800 dark:text-slate-500 dark:hover:text-on-surface"
                        }`}
                      >
                        Text → Morse
                      </button>
                      <button
                        type="button"
                        onClick={() => setMode("decode")}
                        className={`min-h-[44px] flex-1 rounded-full px-3 py-2 text-sm font-bold transition-all sm:min-h-0 sm:flex-none sm:px-3 sm:py-1 sm:text-[11px] ${
                          mode === "decode"
                            ? "bg-primary-container text-on-primary-container dark:text-on-primary-container"
                            : "text-slate-500 hover:text-neutral-800 dark:text-slate-500 dark:hover:text-on-surface"
                        }`}
                      >
                        Morse → Text
                      </button>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setInput("")}
                    className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-red-600 opacity-90 transition-opacity hover:opacity-100 dark:text-error"
                  >
                    <IconDelete className="h-3.5 w-3.5" />
                    Clear
                  </button>
                </div>

                <div className="relative mb-5">
                  <textarea
                    className="h-36 w-full resize-none rounded-xl border border-transparent bg-slate-100 p-3 font-headline text-base text-neutral-900 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-container/25 dark:bg-surface-container-low dark:text-on-surface dark:placeholder:text-slate-600 sm:p-4 sm:text-lg"
                    placeholder="Type text or Morse code..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    autoComplete="off"
                    spellCheck={false}
                  />
                  <div className="absolute bottom-2 right-3 flex gap-2">
                    <span className="font-label text-[9px] uppercase tracking-widest text-slate-500 dark:text-slate-500">
                      Characters: {input.length}
                    </span>
                  </div>
                </div>

                <PulseWaveform morse={vizMorse} activeIndex={activeSymbolIndex} />

                <div className="group relative min-h-[120px] rounded-xl border border-slate-200/80 bg-slate-50 p-4 dark:border-outline-variant/10 dark:bg-surface-container-high sm:p-5">
                  <div className="mb-2 font-label text-[10px] uppercase tracking-widest text-slate-500 dark:text-slate-500">
                    Signal Output
                  </div>
                  <div
                    className={`break-all font-headline font-bold leading-tight tracking-[0.12em] text-neutral-900 dark:text-primary-fixed sm:tracking-[0.18em] ${
                      mode === "encode" ? "text-xl sm:text-2xl md:text-3xl" : "text-lg sm:text-xl md:text-2xl"
                    }`}
                  >
                    {output || (
                      <span className="text-slate-400 dark:text-slate-600">
                        Output appears here. # = untranslatable.
                      </span>
                    )}
                  </div>
                  <div className="absolute right-3 top-3 flex gap-1.5 opacity-100 transition-opacity sm:right-4 sm:top-4 sm:opacity-0 sm:group-hover:opacity-100">
                    <button
                      type="button"
                      onClick={() => void handleCopy()}
                      className="rounded-md bg-white p-1.5 text-neutral-800 shadow-md transition-colors hover:bg-slate-100 dark:bg-surface-container dark:text-on-surface dark:hover:bg-surface-bright"
                      title="Copy"
                    >
                      <IconCopy className="h-4 w-4" />
                    </button>
                    <button
                      type="button"
                      onClick={handleDownloadTxt}
                      className="rounded-md bg-white p-1.5 text-neutral-800 shadow-md transition-colors hover:bg-slate-100 dark:bg-surface-container dark:text-on-surface dark:hover:bg-surface-bright"
                      title="Download"
                    >
                      <IconDownload className="h-4 w-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => void handleShare()}
                      className="rounded-md bg-white p-1.5 text-neutral-800 shadow-md transition-colors hover:bg-slate-100 dark:bg-surface-container dark:text-on-surface dark:hover:bg-surface-bright"
                      title="Share"
                    >
                      <IconShare className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
                <button
                  type="button"
                  onClick={handlePlay}
                  disabled={isPlaying && !isPaused}
                  className="flex items-center gap-1.5 rounded-full bg-primary-container px-4 py-2 text-sm font-bold text-on-primary-container shadow-lg shadow-neon-primary transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 dark:text-on-primary-container sm:px-5 sm:py-2.5"
                >
                  <IconPlay className="h-5 w-5" /> PLAY
                </button>
                <button
                  type="button"
                  onClick={pause}
                  disabled={!isPlaying || isPaused}
                  className="flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-neutral-800 transition-all hover:bg-slate-50 disabled:opacity-50 dark:border-transparent dark:bg-surface-container dark:text-on-surface dark:hover:bg-surface-bright sm:px-5 sm:py-2.5"
                >
                  <IconPause className="h-5 w-5" /> PAUSE
                </button>
                <button
                  type="button"
                  onClick={stop}
                  disabled={!isPlaying && !isPaused}
                  className="flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-neutral-800 transition-all hover:bg-slate-50 disabled:opacity-50 dark:border-transparent dark:bg-surface-container dark:text-on-surface dark:hover:bg-surface-bright sm:px-5 sm:py-2.5"
                >
                  <IconStop className="h-5 w-5" /> STOP
                </button>
                <div className="hidden h-8 w-px bg-outline-variant/20 sm:mx-1 sm:block dark:bg-outline-variant/20" />
                <button
                  type="button"
                  onClick={() => setRepeat((r) => !r)}
                  className={`rounded-full p-2.5 transition-all dark:bg-surface-container ${
                    repeat
                      ? "bg-secondary-container text-on-secondary-container shadow-neon-secondary dark:text-on-secondary-container"
                      : "bg-white text-neutral-700 hover:text-secondary dark:bg-surface-container dark:text-on-surface dark:hover:text-secondary"
                  }`}
                  title="Repeat"
                >
                  <IconRepeat className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={() => setSoundOn((s) => !s)}
                  className={`rounded-full p-2.5 transition-all ${
                    soundOn
                      ? "bg-secondary-container text-on-secondary-container shadow-neon-secondary dark:text-on-secondary-container"
                      : "bg-white text-slate-500 hover:text-on-surface dark:bg-surface-container dark:text-slate-500 dark:hover:text-on-surface"
                  }`}
                  title="Sound"
                >
                  <IconVolume className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setBulbClickGlow(true);
                    window.setTimeout(() => setBulbClickGlow(false), 700);
                    setScreenFlashPanelOpen(true);
                  }}
                  className={`relative rounded-full p-2.5 transition-all ${
                    bulbClickGlow ? "bulb-click-glow" : ""
                  } ${
                    screenBlinkEnabled
                      ? "bg-primary-container/25 text-emerald-700 shadow-neon-primary dark:text-primary-container"
                      : "bg-white text-slate-500 hover:text-neutral-800 dark:bg-surface-container dark:text-slate-500 dark:hover:text-on-surface"
                  }`}
                  title="Screen flash — open options"
                >
                  <IconLightbulb className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={() => setVibrateOn((v) => !v)}
                  className={`rounded-full p-2.5 transition-all ${
                    vibrateOn
                      ? "bg-primary-container/20 text-emerald-700 dark:text-primary-container"
                      : "bg-white text-slate-500 hover:text-on-surface dark:bg-surface-container"
                  }`}
                  title="Vibrate"
                >
                  <IconVibration className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={() => void handleSaveAudio()}
                  disabled={saveDisabled}
                  className="rounded-full border border-slate-200 bg-white p-2.5 text-neutral-700 transition-all hover:bg-slate-50 disabled:opacity-40 dark:border-transparent dark:bg-surface-container dark:text-on-surface"
                  title="Save audio"
                >
                  <IconDownload className="h-5 w-5" />
                </button>
              </div>

              {showLiveInput && (
                <div className="rounded-xl border border-slate-200 bg-white p-3 dark:border-outline-variant/20 dark:bg-surface-container">
                  <LiveInput
                    onSymbol={(symbol) => setInput((prev) => prev + symbol)}
                    onLetterGap={() => setInput((prev) => `${prev} `)}
                  />
                </div>
              )}
            </div>

            <div className="lg:col-span-4">
              <div className="glass-panel relative z-0 rounded-2xl border border-slate-200/80 p-4 dark:border-white/5 sm:p-5">
                <div className="mb-5 flex items-center gap-2 sm:mb-6">
                  <IconTune className="h-6 w-6 text-secondary dark:text-secondary" />
                  <h3 className="font-headline text-base font-bold tracking-tight sm:text-lg">
                    Signal Controls
                  </h3>
                </div>
                <div className="space-y-6 sm:space-y-7">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <label className="font-label text-[10px] uppercase tracking-widest text-slate-500 dark:text-slate-400">
                        Transmission Speed
                      </label>
                      <span className="font-headline text-sm font-bold text-secondary dark:text-secondary">
                        {speed} WPM
                      </span>
                    </div>
                    <input
                      type="range"
                      min={5}
                      max={60}
                      value={speed}
                      onChange={(e) => setSpeed(Number(e.target.value))}
                      className="h-1.5 w-full cursor-pointer appearance-none rounded-lg bg-slate-200 accent-secondary dark:bg-surface-container-lowest dark:accent-secondary"
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <label className="font-label text-[10px] uppercase tracking-widest text-slate-500 dark:text-slate-400">
                        Frequency Pitch
                      </label>
                      <span className="font-headline text-sm font-bold text-emerald-600 dark:text-primary-container">
                        {pitch} Hz
                      </span>
                    </div>
                    <input
                      type="range"
                      min={200}
                      max={1000}
                      step={10}
                      value={pitch}
                      onChange={(e) => setPitch(Number(e.target.value))}
                      className="h-1.5 w-full cursor-pointer appearance-none rounded-lg bg-slate-200 accent-emerald-500 dark:bg-surface-container-lowest dark:accent-primary-container"
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <label className="font-label text-[10px] uppercase tracking-widest text-slate-500 dark:text-slate-400">
                        Output Volume
                      </label>
                      <span className="font-headline text-sm font-bold text-slate-700 dark:text-slate-200">
                        {volume}%
                      </span>
                    </div>
                    <input
                      type="range"
                      min={0}
                      max={100}
                      value={volume}
                      onChange={(e) => setVolume(Number(e.target.value))}
                      className="h-1.5 w-full cursor-pointer appearance-none rounded-lg bg-slate-200 accent-slate-500 dark:bg-surface-container-lowest dark:accent-slate-400"
                    />
                  </div>
                </div>

                <div className="mt-6 rounded-xl border border-slate-200/80 bg-slate-50/80 p-4 dark:border-white/5 dark:bg-surface-container-lowest/50">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="mb-1 font-label text-[10px] uppercase tracking-widest text-slate-500 dark:text-slate-600">
                        Signal ID
                      </div>
                      <div className="font-headline text-xs font-bold text-slate-700 dark:text-slate-300">
                        {sid}
                      </div>
                    </div>
                    <IconVerified className="h-6 w-6 text-emerald-500/50" />
                  </div>
                  <div className="mt-3 flex items-center gap-2">
                    <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
                    <span className="font-label text-[10px] uppercase tracking-widest text-emerald-600/80 dark:text-emerald-500/70">
                      Link Secured
                    </span>
                  </div>
                </div>
              </div>

              <div className="relative z-[1] mt-5 overflow-hidden rounded-2xl border border-slate-200/80 bg-gradient-to-br from-slate-100 to-white p-4 dark:border-white/5 dark:from-surface-container-high/40 dark:to-surface-container-high/20 dark:bg-surface-container-high/30">
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 z-0 opacity-[0.07] dark:opacity-10"
                  style={{
                    backgroundImage: `radial-gradient(circle at 20% 50%, #50fa7b 0%, transparent 50%),
                      radial-gradient(circle at 80% 30%, #d7baff 0%, transparent 45%)`
                  }}
                />
                <div className="relative z-[1]">
                  <h4 className="mb-2 font-headline text-xs font-bold uppercase tracking-widest text-secondary dark:text-secondary">
                    Quick Reference
                  </h4>
                  <div className="grid grid-cols-2 gap-y-1.5 font-label text-[10px] text-slate-600 dark:text-slate-400">
                    {QUICK_REF.map(([ch, m], i) => (
                      <div
                        key={ch}
                        className={`flex justify-between ${i % 2 === 0 ? "border-r border-outline-variant/20 pr-4 dark:border-outline-variant/20" : "pl-4"}`}
                      >
                        <span>{ch}</span>
                        <span className="text-neutral-900 dark:text-on-surface">{m}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      <footer className="mt-auto flex w-full flex-col items-center gap-3 bg-neutral-100 py-4 dark:bg-[#0A0E17]">
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          <a
            className="font-label text-[10px] tracking-tighter text-slate-500 hover:text-emerald-500 dark:text-slate-600 dark:hover:text-emerald-400"
            href="#"
          >
            Privacy
          </a>
          <a
            className="font-label text-[10px] tracking-tighter text-slate-500 hover:text-emerald-500 dark:text-slate-600 dark:hover:text-emerald-400"
            href="#"
          >
            API
          </a>
          <a
            className="font-label text-[10px] tracking-tighter text-slate-500 hover:text-emerald-500 dark:text-slate-600 dark:hover:text-emerald-400"
            href="#"
          >
            GitHub
          </a>
        </div>
        <div className="font-label text-[10px] font-bold uppercase tracking-widest text-emerald-500/30 dark:text-emerald-400/20">
          © 2026 morsecodeworld.org
        </div>
      </footer>

      {screenFlashPanelOpen && (
        <div
          className="fixed inset-0 z-[110] flex items-center justify-center bg-black/45 p-4 backdrop-blur-[2px] dark:bg-black/60"
          role="presentation"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 85% 55% at 50% 28%, rgba(255,255,255,0.14) 0%, transparent 55%)"
          }}
          onClick={() => setScreenFlashPanelOpen(false)}
        >
          <div
            className="pointer-events-none fixed inset-0 z-[111] bg-white screen-flash-popup-burst"
            aria-hidden
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="flash-panel-title"
            className="relative z-[112] w-full max-w-sm overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-2xl dark:border-outline-variant/40 dark:bg-surface-container"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative flex flex-col items-center px-5 pb-5 pt-8">
              <div
                className="bulb-modal-halo pointer-events-none absolute left-1/2 top-6 h-32 w-32 -translate-x-1/2 rounded-full bg-primary-container/25 blur-2xl dark:bg-primary-container/30"
                aria-hidden
              />
              <div className="relative mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-b from-white to-slate-100 text-emerald-600 shadow-lg ring-2 ring-primary-container/40 dark:from-surface-bright dark:to-surface-container dark:text-primary-container dark:ring-primary-container/50">
                <IconLightbulb className="h-9 w-9 drop-shadow-[0_0_12px_rgba(80,250,123,0.65)]" />
              </div>
              <h2
                id="flash-panel-title"
                className="relative mb-1 text-center font-headline text-lg font-bold text-neutral-900 dark:text-on-surface"
              >
                Screen flash
              </h2>
              <p className="relative mb-5 text-center font-label text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                While <strong className="text-emerald-600 dark:text-primary-container">PLAY</strong> is running,
                the screen fills <strong className="text-neutral-800 dark:text-on-surface">white</strong> and{" "}
                <strong className="text-neutral-800 dark:text-on-surface">black</strong> in turn for each dot and
                dash — full-window blink, same timing as sound.
              </p>
              <label className="relative mb-5 flex w-full cursor-pointer items-center justify-between gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 dark:border-outline-variant/30 dark:bg-surface-container-low">
                <span className="font-label text-sm font-semibold text-neutral-800 dark:text-on-surface">
                  Enable screen flash
                </span>
                <input
                  type="checkbox"
                  className="h-5 w-5 accent-primary-container"
                  checked={screenBlinkEnabled}
                  onChange={(e) => setScreenBlinkEnabled(e.target.checked)}
                />
              </label>
              <button
                type="button"
                className="relative w-full rounded-xl bg-primary-container py-2.5 font-headline text-sm font-bold text-on-primary-container shadow-neon-primary transition-all hover:brightness-110 dark:text-on-primary-container"
                onClick={() => setScreenFlashPanelOpen(false)}
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}

      {configureOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm dark:bg-black/55"
          role="presentation"
          onClick={() => setConfigureOpen(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="cfg-title"
            className="w-full max-w-md rounded-xl border border-slate-200 bg-white p-4 shadow-xl dark:border-outline-variant/30 dark:bg-surface-container"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 id="cfg-title" className="mb-3 font-headline text-base font-bold">
              Configure
            </h2>
            <label className="mb-2 flex cursor-pointer items-center gap-2 font-label text-xs">
              <input
                type="checkbox"
                checked={showLiveInput}
                onChange={(e) => setShowLiveInput(e.target.checked)}
              />
              Show live input (tap / hold)
            </label>
            <label className="mb-2 flex cursor-pointer items-center gap-2 font-label text-xs">
              <input
                type="checkbox"
                checked={lightTheme}
                onChange={(e) => setLightTheme(e.target.checked)}
              />
              Light theme (UI)
            </label>
            <button
              type="button"
              className="mt-3 w-full rounded-lg bg-primary-container py-2 text-sm font-bold text-on-primary-container dark:text-on-primary-container"
              onClick={() => setConfigureOpen(false)}
            >
              Done
            </button>
          </div>
        </div>
      )}

      {screenFlashPhase !== "off" && (
        <div
          className={`pointer-events-none fixed inset-0 z-[300] ${
            screenFlashPhase === "white" ? "bg-white" : "bg-black"
          }`}
          style={{ opacity: screenFlashPhase === "white" ? 0.94 : 0.92 }}
          aria-hidden
        />
      )}
    </div>
  );
}
