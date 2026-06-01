import type { Metadata } from "next";
import Link from "next/link";
import { SiteTopBar } from "@/components/SiteTopBar";
import { SITE_NAME, SITE_URL, absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/terms" },
  title: "Terms of Service — Morse Code Translator",
  description:
    "Terms of Service for morsecodeworld.org. Read the terms governing use of our free online Morse code translator tools.",
  openGraph: {
    type: "website",
    url: "/terms",
    title: "Terms of Service — Morse Code Translator",
    description: "Terms of Service for morsecodeworld.org."
  },
  other: { "Content-Language": "en" }
};

const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Morse Code Translator", item: absoluteUrl("/") },
    { "@type": "ListItem", position: 2, name: "Terms of Service", item: absoluteUrl("/terms") }
  ]
};

const LAST_UPDATED = "June 1, 2026";

export default function TermsPage() {
  return (
    <div className="relative flex min-h-screen flex-col bg-neutral-100 text-neutral-900 selection:bg-primary-container selection:text-on-primary-container dark:bg-surface-container-lowest dark:text-on-surface">
      <SiteTopBar />

      <div className="flex flex-1 pt-[4.5rem]">
        <main className="flex-1 overflow-y-auto p-3 sm:p-5 lg:p-8">
          <div className="mx-auto max-w-3xl md:py-4">
            <p className="mb-2 font-label text-[10px] uppercase tracking-widest text-slate-500 dark:text-slate-500">
              Last updated: {LAST_UPDATED}
            </p>
            <h1 className="font-headline text-2xl font-bold tracking-tight text-neutral-900 dark:text-on-surface sm:text-3xl">
              Terms of Service
            </h1>
            <p className="mt-4 font-body text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base sm:leading-7">
              Please read these Terms of Service carefully before using{" "}
              <strong className="text-neutral-800 dark:text-slate-200">{SITE_NAME}</strong> ("{SITE_URL}"). By
              accessing or using our tools, you agree to be bound by these terms.
            </p>

            <Section title="1. Acceptance of Terms">
              <p>
                By using morsecodeworld.org, you confirm that you are at least 13 years old and that you agree to these
                Terms of Service and our{" "}
                <Link href="/privacy" className="text-emerald-600 underline underline-offset-2 hover:text-emerald-500 dark:text-primary-container">
                  Privacy Policy
                </Link>
                . If you do not agree, please do not use this site.
              </p>
            </Section>

            <Section title="2. Description of Service">
              <p>
                Morse Code World provides free, browser-based tools for encoding and decoding International Morse code,
                including:
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base">
                <li>Text-to-Morse and Morse-to-text translator</li>
                <li>Audio Morse code decoder</li>
                <li>Morse code picture translator (AI-assisted)</li>
              </ul>
              <p className="mt-3">
                All core translation features run locally in your browser. No account is required. Services are provided
                "as is" and may be changed, suspended, or discontinued at any time without notice.
              </p>
            </Section>

            <Section title="3. Acceptable Use">
              <p>You agree to use this service only for lawful purposes. You must not:</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base">
                <li>Attempt to disrupt or overload the service or its infrastructure</li>
                <li>Scrape, crawl, or systematically extract content in a way that burdens our servers</li>
                <li>Use the service to transmit unlawful, harassing, or harmful content</li>
                <li>Attempt to reverse-engineer, copy, or resell the service as your own product</li>
                <li>Use automated tools to submit the contact form in bulk (spam)</li>
              </ul>
            </Section>

            <Section title="4. Intellectual Property">
              <p>
                All content on this site — including the design, code, text, and trade dress — is owned by or licensed
                to Morse Code Translator Media unless otherwise noted.
              </p>
              <p className="mt-3">
                The <strong className="text-neutral-800 dark:text-slate-200">output you generate</strong> (translated text,
                downloaded audio files, exported text) is yours. We claim no ownership over Morse code translations or
                audio files you produce using our tools.
              </p>
            </Section>

            <Section title="5. Third-Party Services and Links">
              <p>
                Our site may link to third-party websites. We are not responsible for the content or privacy practices
                of those sites. The Morse picture translator feature uses the Google Gemini API — your use of that
                feature is also subject to{" "}
                <a
                  href="https://policies.google.com/terms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-600 underline underline-offset-2 dark:text-primary-container"
                >
                  Google's Terms of Service
                </a>
                .
              </p>
            </Section>

            <Section title="6. Disclaimer of Warranties">
              <p>
                THE SERVICE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER
                EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
                PURPOSE, OR NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, ERROR-FREE, OR
                FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.
              </p>
            </Section>

            <Section title="7. Limitation of Liability">
              <p>
                TO THE FULLEST EXTENT PERMITTED BY LAW, MORSE CODE TRANSLATOR MEDIA SHALL NOT BE LIABLE FOR ANY
                INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM YOUR USE OF, OR
                INABILITY TO USE, THE SERVICE — EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
              </p>
              <p className="mt-3">
                OUR TOTAL LIABILITY TO YOU FOR ANY CLAIM ARISING FROM THESE TERMS OR YOUR USE OF THE SERVICE SHALL
                NOT EXCEED USD $10.
              </p>
            </Section>

            <Section title="8. Modifications to Terms">
              <p>
                We reserve the right to modify these Terms at any time. Changes are effective when posted. Continued
                use of the service after changes are posted constitutes your acceptance. We encourage you to review
                this page periodically.
              </p>
            </Section>

            <Section title="9. Governing Law">
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the Commonwealth of
                Pennsylvania, United States, without regard to its conflict of law provisions.
              </p>
            </Section>

            <Section title="10. Contact">
              <p>
                If you have questions about these Terms, please{" "}
                <Link href="/contact" className="text-emerald-600 underline underline-offset-2 hover:text-emerald-500 dark:text-primary-container">
                  contact us
                </Link>
                .
              </p>
            </Section>

            <p className="mt-10 font-label text-xs uppercase tracking-widest text-slate-500 dark:text-slate-500">
              <Link href="/" className="text-emerald-600 hover:underline dark:text-primary-container">
                ← Return to translator
              </Link>
              <span className="mx-3 opacity-40">|</span>
              <Link href="/privacy" className="text-emerald-600 hover:underline dark:text-primary-container">
                Privacy Policy
              </Link>
            </p>
          </div>
        </main>
      </div>

      <footer className="mt-auto border-t border-slate-200/80 py-6 text-center dark:border-white/10">
        <p className="font-label text-[10px] text-slate-500 dark:text-slate-600">© 2026 {SITE_NAME}</p>
      </footer>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-8">
      <h2 className="font-headline text-base font-bold text-neutral-900 dark:text-on-surface sm:text-lg">{title}</h2>
      <div className="mt-3 font-body text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base sm:leading-7">
        {children}
      </div>
    </section>
  );
}
