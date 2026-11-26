import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  if (process.env.ERS_MAINTENANCE_MODE === "true") {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
    };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://ers.wankysoftware.com/sitemap.xml",
  };
}
