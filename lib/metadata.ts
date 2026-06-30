import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { baseUrl } from "@/lib/site";

export async function buildMetadata({
  locale,
  path,
  title,
}: {
  locale: "it" | "en";
  path: string;
  title: string;
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "meta" });
  const description = t("defaultDescription");
  const itPath = `/it${path}`;
  const enPath = `/en${path}`;
  const canonical = locale === "it" ? itPath : enPath;

  return {
    title,
    description,
    alternates: {
      canonical: `${baseUrl}${canonical}`,
      languages: { it: `${baseUrl}${itPath}`, en: `${baseUrl}${enPath}` },
    },
    openGraph: { title, description, url: `${baseUrl}${canonical}`, type: "website" },
    twitter: { card: "summary_large_image", title, description },
  };
}
