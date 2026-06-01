import type { Metadata } from "next";
import Link from "next/link";
import { SiteTopBar } from "@/components/SiteTopBar";
import { getAllPosts } from "@/lib/blog";
import { absoluteUrl, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/blog" },
  title: `Blog — Morse Code Guides & History | ${SITE_NAME}`,
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
    title: `Blog — Morse Code Guides & History | ${SITE_NAME}`,
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

const CATEGORY_COLORS: Record<string, string> = {
  History: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
  Learning: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
  Reference: "bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-400",
  "Modern Uses": "bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-400"
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
}

export default function BlogPage() {
  const posts = getAllPosts();

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
        <main className="flex-1 p-3 sm:p-5 lg:p-8">
          <div className="mx-auto max-w-5xl">

            {/* Page header */}
            <div className="mb-8 sm:mb-10">
              <div className="mb-2 flex items-center gap-2 font-label text-xs text-slate-500 dark:text-slate-400">
                <Link href="/" className="transition-colors hover:text-emerald-600 dark:hover:text-primary-container">Home</Link>
                <span aria-hidden="true">/</span>
                <span className="text-neutral-900 dark:text-on-surface">Blog</span>
              </div>
              <h1 className="font-headline text-3xl font-black tracking-tight text-neutral-900 sm:text-4xl dark:text-on-surface">
                Morse Code Blog
              </h1>
              <p className="mt-2 max-w-2xl font-body text-base text-slate-600 dark:text-slate-400">
                Guides, history, and deep dives into the world of dots and dashes.
              </p>
            </div>

            {/* Posts grid */}
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg dark:border-outline-variant/20 dark:bg-surface-container"
                >
                  {/* Card header with gradient */}
                  <div className={`flex h-28 items-center justify-center bg-gradient-to-br ${post.coverGradient}`}>
                    <span className="text-5xl drop-shadow-sm" role="img" aria-hidden="true">
                      {post.coverEmoji}
                    </span>
                  </div>

                  {/* Card body */}
                  <div className="flex flex-1 flex-col gap-2.5 p-4">
                    <div className="flex items-center gap-2">
                      <span
                        className={`inline-block rounded-full px-2.5 py-0.5 font-label text-[11px] font-semibold ${CATEGORY_COLORS[post.category] ?? "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300"}`}
                      >
                        {post.category}
                      </span>
                      <span className="font-label text-[11px] text-slate-400 dark:text-slate-500">
                        {post.readingTime} min read
                      </span>
                    </div>

                    <h2 className="font-headline text-base font-bold leading-snug text-neutral-900 group-hover:text-emerald-600 dark:text-on-surface dark:group-hover:text-primary-container">
                      {post.title}
                    </h2>

                    <p className="flex-1 font-body text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-1">
                      <time
                        dateTime={post.date}
                        className="font-label text-[11px] text-slate-400 dark:text-slate-500"
                      >
                        {formatDate(post.date)}
                      </time>
                      <span className="font-label text-xs font-semibold text-emerald-600 transition-colors group-hover:text-emerald-700 dark:text-primary-container dark:group-hover:text-primary-container/80">
                        Read →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}
