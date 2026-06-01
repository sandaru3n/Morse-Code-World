import { absoluteUrl } from "@/lib/site";

type Props = {
  slug: string;
  title: string;
};

export function BlogShare({ slug, title }: Props) {
  const pageUrl = absoluteUrl(`/blog/${slug}`);
  const encodedUrl = encodeURIComponent(pageUrl);
  const encodedTitle = encodeURIComponent(title);

  const links = [
    {
      label: "Share on X",
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`
    },
    {
      label: "Share on Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`
    },
    {
      label: "Share on LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`
    },
    {
      label: "Share on Reddit",
      href: `https://www.reddit.com/submit?url=${encodedUrl}&title=${encodedTitle}`
    }
  ];

  return (
    <section
      className="mt-6 rounded-2xl border border-slate-200/80 bg-white p-4 dark:border-outline-variant/20 dark:bg-surface-container sm:p-5"
      aria-label="Share this article"
    >
      <h2 className="font-headline text-sm font-bold text-neutral-900 dark:text-on-surface">
        Share this article
      </h2>
      <ul className="mt-3 flex flex-wrap gap-2">
        {links.map(({ label, href }) => (
          <li key={label}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-lg border border-slate-200/80 bg-slate-50 px-3 py-2 font-label text-xs font-semibold text-slate-700 transition-colors hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-800 dark:border-outline-variant/25 dark:bg-surface-container-high dark:text-slate-300 dark:hover:border-primary-container/40 dark:hover:bg-primary-container/10 dark:hover:text-primary-container"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
