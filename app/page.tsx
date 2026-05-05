import type { Metadata } from "next";
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
    canonical: "/"
  },
  keywords: ["Morse Code Translator", "morse code translator", SITE_NAME],
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    url: "/",
    title: "Morse Code Translator",
    description: PAGE_DESCRIPTION
  },
  twitter: {
    card: "summary",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION
  }
};

export default function Page() {
  return (
    <>
      <TranslatorShell />
      <section className="mx-auto max-w-5xl px-4 pb-10 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-200/80 bg-white/80 p-5 dark:border-outline-variant/25 dark:bg-surface-container/40 sm:p-6">
          <h2 className="font-headline text-xl font-bold tracking-tight text-neutral-900 dark:text-on-surface sm:text-2xl">
            Frequently Asked Questions
          </h2>
          <div className="mt-4 space-y-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base">
            <div>
              <h3 className="font-semibold text-neutral-800 dark:text-slate-200">Is this Morse Code Translator free to use?</h3>
              <p>Yes. The tool is completely free and works in modern browsers without registration.</p>
            </div>
            <div>
              <h3 className="font-semibold text-neutral-800 dark:text-slate-200">Can I convert both Morse to text and text to Morse?</h3>
              <p>Yes. You can decode Morse into plain text and encode text into Morse from the same page.</p>
            </div>
            <div>
              <h3 className="font-semibold text-neutral-800 dark:text-slate-200">Do I need to install any extension or app?</h3>
              <p>No. Everything runs directly in your browser.</p>
            </div>
            <div>
              <h3 className="font-semibold text-neutral-800 dark:text-slate-200">Does it work on phones and tablets?</h3>
              <p>Yes. It supports mobile and desktop browsers including Chrome, Safari, Firefox, and Edge.</p>
            </div>
            <div>
              <h3 className="font-semibold text-neutral-800 dark:text-slate-200">What if my decoded output looks wrong?</h3>
              <p>Double-check the dot, dash, and spacing separators. Small spacing errors can change decoded letters.</p>
            </div>
          </div>
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEB_APP_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_SCHEMA) }} />
    </>
  );
}
