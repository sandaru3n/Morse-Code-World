export type BlogPostMeta = {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  date: string;
  readingTime: number;
  category: string;
  tags: string[];
  coverEmoji: string;
  /** Tailwind gradient class string e.g. "from-emerald-500 to-teal-600" */
  coverGradient: string;
  /** Optional cover image under /public, e.g. /blogimages/slug.webp */
  coverImage?: string;
  coverImageAlt?: string;
  /** Optional FAQ for JSON-LD and guide-style posts */
  faq?: { q: string; a: string }[];
  /** `guide` enables wider readable layout blocks (FAQ, callouts). */
  layout?: "classic" | "guide";
};

export type BlogPost = BlogPostMeta & {
  Content: () => React.JSX.Element;
};
