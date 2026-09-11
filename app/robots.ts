import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://saurabh-kaushik-portfolio-two.vercel.app/sitemap.xml",
  };
}
