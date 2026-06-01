import { post as historyPost } from "./posts/history-of-morse-code";
import { post as learnPost } from "./posts/how-to-learn-morse-code";
import { post as alphabetPost } from "./posts/morse-code-alphabet-guide";
import { post as usesPost } from "./posts/uses-of-morse-code-today";
import { post as comparisonPost } from "./posts/international-vs-american-morse-code";
import type { BlogPost, BlogPostMeta } from "./types";

const ALL_POSTS: BlogPost[] = [
  learnPost,
  historyPost,
  alphabetPost,
  usesPost,
  comparisonPost,
].sort((a, b) => (a.date > b.date ? -1 : 1));

export function getAllPosts(): BlogPostMeta[] {
  return ALL_POSTS.map(({ Content: _Content, ...meta }) => meta);
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return ALL_POSTS.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return ALL_POSTS.map((p) => p.slug);
}
