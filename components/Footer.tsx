"use client";

import { useLocale } from "next-intl";
import { BASE_PATH } from "@/lib/basePath";

const ristoranti = [
  { slug: "damplo-mineo",       nome: "Damplo Mineo",      citta: "Mineo, Sicilia" },
  { slug: "damplo-dubai",       nome: "Damplo Dubai",      citta: "Dubai, UAE" },
  { slug: "damplo-monaco",      nome: "Damplo Monaco",     citta: "Monte-Carlo" },
  { slug: "damplo-new-york",    nome: "Damplo New York",   citta: "New York" },
  { slug: "damplo-melbourne",   nome: "Damplo Melbourne",  citta: "Melbourne" },
  { slug: "damplo-roma",        nome: "Damplo Roma",       citta: "Roma" },
  { slug: "damplo-milano",      nome: "Damplo Milano",     citta: "Milano" },
  { slug: "damplo-barcelona",   nome: "Damplo Barcelona",  citta: "Barcellona" },
  { slug: "damplo-parigi",      nome: "Damplo Paris",      citta: "Parigi" },
  { slug: "damplo-tokyo",       nome: "Damplo Tokyo",      citta: "Tokyo" },
];

export default function Footer() {
  const locale = useLocale();
  const isIt = locale === "it";

  return (
    <footer className="border-t border-white/10 bg-ink">
      {/* Sezione principale */}
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">

          {/* Brand */}
          <div className="md:col-span-3">
            <p className="font-display text-xl uppercase tracking-widest text-gold-bright">
              Damplo Group
            </p>
            <p className="mt-2 text-xs uppercase tracking-[0.15em] text-cream/40">
              Francesco D'Amplo
            </p>
            <p className="mt-4 text-sm leading-relaxed text-cream/60">
              {isIt
                ? "Lusso culinario siciliano. Venticinque stelle Michelin, dieci ristoranti, cinque continenti."
                : "Sicilian culinary luxury. Twenty-five Michelin stars, ten restaurants, five continents."}
            </p>
            {/* Logo */}
            <div className="mt-6">
              <img
                src={`${BASE_PATH}/images/damplo-logo.png`}
                alt="Damplo Group"
                className="h-16 w-auto opacity-90"
              />
            </div>
          </div>

          {/* I Ristoranti */}
          <div className="md:col-span-4">
            <p className="mb-5 text-xs uppercase tracking-[0.2em] text-gold">
              {isIt ? "I Ristoranti" : "Restaurants"}
            </p>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              {ristoranti.map((r) => (
                <a
                  key={r.slug}
                  href={`${BASE_PATH}/${locale}/ristoranti/${r.slug}/`}
                  className="group flex min-h-[44px] flex-col justify-center py-1"
                >
                  <span className="text-sm text-cream/80 transition-colors group-hover:text-gold-bright">
                    {r.nome}
                  </span>
                  <span className="text-xs text-cream/40">{r.citta}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Scopri + Contatti */}
          <div className="grid grid-cols-2 gap-8 md:col-span-5">
            {/* Scopri */}
            <div>
              <p className="mb-5 text-xs uppercase tracking-[0.2em] text-gold">
                {isIt ? "Scopri" : "Explore"}
              </p>
              <ul className="space-y-0.5">
                {[
                  { href: `${BASE_PATH}/${locale}/biografia/`,  label: isIt ? "Biografia" : "Biography" },
                  { href: `${BASE_PATH}/${locale}/piatti/`,     label: isIt ? "I Piatti" : "Dishes" },
                  { href: `${BASE_PATH}/${locale}/premi/`,      label: isIt ? "Premi" : "Awards" },
                  { href: `${BASE_PATH}/${locale}/press/`,      label: "Press" },
                  { href: `${BASE_PATH}/${locale}/galleria/`,   label: isIt ? "Galleria" : "Gallery" },
                ].map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="flex min-h-[44px] items-center text-sm text-cream/70 transition-colors hover:text-gold-bright"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Note Legali */}
            <div>
              <p className="mb-5 text-xs uppercase tracking-[0.2em] text-gold">
                {isIt ? "Note Legali" : "Legal Notice"}
              </p>
              <p className="text-xs leading-relaxed text-cream/50">
                {isIt
                  ? "Questo sito web è un'opera satirica e di intrattenimento, realizzata con il consenso di Francesco D'Amplo. Tutti i ristoranti, premi, stelle Michelin, interazioni con personaggi famosi, cifre economiche e contenuti del sito sono puramente fittizi. Immagini e testi sono stati generati o elaborati con il supporto di strumenti di intelligenza artificiale. Qualsiasi riferimento a persone reali è da intendersi come parodia. Nessuna prenotazione reale è possibile."
                  : "This website is a satirical and entertainment work, created with Francesco D'Amplo's consent. All restaurants, awards, Michelin stars, interactions with famous figures, economic figures and site content are purely fictional. Images and texts were generated or processed with the support of artificial intelligence tools. Any reference to real persons is intended as parody. No real booking is possible."}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-5 text-xs text-cream/40 md:flex-row md:px-8">
          <p>
            © {new Date().getFullYear()} Damplo Group — Francesco D'Amplo.{" "}
            {isIt ? "Tutti i diritti riservati." : "All rights reserved."}
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-cream/70 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-cream/70 transition-colors">
              Cookie Policy
            </a>
            <a href="#" className="hover:text-cream/70 transition-colors">
              {isIt ? "Termini e Condizioni" : "Terms & Conditions"}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
