import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/routing";
import { ristoranti } from "@/content/ristoranti";
import BentoGrid from "@/components/BentoGrid";
import Card from "@/components/Card";
import RevealOnScroll from "@/components/RevealOnScroll";

export default async function RistorantiPage({
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
          {locale === "it" ? "I Ristoranti Damplo" : "The Damplo Restaurants"}
        </h1>
      </RevealOnScroll>
      <BentoGrid>
        {ristoranti.map((ristorante) => (
          <Card key={ristorante.slug} href={`/ristoranti/${ristorante.slug}`}>
            <h2 className="font-display text-xl text-gold-bright">{ristorante.nome}</h2>
            <p className="mt-1 text-sm text-cream/70">{ristorante.citta[locale]}</p>
            <p className="mt-4 font-display italic text-cream/90">{ristorante.tagline[locale]}</p>
          </Card>
        ))}
      </BentoGrid>
    </div>
  );
}
