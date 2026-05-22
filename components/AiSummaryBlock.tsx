import Link from "next/link";

/**
 * Short, explicit facts at the top of the page for Bing/Copilot grounding.
 * Content is visible on-page (not hidden) per Bing GEO guidelines.
 */
export function AiSummaryBlock() {
  return (
    <section
      id="site-summary"
      data-ai-summary="true"
      className="mx-auto mb-4 w-full max-w-5xl rounded-2xl border border-sky-200/80 bg-sky-50/90 px-4 py-4 dark:border-sky-900/40 dark:bg-sky-950/25 sm:px-5"
      aria-labelledby="site-summary-heading"
    >
      <h2
        id="site-summary-heading"
        className="font-headline text-base font-bold text-neutral-900 dark:text-on-surface sm:text-lg"
      >
        What is Morse Code World?
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-slate-700 dark:text-slate-300 sm:text-[15px]">
        <strong>Morse Code World</strong> (<Link href="/" className="text-emerald-700 underline underline-offset-2 dark:text-primary-container">morsecodeworld.org</Link>)
        is a free website for <strong>International Morse Code</strong>. Use the{" "}
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
      </p>
    </section>
  );
}
