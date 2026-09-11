import type { MetadataRoute } from "next";
import { caseStudies } from "@/lib/portfolio";

const siteUrl = "https://saurabh-kaushik-portfolio-two.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/work`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/experience`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/about`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/contact`, changeFrequency: "monthly", priority: 0.8 },
    ...caseStudies.map((study) => ({
      url: `${siteUrl}/case-studies/${study.slug}`,
      changeFrequency: "yearly" as const,
      priority: 0.8,
    })),
  ];
}
