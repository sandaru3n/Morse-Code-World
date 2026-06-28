import Link from "next/link";
import { SITE_AUTHOR } from "@/lib/author";

const CATEGORY_LABEL: Record<string, string> = {
  History: "text-amber-800 dark:text-amber-300",
  Learning: "text-emerald-800 dark:text-emerald-300",
  Reference: "text-violet-800 dark:text-violet-300",
  "Modern Uses": "text-sky-800 dark:text-sky-300"
};

const CATEGORY_BADGE: Record<string, string> = {
  History: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
  Learning: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
  Reference: "bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-400",
  "Modern Uses": "bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-400"
};

function formatDate(iso: string, style: "short" | "long") {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: style === "long" ? "long" : "short",
    day: "numeric"
  });
}

function MetaDot() {
  return (
    <span className="font-label text-[11px] text-slate-400 dark:text-slate-500" aria-hidden="true">
      ·
    </span>
  );
}

type BlogPostMetaProps = {
  category: string;
  readingTime: number;
  date: string;
  variant?: "card" | "article";
  linkAuthor?: boolean;
};

export function BlogPostMeta({
  category,
  readingTime,
  date,
  variant = "card",
  linkAuthor = false
}: BlogPostMetaProps) {
  const dateStyle = variant === "article" ? "long" : "short";

  if (variant === "article") {
    return (
      <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
        <span
          className={`inline-block rounded-full px-2.5 py-0.5 font-label text-[11px] font-semibold ${
            CATEGORY_BADGE[category] ?? "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300"
          }`}
        >
          {category}
        </span>
        <span className="font-label text-[11px] text-slate-400 dark:text-slate-500">
          {readingTime} min read
        </span>
        <MetaDot />
        <time dateTime={date} className="font-label text-[11px] text-slate-400 dark:text-slate-500">
          {formatDate(date, dateStyle)}
        </time>
        <MetaDot />
        {linkAuthor ? (
          <Link
            href="/about"
            className="font-label text-[11px] font-semibold text-slate-600 underline decoration-slate-300 underline-offset-2 transition-colors hover:text-emerald-700 dark:text-slate-300 dark:decoration-white/20 dark:hover:text-primary-container"
          >
            {SITE_AUTHOR.name}
          </Link>
        ) : (
          <span className="font-label text-[11px] font-semibold text-slate-600 dark:text-slate-300">
            {SITE_AUTHOR.name}
          </span>
        )}
      </div>
    );
  }

  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
      <span
        className={`font-label text-[10px] font-bold uppercase tracking-[0.18em] ${
          CATEGORY_LABEL[category] ?? "text-slate-700 dark:text-slate-300"
        }`}
      >
        {category}
      </span>
      <MetaDot />
      <span className="font-label text-[11px] text-slate-500 dark:text-slate-400">
        {readingTime} min read
      </span>
      <MetaDot />
      <time dateTime={date} className="font-label text-[11px] text-slate-500 dark:text-slate-400">
        {formatDate(date, dateStyle)}
      </time>
      <MetaDot />
      <span className="font-label text-[11px] font-semibold text-slate-600 dark:text-slate-300">
        {SITE_AUTHOR.name}
      </span>
    </div>
  );
}
