import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/routing";
import { galleria } from "@/content/galleria";
import RevealOnScroll from "@/components/RevealOnScroll";
import GalleryGrid from "@/components/GalleryGrid";
import { buildMetadata } from "@/lib/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return buildMetadata({
    locale,
    path: "/galleria",
    title: locale === "it" ? "Galleria — Ciccio Damplo" : "Gallery — Ciccio Damplo",
  });
}

export default async function GalleriaPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    notFound();
  }

  return (
    <div className="px-6 py-20 md:px-8">
      {/* Header */}
      <RevealOnScroll>
        <div className="mb-16 text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.2em] text-gold">
            {locale === "it" ? "Archivio visivo" : "Visual archive"}
          </p>
          <h1 className="font-display text-4xl uppercase tracking-wide text-cream md:text-6xl">
            {locale === "it" ? "Galleria" : "Gallery"}
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-cream/60">
            {locale === "it"
              ? "Tutte queste foto sono assolutamente reali e non sono state generate con nessuna intelligenza artificiale. Ciccio ci tiene a precisarlo."
              : "All these photos are absolutely real and were not generated with any artificial intelligence. Ciccio wants to make that clear."}
          </p>
        </div>
      </RevealOnScroll>

      {/* Grid con lightbox */}
      <GalleryGrid photos={galleria} locale={locale} />
    </div>
  );
}
