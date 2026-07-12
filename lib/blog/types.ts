export type BlogPostMeta = {
  slug: string;
  title: string;
  /** Optional override for the document `<title>` only (H1 and OG keep `title`). */
  metaTitle?: string;
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
  /** `guide` = FAQ/callouts; `white` = clean white editorial layout with accent headings. */
  layout?: "classic" | "guide" | "white";
};

export type BlogPost = BlogPostMeta & {
  Content: () => React.JSX.Element;
};
