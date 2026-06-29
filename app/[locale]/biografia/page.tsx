import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/routing";
import { biografia } from "@/content/biografia";
import RevealOnScroll from "@/components/RevealOnScroll";

export default async function BiografiaPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    notFound();
  }
  const content = biografia[locale];

  return (
    <article className="mx-auto max-w-3xl px-6 py-24">
      <RevealOnScroll>
        <h1 className="font-display text-3xl uppercase tracking-wide text-gold-bright md:text-5xl">
          {content.title}
        </h1>
      </RevealOnScroll>
      {content.paragraphs.map((paragraph, index) => (
        <RevealOnScroll key={index} delay={index * 0.1}>
          <p className="mt-6 text-lg text-cream/90">{paragraph}</p>
        </RevealOnScroll>
      ))}
    </article>
  );
}
