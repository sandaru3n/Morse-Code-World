import { AdsenseHorizontalBanner } from "@/components/AdsenseHorizontalBanner";
import { VocalRemover } from "@/components/VocalRemover";
import { SiteTopBar } from "@/components/SiteTopBar";
import type { HomeLocale } from "@/lib/i18n/home";
import { getVocalRemoverPageCopy, getVocalRemoverPageLinks } from "@/lib/i18n/toolPages/vocalRemover";
import { SITE_NAME, absoluteUrl } from "@/lib/site";
import { vocalRemoverPath } from "@/lib/i18n/routes";
import { createWebAppSchema, createWebPageSchema } from "@/lib/seo/schemas";

export function VocalRemoverPageView({ locale }: { locale: HomeLocale }) {
  const copy = getVocalRemoverPageCopy(locale);
  const links = getVocalRemoverPageLinks(locale);
  const pageUrl = absoluteUrl(vocalRemoverPath(locale));

  const webAppSchema = createWebAppSchema({
    name: copy.breadcrumbTool,
    url: pageUrl,
    description: copy.description,
    inLanguage: locale === "en" ? undefined : locale
  });

  const webPageSchema = createWebPageSchema({
    name: copy.title,
    url: pageUrl,
    description: copy.description,
    speakableSelectors: ["#site-summary-vocal-remover"]
  });

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: copy.breadcrumbHome, item: absoluteUrl(links.home) },
      { "@type": "ListItem", position: 2, name: copy.breadcrumbTool, item: pageUrl }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: locale,
    mainEntity: copy.faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a }
    }))
  };

  return (
    <div className="relative flex min-h-screen flex-col bg-neutral-100 text-neutral-900 selection:bg-primary-container selection:text-on-primary-container dark:bg-surface-container-lowest dark:text-on-surface">
      <SiteTopBar locale={locale} />

      <div className="flex flex-1 pt-[4.5rem]">
        <main className="flex-1 overflow-y-auto p-3 sm:p-5 lg:p-8">
          <div className="mx-auto max-w-3xl">
            <h1 className="font-headline text-2xl font-bold tracking-tight text-neutral-900 dark:text-on-surface sm:text-3xl md:text-4xl">
              {copy.h1}
            </h1>

            <section
              id="site-summary-vocal-remover"
              data-ai-summary="true"
              className="mt-4 rounded-2xl border border-sky-200/80 bg-sky-50/90 px-4 py-4 dark:border-sky-900/40 dark:bg-sky-950/25"
              aria-labelledby="site-summary-heading-vocal-remover"
            >
              <h2 id="site-summary-heading-vocal-remover" className="font-headline text-base font-bold sm:text-lg">
                {copy.summaryTitle}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-700 dark:text-slate-300 sm:text-[15px]">
                {copy.summaryBody}
              </p>
            </section>


            <div className="mt-6">
              <VocalRemover />
            </div>

            <AdsenseHorizontalBanner className="mt-8" />

            <section
              className="mt-8 rounded-2xl border border-slate-200/80 bg-white/80 p-5 dark:border-outline-variant/25 dark:bg-surface-container/40 sm:p-6"
              aria-labelledby="vocal-remover-about"
            >
              <h2 id="vocal-remover-about" className="font-headline text-lg font-bold sm:text-xl">
                {copy.aboutHeading}
              </h2>
              <div className="mt-4 space-y-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base">
                <p>{copy.aboutP1}</p>
                <p>{copy.aboutP2}</p>
              </div>
            </section>

            <section className="mt-8 rounded-2xl border border-slate-200/80 bg-white/80 p-5 dark:border-outline-variant/25 dark:bg-surface-container/40 sm:p-6">
              <h2 className="font-headline text-lg font-bold sm:text-xl">{copy.limitsHeading}</h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base">{copy.limitsP}</p>
            </section>

            <section className="mt-8 rounded-2xl border border-slate-200/80 bg-white/80 p-5 dark:border-outline-variant/25 dark:bg-surface-container/40 sm:p-6">
              <h2 className="font-headline text-lg font-bold sm:text-xl">{copy.stepsHeading}</h2>
              <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base">
                {copy.steps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </section>

            <section className="mt-8 rounded-2xl border border-slate-200/80 bg-white/80 p-5 dark:border-outline-variant/25 dark:bg-surface-container/40 sm:p-6">
              <h2 className="font-headline text-lg font-bold sm:text-xl">{copy.faqHeading}</h2>
              <div className="mt-5 space-y-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base">
                {copy.faq.map((item) => (
                  <div key={item.q}>
                    <h3 className="font-semibold text-neutral-800 dark:text-slate-200">{item.q}</h3>
                    <p className="mt-1">{item.a}</p>
                  </div>
                ))}
              </div>
            </section>

            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
          </div>
        </main>
      </div>

      <footer className="mt-auto border-t border-slate-200/80 py-6 text-center dark:border-white/10">
        <p className="font-label text-[10px] text-slate-500 dark:text-slate-600">© 2026 {SITE_NAME}</p>
      </footer>
    </div>
  );
}
