import type { Metadata } from "next";
import { SiteTopBar } from "@/components/SiteTopBar";
import { SITE_AUTHOR } from "@/lib/author";
import { ThankYouMorsePageBody, post } from "@/lib/blog/posts/morse-code-for-thank-you";
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

export default function MorseCodeForThankYouPage() {
  return (
    <>
      {post.coverImage ? (
        <link rel="preload" as="image" href={absoluteUrl(post.coverImage)} fetchPriority="high" />
      ) : null}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <SiteTopBar />
      <ThankYouMorsePageBody />
    </>
  );
}
