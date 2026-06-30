import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/routing";
import { press } from "@/content/press";
import BentoGrid from "@/components/BentoGrid";
import Card from "@/components/Card";
import RevealOnScroll from "@/components/RevealOnScroll";
import { buildMetadata } from "@/lib/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return buildMetadata({ locale, path: "/press", title: "Press — Ciccio Damplo" });
}

export default async function PressPage({
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
          {locale === "it" ? "Rassegna Stampa" : "Press Coverage"}
        </h1>
      </RevealOnScroll>
      <BentoGrid>
        {press.map((articolo, index) => (
          <RevealOnScroll key={articolo.slug} delay={Math.min(index, 2) * 0.1}>
            <Card href={`/press/${articolo.slug}`}>
              <p className="text-xs uppercase tracking-wide text-cream/60">{articolo.testata}</p>
              <h2 className="mt-2 font-display text-lg text-gold-bright">{articolo.titolo[locale]}</h2>
              <p className="mt-3 text-sm text-cream/80">{articolo.estratto[locale]}</p>
            </Card>
          </RevealOnScroll>
        ))}
      </BentoGrid>
    </div>
  );
}
