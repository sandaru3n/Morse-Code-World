"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { decodeAudioFile, getSharedAudioContext } from "@/lib/audio/pcm";
import { buildExportBuffer, applyFades } from "@/lib/audio/pcm";
import { computeWaveformPeaks, type WaveformPeaks } from "@/lib/audio/waveform";
import { encodeWavBlob } from "@/lib/audio/wavEncoder";

const ACCEPTED_EXTENSIONS = [".mp3", ".wav", ".m4a", ".ogg"];
const FADE_DURATION_SEC = 2;
const HANDLE_HIT_PX = 22;
const EDGE_BAR_WIDTH = 12;
const MIN_SELECTION_SEC = 0.1;

type CutMode = "keep" | "delete";
type ExportFormat = "mp3" | "wav" | "m4a" | "m4r";

type DragTarget = "start" | "end" | null;

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

function formatTime(totalSeconds: number, withCentiseconds = true): string {
  const safe = Number.isFinite(totalSeconds) ? Math.max(0, totalSeconds) : 0;
  const minutes = Math.floor(safe / 60);
  const seconds = Math.floor(safe % 60);
  if (!withCentiseconds) {
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  }
  const centiseconds = Math.round((safe - Math.floor(safe)) * 100);
  return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}.${centiseconds
    .toString()
    .padStart(2, "0")}`;
}

function parseTimeInput(text: string): number | null {
  const match = /^(\d{1,3}):([0-5]?\d)(?:\.(\d{1,2}))?$/.exec(text.trim());
  if (!match) return null;
  const minutes = Number(match[1]);
  const seconds = Number(match[2]);
  const frac = match[3] ? Number(`0.${match[3]}`) : 0;
  const total = minutes * 60 + seconds + frac;
  return Number.isFinite(total) ? total : null;
}

function hasAcceptedExtension(name: string): boolean {
  const lower = name.toLowerCase();
  return ACCEPTED_EXTENSIONS.some((ext) => lower.endsWith(ext));
}

function drawRoundedRect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number): void {
  const radius = Math.max(0, Math.min(r, w / 2, h / 2));
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.arcTo(x + w, y, x + w, y + h, radius);
  ctx.arcTo(x + w, y + h, x, y + h, radius);
  ctx.arcTo(x, y + h, x, y, radius);
  ctx.arcTo(x, y, x + w, y, radius);
  ctx.closePath();
}

/** Yellow time chip that sits above a selection handle while the user is interacting with it. */
function drawTimeTooltip(
  ctx: CanvasRenderingContext2D,
  centerX: number,
  canvasWidth: number,
  label: string
): void {
  ctx.font = "600 12px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  const paddingX = 8;
  const paddingY = 5;
  const metrics = ctx.measureText(label);
  const boxW = Math.ceil(metrics.width) + paddingX * 2;
  const boxH = 22;
  const arrowH = 6;
  const arrowW = 8;
  const top = 4;
  const left = clamp(centerX - boxW / 2, 4, Math.max(4, canvasWidth - boxW - 4));

  ctx.fillStyle = "#eab308";
  drawRoundedRect(ctx, left, top, boxW, boxH, 6);
  ctx.fill();

  // Downward caret pointing at the yellow bar.
  ctx.beginPath();
  ctx.moveTo(centerX - arrowW / 2, top + boxH);
  ctx.lineTo(centerX + arrowW / 2, top + boxH);
  ctx.lineTo(centerX, top + boxH + arrowH);
  ctx.closePath();
  ctx.fill();

  ctx.fillStyle = "#0b0d12";
  ctx.fillText(label, left + boxW / 2, top + boxH / 2 + 0.5);
}

function downloadBlob(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 2000);
}

export function AudioCutter() {
  const [fileName, setFileName] = useState("");
  const [audioBuffer, setAudioBuffer] = useState<AudioBuffer | null>(null);
  const [peaks, setPeaks] = useState<WaveformPeaks | null>(null);
  const [loadError, setLoadError] = useState("");
  const [isDecoding, setIsDecoding] = useState(false);
  const [isDragOver, setIsDragOver] = useState(false);

  const [selStart, setSelStart] = useState(0);
  const [selEnd, setSelEnd] = useState(0);
  const [mode, setMode] = useState<CutMode>("keep");
  const [fadeIn, setFadeIn] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [format, setFormat] = useState<ExportFormat>("mp3");

  const [startDraft, setStartDraft] = useState("00:00.00");
  const [endDraft, setEndDraft] = useState("00:00.00");
  const [startFocused, setStartFocused] = useState(false);
  const [endFocused, setEndFocused] = useState(false);

  const [isPreviewing, setIsPreviewing] = useState(false);
  const [playheadTime, setPlayheadTime] = useState<number | null>(null);
  const [elapsedPlayback, setElapsedPlayback] = useState(0);
  const [previewError, setPreviewError] = useState("");

  const [isExporting, setIsExporting] = useState(false);
  const [exportNote, setExportNote] = useState("");
  const [exportError, setExportError] = useState("");
  const [finalDuration, setFinalDuration] = useState<number | null>(null);

  const [hoverTarget, setHoverTarget] = useState<DragTarget>(null);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const dragTargetRef = useRef<DragTarget>(null);
  const previewNodesRef = useRef<{ sources: AudioBufferSourceNode[]; gain: GainNode } | null>(null);
  const rafRef = useRef<number | null>(null);
  const previewMetaRef = useRef<{ ctxStart: number; totalDuration: number; mode: CutMode; start: number; end: number } | null>(
    null
  );

  const duration = audioBuffer?.duration ?? 0;

  // Keep the editable time inputs in sync with the numeric selection, unless the user is actively typing.
  useEffect(() => {
    if (!startFocused) setStartDraft(formatTime(selStart));
  }, [selStart, startFocused]);
  useEffect(() => {
    if (!endFocused) setEndDraft(formatTime(selEnd));
  }, [selEnd, endFocused]);

  const stopPreview = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = null;
    if (previewNodesRef.current) {
      for (const source of previewNodesRef.current.sources) {
        try {
          source.stop();
        } catch {
          // Already stopped.
        }
      }
      previewNodesRef.current = null;
    }
    previewMetaRef.current = null;
    setIsPreviewing(false);
    setPlayheadTime(null);
    setElapsedPlayback(0);
  }, []);

  const resetAll = useCallback(() => {
    stopPreview();
    setFileName("");
    setAudioBuffer(null);
    setPeaks(null);
    setLoadError("");
    setSelStart(0);
    setSelEnd(0);
    setExportError("");
    setExportNote("");
    setFinalDuration(null);
    setPreviewError("");
  }, [stopPreview]);

  const loadFile = useCallback(
    async (file: File) => {
      stopPreview();
      setExportError("");
      setExportNote("");
      setFinalDuration(null);
      setPreviewError("");

      if (!hasAcceptedExtension(file.name)) {
        setLoadError("Unsupported file type. Use MP3, WAV, M4A, or OGG.");
        return;
      }

      setIsDecoding(true);
      setLoadError("");
      try {
        const buffer = await decodeAudioFile(file);
        setAudioBuffer(buffer);
        setFileName(file.name);
        setSelStart(0);
        setSelEnd(Math.min(buffer.duration, Math.max(MIN_SELECTION_SEC, Math.min(30, buffer.duration))));
      } catch {
        setLoadError("This file could not be read as audio. Try a different file.");
        setAudioBuffer(null);
      } finally {
        setIsDecoding(false);
      }
    },
    [stopPreview]
  );

  // Recompute waveform peaks whenever the decoded buffer or container width changes.
  useEffect(() => {
    if (!audioBuffer || !containerRef.current) {
      setPeaks(null);
      return;
    }
    const width = Math.max(200, Math.round(containerRef.current.clientWidth));
    setPeaks(computeWaveformPeaks(audioBuffer, width));
  }, [audioBuffer]);

  useEffect(() => {
    if (!audioBuffer) return;
    const el = containerRef.current;
    if (!el) return;
    const observer = new ResizeObserver(() => {
      const width = Math.max(200, Math.round(el.clientWidth));
      setPeaks(computeWaveformPeaks(audioBuffer, width));
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, [audioBuffer]);

  const timeToX = useCallback(
    (t: number) => {
      const width = canvasRef.current?.clientWidth ?? 0;
      if (duration <= 0) return 0;
      return (t / duration) * width;
    },
    [duration]
  );

  const xToTime = useCallback(
    (x: number) => {
      const width = canvasRef.current?.clientWidth ?? 1;
      return clamp((x / width) * duration, 0, duration);
    },
    [duration]
  );

  // --- Drawing ---
  // The waveform editor always uses a fixed dark "studio" look (like clideo.com's
  // audio cutter) regardless of the site's own light/dark theme, since that's what
  // gives the blue-on-dark waveform and yellow selection bar enough contrast.
  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const dpr = window.devicePixelRatio || 1;
    if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
      canvas.width = width * dpr;
      canvas.height = height * dpr;
    }
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.save();
    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, width, height);

    ctx.fillStyle = "#0b0d12";
    ctx.fillRect(0, 0, width, height);

    if (peaks && duration > 0) {
      const mid = height / 2;
      const highlightColor = "#3b82f6";
      const dimColor = "#52525b";
      const selX0 = timeToX(selStart);
      const selX1 = timeToX(selEnd);

      for (let x = 0; x < width; x++) {
        const t0 = (x / width) * duration;
        const t1 = ((x + 1) / width) * duration;
        const bucketIdx = Math.min(peaks.mins.length - 1, Math.floor((x / width) * peaks.mins.length));
        const min = peaks.mins[bucketIdx] ?? 0;
        const max = peaks.maxes[bucketIdx] ?? 0;

        const overlapsSelection = t1 >= selStart && t0 <= selEnd;
        const isHighlighted = mode === "keep" ? overlapsSelection : !overlapsSelection;

        ctx.fillStyle = isHighlighted ? highlightColor : dimColor;
        const top = mid + min * mid * 0.95;
        const bottom = mid + max * mid * 0.95;
        ctx.fillRect(x, Math.min(top, bottom), 1, Math.max(1, Math.abs(bottom - top)));
      }

      // Yellow selection bar around the dragged region (independent of cut mode —
      // this always marks what the two handles currently span). The left/right
      // edges are drawn as thick full-height grip bars — sized to roughly match
      // the actual pointer hit-target below — with thin lines joining them along
      // the top and bottom, matching a typical audio-editor selection.
      //
      // Clamp bar centers so the full yellow width stays on-canvas at t=0 / t=end;
      // otherwise half the bar sits outside the rounded, overflow-hidden frame and
      // looks "hidden".
      const halfBar = EDGE_BAR_WIDTH / 2;
      const startBarX = clamp(selX0, halfBar, width - halfBar);
      const endBarX = clamp(selX1, halfBar, width - halfBar);
      const edgeBarRadius = 0;
      const connectorThickness = 3;
      const isNearHandle = hoverTarget !== null;
      ctx.fillStyle = "#eab308";
      drawRoundedRect(ctx, startBarX - halfBar, 0, EDGE_BAR_WIDTH, height, edgeBarRadius);
      ctx.fill();
      drawRoundedRect(ctx, endBarX - halfBar, 0, EDGE_BAR_WIDTH, height, edgeBarRadius);
      ctx.fill();
      ctx.fillRect(startBarX, 0, Math.max(0, endBarX - startBarX), connectorThickness);
      ctx.fillRect(startBarX, height - connectorThickness, Math.max(0, endBarX - startBarX), connectorThickness);

      // Grip-dot affordance in the middle of each bar so it visually reads as "drag me".
      ctx.fillStyle = "rgba(0, 0, 0, 0.55)";
      for (const cx of [startBarX, endBarX]) {
        for (let i = -1; i <= 1; i++) {
          drawRoundedRect(ctx, cx - 1.5, mid + i * 8 - 1.5, 3, 3, 1.5);
          ctx.fill();
        }
      }

      // Brighten the bar the user is currently hovering/dragging for extra feedback.
      if (isNearHandle) {
        const hx = hoverTarget === "start" ? startBarX : endBarX;
        ctx.fillStyle = "rgba(255, 255, 255, 0.25)";
        drawRoundedRect(ctx, hx - halfBar, 0, EDGE_BAR_WIDTH, height, edgeBarRadius);
        ctx.fill();
      }

      // Time chip above the active yellow bar (shown on hover / click / drag).
      if (hoverTarget) {
        const tipX = hoverTarget === "start" ? startBarX : endBarX;
        const tipTime = hoverTarget === "start" ? selStart : selEnd;
        drawTimeTooltip(ctx, tipX, width, formatTime(tipTime));
      }

      // Playhead.
      if (playheadTime !== null) {
        const x = timeToX(playheadTime);
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(x - 1, 0, 2, height);
      }
    } else {
      ctx.fillStyle = "#71717a";
      ctx.font = "13px sans-serif";
      ctx.textAlign = "center";
      ctx.fillText("Choose a song to see its waveform", width / 2, height / 2);
    }

    ctx.restore();
  }, [peaks, duration, selStart, selEnd, mode, playheadTime, hoverTarget, timeToX]);

  useEffect(() => {
    draw();
  }, [draw]);

  // --- Pointer dragging on the waveform handles ---
  const handleVisualX = useCallback(
    (t: number) => {
      const width = canvasRef.current?.clientWidth ?? 0;
      const halfBar = EDGE_BAR_WIDTH / 2;
      // Match the clamped draw positions so hits line up with what the user sees.
      return clamp(timeToX(t), halfBar, Math.max(halfBar, width - halfBar));
    },
    [timeToX]
  );

  const onPointerDown = useCallback(
    (e: React.PointerEvent<HTMLCanvasElement>) => {
      if (!audioBuffer) return;
      const rect = canvasRef.current!.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const startX = handleVisualX(selStart);
      const endX = handleVisualX(selEnd);
      const distToStart = Math.abs(x - startX);
      const distToEnd = Math.abs(x - endX);

      if (distToStart <= HANDLE_HIT_PX && distToStart <= distToEnd) {
        dragTargetRef.current = "start";
      } else if (distToEnd <= HANDLE_HIT_PX) {
        dragTargetRef.current = "end";
      } else {
        return;
      }
      setHoverTarget(dragTargetRef.current);
      canvasRef.current?.setPointerCapture(e.pointerId);
      e.preventDefault();
    },
    [audioBuffer, selStart, selEnd, handleVisualX]
  );

  const onPointerMove = useCallback(
    (e: React.PointerEvent<HTMLCanvasElement>) => {
      if (!audioBuffer) return;
      const rect = canvasRef.current!.getBoundingClientRect();
      const x = e.clientX - rect.left;

      if (!dragTargetRef.current) {
        // Not dragging yet — just show which handle is grabbable, for discoverability.
        const startX = handleVisualX(selStart);
        const endX = handleVisualX(selEnd);
        const distToStart = Math.abs(x - startX);
        const distToEnd = Math.abs(x - endX);
        const nearest: DragTarget =
          distToStart <= HANDLE_HIT_PX && distToStart <= distToEnd
            ? "start"
            : distToEnd <= HANDLE_HIT_PX
              ? "end"
              : null;
        setHoverTarget(nearest);
        if (canvasRef.current) canvasRef.current.style.cursor = nearest ? "ew-resize" : "default";
        return;
      }

      const t = xToTime(x);
      if (dragTargetRef.current === "start") {
        setSelStart(clamp(t, 0, selEnd - MIN_SELECTION_SEC));
      } else {
        setSelEnd(clamp(t, selStart + MIN_SELECTION_SEC, duration));
      }
    },
    [audioBuffer, selStart, selEnd, duration, xToTime, handleVisualX]
  );

  const onPointerUp = useCallback((e: React.PointerEvent<HTMLCanvasElement>) => {
    dragTargetRef.current = null;
    setHoverTarget(null);
    try {
      canvasRef.current?.releasePointerCapture(e.pointerId);
    } catch {
      // Ignore if capture was already released.
    }
  }, []);

  const onPointerLeave = useCallback(() => {
    // Keep the active handle (and its time chip) while a drag is in progress.
    if (dragTargetRef.current) return;
    setHoverTarget(null);
    if (canvasRef.current) canvasRef.current.style.cursor = "default";
  }, []);

  // --- Time input commits ---
  const commitStart = () => {
    const parsed = parseTimeInput(startDraft);
    if (parsed !== null) setSelStart(clamp(parsed, 0, selEnd - MIN_SELECTION_SEC));
    setStartDraft(formatTime(parsed !== null ? clamp(parsed, 0, selEnd - MIN_SELECTION_SEC) : selStart));
  };
  const commitEnd = () => {
    const parsed = parseTimeInput(endDraft);
    if (parsed !== null) setSelEnd(clamp(parsed, selStart + MIN_SELECTION_SEC, duration));
    setEndDraft(formatTime(parsed !== null ? clamp(parsed, selStart + MIN_SELECTION_SEC, duration) : selEnd));
  };

  // --- Preview playback (plays exactly what will be exported, including the mode-aware jump and fades) ---
  const togglePreview = async () => {
    if (isPreviewing) {
      stopPreview();
      return;
    }
    if (!audioBuffer) return;
    setPreviewError("");

    try {
      const ctx = getSharedAudioContext();
      if (ctx.state !== "running") {
        // Must be awaited (and triggered from this click's gesture) or some
        // browsers silently keep the context suspended and nothing plays.
        await ctx.resume();
      }

      // Some browsers report the resume() promise as resolved a tick before the
      // context actually starts running; if it's still not running, bail out with
      // a clear message instead of silently scheduling audio that will never play.
      if (ctx.state !== "running") {
        setPreviewError("Playback is blocked by the browser. Tap Play again.");
        return;
      }

      const gain = ctx.createGain();
      gain.connect(ctx.destination);

      const sources: AudioBufferSourceNode[] = [];
      const now = ctx.currentTime + 0.05;

      let totalDuration: number;
      if (mode === "keep") {
        totalDuration = Math.max(0, selEnd - selStart);
        if (totalDuration > 0) {
          const source = ctx.createBufferSource();
          source.buffer = audioBuffer;
          source.connect(gain);
          source.start(now, selStart, totalDuration);
          sources.push(source);
        }
      } else {
        const beforeLen = Math.max(0, selStart);
        const afterLen = Math.max(0, duration - selEnd);
        totalDuration = beforeLen + afterLen;

        if (beforeLen > 0) {
          const before = ctx.createBufferSource();
          before.buffer = audioBuffer;
          before.connect(gain);
          before.start(now, 0, beforeLen);
          sources.push(before);
        }
        if (afterLen > 0) {
          const after = ctx.createBufferSource();
          after.buffer = audioBuffer;
          after.connect(gain);
          after.start(now + beforeLen, selEnd, afterLen);
          sources.push(after);
        }
      }

      if (sources.length === 0 || totalDuration <= 0) {
        setPreviewError("Nothing to preview — the selection is empty.");
        return;
      }

      const fadeInSec = fadeIn ? Math.min(FADE_DURATION_SEC, totalDuration / 2) : 0;
      const fadeOutSec = fadeOut ? Math.min(FADE_DURATION_SEC, totalDuration / 2) : 0;
      gain.gain.setValueAtTime(fadeInSec > 0 ? 0 : 1, now);
      if (fadeInSec > 0) gain.gain.linearRampToValueAtTime(1, now + fadeInSec);
      if (fadeOutSec > 0) {
        gain.gain.setValueAtTime(1, now + totalDuration - fadeOutSec);
        gain.gain.linearRampToValueAtTime(0, now + totalDuration);
      }

      // Only the last-ending source should trigger cleanup — attaching this to every
      // source would stop the "after" clip the instant the "before" clip ends in delete mode.
      sources[sources.length - 1]!.onended = () => {
        if (previewNodesRef.current) stopPreview();
      };

      previewNodesRef.current = { sources, gain };
      previewMetaRef.current = { ctxStart: now, totalDuration, mode, start: selStart, end: selEnd };
      setIsPreviewing(true);

      const tick = () => {
        const meta = previewMetaRef.current;
        if (!meta) return;
        // Playback is scheduled 50ms in the future, so the first frames land
        // BEFORE ctxStart — clamp to 0 rather than treating that as "finished",
        // otherwise the sources get stopped before they ever make a sound.
        const elapsed = Math.max(0, ctx.currentTime - meta.ctxStart);
        if (elapsed >= meta.totalDuration) {
          stopPreview();
          return;
        }
        const displayed =
          meta.mode === "keep" ? meta.start + elapsed : elapsed < meta.start ? elapsed : meta.end + (elapsed - meta.start);
        setPlayheadTime(displayed);
        setElapsedPlayback(elapsed);
        rafRef.current = requestAnimationFrame(tick);
      };
      rafRef.current = requestAnimationFrame(tick);
    } catch (e) {
      setPreviewError(e instanceof Error ? e.message : "Couldn't start playback. Try again.");
    }
  };

  useEffect(() => () => stopPreview(), [stopPreview]);

  // --- Export ---
  const handleExport = async () => {
    if (!audioBuffer) return;
    setIsExporting(true);
    setExportError("");
    setExportNote("Preparing audio...");
    setFinalDuration(null);

    try {
      const exportBuffer = buildExportBuffer(audioBuffer, selStart, selEnd, mode);
      const totalDur = exportBuffer.duration;
      applyFades(
        exportBuffer,
        fadeIn ? Math.min(FADE_DURATION_SEC, totalDur / 2) : 0,
        fadeOut ? Math.min(FADE_DURATION_SEC, totalDur / 2) : 0
      );

      const baseName = fileName.replace(/\.[^.]+$/, "") || "audio";
      let blob: Blob;

      if (format === "wav") {
        blob = encodeWavBlob(exportBuffer);
      } else if (format === "mp3") {
        setExportNote("Encoding MP3...");
        const { encodeMp3Blob } = await import("@/lib/audio/mp3Encoder");
        blob = await encodeMp3Blob(exportBuffer, 128);
      } else {
        setExportNote("Loading converter (first time only)...");
        const { encodeM4aOrM4r } = await import("@/lib/audio/ffmpegClient");
        setExportNote("Converting...");
        blob = await encodeM4aOrM4r(exportBuffer, format);
      }

      downloadBlob(blob, `${baseName}-cut.${format}`);
      setFinalDuration(totalDur);
      setExportNote("");
    } catch (e) {
      setExportError(
        e instanceof Error
          ? e.message
          : "Export failed. M4A/M4R conversion needs a modern browser — try MP3 or WAV instead."
      );
      setExportNote("");
    } finally {
      setIsExporting(false);
    }
  };

  const onPickFile = (picked: File | null) => {
    if (!picked) return;
    void loadFile(picked);
  };

  const previewTotalDuration =
    mode === "keep" ? Math.max(0, selEnd - selStart) : Math.max(0, selStart) + Math.max(0, duration - selEnd);

  return (
    <div className="space-y-6">
      {!audioBuffer ? (
        <div
          className={`rounded-2xl border-2 border-dashed p-6 text-center transition-colors sm:p-8 ${
            isDragOver
              ? "border-emerald-400 bg-emerald-50/80 dark:border-primary-container dark:bg-primary-container/10"
              : "border-slate-300 bg-slate-50/80 dark:border-outline-variant/40 dark:bg-surface-container-low/60"
          }`}
          onDragOver={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setIsDragOver(true);
          }}
          onDragLeave={() => setIsDragOver(false)}
          onDrop={(e) => {
            e.preventDefault();
            setIsDragOver(false);
            const dropped = e.dataTransfer.files[0];
            if (dropped) onPickFile(dropped);
          }}
        >
          <input
            id="audio-cutter-file"
            type="file"
            accept=".mp3,.wav,.m4a,.ogg,audio/mpeg,audio/wav,audio/mp4,audio/ogg"
            className="hidden"
            tabIndex={-1}
            onChange={(e) => onPickFile(e.target.files?.[0] ?? null)}
          />
          <label
            htmlFor="audio-cutter-file"
            className="inline-flex cursor-pointer flex-col items-center gap-2 font-headline text-sm font-bold text-emerald-600 dark:text-primary-container"
          >
            <span className="rounded-full bg-primary-container/15 px-4 py-2 text-on-primary-container dark:bg-primary-container/20 dark:text-primary-fixed">
              {isDecoding ? "Reading file..." : "Choose a song"}
            </span>
            <span className="font-label text-xs font-normal text-slate-500 dark:text-slate-500">
              or drag and drop here — MP3, WAV, M4A, OGG
            </span>
          </label>
        </div>
      ) : null}

      {loadError ? (
        <div className="rounded-2xl border border-red-300/70 bg-red-50 p-4 text-sm text-red-700 dark:border-red-900/40 dark:bg-red-950/30 dark:text-red-300">
          {loadError}
        </div>
      ) : null}

      <p className="flex items-center gap-1.5 font-label text-[11px] text-slate-500 dark:text-slate-500">
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
        Nothing is uploaded — everything runs on your device
      </p>

      {audioBuffer ? (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <p className="truncate font-label text-xs text-slate-600 dark:text-slate-400">{fileName}</p>
            <button
              type="button"
              onClick={resetAll}
              className="font-label text-xs font-bold text-emerald-600 hover:underline dark:text-primary-container"
            >
              Choose another file
            </button>
          </div>

          <div ref={containerRef} className="w-full overflow-hidden rounded-2xl border border-black/40 bg-[#0b0d12]">
            <canvas
              ref={canvasRef}
              className="block h-40 w-full touch-none"
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={onPointerUp}
              onPointerCancel={onPointerUp}
              onPointerLeave={onPointerLeave}
            />
          </div>

          <div className="flex items-center justify-center gap-3 rounded-2xl bg-[#0b0d12] py-3">
            <button
              type="button"
              onClick={() => void togglePreview()}
              aria-label={isPreviewing ? "Pause preview" : "Play preview"}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            >
              {isPreviewing ? (
                <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
                  <rect x="1" y="0" width="4" height="14" rx="1" />
                  <rect x="9" y="0" width="4" height="14" rx="1" />
                </svg>
              ) : (
                <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
                  <path d="M1 0.7C1 0.1 1.7-0.2 2.2 0.1l10.6 6.3c.5.3.5 1 0 1.3L2.2 13.9C1.7 14.2 1 13.9 1 13.3V0.7Z" />
                </svg>
              )}
            </button>
            <span className="font-mono text-sm tabular-nums text-slate-300">
              {formatTime(elapsedPlayback, false)} / {formatTime(previewTotalDuration, false)}
            </span>
          </div>

          {previewError ? (
            <p className="text-center font-label text-xs text-amber-500">{previewError}</p>
          ) : null}

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            <label className="flex flex-col gap-1">
              <span className="font-label text-[10px] uppercase tracking-widest text-slate-500 dark:text-slate-500">Start</span>
              <input
                type="text"
                value={startDraft}
                onFocus={() => setStartFocused(true)}
                onChange={(e) => setStartDraft(e.target.value)}
                onBlur={() => {
                  setStartFocused(false);
                  commitStart();
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") (e.target as HTMLInputElement).blur();
                }}
                className="rounded-lg border border-slate-200/80 bg-white px-3 py-2 font-label text-sm text-slate-800 dark:border-outline-variant/20 dark:bg-surface-container dark:text-on-surface"
              />
            </label>
            <label className="flex flex-col gap-1">
              <span className="font-label text-[10px] uppercase tracking-widest text-slate-500 dark:text-slate-500">End</span>
              <input
                type="text"
                value={endDraft}
                onFocus={() => setEndFocused(true)}
                onChange={(e) => setEndDraft(e.target.value)}
                onBlur={() => {
                  setEndFocused(false);
                  commitEnd();
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") (e.target as HTMLInputElement).blur();
                }}
                className="rounded-lg border border-slate-200/80 bg-white px-3 py-2 font-label text-sm text-slate-800 dark:border-outline-variant/20 dark:bg-surface-container dark:text-on-surface"
              />
            </label>
            <div className="flex flex-col gap-1">
              <span className="font-label text-[10px] uppercase tracking-widest text-slate-500 dark:text-slate-500">Selected duration</span>
              <p className="rounded-lg bg-slate-100 px-3 py-2 font-label text-sm text-slate-700 dark:bg-surface-container-high dark:text-slate-300">
                {formatTime(selEnd - selStart)}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-5">
            <label className="flex items-center gap-2 font-label text-xs text-slate-700 dark:text-slate-300">
              <input type="radio" name="cut-mode" checked={mode === "keep"} onChange={() => setMode("keep")} />
              Keep selection
            </label>
            <label className="flex items-center gap-2 font-label text-xs text-slate-700 dark:text-slate-300">
              <input type="radio" name="cut-mode" checked={mode === "delete"} onChange={() => setMode("delete")} />
              Delete selection
            </label>
          </div>

          <div className="flex flex-wrap items-center gap-5">
            <label className="flex items-center gap-2 font-label text-xs text-slate-700 dark:text-slate-300">
              <input type="checkbox" checked={fadeIn} onChange={(e) => setFadeIn(e.target.checked)} />
              Fade in
            </label>
            <label className="flex items-center gap-2 font-label text-xs text-slate-700 dark:text-slate-300">
              <input type="checkbox" checked={fadeOut} onChange={(e) => setFadeOut(e.target.checked)} />
              Fade out
            </label>
          </div>

          <div className="flex flex-wrap items-center gap-3 border-t border-slate-200/80 pt-4 dark:border-outline-variant/20">
            <label className="flex flex-col gap-1">
              <span className="font-label text-[10px] uppercase tracking-widest text-slate-500 dark:text-slate-500">Format</span>
              <select
                value={format}
                onChange={(e) => setFormat(e.target.value as ExportFormat)}
                className="rounded-lg border border-slate-200/80 bg-white px-3 py-2 font-label text-sm text-slate-800 dark:border-outline-variant/20 dark:bg-surface-container dark:text-on-surface"
              >
                <option value="mp3">MP3</option>
                <option value="wav">WAV</option>
                <option value="m4a">M4A</option>
                <option value="m4r">M4R (iPhone ringtone)</option>
              </select>
            </label>
            <button
              type="button"
              disabled={isExporting}
              onClick={() => void handleExport()}
              className="mt-5 rounded-lg bg-emerald-600 px-5 py-2.5 font-label text-xs font-bold text-white shadow-sm transition-colors hover:bg-emerald-700 disabled:opacity-60 dark:bg-primary-container dark:text-on-primary-container"
            >
              {isExporting ? "Exporting..." : "Export"}
            </button>
            {exportNote ? <p className="mt-5 font-label text-xs text-slate-500 dark:text-slate-500">{exportNote}</p> : null}
            {finalDuration !== null ? (
              <p className="mt-5 font-label text-xs font-bold text-emerald-700 dark:text-primary-container">
                Final audio — {formatTime(finalDuration, false)}
              </p>
            ) : null}
          </div>

          {exportError ? (
            <div className="rounded-2xl border border-red-300/70 bg-red-50 p-4 text-sm text-red-700 dark:border-red-900/40 dark:bg-red-950/30 dark:text-red-300">
              {exportError}
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
