import Image from "next/image";
import Link from "next/link";
import { SITE_AUTHOR } from "@/lib/author";

const linkClass =
  "font-semibold text-emerald-600 underline decoration-emerald-600/30 underline-offset-2 transition-colors hover:text-emerald-500 dark:text-primary-container dark:decoration-primary-container/40 dark:hover:text-primary-fixed";

export function BlogAuthor() {
  return (
    <aside
      className="mt-8 rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm dark:border-outline-variant/20 dark:bg-surface-container sm:p-6"
      aria-labelledby="blog-author-heading"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
        <Image
          src={SITE_AUTHOR.profileImage}
          alt={SITE_AUTHOR.profileImageAlt}
          width={80}
          height={80}
          className="h-20 w-20 shrink-0 rounded-full border-2 border-slate-200/80 object-cover dark:border-white/10"
        />
        <div className="min-w-0">
          <p className="font-label text-[11px] font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-500">
            Written by
          </p>
          <p
            id="blog-author-heading"
            className="mt-1 font-headline text-lg font-bold text-neutral-900 dark:text-on-surface"
          >
            {SITE_AUTHOR.name}
          </p>
          <p className="mt-3 font-body text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-[15px] sm:leading-7">
            {SITE_AUTHOR.bio[0]} {SITE_AUTHOR.bio[1]}{" "}
            <Link href="/about" className={linkClass}>
              {SITE_AUTHOR.aboutLinkLabel}
            </Link>
            .
          </p>
        </div>
      </div>
    </aside>
  );
}
