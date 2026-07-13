import type { Metadata } from "next";
import { SiteTopBar } from "@/components/SiteTopBar";
import { SITE_AUTHOR } from "@/lib/author";
import { ILoveYouMorsePageBody, post } from "@/lib/blog/posts/how-to-say-i-love-you-in-morse-code";
import { absoluteUrl, SITE_NAME } from "@/lib/site";

const OG_IMAGE = "/favicon/android-chrome-512x512.png";

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
    publishedTime: post.date,
    authors: [SITE_AUTHOR.name],
    siteName: SITE_NAME,
    images: [{ url: OG_IMAGE, width: 512, height: 512, alt: post.title }],
    tags: post.tags
  },
  twitter: {
    card: "summary",
    title: post.title,
    description: post.description,
    images: [OG_IMAGE]
  },
  other: { "Content-Language": "en" }
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: post.title,
  description: post.description,
  datePublished: post.date,
  url: absoluteUrl(`/blog/${post.slug}`),
  keywords: post.tags.join(", "),
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

export default function HowToSayILoveYouInMorseCodePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <SiteTopBar />
      <ILoveYouMorsePageBody />
    </>
  );
}
