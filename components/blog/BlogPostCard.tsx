import Link from "next/link";
import { BlogPostCoverImage } from "@/components/blog/BlogPostCoverImage";
import { BlogPostMeta } from "@/components/blog/BlogPostMeta";
import type { BlogPostMeta as BlogPostMetaType } from "@/lib/blog/types";

const CATEGORY_BAR: Record<string, string> = {
  History: "bg-amber-500",
  Learning: "bg-emerald-500",
  Reference: "bg-violet-500",
  "Modern Uses": "bg-sky-500"
};

const FALLBACK_BAR = "bg-slate-400";

type BlogPostCardProps = {
  post: BlogPostMetaType;
  variant?: "featured" | "default";
};

export function BlogPostCard({ post, variant = "default" }: BlogPostCardProps) {
  const barClass = CATEGORY_BAR[post.category] ?? FALLBACK_BAR;
  const isFeatured = variant === "featured";

  return (
    <article
      className={
        isFeatured
          ? "border border-slate-300 bg-white dark:border-white/15 dark:bg-surface-container"
          : "border border-slate-300 bg-white dark:border-white/15 dark:bg-surface-container"
      }
    >
      <div className={`h-1 w-full ${barClass}`} aria-hidden="true" />

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
        <div className={`${isFeatured ? "mb-4 flex flex-col gap-2" : "mb-3"} `}>
          {isFeatured ? (
            <span className="w-fit border border-slate-300 px-2 py-0.5 font-label text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600 dark:border-white/20 dark:text-slate-400">
              Featured
            </span>
          ) : null}
          <BlogPostMeta
            category={post.category}
            readingTime={post.readingTime}
            date={post.date}
            variant="card"
          />
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
