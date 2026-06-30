import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/routing";
import { premi } from "@/content/premi";
import RevealOnScroll from "@/components/RevealOnScroll";
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
    path: "/premi",
    title: locale === "it" ? "Premi — Ciccio Damplo" : "Awards — Ciccio Damplo",
  });
}

export default async function PremiPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-2xl px-6 py-16">
      <RevealOnScroll>
        <h1 className="text-center font-display text-3xl uppercase tracking-wide text-gold-bright md:text-5xl">
          {locale === "it" ? "Premi e Riconoscimenti" : "Awards & Recognitions"}
        </h1>
      </RevealOnScroll>
      <ul className="mt-12 space-y-0">
        {premi.map((premio, index) => (
          <RevealOnScroll key={premio.nome.it} delay={Math.min(index * 0.05, 0.4)}>
            <li className="border-b border-gold/20 py-4">
              <p className="text-cream">
                <strong>{premio.nome[locale]}</strong> — {premio.anno}
              </p>
              <p className="mt-1 text-sm text-cream/70">{premio.ente[locale]}</p>
            </li>
          </RevealOnScroll>
        ))}
      </ul>
    </div>
  );
}
