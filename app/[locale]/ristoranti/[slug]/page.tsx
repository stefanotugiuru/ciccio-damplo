import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/routing";
import { ristoranti } from "@/content/ristoranti";
import { getRistoranteBySlug } from "@/lib/ristorante-lookup";
import RevealOnScroll from "@/components/RevealOnScroll";

export function generateStaticParams() {
  return ristoranti.map((ristorante) => ({ slug: ristorante.slug }));
}

export default async function RistoranteDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) {
    notFound();
  }

  const ristorante = getRistoranteBySlug(slug);

  if (!ristorante) {
    notFound();
  }

  return (
    <div>
      <section
        className="relative flex min-h-[60dvh] items-end overflow-hidden rounded-b-bezel px-6 pb-12"
        style={{
          backgroundImage: `url('/images/ristoranti/${ristorante.slug}-hero.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-transparent" />
        <RevealOnScroll>
          <div className="relative z-10">
            <h1 className="font-display text-4xl uppercase tracking-wide text-gold-bright">
              {ristorante.nome}
            </h1>
            <p className="mt-2 text-cream/80">{ristorante.citta[locale]}</p>
          </div>
        </RevealOnScroll>
      </section>
      <RevealOnScroll>
        <section className="mx-auto max-w-3xl px-6 py-16">
          <p className="font-display text-xl italic text-gold-bright">{ristorante.tagline[locale]}</p>
          <p className="mt-6 text-lg text-cream/90">{ristorante.descrizione[locale]}</p>
          <p className="mt-6 text-cream/80">
            {"★".repeat(ristorante.stelleMichelinFinte)}{" "}
            {locale === "it"
              ? `(${ristorante.stelleMichelinFinte} stelle Michelin, finte)`
              : `(${ristorante.stelleMichelinFinte} fictional Michelin stars)`}
          </p>
        </section>
      </RevealOnScroll>
    </div>
  );
}
