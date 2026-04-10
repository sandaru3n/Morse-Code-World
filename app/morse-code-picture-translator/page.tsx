import type { Metadata } from "next";
import PictureMorseTranslator from "@/components/PictureMorseTranslator";
import { SiteTopBar } from "@/components/SiteTopBar";
import { SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Morse Code Picture Translator — Decode Morse from Photos Online",
  description:
    "Morse code picture translator: upload a photo of dots and dashes, run on-device OCR, and convert Morse code to text. Free, fast, and editable for accurate decoding.",
  alternates: {
    canonical: "/morse-code-picture-translator"
  },
  keywords: [
    "morse code picture translator",
    "morse code from image",
    "ocr morse code",
    "decode morse from photo",
    "morse code translator",
    SITE_NAME
  ],
  openGraph: {
    type: "website",
    url: "/morse-code-picture-translator",
    title: "Morse Code Picture Translator — Decode Morse from Photos Online",
    description:
      "Morse code picture translator: upload an image, extract Morse with OCR in your browser, decode to English."
  }
};

export default function MorseCodePictureTranslatorPage() {
  return (
    <div className="relative flex min-h-screen flex-col bg-neutral-100 text-neutral-900 selection:bg-primary-container selection:text-on-primary-container dark:bg-surface-container-lowest dark:text-on-surface">
      <SiteTopBar />

      <div className="flex flex-1 pt-[4.5rem]">
        <main className="flex-1 overflow-y-auto p-3 sm:p-5 lg:p-8">
          <div className="mx-auto max-w-3xl">
            <p className="font-label text-[10px] uppercase tracking-[0.2em] text-emerald-600 dark:text-primary-container">
              Morse code picture translator
            </p>
            <h1 className="mt-2 font-headline text-2xl font-bold tracking-tight text-neutral-900 dark:text-on-surface sm:text-3xl md:text-4xl">
              Morse Code Picture Translator
            </h1>
            <p className="mt-4 font-body text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base">
              Upload a clear photo or screenshot of{" "}
              <strong className="text-neutral-800 dark:text-slate-200">International Morse</strong> (dots and dashes). Our morse code
              picture translator reads the image in your browser, turns it into editable Morse, then decodes it to plain text—like the
              main translator, but starting from a picture.
            </p>

            <div className="mt-8">
              <PictureMorseTranslator />
            </div>
          </div>
        </main>
      </div>

      <footer className="mt-auto border-t border-slate-200/80 py-6 text-center dark:border-white/10">
        <p className="font-label text-[10px] text-slate-500 dark:text-slate-600">© 2026 {SITE_NAME}</p>
      </footer>
    </div>
  );
}
