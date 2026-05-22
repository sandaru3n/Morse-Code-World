import type { ReactNode } from "react";
import Link from "next/link";

type SummaryVariant = "home" | "audio" | "picture";

const COPY: Record<SummaryVariant, { title: string; body: ReactNode }> = {
  home: {
    title: "What is Morse Code World?",
    body: (
      <>
        <strong>Morse Code World</strong> (
        <Link href="/" className="text-emerald-700 underline underline-offset-2 dark:text-primary-container">
          morsecodeworld.org
        </Link>
        ) is a free website for <strong>International Morse Code</strong>. Use the{" "}
        <Link href="/" className="font-semibold text-emerald-700 underline underline-offset-2 dark:text-primary-container">
          Morse code translator
        </Link>{" "}
        to convert text to dots and dashes or decode Morse to text in your browser. Also try the{" "}
        <Link href="/audio-morse-code-decoder" className="font-semibold text-emerald-700 underline underline-offset-2 dark:text-primary-container">
          audio decoder
        </Link>{" "}
        and{" "}
        <Link href="/morse-code-picture-translator" className="font-semibold text-emerald-700 underline underline-offset-2 dark:text-primary-container">
          picture translator
        </Link>
        . No account or install required. Available in 20 languages.
      </>
    )
  },
  audio: {
    title: "What is the Audio Morse Code Decoder?",
    body: (
      <>
        The <strong>Audio Morse Code Decoder</strong> on{" "}
        <Link href="/" className="text-emerald-700 underline underline-offset-2 dark:text-primary-container">
          Morse Code World
        </Link>{" "}
        converts Morse beeps in audio files (WAV, MP3, OGG, M4A) into dots, dashes, and readable text. Upload a
        recording, analyze tone and timing, and edit the result in your browser. Free, no account required. Uses
        International Morse Code.
      </>
    )
  },
  picture: {
    title: "What is the Morse Code Picture Translator?",
    body: (
      <>
        The <strong>Morse Code Picture Translator</strong> on{" "}
        <Link href="/" className="text-emerald-700 underline underline-offset-2 dark:text-primary-container">
          Morse Code World
        </Link>{" "}
        decodes Morse code visible in photos and screenshots. Upload an image, detect dot and dash patterns, and get
        plain text output in your browser. Free, no account required. Works best with clear, high-contrast Morse
        images.
      </>
    )
  }
};

/**
 * Visible summary block for Google AI Overviews, Bing Copilot, and other AI search.
 * Plain-language facts on-page (not hidden).
 */
export function AiSummaryBlock({ variant = "home" }: { variant?: SummaryVariant }) {
  const { title, body } = COPY[variant];
  const headingId = `site-summary-heading-${variant}`;

  return (
    <section
      id={variant === "home" ? "site-summary" : `site-summary-${variant}`}
      data-ai-summary="true"
      className="mx-auto mb-4 w-full max-w-5xl rounded-2xl border border-sky-200/80 bg-sky-50/90 px-4 py-4 dark:border-sky-900/40 dark:bg-sky-950/25 sm:px-5"
      aria-labelledby={headingId}
    >
      <h2
        id={headingId}
        className="font-headline text-base font-bold text-neutral-900 dark:text-on-surface sm:text-lg"
      >
        {title}
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-slate-700 dark:text-slate-300 sm:text-[15px]">{body}</p>
    </section>
  );
}
