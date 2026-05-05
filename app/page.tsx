import type { Metadata } from "next";
import Link from "next/link";
import TranslatorShell from "@/components/TranslatorShell";
import { SITE_NAME } from "@/lib/site";

const PAGE_TITLE = "Morse Code Translator - Convert Morse Code to Text Online";

const PAGE_DESCRIPTION =
  "Easily translate Morse code to text with our online Morse code translator. Decode or encode messages quickly and accurately.";

const WEB_APP_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Morse Code Translator",
  url: "https://morsecodeworld.org/",
  applicationCategory: "UtilityApplication",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD"
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "297531"
  }
};


const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is this Morse Code Translator free to use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Morse Code Translator is completely free to use on desktop and mobile browsers, with no account required."
      }
    },
    {
      "@type": "Question",
      name: "Can I convert both Morse to text and text to Morse?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. You can decode Morse code into readable text and also encode plain text into Morse code using the same translator."
      }
    },
    {
      "@type": "Question",
      name: "Do I need to install any extension or app?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. The translator runs fully in your browser, so you can use it instantly without installing extensions or apps."
      }
    },
    {
      "@type": "Question",
      name: "Does the translator work on phones and tablets?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Morse Code Translator works on modern mobile browsers including Chrome, Safari, Firefox, and Edge."
      }
    },
    {
      "@type": "Question",
      name: "What should I do if my Morse output looks incorrect?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Check dot and dash spacing first. Small spacing mistakes can change decoded letters, so correcting separators usually fixes the result."
      }
    }
  ]
};

const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Morse Code Translator",
  url: "https://morsecodeworld.org/",
  logo: "https://morsecodeworld.org/favicon/android-chrome-512x512.png",
  image: "https://morsecodeworld.org/favicon/android-chrome-512x512.png",
  description:
    "Morse Code Translator helps you encode and decode Morse code quickly online, with free browser-based tools for text, audio, and image workflows.",
  email: "contact@morsecodeworld.org"
};

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      es: "/es",
      "x-default": "/"
    }
  },
  keywords: ["Morse Code Translator", "morse code translator", SITE_NAME],
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    url: "/",
    title: "Morse Code Translator",
    locale: "en_US",
    alternateLocale: ["es_ES"],
    description: PAGE_DESCRIPTION
  },
  twitter: {
    card: "summary",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION
  }
};

export default function Page() {
  const faqItems = [
    {
      q: "Is this Morse Code Translator free to use?",
      a: "Yes. The tool is completely free and works in modern browsers without registration."
    },
    {
      q: "Can I convert both Morse to text and text to Morse?",
      a: "Yes. You can decode Morse into plain text and encode text into Morse from the same page."
    },
    {
      q: "Do I need to install any extension or app?",
      a: "No. Everything runs directly in your browser."
    },
    {
      q: "Does it work on phones and tablets?",
      a: "Yes. It supports mobile and desktop browsers including Chrome, Safari, Firefox, and Edge."
    },
    {
      q: "What if my decoded output looks wrong?",
      a: "Double-check the dot, dash, and spacing separators. Small spacing errors can change decoded letters."
    }
  ] as const;

  return (
    <>
      <TranslatorShell
        locale="en"
        bottomContent={
          <section className="mx-auto mt-2 w-full max-w-5xl px-1 pb-2 sm:px-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-outline-variant/35 dark:bg-surface-container sm:p-6">
              <h2 className="font-headline text-xl font-bold tracking-tight text-neutral-900 dark:text-on-surface sm:text-2xl">
                Frequently Asked Questions
              </h2>
              <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 dark:border-emerald-900/50 dark:bg-emerald-950/30 dark:text-emerald-300">
                Espanol:
                <Link href="/es" hrefLang="es" className="underline underline-offset-2 hover:no-underline">
                  Traductor de codigo morse
                </Link>
              </div>
              <div className="mt-4 space-y-3">
                {faqItems.map((item) => (
                  <details
                    key={item.q}
                    className="group rounded-xl border border-slate-200 bg-slate-50/80 px-4 py-3 dark:border-outline-variant/25 dark:bg-surface-container-high/50"
                  >
                    <summary className="cursor-pointer list-none font-semibold text-neutral-900 marker:content-none dark:text-on-surface">
                      {item.q}
                    </summary>
                    <p className="mt-2 text-sm leading-relaxed text-slate-700 dark:text-slate-300 sm:text-base">{item.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>
        }
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEB_APP_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_SCHEMA) }} />
    </>
  );
}
