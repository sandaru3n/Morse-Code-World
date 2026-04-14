import type { Metadata } from "next";
import Link from "next/link";
import AudioMorseDecoder from "@/components/AudioMorseDecoder";
import { SiteTopBar } from "@/components/SiteTopBar";
import { SITE_NAME } from "@/lib/site";

const SEO_KEYWORDS = [
  "audio morse code decoder",
  "decode morse from audio",
  "morse code audio to text",
  "morse audio decoder online",
  "morse code decoder",
  SITE_NAME
] as const;

const PAGE_TITLE = "Audio Morse Code Decoder - Decode Morse Audio to Text Online";

const PAGE_DESCRIPTION =
  "Free audio Morse code decoder. Upload WAV, MP3, or other audio and convert Morse beeps into dots/dashes and readable text online.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: "/audio-morse-code-decoder"
  },
  keywords: [...SEO_KEYWORDS],
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    url: "/audio-morse-code-decoder",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION
  },
  twitter: {
    card: "summary",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION
  }
};

export default function AudioMorseCodeDecoderPage() {
  return (
    <div className="relative flex min-h-screen flex-col bg-neutral-100 text-neutral-900 selection:bg-primary-container selection:text-on-primary-container dark:bg-surface-container-lowest dark:text-on-surface">
      <SiteTopBar />

      <div className="flex flex-1 pt-[4.5rem]">
        <main className="flex-1 overflow-y-auto p-3 sm:p-5 lg:p-8">
          <div className="mx-auto max-w-3xl">
            <div className="mb-3">
              <Link
                href="/"
                className="font-headline text-sm font-bold text-emerald-600 underline underline-offset-2 dark:text-primary-container"
              >
                ← Back to Home
              </Link>
            </div>
            <h1 className="font-headline text-2xl font-bold tracking-tight text-neutral-900 dark:text-on-surface sm:text-3xl md:text-4xl">
              Audio Morse Code Decoder
            </h1>

            <div className="mt-6">
              <AudioMorseDecoder />
            </div>

            <section
              className="mt-12 rounded-2xl border border-slate-200/80 bg-white/80 p-5 dark:border-outline-variant/25 dark:bg-surface-container/40 sm:p-6"
              aria-labelledby="audio-morse-how-to"
            >
              <h2
                id="audio-morse-how-to"
                className="font-headline text-lg font-bold tracking-tight text-neutral-900 dark:text-on-surface sm:text-xl"
              >
                How to use
              </h2>
              <div className="mt-4 space-y-4 font-body text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base">
                <p>
                  Upload an audio clip containing clear Morse beeps (tone and silence). The decoder estimates timing, generates{" "}
                  <strong className="text-neutral-800 dark:text-slate-200">dots and dashes</strong>, then converts them to plain text. If the
                  recording is noisy, edit the Morse line manually and re-check output with the main{" "}
                  <Link href="/" className="font-semibold text-emerald-600 underline underline-offset-2 dark:text-primary-container">
                    translator
                  </Link>
                  .
                </p>
                <p className="border-t border-slate-200/80 pt-4 text-xs leading-relaxed text-slate-500 dark:border-outline-variant/30 dark:text-slate-500 sm:text-sm">
                  <span className="font-label font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-400">
                    Related search terms
                  </span>
                  : audio morse code decoder; decode morse from audio; morse code audio to text.
                </p>
              </div>
            </section>
          </div>
        </main>
      </div>

      <footer className="mt-auto border-t border-slate-200/80 py-6 text-center dark:border-white/10">
        <p className="font-label text-[10px] text-slate-500 dark:text-slate-600">© 2026 {SITE_NAME}</p>
      </footer>
    </div>
  );
}
