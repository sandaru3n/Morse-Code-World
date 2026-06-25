import type { Metadata } from "next";
import Link from "next/link";
import { SiteTopBar } from "@/components/SiteTopBar";
import { SITE_NAME, SITE_URL, absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/privacy" },
  title: "Privacy Policy — Morse Code Translator",
  description:
    "Privacy Policy for morsecodeworld.org. Learn how we handle data, cookies, Google AdSense advertising, and third-party services.",
  keywords: ["privacy policy", "morsecodeworld privacy", "google adsense cookies"],
  openGraph: {
    type: "website",
    url: "/privacy",
    title: "Privacy Policy — Morse Code Translator",
    description: "Privacy Policy for morsecodeworld.org."
  },
  other: { "Content-Language": "en" }
};

const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Morse Code Translator", item: absoluteUrl("/") },
    { "@type": "ListItem", position: 2, name: "Privacy Policy", item: absoluteUrl("/privacy") }
  ]
};

const LAST_UPDATED = "June 17, 2026";

const externalLinkClass =
  "text-emerald-600 underline underline-offset-2 hover:text-emerald-500 dark:text-primary-container";

export default function PrivacyPage() {
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
              Privacy Policy
            </h1>
            <p className="mt-4 font-body text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base sm:leading-7">
              This Privacy Policy describes how <strong className="text-neutral-800 dark:text-slate-200">{SITE_NAME}</strong> ("{SITE_URL}") collects,
              uses, and shares information when you visit or use our Morse code translator tools. This site uses{" "}
              <strong className="text-neutral-800 dark:text-slate-200">Google AdSense</strong> (publisher ID{" "}
              <span className="font-mono text-xs">ca-pub-7227917768990151</span>) to show third-party ads. When ads
              are served, Google and its partners may use cookies and similar technologies on your device, as described
              in sections 2 and 3 below.
            </p>

            <Section title="1. Information We Collect">
              <p>
                We do <strong className="text-neutral-800 dark:text-slate-200">not</strong> require you to create an account, log in,
                or provide any personal information to use our tools. All translation, encoding, and audio playback happen directly
                in your browser — no text you type is sent to our servers.
              </p>
              <p className="mt-3">
                We may automatically collect limited technical data through our hosting provider (Vercel) and analytics services,
                including:
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base">
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Referring URL and pages visited</li>
                <li>Approximate geographic location (country/region, derived from IP)</li>
                <li>Date and time of your visit</li>
              </ul>
              <p className="mt-3">
                This information is used only in aggregate to understand how the site is used and to improve performance.
              </p>
            </Section>

            <Section title="2. Cookies and Tracking">
              <p>
                When you visit pages that display advertisements, <strong className="text-neutral-800 dark:text-slate-200">Google AdSense</strong> and
                its advertising partners may place <strong className="text-neutral-800 dark:text-slate-200">advertising cookies</strong> and{" "}
                <strong className="text-neutral-800 dark:text-slate-200">cross-site tracking cookies</strong> on your browser or device. These
                technologies are used to serve ads, show relevant ads based on your browsing history, limit how often you see the same ad, and
                measure ad performance. We do not operate our own ad network; ad-related cookies are set by Google and its partners. See section 3
                for full details and opt-out options.
              </p>
              <p className="mt-3">
                We use <strong className="text-neutral-800 dark:text-slate-200">Vercel Analytics</strong> for
                privacy-friendly, aggregated site measurements. These analytics do not build individual user profiles
                for our own purposes.
              </p>
              <p className="mt-3">
                Your browser may also store certain preferences (such as dark/light mode) in local storage. That data
                stays on your device and is not sent to our servers.
              </p>
            </Section>

            <Section title="3. Google AdSense and Advertising">
              <p>
                This site uses <strong className="text-neutral-800 dark:text-slate-200">Google AdSense</strong> to
                display third-party advertisements. Google, as a third-party vendor, uses cookies (including the
                DoubleClick cookie) to serve ads based on your prior visits to this site and other websites.
              </p>
              <p className="mt-3">
                Google&apos;s use of advertising cookies enables it and its partners to serve ads based on visits to
                this site and/or other sites on the Internet. These cookies help serve ads, limit how often you see
                the same ad, and measure ad performance.
              </p>
              <p className="mt-3">
                You can learn how Google collects and uses data in advertising at{" "}
                <a
                  href="https://policies.google.com/technologies/ads"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={externalLinkClass}
                >
                  Google&apos;s Advertising Privacy Policy
                </a>
                . For broader information about how Google uses data from sites that use its services, see{" "}
                <a
                  href="https://policies.google.com/technologies/partner-sites"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={externalLinkClass}
                >
                  How Google uses information from sites or apps that use our services
                </a>
                .
              </p>
              <p className="mt-3">
                You may opt out of personalised advertising by visiting{" "}
                <a
                  href="https://adssettings.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={externalLinkClass}
                >
                  Google Ads Settings
                </a>
                . Alternatively, you can opt out of third-party vendor use of cookies for personalised advertising by
                visiting{" "}
                <a
                  href="https://www.aboutads.info/choices/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={externalLinkClass}
                >
                  www.aboutads.info
                </a>
                .
              </p>
            </Section>

            <Section title="4. Third-Party Services">
              <p>We use the following third-party services, each with their own privacy practices:</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base">
                <li>
                  <strong className="text-neutral-800 dark:text-slate-200">Google AdSense</strong> — advertising.
                  See{" "}
                  <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" className={externalLinkClass}>
                    Google&apos;s Advertising Privacy Policy
                  </a>
                  .
                </li>
                <li>
                  <strong className="text-neutral-800 dark:text-slate-200">Vercel</strong> — hosting and edge network.
                  See <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className={externalLinkClass}>Vercel Privacy Policy</a>.
                </li>
                <li>
                  <strong className="text-neutral-800 dark:text-slate-200">Google Fonts</strong> — web fonts served from our domain.
                  See <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className={externalLinkClass}>Google Privacy Policy</a>.
                </li>
                <li>
                  <strong className="text-neutral-800 dark:text-slate-200">Google Gemini API</strong> — used only for the
                  Morse picture translator feature (image → Morse text). Images you upload are sent to Google&apos;s API
                  solely to extract Morse code and are not stored by us.
                  See <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className={externalLinkClass}>Google Privacy Policy</a>.
                </li>
              </ul>
            </Section>

            <Section title="5. Children's Privacy">
              <p>
                Our services are not directed to children under the age of 13. We do not knowingly collect personal information
                from children. If you believe a child has provided us with personal information, please contact us and we will
                delete it promptly.
              </p>
            </Section>

            <Section title="6. Data Retention">
              <p>
                We do not store the text you type in our translator tools on our servers. Server access logs maintained
                by Vercel are subject to their own data retention policy. Data collected through Google AdSense and other
                third-party services is retained according to each provider&apos;s policies.
              </p>
            </Section>

            <Section title="7. Your Rights">
              <p>
                Depending on your jurisdiction, you may have rights including access to, correction of, or deletion of personal
                data. We do not directly collect account or contact information when you use our tools, but third-party providers
                such as <strong className="text-neutral-800 dark:text-slate-200">Google AdSense</strong> may process data for
                advertising purposes. For questions about that processing, refer to{" "}
                <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" className={externalLinkClass}>
                  Google&apos;s Advertising Privacy Policy
                </a>{" "}
                and the other third-party policies linked in section 4.
              </p>
            </Section>

            <Section title="8. Changes to This Policy">
              <p>
                We may update this Privacy Policy from time to time. When we do, we will revise the "Last updated" date at
                the top of this page. Continued use of the site after changes are posted constitutes your acceptance of the
                revised policy.
              </p>
            </Section>

            <Section title="9. Contact">
              <p>
                If you have questions about this Privacy Policy, please{" "}
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
              <Link href="/terms" className="text-emerald-600 hover:underline dark:text-primary-container">
                Terms of Service
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
