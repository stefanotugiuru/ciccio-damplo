import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/routing";
import { galleria } from "@/content/galleria";
import RevealOnScroll from "@/components/RevealOnScroll";
import { buildMetadata } from "@/lib/metadata";
import { BASE_PATH } from "@/lib/basePath";

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
              ? `${galleria.length} immagini. Una sola leggenda. Nessuna di queste foto è stata scattata di nascosto.`
              : `${galleria.length} images. One legend. None of these photos were taken without permission.`}
          </p>
        </div>
      </RevealOnScroll>

      {/* Layout a colonne CSS (masonry nativo) */}
      <div className="columns-2 gap-4 md:columns-3 lg:columns-4 [column-fill:_balance]">
        {galleria.map((foto, index) => (
          <RevealOnScroll key={foto.file} delay={Math.min(index * 0.03, 0.3)}>
            <figure className="mb-4 break-inside-avoid overflow-hidden rounded-[1.25rem] border border-white/10 bg-white/5">
              <img
                src={`${BASE_PATH}${foto.file}`}
                alt={foto.alt[locale]}
                loading={index < 8 ? undefined : "lazy"}
                className="w-full object-cover"
              />
              <figcaption className="px-3 py-2.5 text-xs leading-relaxed text-cream/70">
                {foto.caption[locale]}
              </figcaption>
            </figure>
          </RevealOnScroll>
        ))}
      </div>
    </div>
  );
}
