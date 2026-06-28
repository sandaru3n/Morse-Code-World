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
};

export type BlogPost = BlogPostMeta & {
  Content: () => React.JSX.Element;
};
