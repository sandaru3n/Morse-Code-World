"use client";

import { useCallback, useMemo, useState } from "react";
import Link from "next/link";
import { decodeFromMorse } from "@/lib/decoder";
import { normalizeMorseInput } from "@/lib/translate";
import { ocrTextToMorseGuess } from "@/lib/ocrMorse";

export default function PictureMorseTranslator() {
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [ocrRaw, setOcrRaw] = useState("");
  const [geminiRaw, setGeminiRaw] = useState("");
  const [morseText, setMorseText] = useState("");
  const [phase, setPhase] = useState<"idle" | "reading" | "done" | "error">("idle");
  const [busyKind, setBusyKind] = useState<"ocr" | "ai" | null>(null);
  const [errorMsg, setErrorMsg] = useState("");

  const decoded = useMemo(() => {
    const m = normalizeMorseInput(morseText);
    if (!m) return "";
    return decodeFromMorse(m);
  }, [morseText]);

  const clearPreview = useCallback(() => {
    if (previewUrl) URL.revokeObjectURL(previewUrl);
    setPreviewUrl(null);
  }, [previewUrl]);

  const onPickFile = useCallback(
    (f: File | null) => {
      clearPreview();
      setFile(f);
      setOcrRaw("");
      setGeminiRaw("");
      setMorseText("");
      setPhase("idle");
      setBusyKind(null);
      setErrorMsg("");
      if (f?.type.startsWith("image/")) {
        setPreviewUrl(URL.createObjectURL(f));
      } else {
        setFile(null);
        setErrorMsg("Choose an image file (PNG, JPG, WebP, GIF).");
      }
    },
    [clearPreview]
  );

  const runOcr = useCallback(async () => {
    if (!file) {
      setErrorMsg("Add an image first.");
      return;
    }
    setPhase("reading");
    setBusyKind("ocr");
    setErrorMsg("");
    setGeminiRaw("");
    try {
      const { createWorker } = await import("tesseract.js");
      const worker = await createWorker("eng");
      const {
        data: { text }
      } = await worker.recognize(file);
      await worker.terminate();
      setOcrRaw(text);
      setMorseText(ocrTextToMorseGuess(text));
      setPhase("done");
    } catch (e) {
      setPhase("error");
      setErrorMsg(e instanceof Error ? e.message : "Could not read the image.");
    } finally {
      setBusyKind(null);
    }
  }, [file]);

  const runGemini = useCallback(async () => {
    if (!file) {
      setErrorMsg("Add an image first.");
      return;
    }
    setPhase("reading");
    setBusyKind("ai");
    setErrorMsg("");
    setOcrRaw("");
    try {
      const fd = new FormData();
      fd.append("image", file);
      const res = await fetch("/api/morse-from-image", {
        method: "POST",
        body: fd
      });
      const data = (await res.json()) as { morse?: string; raw?: string; error?: string };
      if (!res.ok) {
        throw new Error(data.error || `Request failed (${res.status})`);
      }
      setGeminiRaw(data.raw ?? "");
      setMorseText(ocrTextToMorseGuess(data.morse ?? data.raw ?? ""));
      setPhase("done");
    } catch (e) {
      setPhase("error");
      setErrorMsg(e instanceof Error ? e.message : "AI could not read the image.");
    } finally {
      setBusyKind(null);
    }
  }, [file]);

  const busy = busyKind !== null;

  return (
    <div className="space-y-6">
      <p className="font-body text-sm leading-relaxed text-slate-600 dark:text-slate-400">
        This <strong className="text-neutral-800 dark:text-slate-200">morse code picture translator</strong> needs a clear photo or screenshot
        showing <strong className="text-neutral-800 dark:text-slate-200">dots and dashes</strong> (and spaces or slashes between letters or
        words). <strong className="text-neutral-800 dark:text-slate-200">OCR</strong> runs in your browser (nothing uploaded).{" "}
        <strong className="text-neutral-800 dark:text-slate-200">AI (Google Gemini)</strong> is optional: the image is sent to your server,
        which calls Gemini with your API key—usually more accurate on messy photos. Edit the Morse line below if needed, then compare with
        the main{" "}
        <Link href="/" className="font-semibold text-emerald-600 underline underline-offset-2 dark:text-primary-container">
          translator
        </Link>
        .
      </p>

      <div
        className="rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50/80 p-6 text-center dark:border-outline-variant/40 dark:bg-surface-container-low/60 sm:p-8"
        onDragOver={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
        onDrop={(e) => {
          e.preventDefault();
          const f = e.dataTransfer.files[0];
          if (f) onPickFile(f);
        }}
      >
        <input
          id="picture-morse-file"
          type="file"
          accept="image/*"
          className="sr-only"
          onChange={(e) => onPickFile(e.target.files?.[0] ?? null)}
        />
        <label
          htmlFor="picture-morse-file"
          className="inline-flex cursor-pointer flex-col items-center gap-2 font-headline text-sm font-bold text-emerald-600 dark:text-primary-container"
        >
          <span className="rounded-full bg-primary-container/15 px-4 py-2 text-on-primary-container dark:bg-primary-container/20 dark:text-primary-fixed">
            Choose image
          </span>
          <span className="font-label text-xs font-normal text-slate-500 dark:text-slate-500">or drag and drop here</span>
        </label>
      </div>

      {previewUrl && file && (
        <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white dark:border-outline-variant/30 dark:bg-surface-container">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={previewUrl} alt="Selected image for OCR" className="max-h-80 w-full object-contain" />
        </div>
      )}

      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => void runOcr()}
          disabled={!file || busy}
          className="rounded-xl bg-primary-container px-5 py-2.5 font-headline text-sm font-bold text-on-primary-container shadow-neon-primary transition-all hover:brightness-110 disabled:opacity-45 dark:text-on-primary-container"
        >
          {busyKind === "ocr" ? "Reading with OCR…" : "Extract with OCR (browser)"}
        </button>
        <button
          type="button"
          onClick={() => void runGemini()}
          disabled={!file || busy}
          className="rounded-xl border border-secondary-container/60 bg-secondary-container/15 px-5 py-2.5 font-headline text-sm font-bold text-secondary transition-all hover:bg-secondary-container/25 disabled:opacity-45 dark:border-secondary/40 dark:bg-secondary-container/20 dark:text-secondary dark:hover:bg-secondary-container/30"
          title="Requires GOOGLE_GENERATIVE_AI_API_KEY on the server (e.g. Vercel env)"
        >
          {busyKind === "ai" ? "Reading with AI…" : "Extract with AI (Gemini)"}
        </button>
        {file && (
          <button
            type="button"
            onClick={() => {
              clearPreview();
              setFile(null);
              setOcrRaw("");
              setGeminiRaw("");
              setMorseText("");
              setPhase("idle");
              setBusyKind(null);
              setErrorMsg("");
            }}
            className="rounded-xl border border-slate-200 bg-white px-5 py-2.5 font-headline text-sm font-bold text-neutral-800 dark:border-outline-variant/40 dark:bg-surface-container dark:text-on-surface"
          >
            Clear
          </button>
        )}
      </div>

      <p className="font-label text-[11px] leading-relaxed text-slate-500 dark:text-slate-500">
        Google AI Studio: create an API key, then set{" "}
        <code className="rounded bg-slate-100 px-1 font-mono text-[10px] dark:bg-surface-container-high">GOOGLE_GENERATIVE_AI_API_KEY</code>{" "}
        in Vercel (or <code className="rounded bg-slate-100 px-1 font-mono text-[10px] dark:bg-surface-container-high">.env.local</code>{" "}
        locally). Optional:{" "}
        <code className="rounded bg-slate-100 px-1 font-mono text-[10px] dark:bg-surface-container-high">GOOGLE_GENERATIVE_AI_MODEL</code>{" "}
        (default <code className="font-mono text-[10px]">gemini-2.0-flash</code>).
      </p>

      {errorMsg && (
        <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 font-label text-sm text-red-800 dark:border-error/40 dark:bg-error/10 dark:text-error">
          {errorMsg}
        </p>
      )}

      {ocrRaw && (
        <div>
          <div className="mb-1 font-label text-[10px] uppercase tracking-widest text-slate-500 dark:text-slate-500">
            Raw OCR (Tesseract)
          </div>
          <pre className="max-h-40 overflow-auto whitespace-pre-wrap rounded-xl border border-slate-200 bg-slate-50 p-3 font-mono text-xs text-slate-700 dark:border-outline-variant/30 dark:bg-surface-container-low dark:text-slate-300">
            {ocrRaw.trim() || "(empty)"}
          </pre>
        </div>
      )}

      {geminiRaw && (
        <div>
          <div className="mb-1 font-label text-[10px] uppercase tracking-widest text-slate-500 dark:text-slate-500">
            Gemini raw response
          </div>
          <pre className="max-h-40 overflow-auto whitespace-pre-wrap rounded-xl border border-slate-200 bg-slate-50 p-3 font-mono text-xs text-slate-700 dark:border-outline-variant/30 dark:bg-surface-container-low dark:text-slate-300">
            {geminiRaw.trim() || "(empty)"}
          </pre>
        </div>
      )}

      <div>
        <label htmlFor="picture-morse-edit" className="mb-1 block font-label text-[10px] uppercase tracking-widest text-slate-500 dark:text-slate-500">
          Morse (edit if needed)
        </label>
        <textarea
          id="picture-morse-edit"
          className="h-28 w-full resize-y rounded-xl border border-slate-200 bg-white p-3 font-mono text-sm text-neutral-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-container/30 dark:border-outline-variant/30 dark:bg-surface-container dark:text-on-surface dark:placeholder:text-slate-600"
          placeholder=".-  -...  -.-.  after OCR, or type dots and dashes here"
          value={morseText}
          onChange={(e) => setMorseText(e.target.value)}
          spellCheck={false}
        />
        <p className="mt-2 font-label text-[11px] text-slate-500 dark:text-slate-500">
          Use spaces between letters and <code className="rounded bg-slate-100 px-1 dark:bg-surface-container-high">/</code> between words.
        </p>
      </div>

      <div className="rounded-2xl border border-slate-200/80 bg-slate-50 p-4 dark:border-outline-variant/20 dark:bg-surface-container-high/40 sm:p-5">
        <div className="mb-2 font-label text-[10px] uppercase tracking-widest text-slate-500 dark:text-slate-500">Decoded text</div>
        <div className="min-h-[3rem] font-headline text-lg font-bold leading-snug text-neutral-900 dark:text-primary-fixed sm:text-xl">
          {decoded || <span className="text-slate-400 dark:text-slate-600">…</span>}
        </div>
      </div>
    </div>
  );
}
