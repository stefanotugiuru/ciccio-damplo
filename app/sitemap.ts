import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";

export const dynamic = "force-static";
import { ristoranti } from "@/content/ristoranti";
import { piatti } from "@/content/piatti";
import { press } from "@/content/press";
import { baseUrl } from "@/lib/site";

const now = new Date();

function priority(path: string): number {
  if (path === "") return 1.0;
  if (["biografia", "ristoranti", "piatti", "premi", "press", "galleria"].includes(path)) return 0.9;
  if (path.startsWith("press/")) return 0.6;
  return 0.7;
}

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
      lastModified: now,
      changeFrequency: (path === "" ? "weekly" : "monthly") as "weekly" | "monthly",
      priority: priority(path),
    }))
  );
}
