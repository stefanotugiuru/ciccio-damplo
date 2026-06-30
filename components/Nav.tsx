"use client";

import { Link, usePathname } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";

const SECTIONS = ["ristoranti", "premi", "piatti", "press", "galleria"] as const;

export default function Nav() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const otherLocale = locale === "it" ? "en" : "it";

  const mobileLinks = [
    { key: "biografia", label: t("biografia") },
    { key: "ristoranti", label: t("ristoranti") },
    { key: "premi", label: t("premi") },
    { key: "piatti", label: t("piatti") },
    { key: "press", label: t("press") },
    { key: "galleria", label: t("galleria") },
  ] as const;

  return (
    <>
      <nav className="fixed inset-x-4 top-4 z-40 mx-auto flex w-auto max-w-fit items-center gap-4 rounded-full border border-white/10 bg-black/40 px-5 py-3 backdrop-blur-2xl sm:inset-x-0 sm:top-6 sm:gap-6 sm:px-6">
        <Link href="/" className="font-display text-sm uppercase tracking-[0.15em] text-gold-bright">
          Ciccio Damplo
        </Link>
        <ul className="hidden items-center gap-4 text-sm md:flex md:max-w-[60vw] md:overflow-x-auto">
          <li><Link href="/biografia">{t("biografia")}</Link></li>
          {SECTIONS.map((section) => (
            <li key={section}><Link href={`/${section}`}>{t(section)}</Link></li>
          ))}
        </ul>
        <Link
          href={pathname}
          locale={otherLocale}
          className="rounded-full bg-white/5 px-3 py-1 text-xs transition-colors duration-300 hover:bg-gold/20 hover:text-gold-bright"
        >
          {t("langSwitch")}
        </Link>
        <button
          type="button"
          aria-label="Menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="relative flex h-11 w-11 cursor-pointer items-center justify-center md:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="relative h-5 w-6">
          <span
            className={`absolute left-0 top-0 h-px w-6 bg-cream transition-transform duration-500 ${open ? "translate-y-2.5 rotate-45" : ""}`}
          />
          <span
            className={`absolute left-0 top-2.5 h-px w-6 bg-cream transition-opacity duration-500 ${open ? "opacity-0" : "opacity-100"}`}
          />
          <span
            className={`absolute left-0 top-5 h-px w-6 bg-cream transition-transform duration-500 ${open ? "-translate-y-2.5 -rotate-45" : ""}`}
          />
          </span>
        </button>
      </nav>
      <div
        id="mobile-menu"
        aria-hidden={!open}
        inert={!open}
        className={`fixed inset-0 z-30 flex flex-col items-center justify-center gap-6 bg-black/80 backdrop-blur-3xl transition-opacity duration-500 md:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        {mobileLinks.map(({ key, label }, index) => (
          <Link
            key={key}
            href={`/${key}`}
            onClick={() => setOpen(false)}
            className={`font-display text-2xl uppercase tracking-wide text-cream transition-all duration-500 ${
              open ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
            }`}
            style={{ transitionDelay: `${index * 75}ms` }}
          >
            {label}
          </Link>
        ))}
      </div>
    </>
  );
}
