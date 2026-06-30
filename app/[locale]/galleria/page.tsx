import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/routing";
import { galleria } from "@/content/galleria";
import RevealOnScroll from "@/components/RevealOnScroll";

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
    <div>
      <RevealOnScroll>
        <h1 className="px-6 pt-12 text-center font-display text-3xl uppercase tracking-wide text-gold-bright md:text-5xl">
          {locale === "it" ? "Galleria" : "Gallery"}
        </h1>
      </RevealOnScroll>
      <div className="grid grid-cols-1 gap-6 px-6 py-12 md:grid-cols-3">
        {galleria.map((foto, index) => (
          <RevealOnScroll key={foto.file} delay={Math.min(index * 0.05, 0.3)}>
            <figure className="overflow-hidden rounded-bezel border border-white/10 bg-white/5 p-1.5">
              <div className="overflow-hidden rounded-[calc(2rem-0.375rem)]">
                <img
                  src={foto.file}
                  alt={foto.alt[locale]}
                  loading={index < 3 ? undefined : "lazy"}
                  className="h-64 w-full object-cover"
                />
              </div>
              <figcaption className="px-2 py-3 text-sm text-cream/80">{foto.caption[locale]}</figcaption>
            </figure>
          </RevealOnScroll>
        ))}
      </div>
    </div>
  );
}
