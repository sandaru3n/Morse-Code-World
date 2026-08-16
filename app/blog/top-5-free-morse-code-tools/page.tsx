import type { Metadata } from "next";
import { SiteTopBar } from "@/components/SiteTopBar";
import { SITE_AUTHOR } from "@/lib/author";
import { Top5MorseToolsPageBody, post } from "@/lib/blog/posts/top-5-free-morse-code-tools";
import { toSchemaDateTime } from "@/lib/blog/dates";
import { absoluteUrl, SITE_NAME } from "@/lib/site";

const ogImage = post.coverImage ?? "/favicon/android-chrome-512x512.png";
const ogImageWidth = post.coverImage ? 1200 : 512;
const ogImageHeight = post.coverImage ? 630 : 512;
const ogImageAlt = post.coverImageAlt ?? post.title;

export const metadata: Metadata = {
  alternates: { canonical: `/blog/${post.slug}` },
  title: { absolute: post.metaTitle ?? post.title },
  description: post.description,
  keywords: post.tags,
  openGraph: {
    type: "article",
    url: absoluteUrl(`/blog/${post.slug}`),
    title: post.title,
    description: post.description,
    publishedTime: toSchemaDateTime(post.date),
    authors: [SITE_AUTHOR.name],
    siteName: SITE_NAME,
    images: [{ url: ogImage, width: ogImageWidth, height: ogImageHeight, alt: ogImageAlt }],
    tags: post.tags
  },
  twitter: {
    card: "summary",
    title: post.title,
    description: post.description,
    images: [ogImage]
  },
  other: { "Content-Language": "en" }
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: post.title,
  description: post.description,
  datePublished: toSchemaDateTime(post.date),
  url: absoluteUrl(`/blog/${post.slug}`),
  keywords: post.tags.join(", "),
  ...(post.coverImage ? { image: absoluteUrl(post.coverImage) } : {}),
  publisher: { "@id": `${absoluteUrl("/")}#organization` },
  author: {
    "@type": "Person",
    name: SITE_AUTHOR.name,
    url: absoluteUrl("/about"),
    image: absoluteUrl(SITE_AUTHOR.profileImage)
  },
  inLanguage: "en"
};

/** ItemList schema — tells Google this page is a ranked top-5 list. */
const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: post.title,
  itemListOrder: "https://schema.org/ItemListOrderAscending",
  numberOfItems: 5,
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Morse Code World", url: absoluteUrl("/") },
    { "@type": "ListItem", position: 2, name: "Morse Code Creator", url: "https://www.morsecodecreator.org/" },
    { "@type": "ListItem", position: 3, name: "Morse Typing Trainer by Google", url: "https://morse.withgoogle.com/learn/" },
    { "@type": "ListItem", position: 4, name: "LCWO (Learn CW Online)", url: "https://lcwo.net/" },
    { "@type": "ListItem", position: 5, name: "Morse Code Ninja", url: "https://morsecode.ninja/" }
  ]
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: SITE_NAME, item: absoluteUrl("/") },
    { "@type": "ListItem", position: 2, name: "Blog", item: absoluteUrl("/blog") },
    { "@type": "ListItem", position: 3, name: post.title, item: absoluteUrl(`/blog/${post.slug}`) }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  inLanguage: "en",
  mainEntity: post.faq!.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a }
  }))
};

export default function Top5FreeMorseCodeToolsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <SiteTopBar />
      <Top5MorseToolsPageBody />
    </>
  );
}
