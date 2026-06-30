import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";

export const dynamic = "force-static";
import { ristoranti } from "@/content/ristoranti";
import { piatti } from "@/content/piatti";
import { press } from "@/content/press";
import { baseUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ["", "biografia", "ristoranti", "piatti", "premi", "press", "galleria"];
  const dynamicPaths = [
    ...ristoranti.map((r) => `ristoranti/${r.slug}`),
    ...piatti.map((p) => `piatti/${p.slug}`),
    ...press.map((a) => `press/${a.slug}`),
  ];
  const allPaths = [...staticPaths, ...dynamicPaths];

  return routing.locales.flatMap((locale) =>
    allPaths.map((path) => ({
      url: `${baseUrl}/${locale}${path ? `/${path}` : ""}/`,
    }))
  );
}
