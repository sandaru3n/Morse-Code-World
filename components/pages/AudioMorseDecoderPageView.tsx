import Link from "next/link";
import { AdsenseHorizontalBanner } from "@/components/AdsenseHorizontalBanner";
import AudioMorseDecoder from "@/components/AudioMorseDecoder";
import { SiteTopBar } from "@/components/SiteTopBar";
import type { HomeLocale } from "@/lib/i18n/home";
import { getAudioPageCopy, getAudioPageLinks } from "@/lib/i18n/toolPages/audio";
import { SITE_NAME, absoluteUrl } from "@/lib/site";
import { audioDecoderPath } from "@/lib/i18n/routes";
import { createWebAppSchema, createWebPageSchema } from "@/lib/seo/schemas";

export function AudioMorseDecoderPageView({ locale }: { locale: HomeLocale }) {
  const copy = getAudioPageCopy(locale);
  const links = getAudioPageLinks(locale);
  const pageUrl = absoluteUrl(audioDecoderPath(locale));

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
    speakableSelectors: ["#site-summary-audio", "#audio-morse-about"]
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
              id="site-summary-audio"
              data-ai-summary="true"
              className="mt-4 rounded-2xl border border-sky-200/80 bg-sky-50/90 px-4 py-4 dark:border-sky-900/40 dark:bg-sky-950/25"
              aria-labelledby="site-summary-heading-audio"
            >
              <h2 id="site-summary-heading-audio" className="font-headline text-base font-bold sm:text-lg">
                {copy.summaryTitle}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-700 dark:text-slate-300 sm:text-[15px]">
                {copy.summaryBody}
              </p>
            </section>

            <AdsenseHorizontalBanner className="mt-6" />

            <div className="mt-6">
              <AudioMorseDecoder />
            </div>

            <section
              className="mt-12 rounded-2xl border border-slate-200/80 bg-white/80 p-5 dark:border-outline-variant/25 dark:bg-surface-container/40 sm:p-6"
              aria-labelledby="audio-morse-about"
            >
              <h2 id="audio-morse-about" className="font-headline text-lg font-bold sm:text-xl">
                {copy.aboutHeading}
              </h2>
              <div className="mt-4 space-y-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base">
                <p>{copy.aboutP1}</p>
                <p>{copy.aboutP2}</p>
                <p>
                  {copy.aboutP3}{" "}
                  <Link href={links.home} className="font-semibold text-emerald-600 underline underline-offset-2 dark:text-primary-container">
                    {copy.linkTranslator}
                  </Link>
                  ,{" "}
                  <Link href={links.picture} className="font-semibold text-emerald-600 underline underline-offset-2 dark:text-primary-container">
                    {copy.linkPicture}
                  </Link>
                  .
                </p>
              </div>
            </section>

            <section className="mt-8 rounded-2xl border border-slate-200/80 bg-white/80 p-5 dark:border-outline-variant/25 dark:bg-surface-container/40 sm:p-6">
              <h2 className="font-headline text-lg font-bold sm:text-xl">{copy.formatsHeading}</h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base">{copy.formatsP}</p>
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
              <h2 className="font-headline text-lg font-bold sm:text-xl">{copy.technicalHeading}</h2>
              <div className="mt-4 space-y-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base">
                {copy.technicalParagraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>

            <section className="mt-8 rounded-2xl border border-slate-200/80 bg-white/80 p-5 dark:border-outline-variant/25 dark:bg-surface-container/40 sm:p-6">
              <h2 className="font-headline text-lg font-bold sm:text-xl">{copy.useCasesHeading}</h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base">
                {copy.useCases.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="mt-8 rounded-2xl border border-slate-200/80 bg-white/80 p-5 dark:border-outline-variant/25 dark:bg-surface-container/40 sm:p-6">
              <h2 className="font-headline text-lg font-bold sm:text-xl">{copy.tipsHeading}</h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base">
                {copy.tips.map((tip) => (
                  <li key={tip}>{tip}</li>
                ))}
              </ul>
            </section>

            <section className="mt-8 rounded-2xl border border-slate-200/80 bg-white/80 p-5 dark:border-outline-variant/25 dark:bg-surface-container/40 sm:p-6">
              <h2 className="font-headline text-lg font-bold sm:text-xl">{copy.limitationsHeading}</h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base">
                {copy.limitations.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
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
