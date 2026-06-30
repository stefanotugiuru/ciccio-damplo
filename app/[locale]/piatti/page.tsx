import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/routing";
import { piatti } from "@/content/piatti";
import BentoGrid from "@/components/BentoGrid";
import Card from "@/components/Card";
import RevealOnScroll from "@/components/RevealOnScroll";

export default async function PiattiPage({
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
          {locale === "it" ? "Piatti Iconici" : "Iconic Dishes"}
        </h1>
      </RevealOnScroll>
      <BentoGrid>
        {piatti.map((piatto, index) => (
          <RevealOnScroll key={piatto.slug} delay={Math.min(index, 2) * 0.1}>
            <Card href={`/piatti/${piatto.slug}`}>
              <h2 className="font-display text-xl text-gold-bright">{piatto.nome}</h2>
              <p className="mt-4 font-display italic text-cream/90">{piatto.sottotitoloIronico[locale]}</p>
              <p className="mt-4 text-sm text-cream/70">{piatto.prezzoAssurdo[locale]}</p>
            </Card>
          </RevealOnScroll>
        ))}
      </BentoGrid>
    </div>
  );
}
