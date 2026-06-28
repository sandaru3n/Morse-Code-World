import Link from "next/link";
import { BlogPostCoverImage } from "@/components/blog/BlogPostCoverImage";
import type { BlogPostMeta } from "@/lib/blog/types";

const CATEGORY_STYLE: Record<string, { bar: string; label: string }> = {
  History: {
    bar: "bg-amber-500",
    label: "text-amber-800 dark:text-amber-300"
  },
  Learning: {
    bar: "bg-emerald-500",
    label: "text-emerald-800 dark:text-emerald-300"
  },
  Reference: {
    bar: "bg-violet-500",
    label: "text-violet-800 dark:text-violet-300"
  },
  "Modern Uses": {
    bar: "bg-sky-500",
    label: "text-sky-800 dark:text-sky-300"
  }
};

const FALLBACK_STYLE = {
  bar: "bg-slate-400",
  label: "text-slate-700 dark:text-slate-300"
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric"
  });
}

type BlogPostCardProps = {
  post: BlogPostMeta;
  variant?: "featured" | "default";
};

export function BlogPostCard({ post, variant = "default" }: BlogPostCardProps) {
  const style = CATEGORY_STYLE[post.category] ?? FALLBACK_STYLE;
  const isFeatured = variant === "featured";

  return (
    <article
      className={
        isFeatured
          ? "border border-slate-300 bg-white dark:border-white/15 dark:bg-surface-container"
          : "border border-slate-300 bg-white dark:border-white/15 dark:bg-surface-container"
      }
    >
      <div className={`h-1 w-full ${style.bar}`} aria-hidden="true" />

      <Link
        href={`/blog/${post.slug}`}
        className={`group block transition-colors hover:bg-slate-50 dark:hover:bg-surface-container-high ${
          isFeatured ? "" : "flex h-full flex-col"
        }`}
      >
        {post.coverImage ? (
          <BlogPostCoverImage
            src={post.coverImage}
            alt={post.coverImageAlt ?? post.title}
            priority={isFeatured}
            variant={isFeatured ? "featured" : "card"}
          />
        ) : null}

        <div className={isFeatured ? "p-6 sm:p-8" : "flex flex-1 flex-col p-5"}>
        <div className={`flex flex-wrap items-center gap-x-3 gap-y-1 ${isFeatured ? "mb-4" : "mb-3"}`}>
          {isFeatured ? (
            <span className="border border-slate-300 px-2 py-0.5 font-label text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600 dark:border-white/20 dark:text-slate-400">
              Featured
            </span>
          ) : null}
          <span
            className={`font-label text-[10px] font-bold uppercase tracking-[0.18em] ${style.label}`}
          >
            {post.category}
          </span>
          <span className="font-label text-[11px] text-slate-400 dark:text-slate-500" aria-hidden="true">
            ·
          </span>
          <span className="font-label text-[11px] text-slate-500 dark:text-slate-400">
            {post.readingTime} min read
          </span>
          <span className="font-label text-[11px] text-slate-400 dark:text-slate-500" aria-hidden="true">
            ·
          </span>
          <time dateTime={post.date} className="font-label text-[11px] text-slate-500 dark:text-slate-400">
            {formatDate(post.date)}
          </time>
        </div>

        <h2
          className={`font-headline font-bold tracking-tight text-neutral-900 transition-colors group-hover:text-emerald-700 dark:text-on-surface dark:group-hover:text-primary-container ${
            isFeatured ? "text-2xl leading-tight sm:text-3xl" : "text-lg leading-snug"
          }`}
        >
          {post.title}
        </h2>

        <p
          className={`font-body leading-relaxed text-slate-600 dark:text-slate-400 ${
            isFeatured ? "mt-4 max-w-3xl text-base sm:text-[17px] sm:leading-7" : "mt-2 flex-1 text-sm"
          }`}
        >
          {post.excerpt}
        </p>

        {!isFeatured && post.tags.length > 0 ? (
          <ul className="mt-4 flex flex-wrap gap-2">
            {post.tags.slice(0, 3).map((tag) => (
              <li
                key={tag}
                className="border border-slate-200 px-2 py-0.5 font-label text-[10px] uppercase tracking-wide text-slate-500 dark:border-white/10 dark:text-slate-400"
              >
                {tag}
              </li>
            ))}
          </ul>
        ) : null}

        <p
          className={`font-label text-xs font-semibold uppercase tracking-[0.14em] text-emerald-700 dark:text-primary-container ${
            isFeatured ? "mt-6" : "mt-4"
          }`}
        >
          Read article →
        </p>
        </div>
      </Link>
    </article>
  );
}
