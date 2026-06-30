"use client";

import { useParams } from "next/navigation";
import { notFound } from "@/content/notFound";
import { Link } from "@/i18n/navigation";
import { isLocale } from "@/i18n/routing";

export default function NotFound() {
  const params = useParams();
  const rawLocale = params.locale;
  const locale = typeof rawLocale === "string" && isLocale(rawLocale) ? rawLocale : "it";
  const content = notFound[locale];

  return (
    <section className="mx-auto max-w-2xl px-6 py-24 text-center">
      <h1 className="font-display text-3xl text-gold-bright">{content.title}</h1>
      <p className="mt-6 text-lg text-cream/90">{content.message}</p>
      <Link href="/" className="mt-8 inline-block rounded-full bg-gold/10 px-6 py-3 text-sm">
        {content.cta}
      </Link>
    </section>
  );
}
