"use client";

import { memo } from "react";
import { IconTune, IconVerified } from "@/components/SignalPulseIcons";

const QUICK_REF = [
  ["A", ".-"],
  ["B", "-..."],
  ["C", "-.-."],
  ["D", "-.."],
  ["E", "."],
  ["F", "..-."]
];

type SignalControlsCopy = {
  signalControls: string;
  transmissionSpeed: string;
  frequencyPitch: string;
  outputVolume: string;
  signalId: string;
  linkSecured: string;
  quickReference: string;
};

type Props = {
  speed: number;
  pitch: number;
  volume: number;
  sid: string;
  t: SignalControlsCopy;
  setSpeed: (v: number) => void;
  setPitch: (v: number) => void;
  setVolume: (v: number) => void;
};

const SignalControls = memo(function SignalControls({
  speed, pitch, volume, sid, t, setSpeed, setPitch, setVolume
}: Props) {
  return (
    <div className="lg:col-span-4">
      <div className="glass-panel relative z-0 rounded-2xl border border-slate-200/80 p-4 dark:border-white/5 sm:p-5">
        <div className="mb-5 flex items-center gap-2 sm:mb-6">
          <IconTune className="h-6 w-6 text-secondary dark:text-secondary" />
          <h3 className="font-headline text-base font-bold tracking-tight sm:text-lg">
            {t.signalControls}
          </h3>
        </div>
        <div className="space-y-6 sm:space-y-7">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="font-label text-[10px] uppercase tracking-widest text-slate-500 dark:text-slate-400">
                {t.transmissionSpeed}
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
                {t.frequencyPitch}
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
                {t.outputVolume}
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
                {t.signalId}
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
              {t.linkSecured}
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
            {t.quickReference}
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
  );
});

export default SignalControls;
