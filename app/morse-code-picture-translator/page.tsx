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
  "Free Morse code picture translator. Upload an image with dots and dashes, extract Morse with AI, and decode to plain text online.";

const WEB_APP_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Morse Code Picture Translator",
  url: "https://morsecodeworld.org/morse-code-picture-translator",
  applicationCategory: "UtilityApplication",
  operatingSystem: "Web",
  description:
    "Upload an image containing morse code dots and dashes. AI extracts and decodes the morse code to plain text instantly.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD"
  }
};

const HOW_TO_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to decode morse code from an image",
  step: [
    {
      "@type": "HowToStep",
      text: "Take a clear photo or screenshot of the morse code."
    },
    {
      "@type": "HowToStep",
      text: "Click 'Choose image' and upload your file."
    },
    {
      "@type": "HowToStep",
      text: "Click 'Read Morse from image' to extract the dots and dashes."
    },
    {
      "@type": "HowToStep",
      text: "Edit the morse text if needed, then read the decoded result."
    }
  ]
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can I upload a handwritten morse code image?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, as long as the dots and dashes are clearly visible and well-spaced, the AI can usually read handwritten morse code from photos."
      }
    },
    {
      "@type": "Question",
      name: "What image formats are supported?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "JPG, PNG, WEBP and most common image formats are supported. High contrast images give the best results."
      }
    },
    {
      "@type": "Question",
      name: "Is this morse code picture translator free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, it is completely free to use with no registration required."
      }
    },
    {
      "@type": "Question",
      name: "Why is my image not being read correctly?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Low contrast, blurry captures, uneven spacing, or overlapping marks can confuse recognition. Use a sharp image with strong contrast and enough spacing between symbols."
      }
    },
    {
      "@type": "Question",
      name: "What AI reads the image?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "This tool uses Google Gemini to detect dot-and-dash patterns from the uploaded image and convert them into editable Morse code text."
      }
    }
  ]
};

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
              Morse Code Picture Translator - Decode Morse Code from Any Image
            </h1>

            <div className="mt-6">
              <PictureMorseTranslator />
            </div>

            <section
              className="mt-12 rounded-2xl border border-slate-200/80 bg-white/80 p-5 dark:border-outline-variant/25 dark:bg-surface-container/40 sm:p-6"
              aria-labelledby="picture-morse-about"
            >
              <h2
                id="picture-morse-about"
                className="font-headline text-lg font-bold tracking-tight text-neutral-900 dark:text-on-surface sm:text-xl"
              >
                What is a Morse code picture translator?
              </h2>
              <div className="mt-4 space-y-4 font-body text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base">
                <p>
                  A <strong className="text-neutral-800 dark:text-slate-200">morse code picture translator</strong> helps you decode Morse from
                  screenshots, scanned documents, notebooks, puzzle pages, or photos of radio practice sheets. Instead of typing long strings of
                  dots and dashes by hand, you can upload an image and let the tool extract symbols for you automatically.
                </p>
                <p>
                  This page uses <strong className="text-neutral-800 dark:text-slate-200">Google Gemini</strong> to detect Morse symbols from the
                  uploaded image, convert them into editable Morse text, then pass that Morse into the decoder so you can read plain language
                  output in seconds. It is useful for ham radio students, teachers creating classroom exercises, historians working with archival
                  images, and puzzle solvers who need a fast way to interpret visual Morse.
                </p>
                <p>
                  You can upload clean screenshots or camera photos in common formats and refine the extracted Morse before decoding. If you also
                  work with typed Morse, use the main{" "}
                  <Link href="/" className="font-semibold text-emerald-600 underline underline-offset-2 dark:text-primary-container">
                    Morse code translator
                  </Link>
                  . For listening-based practice, try the{" "}
                  <Link
                    href="/audio-morse-code-decoder"
                    className="font-semibold text-emerald-600 underline underline-offset-2 dark:text-primary-container"
                  >
                    audio Morse code decoder
                  </Link>
                  .
                </p>
              </div>
            </section>

            <section
              className="mt-8 rounded-2xl border border-slate-200/80 bg-white/80 p-5 dark:border-outline-variant/25 dark:bg-surface-container/40 sm:p-6"
              aria-labelledby="picture-morse-steps"
            >
              <h2
                id="picture-morse-steps"
                className="font-headline text-lg font-bold tracking-tight text-neutral-900 dark:text-on-surface sm:text-xl"
              >
                How to decode Morse code from an image
              </h2>
              <ol className="mt-4 list-decimal space-y-4 pl-5 font-body text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base">
                <li>
                  Take a clear screenshot or photo of the Morse code. Keep symbols centered in the image and avoid shadows or glare so each dot
                  and dash is easy to separate.
                </li>
                <li>
                  Upload your image using the tool above. Supported formats include JPG, PNG, and WEBP, and you will usually get best results from
                  sharp high-contrast captures.
                </li>
                <li>
                  Run extraction to let AI read the visual pattern and convert it into Morse text. The output appears in editable form so you can
                  fix any spacing or symbol issues immediately.
                </li>
                <li>
                  Decode the corrected Morse to plain text and validate the message. If needed, compare the result with the{" "}
                  <Link href="/" className="font-semibold text-emerald-600 underline underline-offset-2 dark:text-primary-container">
                    homepage translator
                  </Link>{" "}
                  or continue with signal practice in the{" "}
                  <Link
                    href="/audio-morse-code-decoder"
                    className="font-semibold text-emerald-600 underline underline-offset-2 dark:text-primary-container"
                  >
                    audio decoder
                  </Link>
                  .
                </li>
              </ol>
            </section>

            <section
              className="mt-8 rounded-2xl border border-slate-200/80 bg-white/80 p-5 dark:border-outline-variant/25 dark:bg-surface-container/40 sm:p-6"
              aria-labelledby="picture-morse-image-quality"
            >
              <h2
                id="picture-morse-image-quality"
                className="font-headline text-lg font-bold tracking-tight text-neutral-900 dark:text-on-surface sm:text-xl"
              >
                What images work best?
              </h2>
              <div className="mt-4 space-y-4 font-body text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base">
                <p>
                  The best uploads have strong contrast, clear symbol spacing, and consistent orientation. Horizontal lines of dots and dashes are
                  easier to parse than angled text, and cropped images without background clutter reduce recognition errors. Screenshots usually
                  outperform photos when available because they avoid lens blur and lighting artifacts.
                </p>
                <p>
                  If your file is not decoding well, increase contrast, remove shadows, and ensure each dash is visibly longer than a dot. PNG and
                  high-quality JPG files are ideal, while compressed or low-resolution images may merge symbols together.
                </p>
              </div>
            </section>

            <section
              className="mt-8 rounded-2xl border border-slate-200/80 bg-white/80 p-5 dark:border-outline-variant/25 dark:bg-surface-container/40 sm:p-6"
              aria-labelledby="picture-morse-faq"
            >
              <h2
                id="picture-morse-faq"
                className="font-headline text-lg font-bold tracking-tight text-neutral-900 dark:text-on-surface sm:text-xl"
              >
                Frequently asked questions
              </h2>
              <div className="mt-5 space-y-5 font-body text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base">
                <div>
                  <h3 className="font-semibold text-neutral-800 dark:text-slate-200">Can I upload a handwritten Morse code image?</h3>
                  <p className="mt-1">
                    Yes. Handwritten Morse can be decoded if dots and dashes are clearly separated and written with consistent spacing. For better
                    results, capture the page in bright light and crop tightly around the Morse line.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-800 dark:text-slate-200">What's the difference between dots and dashes in an image?</h3>
                  <p className="mt-1">
                    A dot is the short mark and a dash is the long mark. If symbol lengths look too similar because of blur or low contrast, the AI
                    may confuse characters. Increasing image sharpness and contrast usually fixes this.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-800 dark:text-slate-200">Why is my image not being read correctly?</h3>
                  <p className="mt-1">
                    The most common causes are blur, glare, compressed screenshots, uneven spacing, or background noise. Re-upload a cleaner image
                    with high contrast and horizontal alignment, then quickly edit extracted Morse before final decoding.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-800 dark:text-slate-200">Is this Morse code picture translator free to use?</h3>
                  <p className="mt-1">
                    Yes, the tool is free and does not require registration. You can upload and decode images as needed for study, puzzles, and
                    everyday Morse practice.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-800 dark:text-slate-200">What AI reads the image?</h3>
                  <p className="mt-1">
                    This feature uses Google Gemini to interpret the visual dot-and-dash pattern, produce editable Morse output, and help you decode
                    the message more reliably than manual transcription alone.
                  </p>
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
