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
                ? "Lusso culinario siciliano. Quattro stelle Michelin, dieci ristoranti, cinque continenti."
                : "Sicilian culinary luxury. Four Michelin stars, ten restaurants, five continents."}
            </p>
            {/* Social */}
            <div className="mt-6 flex gap-4">
              <a
                href="https://www.instagram.com/ciccio_damplo_/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs uppercase tracking-[0.1em] text-cream/50 hover:text-gold transition-colors"
              >
                Instagram
              </a>
              <span className="text-cream/20">·</span>
              <a
                href="https://www.facebook.com/ciccio.damplo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs uppercase tracking-[0.1em] text-cream/50 hover:text-gold transition-colors"
              >
                Facebook
              </a>
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
                  className="group flex flex-col"
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
              <ul className="space-y-2.5">
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
                      className="text-sm text-cream/70 transition-colors hover:text-gold-bright"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contatti */}
            <div>
              <p className="mb-5 text-xs uppercase tracking-[0.2em] text-gold">
                {isIt ? "Contatti" : "Contact"}
              </p>
              <ul className="space-y-3">
                <li>
                  <p className="text-xs uppercase tracking-[0.1em] text-cream/40">
                    {isIt ? "Email" : "Email"}
                  </p>
                  <a
                    href="mailto:info@cicciodamplo.com"
                    className="text-sm text-cream/70 hover:text-gold transition-colors"
                  >
                    info@cicciodamplo.com
                  </a>
                </li>
                <li>
                  <p className="text-xs uppercase tracking-[0.1em] text-cream/40">
                    {isIt ? "Sede" : "HQ"}
                  </p>
                  <p className="text-sm text-cream/70">
                    Mineo (CT), Sicilia<br />
                    Italia
                  </p>
                </li>
                <li>
                  <p className="text-xs uppercase tracking-[0.1em] text-cream/40">
                    {isIt ? "Prenotazioni" : "Reservations"}
                  </p>
                  <p className="text-sm text-cream/70">
                    {isIt
                      ? "Solo su richiesta diretta"
                      : "By direct request only"}
                  </p>
                </li>
              </ul>
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
