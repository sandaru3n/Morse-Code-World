import type { Metadata } from "next";
import Link from "next/link";
import { SiteTopBar } from "@/components/SiteTopBar";
import { ContactForm } from "@/components/ContactForm";
import { SITE_NAME, absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/contact" },
  title: "Contact — Morse Code Translator",
  description:
    "Get in touch with the Morse Code World team. Send us a message about the translator, accessibility, feedback, or any other question.",
  openGraph: {
    type: "website",
    url: "/contact",
    title: "Contact — Morse Code Translator",
    description: "Get in touch with the Morse Code World team."
  },
  other: { "Content-Language": "en" }
};

const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Morse Code Translator", item: absoluteUrl("/") },
    { "@type": "ListItem", position: 2, name: "Contact", item: absoluteUrl("/contact") }
  ]
};

const CONTACT_PAGE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Morse Code World",
  url: absoluteUrl("/contact"),
  description: "Contact form for morsecodeworld.org",
  mainEntity: { "@id": `${absoluteUrl("/")}#organization` }
};

export default function ContactPage() {
  return (
    <div className="relative flex min-h-screen flex-col bg-neutral-100 text-neutral-900 selection:bg-primary-container selection:text-on-primary-container dark:bg-surface-container-lowest dark:text-on-surface">
      <SiteTopBar />

      <div className="flex flex-1 pt-[4.5rem]">
        <main className="flex-1 overflow-y-auto p-3 sm:p-5 lg:p-8">
          <div className="mx-auto max-w-2xl md:py-4">
            <h1 className="font-headline text-2xl font-bold tracking-tight text-neutral-900 dark:text-on-surface sm:text-3xl">
              Contact Us
            </h1>
            <p className="mt-3 font-body text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base sm:leading-7">
              Have a question about the translator, spotted a bug, or want to share feedback? Fill in the form
              below and we'll get back to you as soon as possible.
            </p>

            <ContactForm />

            <div className="mt-10 rounded-2xl border border-slate-200/80 bg-white p-5 dark:border-white/10 dark:bg-surface-container sm:p-6">
              <h2 className="font-headline text-base font-bold text-neutral-900 dark:text-on-surface">
                About this site
              </h2>
              <p className="mt-2 font-body text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                Morse Code World is an independent project built and maintained by a single developer based in{" "}
                <strong className="text-neutral-800 dark:text-slate-200">Sri Lanka</strong>. The contact form
                above is the primary way to reach us. We aim to respond within a few business days.
              </p>
              <address className="mt-4 not-italic rounded-xl border border-slate-100 bg-slate-50 px-4 py-3 font-body text-sm leading-relaxed text-slate-700 dark:border-white/5 dark:bg-surface-container-lowest dark:text-slate-300">
                <div className="font-semibold text-neutral-800 dark:text-slate-200">Morse Code World</div>
                <div className="mt-1">13/3A, Gamunu Mawatha</div>
                <div>Keselwaththa, Panadura</div>
                <div>Sri Lanka</div>
              </address>
              <p className="mt-2 font-body text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                For more background on the project and its editorial policies, see the{" "}
                <Link href="/about" className="text-emerald-600 hover:underline dark:text-primary-container">
                  About page
                </Link>
                .
              </p>
            </div>

            <p className="mt-8 font-label text-xs uppercase tracking-widest text-slate-500 dark:text-slate-500">
              <Link href="/" className="text-emerald-600 hover:underline dark:text-primary-container">
                ← Return to translator
              </Link>
              <span className="mx-3 opacity-40">|</span>
              <Link href="/privacy" className="text-emerald-600 hover:underline dark:text-primary-container">
                Privacy Policy
              </Link>
              <span className="mx-3 opacity-40">|</span>
              <Link href="/terms" className="text-emerald-600 hover:underline dark:text-primary-container">
                Terms
              </Link>
            </p>
          </div>
        </main>
      </div>

      <footer className="mt-auto border-t border-slate-200/80 py-6 text-center dark:border-white/10">
        <p className="font-label text-[10px] text-slate-500 dark:text-slate-600">© 2026 {SITE_NAME}</p>
      </footer>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(CONTACT_PAGE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />
    </div>
  );
}
