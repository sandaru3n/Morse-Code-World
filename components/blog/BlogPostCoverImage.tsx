import Image from "next/image";

type BlogPostCoverImageProps = {
  src: string;
  alt: string;
  priority?: boolean;
  variant?: "card" | "featured" | "article";
};

const VARIANT_CLASS: Record<NonNullable<BlogPostCoverImageProps["variant"]>, string> = {
  card: "aspect-[16/10] w-full object-cover",
  featured: "aspect-[21/9] w-full object-cover sm:aspect-[2.4/1]",
  article: "aspect-[21/9] w-full object-cover sm:aspect-[2.2/1]"
};

export function BlogPostCoverImage({
  src,
  alt,
  priority = false,
  variant = "card"
}: BlogPostCoverImageProps) {
  return (
    <div className="border-b border-slate-300 bg-slate-100 dark:border-white/15 dark:bg-surface-container-low">
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={630}
        priority={priority}
        className={VARIANT_CLASS[variant]}
        sizes={
          variant === "article"
            ? "(max-width: 768px) 100vw, 768px"
            : variant === "featured"
              ? "(max-width: 1024px) 100vw, 1024px"
              : "(max-width: 640px) 100vw, 50vw"
        }
      />
    </div>
  );
}
