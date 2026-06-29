import { home } from "@/content/home";
import RevealOnScroll from "@/components/RevealOnScroll";
import PillButton from "@/components/PillButton";
import { isLocale } from "@/i18n/routing";
import { notFound } from "next/navigation";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    notFound();
  }
  const content = home[locale];

  return (
    <div>
      <section
        className="relative flex min-h-[70dvh] items-end overflow-hidden rounded-b-bezel px-6 pb-16"
        style={{
          backgroundImage: "url('/images/ciccio/ciccio-cucina.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        role="img"
        aria-label={locale === "it" ? "Francesco D'Amplo in cucina" : "Francesco D'Amplo in his kitchen"}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-transparent" />
        <RevealOnScroll>
          <div className="relative z-10">
            <h1 className="font-display text-4xl uppercase tracking-wide text-gold-bright md:text-6xl">
              {content.heading}
            </h1>
            <p className="mt-4 max-w-xl text-lg text-cream/90">{content.subheading}</p>
          </div>
        </RevealOnScroll>
      </section>
      <RevealOnScroll>
        <section className="mx-auto max-w-3xl px-6 py-24 text-center">
          <p className="text-lg text-cream/90">{content.intro}</p>
          <p className="mt-8 font-display text-xl italic text-gold-bright">{content.quote}</p>
          <div className="mt-10 flex justify-center">
            <PillButton href="/ristoranti">
              {locale === "it" ? "Scopri i ristoranti" : "Discover the restaurants"}
            </PillButton>
          </div>
        </section>
      </RevealOnScroll>
    </div>
  );
}
