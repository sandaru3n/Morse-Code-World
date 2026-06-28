import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { BlogShare } from "@/components/blog/BlogShare";
import { BlogAuthor } from "@/components/blog/BlogAuthor";
import { BlogPostCoverImage } from "@/components/blog/BlogPostCoverImage";
import { BlogPostMeta } from "@/components/blog/BlogPostMeta";
import { SiteTopBar } from "@/components/SiteTopBar";
import { SITE_AUTHOR } from "@/lib/author";
import { getPostBySlug, getAllSlugs } from "@/lib/blog";
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
    title: { absolute: post.title },
    description: post.description,
    keywords,
    openGraph: {
      type: "article",
      url,
      title: post.title,
      description: post.description,
      publishedTime: post.date,
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

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
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

  return (
    <div className="relative flex min-h-screen flex-col bg-neutral-100 text-neutral-900 selection:bg-primary-container selection:text-on-primary-container dark:bg-surface-container-lowest dark:text-on-surface">
      <SiteTopBar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="flex flex-1 pt-[4.5rem]">
        <main className="flex-1 p-3 sm:p-5 lg:p-8">
          <div className="mx-auto max-w-3xl">

            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-5">
              <ol className="flex items-center gap-1.5 font-label text-xs text-slate-500 dark:text-slate-400">
                <li>
                  <Link href="/" className="transition-colors hover:text-emerald-600 dark:hover:text-primary-container">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link href="/blog" className="transition-colors hover:text-emerald-600 dark:hover:text-primary-container">
                    Blog
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="truncate text-neutral-900 dark:text-on-surface">{post.title}</li>
              </ol>
            </nav>

            {/* Post header */}
            <header className="mb-8 border border-slate-300 bg-white dark:border-white/15 dark:bg-surface-container">
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

              <div className="p-5 sm:p-6">
              <div className="mb-3">
                <BlogPostMeta
                  category={post.category}
                  readingTime={post.readingTime}
                  date={post.date}
                  variant="article"
                  linkAuthor
                />
              </div>

              <h1 className="font-headline text-3xl font-black leading-[1.15] tracking-tight text-neutral-900 sm:text-4xl dark:text-on-surface">
                {post.title}
              </h1>
              <p className="mt-4 font-body text-base leading-relaxed text-slate-600 dark:text-slate-400 sm:text-lg sm:leading-[1.7]">
                {post.description}
              </p>

              {/* Tags */}
              <div className="mt-4 flex flex-wrap gap-1.5">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-slate-200/80 bg-white px-2.5 py-0.5 font-label text-[11px] text-slate-500 dark:border-outline-variant/20 dark:bg-surface-container dark:text-slate-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              </div>
            </header>

            {/* Article body */}
            <article className="blog-article-body rounded-2xl border border-slate-200/80 bg-white shadow-sm dark:border-outline-variant/20 dark:bg-surface-container">
              <Content />
            </article>

            <BlogAuthor />

            <BlogShare slug={post.slug} title={post.title} />

            {/* Footer nav */}
            <div className="mt-8 flex items-center justify-between">
              <Link
                href="/blog"
                className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200/80 bg-white px-4 py-2 font-label text-sm font-semibold text-slate-700 shadow-sm transition-colors hover:bg-slate-50 dark:border-outline-variant/20 dark:bg-surface-container dark:text-on-surface dark:hover:bg-surface-container-high"
              >
                ← All posts
              </Link>
              <Link
                href="/"
                className="inline-flex items-center gap-1.5 rounded-xl bg-emerald-600 px-4 py-2 font-label text-sm font-semibold text-white shadow-sm transition-colors hover:bg-emerald-700 dark:bg-primary-container dark:text-on-primary-container dark:hover:bg-primary-container/90"
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
