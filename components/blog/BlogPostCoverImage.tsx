import { absoluteUrl } from "@/lib/site";

type BlogPostCoverImageProps = {
  src: string;
  alt: string;
  /** LCP hero — eager load, fetchPriority high, direct /public URL (no next/image). */
  priority?: boolean;
  variant?: "card" | "featured" | "article";
};

const VARIANT_CLASS: Record<NonNullable<BlogPostCoverImageProps["variant"]>, string> = {
  card: "aspect-[16/10] w-full object-cover",
  featured: "aspect-[21/9] w-full object-cover sm:aspect-[2.4/1]",
  article: "aspect-[21/9] w-full object-cover sm:aspect-[2.2/1]"
};

/**
 * Blog cover photos live in /public/blogimages as pre-optimized webp.
 * LCP candidates use a native img so the URL is in initial HTML without _next/image.
 */
export function BlogPostCoverImage({
  src,
  alt,
  priority = false,
  variant = "card"
}: BlogPostCoverImageProps) {
  const imageClass = `max-w-full ${VARIANT_CLASS[variant]}`;

  return (
    <div className="overflow-hidden border-b border-slate-300 bg-slate-100 dark:border-white/15 dark:bg-surface-container-low">
      {priority ? (
        <img
          src={src}
          alt={alt}
          width={1200}
          height={630}
          decoding="async"
          loading="eager"
          fetchPriority="high"
          className={imageClass}
        />
      ) : (
        <img
          src={src}
          alt={alt}
          width={1200}
          height={630}
          decoding="async"
          loading="lazy"
          className={imageClass}
        />
      )}
    </div>
  );
}

/** Head preload for blog cover LCP — absolute URL for early discovery in initial HTML. */
export function BlogCoverPreload({ href }: { href: string }) {
  const url = href.startsWith("http") ? href : absoluteUrl(href);
  return <link rel="preload" as="image" href={url} fetchPriority="high" />;
}
