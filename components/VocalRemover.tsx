"use client";

import { useEffect, useRef, useState } from "react";
import { upload } from "@vercel/blob/client";

const MAX_FILE_BYTES = 15 * 1024 * 1024;
const MAX_DURATION_SECONDS = 10 * 60;
const POLL_INTERVAL_MS = 3000;
const ACCEPTED_EXTENSIONS = [".mp3", ".wav", ".flac", ".ogg"];

/** localStorage key used to survive a page refresh while a job is running or just finished. */
const STORAGE_KEY = "vocalRemoverJob";
/** Replicate output URLs aren't kept forever — don't try to resume/restore anything older than this. */
const PERSISTED_JOB_MAX_AGE_MS = 50 * 60 * 1000;

type Stage = "idle" | "validating" | "uploading" | "processing" | "done" | "error";

type SeparationResult = {
  vocals: string | null;
  instrumental: string | null;
};

type PersistedJob = {
  predictionId?: string;
  stage: "processing" | "done";
  result?: SeparationResult;
  startedAt: number;
};

function formatBytes(bytes: number): string {
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function formatElapsed(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}

function readPersistedJob(): PersistedJob | null {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as PersistedJob;
    if (!parsed?.startedAt || Date.now() - parsed.startedAt > PERSISTED_JOB_MAX_AGE_MS) {
      window.localStorage.removeItem(STORAGE_KEY);
      return null;
    }
    return parsed;
  } catch {
    return null;
  }
}

function writePersistedJob(job: PersistedJob) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(job));
  } catch {
    // Ignore storage failures (private mode, quota, etc). Losing persistence is non-fatal.
  }
}

function clearPersistedJob() {
  try {
    window.localStorage.removeItem(STORAGE_KEY);
  } catch {
    // Ignore.
  }
}

/** Reads an audio file's duration in the browser without uploading it. */
function readAudioDuration(file: File): Promise<number> {
  return new Promise((resolve, reject) => {
    const audio = document.createElement("audio");
    const url = URL.createObjectURL(file);
    const cleanup = () => URL.revokeObjectURL(url);

    audio.preload = "metadata";
    audio.onloadedmetadata = () => {
      const duration = audio.duration;
      cleanup();
      if (!Number.isFinite(duration) || duration <= 0) {
        reject(new Error("Could not read audio duration."));
        return;
      }
      resolve(duration);
    };
    audio.onerror = () => {
      cleanup();
      reject(new Error("This file could not be read as audio."));
    };
    audio.src = url;
  });
}

function hasAcceptedExtension(name: string): boolean {
  const lower = name.toLowerCase();
  return ACCEPTED_EXTENSIONS.some((ext) => lower.endsWith(ext));
}

export function VocalRemover() {
  const [stage, setStage] = useState<Stage>("idle");
  const [file, setFile] = useState<File | null>(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [rateLimited, setRateLimited] = useState(false);
  const [uploadPct, setUploadPct] = useState(0);
  const [elapsedSec, setElapsedSec] = useState(0);
  const [result, setResult] = useState<SeparationResult | null>(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const [remaining, setRemaining] = useState<number | null>(null);
  const [dailyLimit, setDailyLimit] = useState<number | null>(null);
  const [restoring, setRestoring] = useState(true);

  const pollTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const elapsedTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const stopTimers = () => {
    if (pollTimerRef.current) clearInterval(pollTimerRef.current);
    if (elapsedTimerRef.current) clearInterval(elapsedTimerRef.current);
  };

  const startPolling = (predictionId: string, resumeElapsedSec = 0) => {
    setElapsedSec(resumeElapsedSec);
    elapsedTimerRef.current = setInterval(() => {
      setElapsedSec((s) => s + 1);
    }, 1000);

    pollTimerRef.current = setInterval(async () => {
      try {
        const res = await fetch(`/api/status/${predictionId}`);
        const data = (await res.json()) as {
          status?: string;
          output?: SeparationResult;
          error?: string;
        };

        if (!res.ok || data.error) {
          throw new Error(data.error || "Separation failed.");
        }

        if (data.status === "succeeded" && data.output) {
          stopTimers();
          setResult(data.output);
          setStage("done");
          writePersistedJob({ predictionId, stage: "done", result: data.output, startedAt: Date.now() });
          return;
        }

        if (data.status === "failed" || data.status === "canceled") {
          throw new Error(data.error || "Separation failed on the server.");
        }
        // Otherwise still starting / processing — keep polling.
      } catch (e) {
        stopTimers();
        clearPersistedJob();
        setErrorMsg(e instanceof Error ? e.message : "Separation failed.");
        setStage("error");
      }
    }, POLL_INTERVAL_MS);
  };

  // Restore an in-progress or just-finished job after a page refresh.
  useEffect(() => {
    const job = readPersistedJob();
    if (job?.stage === "done" && job.result) {
      setResult(job.result);
      setStage("done");
    } else if (job?.stage === "processing" && job.predictionId) {
      setStage("processing");
      const resumeElapsedSec = Math.max(0, Math.round((Date.now() - job.startedAt) / 1000));
      startPolling(job.predictionId, resumeElapsedSec);
    }
    setRestoring(false);

    return () => stopTimers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Show "X of N left today" as soon as the page loads, before any run.
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/api/vocal-remover-quota");
        const data = (await res.json()) as { remaining?: number; limit?: number; configured?: boolean };
        if (res.ok && typeof data.remaining === "number" && typeof data.limit === "number") {
          setRemaining(data.remaining);
          setDailyLimit(data.limit);
        }
      } catch {
        // Quota is a soft hint — silently ignore failures.
      }
    })();
  }, []);

  const reset = () => {
    stopTimers();
    clearPersistedJob();
    setStage("idle");
    setFile(null);
    setErrorMsg("");
    setRateLimited(false);
    setUploadPct(0);
    setElapsedSec(0);
    setResult(null);
  };

  const processFile = async (candidate: File) => {
    setErrorMsg("");
    setRateLimited(false);
    setResult(null);
    setStage("validating");

    if (!hasAcceptedExtension(candidate.name)) {
      setErrorMsg("Unsupported file type. Use MP3, WAV, FLAC, or OGG.");
      setStage("error");
      return;
    }

    if (candidate.size > MAX_FILE_BYTES) {
      setErrorMsg(`File is too large (${formatBytes(candidate.size)}). Max size is 15 MB.`);
      setStage("error");
      return;
    }

    try {
      const duration = await readAudioDuration(candidate);
      if (duration > MAX_DURATION_SECONDS) {
        setErrorMsg(
          `Track is too long (${formatElapsed(Math.round(duration))}). Max length is 10 minutes.`
        );
        setStage("error");
        return;
      }
    } catch (e) {
      setErrorMsg(e instanceof Error ? e.message : "Could not read this audio file.");
      setStage("error");
      return;
    }

    setFile(candidate);
    setStage("uploading");
    setUploadPct(0);

    try {
      const blob = await upload(candidate.name, candidate, {
        access: "public",
        handleUploadUrl: "/api/upload",
        onUploadProgress: ({ percentage }) => setUploadPct(Math.round(percentage))
      });

      setStage("processing");

      const res = await fetch("/api/separate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ audioUrl: blob.url })
      });
      const data = (await res.json()) as {
        id?: string;
        error?: string;
        code?: string;
        remaining?: number;
        limit?: number;
      };

      if (typeof data.limit === "number") setDailyLimit(data.limit);
      if (typeof data.remaining === "number") setRemaining(data.remaining);

      if (res.status === 429 || data.code === "RATE_LIMITED") {
        setRateLimited(true);
        throw new Error(data.error || "Daily limit reached. Please try again tomorrow.");
      }

      if (!res.ok || !data.id) {
        throw new Error(data.error || "Could not start separation job.");
      }

      const startedAt = Date.now();
      writePersistedJob({ predictionId: data.id, stage: "processing", startedAt });
      startPolling(data.id);
    } catch (e) {
      setErrorMsg(e instanceof Error ? e.message : "Upload failed. Please try again.");
      setStage("error");
    }
  };

  const onPickFile = (picked: File | null) => {
    if (!picked) return;
    void processFile(picked);
  };

  const busy = stage === "validating" || stage === "uploading" || stage === "processing";

  if (restoring) {
    return (
      <div className="rounded-2xl border border-slate-200/80 bg-white p-6 text-center dark:border-outline-variant/30 dark:bg-surface-container">
        <p className="font-label text-xs text-slate-500 dark:text-slate-500">Loading...</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {stage === "idle" || stage === "error" ? (
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
            id="vocal-remover-file"
            type="file"
            accept=".mp3,.wav,.flac,.ogg,audio/mpeg,audio/wav,audio/flac,audio/ogg"
            className="hidden"
            tabIndex={-1}
            onChange={(e) => onPickFile(e.target.files?.[0] ?? null)}
          />
          <label
            htmlFor="vocal-remover-file"
            className="inline-flex cursor-pointer flex-col items-center gap-2 font-headline text-sm font-bold text-emerald-600 dark:text-primary-container"
          >
            <span className="rounded-full bg-primary-container/15 px-4 py-2 text-on-primary-container dark:bg-primary-container/20 dark:text-primary-fixed">
              Choose a song
            </span>
            <span className="font-label text-xs font-normal text-slate-500 dark:text-slate-500">
              or drag and drop here — MP3, WAV, FLAC, OGG (max 15 MB, 10 min)
            </span>
          </label>
        </div>
      ) : null}

      {remaining !== null && dailyLimit !== null && stage !== "processing" ? (
        <p className="font-label text-xs text-slate-500 dark:text-slate-500">
          {remaining > 0
            ? `${remaining} of ${dailyLimit} free separations left today.`
            : "You've used all your free separations for today."}
        </p>
      ) : null}

      {stage === "error" && errorMsg ? (
        <div
          className={`rounded-2xl border p-4 text-sm ${
            rateLimited
              ? "border-amber-300/70 bg-amber-50 text-amber-800 dark:border-amber-900/40 dark:bg-amber-950/30 dark:text-amber-300"
              : "border-red-300/70 bg-red-50 text-red-700 dark:border-red-900/40 dark:bg-red-950/30 dark:text-red-300"
          }`}
        >
          <p className="font-headline text-sm font-bold">
            {rateLimited ? "Daily limit reached" : "Something went wrong"}
          </p>
          <p className="mt-1">{errorMsg}</p>
          {!rateLimited ? (
            <button
              type="button"
              onClick={reset}
              className="mt-3 rounded-lg bg-red-600 px-3 py-1.5 font-label text-xs font-bold text-white transition-colors hover:bg-red-700"
            >
              Try again
            </button>
          ) : null}
        </div>
      ) : null}

      {stage === "uploading" && file ? (
        <div className="rounded-2xl border border-slate-200/80 bg-white p-4 dark:border-outline-variant/30 dark:bg-surface-container">
          <div className="flex items-center justify-between font-label text-[10px] uppercase tracking-widest text-slate-500 dark:text-slate-500">
            <span>Uploading {file.name}</span>
            <span>{uploadPct}%</span>
          </div>
          <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-surface-container-high">
            <div
              className="h-full rounded-full bg-emerald-500 transition-all dark:bg-primary-container"
              style={{ width: `${uploadPct}%` }}
            />
          </div>
        </div>
      ) : null}

      {stage === "processing" ? (
        <div className="rounded-2xl border border-sky-200/80 bg-sky-50/90 p-4 dark:border-sky-900/40 dark:bg-sky-950/25">
          <div className="flex items-center gap-3">
            <span className="h-4 w-4 shrink-0 animate-spin rounded-full border-2 border-sky-400 border-t-transparent" />
            <div>
              <p className="font-headline text-sm font-bold text-sky-800 dark:text-sky-200">
                Separating vocals from instrumental...
              </p>
              <p className="mt-1 font-label text-xs text-sky-700 dark:text-sky-300">
                Elapsed: {formatElapsed(elapsedSec)} — this usually takes 1-3 minutes.
                {elapsedSec > 60 ? " The first run after a while can be slower (model cold start)." : ""}
              </p>
              <p className="mt-1 font-label text-[11px] text-sky-600/80 dark:text-sky-400/80">
                You can refresh this page — progress is saved and will pick back up.
              </p>
            </div>
          </div>
        </div>
      ) : null}

      {stage === "done" && result ? (
        <div className="space-y-4">
          <div className="rounded-2xl border border-emerald-200/80 bg-emerald-50/80 p-4 dark:border-primary-container/30 dark:bg-primary-container/10">
            <p className="font-headline text-sm font-bold text-emerald-700 dark:text-primary-container">
              Done! Your instrumental and vocal tracks are ready.
            </p>
          </div>

          {result.instrumental ? (
            <div className="rounded-2xl border border-slate-200/80 bg-white p-4 dark:border-outline-variant/30 dark:bg-surface-container">
              <div className="mb-2 flex items-center justify-between">
                <span className="font-label text-[10px] uppercase tracking-widest text-slate-500 dark:text-slate-500">
                  Instrumental (no vocals)
                </span>
                <a
                  href={result.instrumental}
                  download
                  className="font-label text-xs font-bold text-emerald-600 hover:underline dark:text-primary-container"
                >
                  Download
                </a>
              </div>
              <audio controls className="w-full" src={result.instrumental}>
                Your browser does not support audio playback.
              </audio>
            </div>
          ) : null}

          {result.vocals ? (
            <div className="rounded-2xl border border-slate-200/80 bg-white p-4 dark:border-outline-variant/30 dark:bg-surface-container">
              <div className="mb-2 flex items-center justify-between">
                <span className="font-label text-[10px] uppercase tracking-widest text-slate-500 dark:text-slate-500">
                  Isolated vocals
                </span>
                <a
                  href={result.vocals}
                  download
                  className="font-label text-xs font-bold text-emerald-600 hover:underline dark:text-primary-container"
                >
                  Download
                </a>
              </div>
              <audio controls className="w-full" src={result.vocals}>
                Your browser does not support audio playback.
              </audio>
            </div>
          ) : null}

          <button
            type="button"
            onClick={reset}
            className="rounded-xl border border-slate-200/80 bg-white px-4 py-2 font-headline text-sm font-bold text-slate-700 shadow-sm transition-colors hover:bg-slate-50 dark:border-outline-variant/20 dark:bg-surface-container dark:text-on-surface"
          >
            Remove vocals from another song
          </button>
        </div>
      ) : null}

      {busy && !file ? (
        <p className="font-label text-xs text-slate-500 dark:text-slate-500">Checking your file...</p>
      ) : null}
    </div>
  );
}
