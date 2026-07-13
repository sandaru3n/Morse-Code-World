import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { BlogShare } from "@/components/blog/BlogShare";
import { BlogAuthor } from "@/components/blog/BlogAuthor";
import { BlogPostCoverImage, BlogCoverPreload } from "@/components/blog/BlogPostCoverImage";
import { BlogPostMeta } from "@/components/blog/BlogPostMeta";
import { SiteTopBar } from "@/components/SiteTopBar";
import { SITE_AUTHOR } from "@/lib/author";
import { getPostBySlug, getAllSlugs } from "@/lib/blog";
import { toSchemaDateTime } from "@/lib/blog/dates";
import { absoluteUrl, SITE_NAME } from "@/lib/site";

const MAX_META_KEYWORDS = 5;
const OG_IMAGE = "/favicon/android-chrome-512x512.png";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  const url = absoluteUrl(`/blog/${post.slug}`);
  const keywords = post.tags.slice(0, MAX_META_KEYWORDS);
  const ogImage = post.coverImage ?? OG_IMAGE;
  const ogImageWidth = post.coverImage ? 1200 : 512;
  const ogImageHeight = post.coverImage ? 630 : 512;
  const ogImageAlt = post.coverImageAlt ?? post.title;

  return {
    alternates: { canonical: `/blog/${post.slug}` },
    title: { absolute: post.metaTitle ?? post.title },
    description: post.description,
    keywords,
    openGraph: {
      type: "article",
      url,
      title: post.title,
      description: post.description,
      publishedTime: toSchemaDateTime(post.date),
      authors: [SITE_AUTHOR.name],
      siteName: SITE_NAME,
      images: [
        {
          url: ogImage,
          width: ogImageWidth,
          height: ogImageHeight,
          alt: ogImageAlt
        }
      ],
      tags: keywords
    },
    twitter: {
      card: "summary",
      title: post.title,
      description: post.description,
      images: [ogImage]
    },
    other: { "Content-Language": "en" }
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const { Content } = post;
  if (!Content) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: toSchemaDateTime(post.date),
    url: absoluteUrl(`/blog/${post.slug}`),
    keywords: post.tags.join(", "),
    ...(post.coverImage
      ? { image: absoluteUrl(post.coverImage) }
      : {}),
    publisher: { "@id": `${absoluteUrl("/")}#organization` },
    author: {
      "@type": "Person",
      name: SITE_AUTHOR.name,
      url: absoluteUrl("/about"),
      image: absoluteUrl(SITE_AUTHOR.profileImage)
    },
    inLanguage: "en"
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: SITE_NAME, item: absoluteUrl("/") },
      { "@type": "ListItem", position: 2, name: "Blog", item: absoluteUrl("/blog") },
      { "@type": "ListItem", position: 3, name: post.title, item: absoluteUrl(`/blog/${post.slug}`) }
    ]
  };

  const faqSchema = post.faq?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        inLanguage: "en",
        mainEntity: post.faq.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a }
        }))
      }
    : null;

  const isWhiteLayout = post.layout === "white";
  const whiteAppearance = isWhiteLayout ? "white" as const : "default" as const;

  const articleBodyClass =
    isWhiteLayout
      ? "blog-article-body blog-article-body--white"
      : "blog-article-body border border-slate-200/80 bg-white shadow-sm dark:border-outline-variant/20 dark:bg-surface-container";

  const pageBgClass = isWhiteLayout
    ? "blog-page--white bg-white text-[#475569]"
    : "bg-neutral-100 text-neutral-900 selection:bg-primary-container selection:text-on-primary-container dark:bg-surface-container-lowest dark:text-on-surface";

  return (
    <div
      className={`relative flex min-h-screen flex-col overflow-x-hidden ${pageBgClass}`}
      {...(isWhiteLayout ? { "data-blog-theme": "white" } : {})}
    >
      {post.coverImage ? <BlogCoverPreload href={post.coverImage} /> : null}
      <SiteTopBar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema ? (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      ) : null}

      <div className="flex flex-1 pt-[4.5rem]">
        <main className="flex-1 overflow-x-hidden px-4 py-3 sm:p-5 lg:p-8">
          <div className="mx-auto w-full min-w-0 max-w-3xl">

            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="blog-breadcrumb mb-5 min-w-0">
              <ol
                className={`flex flex-wrap items-baseline gap-x-1.5 gap-y-1 font-label text-xs leading-relaxed ${isWhiteLayout ? "text-[#94A3B8]" : "text-slate-500 dark:text-slate-400"}`}
              >
                <li className="shrink-0">
                  <Link
                    href="/"
                    className={
                      isWhiteLayout
                        ? "transition-colors hover:text-violet-600"
                        : "transition-colors hover:text-emerald-600 dark:hover:text-primary-container"
                    }
                  >
                    Home
                  </Link>
                </li>
                <li className="shrink-0" aria-hidden="true">
                  /
                </li>
                <li className="shrink-0">
                  <Link
                    href="/blog"
                    className={
                      isWhiteLayout
                        ? "transition-colors hover:text-violet-600"
                        : "transition-colors hover:text-emerald-600 dark:hover:text-primary-container"
                    }
                  >
                    Blog
                  </Link>
                </li>
                <li className="shrink-0" aria-hidden="true">
                  /
                </li>
                <li
                  className={`min-w-0 break-words ${isWhiteLayout ? "text-[#475569]" : "text-neutral-900 dark:text-on-surface"}`}
                >
                  {post.title}
                </li>
              </ol>
            </nav>

            {/* Post header */}
            <header
              className={`blog-header-card mb-6 overflow-hidden rounded-2xl border sm:mb-8 ${
                isWhiteLayout
                  ? "blog-header--white border-slate-200 bg-white shadow-sm"
                  : "border-slate-300 bg-white dark:border-white/15 dark:bg-surface-container"
              }`}
            >
              {post.coverImage ? (
                <BlogPostCoverImage
                  src={post.coverImage}
                  alt={post.coverImageAlt ?? post.title}
                  priority
                  variant="article"
                />
              ) : (
                <div className={`flex h-36 items-center justify-center bg-gradient-to-br ${post.coverGradient} sm:h-44`}>
                  <span className="text-7xl drop-shadow-md" role="img" aria-label={post.title}>
                    {post.coverEmoji}
                  </span>
                </div>
              )}

              <div className="p-4 sm:p-6">
              <div className="mb-4">
                <BlogPostMeta
                  category={post.category}
                  readingTime={post.readingTime}
                  date={post.date}
                  variant="article"
                  linkAuthor
                  appearance={whiteAppearance}
                />
              </div>

              <h1
                className={`font-headline text-2xl font-bold leading-[1.2] tracking-tight sm:text-3xl md:text-4xl ${isWhiteLayout ? "blog-header-title text-[#334155]" : "font-black text-neutral-900 dark:text-on-surface"}`}
              >
                {post.title}
              </h1>
              <p
                className={`mt-3 font-body text-[15px] leading-relaxed sm:mt-4 sm:text-base sm:leading-relaxed md:text-lg md:leading-[1.7] ${isWhiteLayout ? "blog-header-desc text-[#64748B]" : "text-slate-600 dark:text-slate-400"}`}
              >
                {post.description}
              </p>

              {/* Tags (classic layout only) */}
              {post.layout !== "white" ? (
              <div className="mt-4 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-slate-200/80 bg-white px-2 py-0.5 font-label text-[10px] uppercase tracking-wide text-slate-500 dark:border-outline-variant/20 dark:bg-surface-container dark:text-slate-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              ) : null}
              </div>

              {post.layout === "white" ? (
                <div className="blog-white-tags-bar">
                  {post.tags.map((tag) => (
                    <span key={tag} className="blog-white-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              ) : null}
            </header>

            {/* Article body */}
            <article className={articleBodyClass}>
              <Content />
            </article>

            <BlogAuthor appearance={whiteAppearance} />

            <BlogShare slug={post.slug} title={post.title} appearance={whiteAppearance} />

            {/* Footer nav */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <Link
                href="/blog"
                className={
                  isWhiteLayout
                    ? "inline-flex items-center justify-center gap-1.5 border border-slate-200 bg-white px-4 py-2.5 font-label text-sm font-semibold text-[#64748B] shadow-sm transition-colors hover:bg-slate-50 hover:text-[#475569]"
                    : "inline-flex items-center justify-center gap-1.5 border border-slate-200/80 bg-white px-4 py-2.5 font-label text-sm font-semibold text-slate-700 shadow-sm transition-colors hover:bg-slate-50 dark:border-outline-variant/20 dark:bg-surface-container dark:text-on-surface dark:hover:bg-surface-container-high"
                }
              >
                ← All posts
              </Link>
              <Link
                href="/"
                className={
                  isWhiteLayout
                    ? "inline-flex items-center justify-center gap-1.5 bg-violet-600 px-4 py-2.5 font-label text-sm font-semibold text-white shadow-sm transition-colors hover:bg-violet-700"
                    : "inline-flex items-center justify-center gap-1.5 bg-emerald-600 px-4 py-2.5 font-label text-sm font-semibold text-white shadow-sm transition-colors hover:bg-emerald-700 dark:bg-primary-container dark:text-on-primary-container dark:hover:bg-primary-container/90"
                }
              >
                Try the Translator ⠿
              </Link>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}
