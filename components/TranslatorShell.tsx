"use client";

import { startTransition, useCallback, useDeferredValue, useEffect, useMemo, useRef, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import SignalControls from "@/components/SignalControls";
import { SiteTopBar } from "@/components/SiteTopBar";
import PulseWaveform from "@/components/PulseWaveform";

const LiveInput = dynamic(() => import("@/components/LiveInput"), {
  ssr: false,
  loading: () => (
    <div className="min-h-[64px] w-full animate-pulse rounded-lg border border-outline-variant/30 bg-primary-container/20" />
  )
});
import {
  IconCopy,
  IconDelete,
  IconDownload,
  IconLightbulb,
  IconPause,
  IconPlay,
  IconRepeat,
  IconShare,
  IconStop,
  IconVibration,
  IconVolume
} from "@/components/SignalPulseIcons";
import { useDebounce } from "@/hooks/useDebounce";
import { useMorseAudio } from "@/hooks/useMorseAudio";
import { TRANSLATOR_UI_COPY, type HomeLocale } from "@/lib/i18n/home";
import { audioDecoderPath, pictureTranslatorPath } from "@/lib/i18n/routes";
import type { MorsePlaybackOptions } from "@/lib/audioEngine";
import { decodeFromMorse } from "@/lib/decoder";
import { encodeToMorse } from "@/lib/encoder";
import type { TranslateMode } from "@/lib/morsePlayback";
import { morseForPlayback, morseToSteps } from "@/lib/morsePlayback";
import { normalizeMorseInput } from "@/lib/translate";
import { morseStepsToWavBlob } from "@/lib/wavRender";

function signalIdFromInput(s: string): string {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (Math.imul(31, h) + s.charCodeAt(i)) | 0;
  const hex = (h >>> 0).toString(16).toUpperCase().padStart(6, "0").slice(0, 6);
  return `PULSE-${hex}`;
}

export default function TranslatorShell({
  bottomContent,
  articleSlot,
  locale = "en"
}: {
  bottomContent?: React.ReactNode;
  articleSlot?: React.ReactNode;
  locale?: HomeLocale;
}) {
  const t = TRANSLATOR_UI_COPY[locale];
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
  const deferredOutput = useDeferredValue(output);

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

  useEffect(() => {
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
    return normalizeMorseInput(debouncedInput).replace(/[^.\- /]/g, "");
  }, [mode, debouncedInput, output]);

  const saveDisabled = useMemo(
    () => morseToSteps(morseForPlayback(debouncedInput, mode), speed).length === 0,
    [debouncedInput, mode, speed]
  );

  const sid = useMemo(() => signalIdFromInput(debouncedInput), [debouncedInput]);

  return (
    <div className="relative flex min-h-screen flex-col bg-neutral-100 text-neutral-900 selection:bg-primary-container selection:text-on-primary-container dark:bg-surface-container-lowest dark:text-on-surface">
      <SiteTopBar locale={locale} />

      <div className="flex flex-1 pt-[4.5rem]">
        <main className="flex-1 overflow-y-auto p-3 sm:p-5 lg:p-8">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 lg:grid-cols-12">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between lg:col-span-12">
              <h1 className="font-headline text-xl font-bold tracking-tight text-neutral-900 dark:text-on-surface sm:text-2xl">
                {t.heading}
              </h1>
              <button
                type="button"
                onClick={() => startTransition(() => setConfigureOpen(true))}
                className="self-start font-headline text-sm font-bold text-emerald-600 underline-offset-4 hover:underline dark:text-primary-container sm:self-auto"
              >
                {t.configure}
              </button>
            </div>
            <div className="space-y-5 lg:col-span-8">
              <div className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-4 shadow-xl dark:border-transparent dark:bg-surface-container sm:p-5">
                <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
                    <span className="font-label text-[10px] uppercase tracking-widest text-slate-500 dark:text-slate-400">
                      {t.mode}
                    </span>
                    <div className="flex w-full items-stretch rounded-full bg-slate-100 p-1 dark:bg-surface-container-low sm:w-auto sm:p-0.5">
                      <button
                        type="button"
                        onClick={() => setMode("encode")}
                        className={`min-h-[44px] flex-1 rounded-full px-3 py-2 text-sm font-bold transition-colors sm:min-h-0 sm:flex-none sm:px-3 sm:py-1 sm:text-[11px] ${
                          mode === "encode"
                            ? "bg-primary-container text-on-primary-container dark:text-on-primary-container"
                            : "text-slate-500 hover:text-neutral-800 dark:text-slate-500 dark:hover:text-on-surface"
                        }`}
                      >
                        {t.modeEncode}
                      </button>
                      <button
                        type="button"
                        onClick={() => setMode("decode")}
                        className={`min-h-[44px] flex-1 rounded-full px-3 py-2 text-sm font-bold transition-colors sm:min-h-0 sm:flex-none sm:px-3 sm:py-1 sm:text-[11px] ${
                          mode === "decode"
                            ? "bg-primary-container text-on-primary-container dark:text-on-primary-container"
                            : "text-slate-500 hover:text-neutral-800 dark:text-slate-500 dark:hover:text-on-surface"
                        }`}
                      >
                        {t.modeDecode}
                      </button>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setInput("")}
                    className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-red-600 opacity-90 transition-opacity hover:opacity-100 dark:text-error"
                  >
                    <IconDelete className="h-3.5 w-3.5" />
                    {t.clear}
                  </button>
                </div>

                <div className="relative mb-5">
                  <textarea
                    className="h-36 w-full resize-none rounded-xl border border-transparent bg-slate-100 p-3 font-headline text-base text-neutral-900 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-container/25 dark:bg-surface-container-low dark:text-on-surface dark:placeholder:text-slate-600 sm:p-4 sm:text-lg"
                    placeholder={t.inputPlaceholder}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    autoComplete="off"
                    spellCheck={false}
                  />
                  <div className="absolute bottom-2 right-3 flex gap-2">
                    <span className="font-label text-[9px] uppercase tracking-widest text-slate-500 dark:text-slate-500">
                      {t.characters}: {input.length}
                    </span>
                  </div>
                </div>

                <PulseWaveform morse={vizMorse} activeIndex={activeSymbolIndex} />

                <div className="group relative min-h-[120px] rounded-xl border border-slate-200/80 bg-slate-50 p-4 dark:border-outline-variant/10 dark:bg-surface-container-high sm:p-5">
                  <div className="mb-2 font-label text-[10px] uppercase tracking-widest text-slate-500 dark:text-slate-500">
                    {t.signalOutput}
                  </div>
                  <div
                    className={`break-all font-headline font-bold leading-tight tracking-[0.12em] text-neutral-900 dark:text-primary-fixed sm:tracking-[0.18em] ${
                      mode === "encode" ? "text-xl sm:text-2xl md:text-3xl" : "text-lg sm:text-xl md:text-2xl"
                    }`}
                  >
                    {deferredOutput || (
                      <span className="text-slate-400 dark:text-slate-600">
                        {t.outputPlaceholder}
                      </span>
                    )}
                  </div>
                  <div className="absolute right-3 top-3 flex gap-1.5 opacity-100 transition-opacity sm:right-4 sm:top-4 sm:opacity-0 sm:group-hover:opacity-100">
                    <button
                      type="button"
                      onClick={() => void handleCopy()}
                      className="rounded-md bg-white p-1.5 text-neutral-800 shadow-md transition-colors hover:bg-slate-100 dark:bg-surface-container dark:text-on-surface dark:hover:bg-surface-bright"
                      title={t.copy}
                    >
                      <IconCopy className="h-4 w-4" />
                    </button>
                    <button
                      type="button"
                      onClick={handleDownloadTxt}
                      className="rounded-md bg-white p-1.5 text-neutral-800 shadow-md transition-colors hover:bg-slate-100 dark:bg-surface-container dark:text-on-surface dark:hover:bg-surface-bright"
                      title={t.download}
                    >
                      <IconDownload className="h-4 w-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => void handleShare()}
                      className="rounded-md bg-white p-1.5 text-neutral-800 shadow-md transition-colors hover:bg-slate-100 dark:bg-surface-container dark:text-on-surface dark:hover:bg-surface-bright"
                      title={t.share}
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
                  className="flex items-center gap-1.5 rounded-full bg-primary-container px-4 py-2 text-sm font-bold text-on-primary-container shadow-lg shadow-neon-primary transition-[transform,opacity] hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 dark:text-on-primary-container sm:px-5 sm:py-2.5"
                >
                  <IconPlay className="h-5 w-5" /> {t.play}
                </button>
                <button
                  type="button"
                  onClick={pause}
                  disabled={!isPlaying || isPaused}
                  className="flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-neutral-800 transition-colors hover:bg-slate-50 disabled:opacity-50 dark:border-transparent dark:bg-surface-container dark:text-on-surface dark:hover:bg-surface-bright sm:px-5 sm:py-2.5"
                >
                  <IconPause className="h-5 w-5" /> {t.pause}
                </button>
                <button
                  type="button"
                  onClick={stop}
                  disabled={!isPlaying && !isPaused}
                  className="flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-neutral-800 transition-colors hover:bg-slate-50 disabled:opacity-50 dark:border-transparent dark:bg-surface-container dark:text-on-surface dark:hover:bg-surface-bright sm:px-5 sm:py-2.5"
                >
                  <IconStop className="h-5 w-5" /> {t.stop}
                </button>
                <div className="hidden h-8 w-px bg-outline-variant/20 sm:mx-1 sm:block dark:bg-outline-variant/20" />
                <button
                  type="button"
                  onClick={() => setRepeat((r) => !r)}
                  className={`rounded-full p-2.5 transition-colors dark:bg-surface-container ${
                    repeat
                      ? "bg-secondary-container text-on-secondary-container shadow-neon-secondary dark:text-on-secondary-container"
                      : "bg-white text-neutral-700 hover:text-secondary dark:bg-surface-container dark:text-on-surface dark:hover:text-secondary"
                  }`}
                  title={t.repeat}
                >
                  <IconRepeat className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={() => setSoundOn((s) => !s)}
                  className={`rounded-full p-2.5 transition-colors ${
                    soundOn
                      ? "bg-secondary-container text-on-secondary-container shadow-neon-secondary dark:text-on-secondary-container"
                      : "bg-white text-slate-500 hover:text-on-surface dark:bg-surface-container dark:text-slate-500 dark:hover:text-on-surface"
                  }`}
                  title={t.sound}
                >
                  <IconVolume className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setBulbClickGlow(true);
                    window.setTimeout(() => setBulbClickGlow(false), 700);
                    startTransition(() => setScreenFlashPanelOpen(true));
                  }}
                  className={`relative rounded-full p-2.5 transition-colors ${
                    bulbClickGlow ? "bulb-click-glow" : ""
                  } ${
                    screenBlinkEnabled
                      ? "bg-primary-container/25 text-emerald-700 shadow-neon-primary dark:text-primary-container"
                      : "bg-white text-slate-500 hover:text-neutral-800 dark:bg-surface-container dark:text-slate-500 dark:hover:text-on-surface"
                  }`}
                  title={t.screenFlashOpen}
                >
                  <IconLightbulb className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={() => setVibrateOn((v) => !v)}
                  className={`rounded-full p-2.5 transition-colors ${
                    vibrateOn
                      ? "bg-primary-container/20 text-emerald-700 dark:text-primary-container"
                      : "bg-white text-slate-500 hover:text-on-surface dark:bg-surface-container"
                  }`}
                  title={t.vibrate}
                >
                  <IconVibration className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={() => void handleSaveAudio()}
                  disabled={saveDisabled}
                  className="rounded-full border border-slate-200 bg-white p-2.5 text-neutral-700 transition-colors hover:bg-slate-50 disabled:opacity-40 dark:border-transparent dark:bg-surface-container dark:text-on-surface"
                  title={t.saveAudio}
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

            <SignalControls
              speed={speed}
              pitch={pitch}
              volume={volume}
              sid={sid}
              t={t}
              setSpeed={setSpeed}
              setPitch={setPitch}
              setVolume={setVolume}
            />

            {articleSlot}

            {bottomContent ? <div className="lg:col-span-12">{bottomContent}</div> : null}
          </div>
        </main>
      </div>

      <footer className="mt-auto flex w-full flex-col items-center gap-3 bg-neutral-100 py-4 dark:bg-[#0A0E17]">
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          <Link
            className="font-label text-[10px] tracking-tighter text-slate-500 hover:text-emerald-500 dark:text-slate-600 dark:hover:text-emerald-400"
            href="/about"
          >
            {t.footerAbout}
          </Link>
          <Link
            className="font-label text-[10px] tracking-tighter text-slate-500 hover:text-emerald-500 dark:text-slate-600 dark:hover:text-emerald-400"
            href={pictureTranslatorPath(locale)}
            title="Morse code picture translator"
          >
            {t.footerMorsePicture}
          </Link>
          <Link
            className="font-label text-[10px] tracking-tighter text-slate-500 hover:text-emerald-500 dark:text-slate-600 dark:hover:text-emerald-400"
            href={audioDecoderPath(locale)}
            title="Audio Morse code decoder"
          >
            {t.footerAudioDecoder}
          </Link>
          <Link
            className="font-label text-[10px] tracking-tighter text-slate-500 hover:text-emerald-500 dark:text-slate-600 dark:hover:text-emerald-400"
            href="/privacy"
          >
            {t.footerPrivacy}
          </Link>
          <Link
            className="font-label text-[10px] tracking-tighter text-slate-500 hover:text-emerald-500 dark:text-slate-600 dark:hover:text-emerald-400"
            href="/terms"
          >
            Terms
          </Link>
          <Link
            className="font-label text-[10px] tracking-tighter text-slate-500 hover:text-emerald-500 dark:text-slate-600 dark:hover:text-emerald-400"
            href="/contact"
          >
            Contact
          </Link>
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
                {t.screenFlashTitle}
              </h2>
              <p className="relative mb-5 text-center font-label text-xs leading-relaxed text-slate-600 dark:text-slate-400">{t.screenFlashBody}</p>
              <label className="relative mb-5 flex w-full cursor-pointer items-center justify-between gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 dark:border-outline-variant/30 dark:bg-surface-container-low">
                <span className="font-label text-sm font-semibold text-neutral-800 dark:text-on-surface">
                  {t.enableScreenFlash}
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
                className="relative w-full rounded-xl bg-primary-container py-2.5 font-headline text-sm font-bold text-on-primary-container shadow-neon-primary transition-[filter] hover:brightness-110 dark:text-on-primary-container"
                onClick={() => setScreenFlashPanelOpen(false)}
              >
                {t.done}
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
              {t.configureTitle}
            </h2>
            <label className="mb-2 flex cursor-pointer items-center gap-2 font-label text-xs">
              <input
                type="checkbox"
                checked={showLiveInput}
                onChange={(e) => setShowLiveInput(e.target.checked)}
              />
              {t.showLiveInput}
            </label>
            <label className="mb-2 flex cursor-pointer items-center gap-2 font-label text-xs">
              <input
                type="checkbox"
                checked={lightTheme}
                onChange={(e) => setLightTheme(e.target.checked)}
              />
              {t.lightTheme}
            </label>
            <button
              type="button"
              className="mt-3 w-full rounded-lg bg-primary-container py-2 text-sm font-bold text-on-primary-container dark:text-on-primary-container"
              onClick={() => setConfigureOpen(false)}
            >
              {t.done}
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
