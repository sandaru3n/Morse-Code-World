import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: absoluteUrl("/"),
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1
    },
    {
      url: absoluteUrl("/about"),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7
    },
    {
      url: absoluteUrl("/es"),
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9
    },
    {
      url: absoluteUrl("/ko"),
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9
    },
    {
      url: absoluteUrl("/zh"),
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9
    },
    {
      url: absoluteUrl("/morse-code-picture-translator"),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.75
    }
  ];
}
