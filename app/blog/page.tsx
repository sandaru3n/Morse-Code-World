import type { Metadata } from "next";
import Link from "next/link";
import { BlogPostCard } from "@/components/blog/BlogPostCard";
import { SiteTopBar } from "@/components/SiteTopBar";
import { getAllPosts } from "@/lib/blog";
import { absoluteUrl, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/blog" },
  title: { absolute: "Blog — Morse Code Guides & History" },
  description:
    "Explore our Morse code blog: history, learning guides, alphabet references, modern uses, and expert tips to help you master the dots and dashes.",
  keywords: [
    "morse code blog",
    "learn morse code",
    "morse code history",
    "morse code guide",
    "morse code tips"
  ],
  openGraph: {
    type: "website",
    url: absoluteUrl("/blog"),
    title: "Blog — Morse Code Guides & History",
    description:
      "Explore our Morse code blog: history, learning guides, alphabet references, modern uses, and expert tips."
  },
  other: { "Content-Language": "en" }
};

const BLOG_LIST_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: `${SITE_NAME} Blog`,
  url: absoluteUrl("/blog"),
  description: "Articles about Morse code history, learning guides, alphabet references, and modern uses.",
  publisher: { "@id": `${absoluteUrl("/")}#organization` },
  inLanguage: "en"
};

const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: SITE_NAME, item: absoluteUrl("/") },
    { "@type": "ListItem", position: 2, name: "Blog", item: absoluteUrl("/blog") }
  ]
};

export default function BlogPage() {
  const posts = getAllPosts();
  const [featured, ...rest] = posts;

  return (
    <div className="relative flex min-h-screen flex-col bg-neutral-100 text-neutral-900 selection:bg-primary-container selection:text-on-primary-container dark:bg-surface-container-lowest dark:text-on-surface">
      <SiteTopBar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BLOG_LIST_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }}
      />

      <div className="flex flex-1 pt-[4.5rem]">
        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          <div className="mx-auto max-w-5xl">
            <header className="border border-slate-300 bg-white px-5 py-6 dark:border-white/15 dark:bg-surface-container sm:px-8 sm:py-8">
              <nav aria-label="Breadcrumb">
                <ol className="flex items-center gap-2 font-label text-[11px] uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                  <li>
                    <Link
                      href="/"
                      className="transition-colors hover:text-emerald-700 dark:hover:text-primary-container"
                    >
                      Home
                    </Link>
                  </li>
                  <li aria-hidden="true">/</li>
                  <li className="text-neutral-900 dark:text-on-surface">Blog</li>
                </ol>
              </nav>

              <div className="mt-5 flex flex-col gap-4 border-t border-slate-200 pt-5 dark:border-white/10 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h1 className="font-headline text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl dark:text-on-surface">
                    Morse Code Blog
                  </h1>
                  <p className="mt-2 max-w-2xl font-body text-base leading-relaxed text-slate-600 dark:text-slate-400">
                    Guides, history, and practical articles on learning, decoding, and using Morse code today.
                  </p>
                </div>
                <p className="shrink-0 border border-slate-200 px-3 py-2 font-label text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-600 dark:border-white/10 dark:text-slate-400">
                  {posts.length} articles
                </p>
              </div>
            </header>

            {featured ? (
              <section className="mt-6" aria-labelledby="featured-post-heading">
                <h2 id="featured-post-heading" className="sr-only">
                  Featured article
                </h2>
                <BlogPostCard post={featured} variant="featured" />
              </section>
            ) : null}

            {rest.length > 0 ? (
              <section className="mt-6" aria-labelledby="all-posts-heading">
                <div className="mb-4 flex items-center justify-between border-b border-slate-300 pb-3 dark:border-white/15">
                  <h2
                    id="all-posts-heading"
                    className="font-label text-xs font-bold uppercase tracking-[0.2em] text-slate-600 dark:text-slate-400"
                  >
                    All articles
                  </h2>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {rest.map((post) => (
                    <BlogPostCard key={post.slug} post={post} />
                  ))}
                </div>
              </section>
            ) : null}

            <aside className="mt-8 border border-slate-300 bg-white p-5 dark:border-white/15 dark:bg-surface-container sm:p-6">
              <h2 className="font-headline text-lg font-bold text-neutral-900 dark:text-on-surface">
                Practice while you read
              </h2>
              <p className="mt-2 font-body text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                Open the free translator to try what you learn in each article.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Link
                  href="/"
                  className="inline-flex items-center border border-emerald-700 bg-emerald-700 px-4 py-2 font-label text-xs font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-emerald-800 dark:border-primary-container dark:bg-primary-container dark:text-on-primary-container"
                >
                  Morse translator
                </Link>
                <Link
                  href="/audio-morse-code-decoder"
                  className="inline-flex items-center border border-slate-300 px-4 py-2 font-label text-xs font-semibold uppercase tracking-[0.12em] text-slate-700 transition-colors hover:bg-slate-50 dark:border-white/15 dark:text-on-surface dark:hover:bg-surface-container-high"
                >
                  Audio decoder
                </Link>
              </div>
            </aside>
          </div>
        </main>
      </div>

      <footer className="mt-auto border-t border-slate-300 py-6 text-center dark:border-white/10">
        <p className="font-label text-[10px] uppercase tracking-widest text-slate-500 dark:text-slate-600">
          © 2026 {SITE_NAME}
        </p>
      </footer>
    </div>
  );
}
