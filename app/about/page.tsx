import type { Metadata } from "next";
import Link from "next/link";
import { SiteTopBar } from "@/components/SiteTopBar";
import { SITE_NAME, absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/about" },
  title: "About Morse Code World — Free Online Morse Code Translator",
  description:
    "Morse Code World is a free online tool for translating, decoding, and learning International Morse Code. Built and maintained by an independent developer based in Sri Lanka.",
  keywords: [
    "about morse code world",
    "morse code translator",
    "morse code decoder",
    "International Morse Code"
  ],
  openGraph: {
    type: "website",
    url: "/about",
    title: "About Morse Code World",
    description:
      "Morse Code World is a free online tool for translating, decoding, and learning International Morse Code. Built and maintained by an independent developer based in Sri Lanka."
  },
  other: {
    "Content-Language": "en"
  }
};

const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Morse Code World", item: "https://morsecodeworld.org/" },
    { "@type": "ListItem", position: 2, name: "About", item: "https://morsecodeworld.org/about" }
  ]
};

const ABOUT_PAGE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Morse Code World",
  url: absoluteUrl("/about"),
  description:
    "Morse Code World is a free online tool for translating, decoding, and learning International Morse Code. Built and maintained by an independent developer based in Sri Lanka.",
  mainEntity: { "@id": `${absoluteUrl("/")}#organization` },
    publisher: {
      "@type": "Organization",
      "@id": `${absoluteUrl("/")}#organization`,
      name: "Morse Code World",
      url: absoluteUrl("/"),
      address: {
        "@type": "PostalAddress",
        streetAddress: "13/3A, Gamunu Mawatha, Keselwaththa",
        addressLocality: "Panadura",
        addressCountry: "LK"
      }
    },
  inLanguage: "en",
  isAccessibleForFree: true
};

export default function AboutPage() {
  return (
    <div className="relative flex min-h-screen flex-col bg-neutral-100 text-neutral-900 selection:bg-primary-container selection:text-on-primary-container dark:bg-surface-container-lowest dark:text-on-surface">
      <SiteTopBar />

      <div className="flex flex-1 pt-[4.5rem]">
        <main className="flex-1 overflow-y-auto p-3 sm:p-5 lg:p-8">
          <div className="mx-auto max-w-3xl md:py-4">

            {/* ── Page heading ── */}
            <h1 className="font-headline text-2xl font-bold tracking-tight text-neutral-900 dark:text-on-surface sm:text-3xl">
              About Morse Code World
            </h1>
            <p className="mt-4 font-body text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base sm:leading-7">
              Morse Code World is a free, ad-supported web application for learning and practising{" "}
              <strong className="text-neutral-800 dark:text-slate-200">International Morse Code</strong> — the
              standard used in amateur radio, aviation, and maritime communication today. The tool lets you
              encode text, decode Morse signals, hear realistic audio timing, and adjust speed and tone, all
              without creating an account or installing software. It works on phones and desktops so you can
              practise anywhere.
            </p>

            {/* ── What the site covers ── */}
            <h2 className="mt-10 font-headline text-lg font-bold text-neutral-900 dark:text-on-surface sm:text-xl">
              What We Cover
            </h2>
            <p className="mt-3 font-body text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base sm:leading-7">
              All content focuses on <strong className="text-neutral-800 dark:text-slate-200">ITU International Morse Code</strong>.
              This differs from historical American Morse (railroad and landline telegraph) in a number of characters and
              timing rules. Where the distinction matters, we label it explicitly. If your goal is railroad-era transcription,
              you will need a specialist reference; this tool follows the international mapping studied by radio licence
              candidates worldwide.
            </p>
            <p className="mt-4 font-body text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base sm:leading-7">
              Beyond the main translator the site includes an <strong className="text-neutral-800 dark:text-slate-200">audio
              Morse decoder</strong> that analyses recordings, a <strong className="text-neutral-800 dark:text-slate-200">picture
              Morse translator</strong> that reads images, and a growing{" "}
              <Link href="/blog" className="text-emerald-600 hover:underline dark:text-primary-container">
                learning blog
              </Link>{" "}
              covering Morse history, technique, and usage.
            </p>

            {/* ── Site owner / operator ── */}
            <h2 className="mt-10 font-headline text-lg font-bold text-neutral-900 dark:text-on-surface sm:text-xl">
              Who Runs This Site
            </h2>
            <p className="mt-3 font-body text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base sm:leading-7">
              Morse Code World is an independent project built and maintained by a single developer based in{" "}
              <strong className="text-neutral-800 dark:text-slate-200">Sri Lanka</strong>. The site is operated
              under the brand name <strong className="text-neutral-800 dark:text-slate-200">Morse Code World</strong>{" "}
              and the domain <span className="font-mono text-xs">morsecodeworld.org</span>. There is no large
              organisation behind it — content decisions, code, and editorial choices are all made by the
              same individual who built the tool.
            </p>
            <address className="mt-5 not-italic rounded-2xl border border-slate-200/80 bg-white p-5 font-body text-sm leading-relaxed text-slate-700 shadow-sm dark:border-white/10 dark:bg-surface-container dark:text-slate-300 sm:p-6 sm:text-base">
              <div className="font-headline font-bold text-neutral-900 dark:text-on-surface">Morse Code World</div>
              <div className="mt-2">13/3A, Gamunu Mawatha</div>
              <div>Keselwaththa, Panadura</div>
              <div className="mt-1">Sri Lanka</div>
            </address>

            {/* ── Advertising ── */}
            <h2 className="mt-10 font-headline text-lg font-bold text-neutral-900 dark:text-on-surface sm:text-xl">
              Advertising &amp; Monetisation
            </h2>
            <p className="mt-3 font-body text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base sm:leading-7">
              This site displays advertisements served by{" "}
              <strong className="text-neutral-800 dark:text-slate-200">Google AdSense</strong> to cover hosting
              and development costs. Ads are contextually matched to the page content and are served according
              to Google&apos;s standard publisher policies. No personal data beyond what Google&apos;s own
              consent mechanism collects is gathered for advertising purposes.
            </p>
            <p className="mt-4 font-body text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base sm:leading-7">
              Affiliate links or sponsored posts, if ever present, will be labelled clearly. There are currently
              none on this site.
            </p>

            {/* ── Content policy ── */}
            <h2 className="mt-10 font-headline text-lg font-bold text-neutral-900 dark:text-on-surface sm:text-xl">
              Content &amp; Editorial Policy
            </h2>
            <p className="mt-3 font-body text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base sm:leading-7">
              All translations are generated algorithmically from the ITU Morse code table. Blog articles are
              written by the site owner and edited for clarity before publication. No AI-generated article text
              is published without human review and significant editing. Technical accuracy is checked against
              publicly available ITU and ARRL references.
            </p>

            {/* ── Contact ── */}
            <h2 className="mt-10 font-headline text-lg font-bold text-neutral-900 dark:text-on-surface sm:text-xl">
              Contact
            </h2>
            <p className="mt-3 font-body text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base sm:leading-7">
              For questions about the tool, accessibility issues, content corrections, or advertising enquiries,
              please use the contact form:
            </p>
            <div className="mt-5">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary-container px-6 py-2.5 font-headline text-sm font-bold text-on-primary-container shadow-neon-primary transition-opacity hover:opacity-90 dark:text-on-primary-container"
              >
                Go to Contact Page →
              </Link>
            </div>

            {/* ── Footer nav ── */}
            <p className="mt-12 font-label text-xs uppercase tracking-widest text-slate-500 dark:text-slate-500">
              <Link href="/" className="text-emerald-600 hover:underline dark:text-primary-container">
                ← Return to translator
              </Link>
            </p>

          </div>
        </main>
      </div>

      <footer className="mt-auto border-t border-slate-200/80 py-6 text-center dark:border-white/10">
        <p className="font-label text-[10px] text-slate-500 dark:text-slate-600">© 2026 {SITE_NAME}</p>
      </footer>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ABOUT_PAGE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />
    </div>
  );
}
