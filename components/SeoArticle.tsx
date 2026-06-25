import Link from "next/link";
import type { HomeLocale } from "@/lib/i18n/home";
import { hasFullEditorial } from "@/lib/i18n/localeIndexing";
import {
  EDITORIAL_FALLBACK,
  getSeoArticle,
  INDEXED_GUIDE_LINKS
} from "@/lib/i18n/seoArticles";

const linkClass =
  "font-semibold text-emerald-600 underline decoration-emerald-600/30 underline-offset-2 hover:text-emerald-500 dark:text-primary-container dark:decoration-primary-container/40 dark:hover:text-primary-fixed";

function renderInlineMarkdown(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={index} className="font-semibold text-neutral-800 dark:text-slate-200">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
}

function ArticleBody({ locale }: { locale: HomeLocale }) {
  const article = getSeoArticle(locale);
  if (!article) return null;

  const headingId = `seo-article-heading-${locale}`;

  return (
    <article className="lg:col-span-12" aria-labelledby={headingId}>
      <div className="mt-8 rounded-2xl border border-slate-200/80 bg-white/90 p-5 shadow-sm dark:border-white/10 dark:bg-surface-container/80 sm:p-7 lg:mt-10 lg:p-10">
        <h2
          id={headingId}
          className="font-headline text-lg font-bold tracking-tight text-neutral-900 dark:text-on-surface sm:text-xl"
        >
          {article.heading}
        </h2>
        <div className="mt-5 space-y-4 font-body text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-[15px] sm:leading-7">
          {article.sections.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              {section.heading ? (
                <h3 className="pt-2 font-headline text-base font-bold text-neutral-900 dark:text-on-surface">
                  {section.heading}
                </h3>
              ) : null}
              {section.paragraphs.map((paragraph, paragraphIndex) => (
                <p key={paragraphIndex} className={section.heading || paragraphIndex > 0 ? "mt-3" : undefined}>
                  {renderInlineMarkdown(paragraph)}
                </p>
              ))}
            </div>
          ))}
          <p className="border-t border-slate-200/80 pt-4 text-xs text-slate-500 dark:border-white/10 dark:text-slate-500 sm:text-sm">
            <Link href="/about" className={linkClass}>
              {article.aboutLinkLabel}
            </Link>
          </p>
        </div>
      </div>
    </article>
  );
}

function EditorialFallback({ locale }: { locale: HomeLocale }) {
  const copy = EDITORIAL_FALLBACK[locale];
  if (!copy) return null;

  return (
    <article className="lg:col-span-12" aria-labelledby={`seo-fallback-${locale}`}>
      <div className="mt-8 rounded-2xl border border-slate-200/80 bg-white/90 p-5 shadow-sm dark:border-white/10 dark:bg-surface-container/80 sm:p-7 lg:mt-10 lg:p-10">
        <h2
          id={`seo-fallback-${locale}`}
          className="font-headline text-lg font-bold tracking-tight text-neutral-900 dark:text-on-surface sm:text-xl"
        >
          {copy.title}
        </h2>
        <p className="mt-4 font-body text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-[15px] sm:leading-7">
          {copy.body}
        </p>
        <p className="mt-4 font-label text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-500">
          {copy.indexedLinksLabel}
        </p>
        <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1 font-body text-sm">
          {INDEXED_GUIDE_LINKS.map((item) => (
            <Link key={item.hrefLang} href={item.href} hrefLang={item.hrefLang} className={linkClass}>
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </article>
  );
}

/** Long-form editorial copy below the translator (indexed locales only get full articles). */
export function SeoArticle({ locale = "en" }: { locale?: HomeLocale }) {
  if (hasFullEditorial(locale)) {
    return <ArticleBody locale={locale} />;
  }
  return <EditorialFallback locale={locale} />;
}
