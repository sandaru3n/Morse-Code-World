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

const WEB_APP_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Audio Morse Code Decoder",
  url: "https://morsecodeworld.org/audio-morse-code-decoder",
  applicationCategory: "UtilityApplication",
  operatingSystem: "Web",
  description:
    "Upload an audio file containing morse code beeps. The decoder analyzes tone and silence timing to extract dots and dashes and convert them to readable text.",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" }
};

const HOW_TO_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to decode morse code from audio",
  step: [
    { "@type": "HowToStep", text: "Click 'Choose audio' and upload your WAV, MP3, or other audio file." },
    { "@type": "HowToStep", text: "Click 'Decode Morse from audio' to start the analysis." },
    { "@type": "HowToStep", text: "The decoder reads tone and silence timing to produce dots and dashes." },
    { "@type": "HowToStep", text: "Edit the morse output manually if needed." },
    { "@type": "HowToStep", text: "Read the decoded plain text in the output box." }
  ]
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What audio formats does the morse code audio decoder support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "WAV, MP3, OGG, M4A and most common audio formats are supported. Clean, single-tone recordings give the best results."
      }
    },
    {
      "@type": "Question",
      name: "Why is my decoded morse code output incorrect?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Background noise, inconsistent tone frequency, or very fast transmission speeds can affect accuracy. Try editing the dots and dashes manually in the text area below the decoder."
      }
    },
    {
      "@type": "Question",
      name: "Can I decode morse code from a YouTube video?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Export the video audio to a supported format like WAV or MP3, then upload it here. Better source quality leads to better decoding accuracy."
      }
    },
    {
      "@type": "Question",
      name: "What does 'Organize text with AI' do?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "This feature uses AI to clean up and restructure the decoded text, which is especially useful for longer morse transmissions that may have spacing or formatting issues."
      }
    },
    {
      "@type": "Question",
      name: "Is this audio morse code decoder free?",
      acceptedAnswer: { "@type": "Answer", text: "Yes, completely free with no account or registration required." }
    },
    {
      "@type": "Question",
      name: "What is the maximum audio file size?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Very large files can take longer to process. For best performance and accuracy, use shorter clips and trim recordings to the exact section that contains Morse code."
      }
    }
  ]
};

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
            <h1 className="font-headline text-2xl font-bold tracking-tight text-neutral-900 dark:text-on-surface sm:text-3xl md:text-4xl">
              Audio Morse Code Decoder - Decode Morse Code from Audio Recordings
            </h1>

            <div className="mt-6">
              <AudioMorseDecoder />
            </div>

            <section
              className="mt-12 rounded-2xl border border-slate-200/80 bg-white/80 p-5 dark:border-outline-variant/25 dark:bg-surface-container/40 sm:p-6"
              aria-labelledby="audio-morse-about"
            >
              <h2
                id="audio-morse-about"
                className="font-headline text-lg font-bold tracking-tight text-neutral-900 dark:text-on-surface sm:text-xl"
              >
                What is an audio Morse code decoder?
              </h2>
              <div className="mt-4 space-y-4 font-body text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base">
                <p>
                  An <strong className="text-neutral-800 dark:text-slate-200">audio Morse code decoder</strong> converts recordings of Morse beeps
                  into readable text by analyzing timing patterns between tone and silence. Instead of listening and transcribing by hand, you can
                  upload an audio clip and let the tool extract dots and dashes automatically.
                </p>
                <p>
                  This is useful for ham radio operators who record transmissions, learners reviewing practice sessions, and researchers working with
                  old audio archives. If you need to <strong className="text-neutral-800 dark:text-slate-200">decode Morse from audio</strong>{" "}
                  quickly, this page is designed for exactly that workflow: upload, analyze, edit if needed, and read plain text output.
                </p>
                <p>
                  The decoder produces editable Morse output first, then converts it to final text so you stay in control of accuracy. That makes{" "}
                  <strong className="text-neutral-800 dark:text-slate-200">Morse code audio to text</strong> conversion more transparent and easier
                  to correct than black-box decoding tools. You can cross-check any uncertain message in the main{" "}
                  <Link href="/" className="font-semibold text-emerald-600 underline underline-offset-2 dark:text-primary-container">
                    translator
                  </Link>
                  , or use the{" "}
                  <Link
                    href="/morse-code-picture-translator"
                    className="font-semibold text-emerald-600 underline underline-offset-2 dark:text-primary-container"
                  >
                    picture translator
                  </Link>{" "}
                  when your source is an image instead of a recording.
                </p>
              </div>
            </section>

            <section
              className="mt-8 rounded-2xl border border-slate-200/80 bg-white/80 p-5 dark:border-outline-variant/25 dark:bg-surface-container/40 sm:p-6"
              aria-labelledby="audio-morse-formats"
            >
              <h2
                id="audio-morse-formats"
                className="font-headline text-lg font-bold tracking-tight text-neutral-900 dark:text-on-surface sm:text-xl"
              >
                Supported audio formats
              </h2>
              <p className="mt-4 font-body text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base">
                You can upload WAV, MP3, OGG, M4A, and most common audio formats. For best results, use a clean recording with a single tone
                frequency and minimal background noise. If your source includes speech, static, or music, trim the file to the section that only
                contains Morse beeps before decoding.
              </p>
            </section>

            <section
              className="mt-8 rounded-2xl border border-slate-200/80 bg-white/80 p-5 dark:border-outline-variant/25 dark:bg-surface-container/40 sm:p-6"
              aria-labelledby="audio-morse-steps"
            >
              <h2
                id="audio-morse-steps"
                className="font-headline text-lg font-bold tracking-tight text-neutral-900 dark:text-on-surface sm:text-xl"
              >
                How it works, step by step
              </h2>
              <ol className="mt-4 list-decimal space-y-4 pl-5 font-body text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base">
                <li>Click "Choose audio" and upload your recording.</li>
                <li>Click "Decode Morse from audio" to start analysis.</li>
                <li>The decoder analyzes tone and silence timing to extract dots and dashes.</li>
                <li>Edit the Morse output if needed.</li>
                <li>Use "Organize text with AI" to clean up longer messages and improve readability.</li>
                <li>Read the decoded plain text result.</li>
              </ol>
            </section>

            <section
              className="mt-8 rounded-2xl border border-slate-200/80 bg-white/80 p-5 dark:border-outline-variant/25 dark:bg-surface-container/40 sm:p-6"
              aria-labelledby="audio-morse-tips"
            >
              <h2
                id="audio-morse-tips"
                className="font-headline text-lg font-bold tracking-tight text-neutral-900 dark:text-on-surface sm:text-xl"
              >
                Tips for best results
              </h2>
              <ul className="mt-4 list-disc space-y-3 pl-5 font-body text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base">
                <li>Recording should have consistent tone frequency; 500-1000 Hz is often ideal.</li>
                <li>Avoid background noise, speech, and music where possible.</li>
                <li>Shorter clips under two minutes usually decode more accurately.</li>
                <li>If output looks wrong, manually adjust dots and dashes before final conversion.</li>
                <li>
                  Cross-check with the{" "}
                  <Link href="/" className="font-semibold text-emerald-600 underline underline-offset-2 dark:text-primary-container">
                    main translator
                  </Link>{" "}
                  or the{" "}
                  <Link
                    href="/morse-code-picture-translator"
                    className="font-semibold text-emerald-600 underline underline-offset-2 dark:text-primary-container"
                  >
                    picture translator
                  </Link>
                  .
                </li>
              </ul>
            </section>

            <section
              className="mt-8 rounded-2xl border border-slate-200/80 bg-white/80 p-5 dark:border-outline-variant/25 dark:bg-surface-container/40 sm:p-6"
              aria-labelledby="audio-morse-faq"
            >
              <h2
                id="audio-morse-faq"
                className="font-headline text-lg font-bold tracking-tight text-neutral-900 dark:text-on-surface sm:text-xl"
              >
                Frequently asked questions
              </h2>
              <div className="mt-5 space-y-5 font-body text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base">
                <div>
                  <h3 className="font-semibold text-neutral-800 dark:text-slate-200">What audio formats does this decoder support?</h3>
                  <p className="mt-1">WAV, MP3, OGG, M4A, and most common audio formats are supported. Clean single-tone recordings work best.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-800 dark:text-slate-200">Why is my decoded output gibberish?</h3>
                  <p className="mt-1">Noise, uneven timing, and clipping can distort Morse timing. Trim the recording and correct Morse manually.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-800 dark:text-slate-200">Can I decode Morse code from a YouTube video?</h3>
                  <p className="mt-1">Yes. Extract audio from the video, save as WAV or MP3, then upload that file for decoding.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-800 dark:text-slate-200">What does "Organize text with AI" do?</h3>
                  <p className="mt-1">It restructures decoded output into cleaner text, especially useful for long or poorly spaced transmissions.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-800 dark:text-slate-200">What is the maximum audio file size?</h3>
                  <p className="mt-1">Use trimmed files for faster processing. Smaller uploads focused on Morse-only content are more reliable.</p>
                </div>
              </div>
            </section>

            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEB_APP_SCHEMA) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(HOW_TO_SCHEMA) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
          </div>
        </main>
      </div>

      <footer className="mt-auto border-t border-slate-200/80 py-6 text-center dark:border-white/10">
        <p className="font-label text-[10px] text-slate-500 dark:text-slate-600">© 2026 {SITE_NAME}</p>
      </footer>
    </div>
  );
}
