import type { Metadata } from "next";
import Link from "next/link";
import PictureMorseTranslator from "@/components/PictureMorseTranslator";
import { SiteTopBar } from "@/components/SiteTopBar";
import { SITE_NAME } from "@/lib/site";

const SEO_KEYWORDS = [
  "morse code picture translator",
  "image morse code translator",
  "morse code image translator",
  "morse code translator image",
  "morse code from image",
  "decode morse from photo",
  "morse code translator",
  SITE_NAME
] as const;

const PAGE_TITLE = "Morse Code Picture Translator - Decode Morse Code from Images Online";

const PAGE_DESCRIPTION =
  "Free morse code picture translator: upload a photo of International Morse (dots and dashes). AI reads your image; edit Morse and decode to plain text online. Try it now!";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: "/morse-code-picture-translator"
  },
  keywords: [...SEO_KEYWORDS],
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    url: "/morse-code-picture-translator",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION
  },
  twitter: {
    card: "summary",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION
  }
};

export default function MorseCodePictureTranslatorPage() {
  return (
    <div className="relative flex min-h-screen flex-col bg-neutral-100 text-neutral-900 selection:bg-primary-container selection:text-on-primary-container dark:bg-surface-container-lowest dark:text-on-surface">
      <SiteTopBar />

      <div className="flex flex-1 pt-[4.5rem]">
        <main className="flex-1 overflow-y-auto p-3 sm:p-5 lg:p-8">
          <div className="mx-auto max-w-3xl">
            <h1 className="font-headline text-2xl font-bold tracking-tight text-neutral-900 dark:text-on-surface sm:text-3xl md:text-4xl">
              Morse Code Picture Translator
            </h1>

            <div className="mt-6">
              <PictureMorseTranslator />
            </div>

            <section
              className="mt-12 rounded-2xl border border-slate-200/80 bg-white/80 p-5 dark:border-outline-variant/25 dark:bg-surface-container/40 sm:p-6"
              aria-labelledby="picture-morse-how-to"
            >
              <h2
                id="picture-morse-how-to"
                className="font-headline text-lg font-bold tracking-tight text-neutral-900 dark:text-on-surface sm:text-xl"
              >
                How to use
              </h2>
              <div className="mt-4 space-y-4 font-body text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base">
                <p>
                  This <strong className="text-neutral-800 dark:text-slate-200">morse code picture translator</strong> needs a clear photo or
                  screenshot showing <strong className="text-neutral-800 dark:text-slate-200">dots and dashes</strong> (and spaces or slashes
                  between letters or words). The image is sent to our server and read with{" "}
                  <strong className="text-neutral-800 dark:text-slate-200">Google Gemini</strong> (multimodal AI). Edit the Morse line below the
                  upload area if needed, then compare with the main{" "}
                  <Link href="/" className="font-semibold text-emerald-600 underline underline-offset-2 dark:text-primary-container">
                    translator
                  </Link>
                  .
                </p>
                <p className="border-t border-slate-200/80 pt-4 text-xs leading-relaxed text-slate-500 dark:border-outline-variant/30 dark:text-slate-500 sm:text-sm">
                  <span className="font-label font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-400">
                    Related search terms
                  </span>
                  : morse code picture translator; image morse code translator; morse code image translator; morse code translator image.
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
