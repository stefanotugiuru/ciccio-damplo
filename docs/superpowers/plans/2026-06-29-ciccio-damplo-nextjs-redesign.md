# Ciccio Damplo Next.js Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the existing Eleventy static site with a Next.js (App Router, static export) + Tailwind + Framer Motion rebuild, carrying over all existing bilingual satirical content unchanged, applying the "Ethereal Glass dark + gold" visual system and Asymmetrical Bento grid layout from the design spec.

**Architecture:** Next.js App Router with `output: 'export'` (fully static HTML at build time, no Node server in production). Bilingual routing via `next-intl` using an `app/[locale]/...` segment (`it`/`en`). Tailwind CSS for styling, the `motion` package (Framer Motion) for scroll-reveal and hover micro-interactions. Content lives in typed TypeScript data modules under `content/`, carried over 1:1 from the old `src/_data/*.json` files.

**Tech Stack:** Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS 3, `next-intl` 3, `motion` (Framer Motion), `@phosphor-icons/react` (ultra-thin icon set), `tsx` (runs the validation script), Node 24.

**Spec reference:** `docs/superpowers/specs/2026-06-29-ciccio-damplo-nextjs-redesign-design.md`

**Important technical note carried into this plan:** the previous Eleventy implementation hit a real, non-obvious framework gotcha (pagination pages not appearing in `collections.all` without an extra flag) that wasn't discovered until mid-implementation. This rewrite uses a different stack (Next.js + next-intl + static export), which has its own known fiddly area: how `next-intl` interacts with `output: 'export'` for a root `/` URL and for custom 404 pages, since `[locale]/layout.tsx` ends up being the *only* root layout (no separate non-localized `app/layout.tsx` is used, to avoid Next.js's "multiple root layouts" complexity). Task 8 (themed 404) handles this with an empirical, verify-as-you-go approach (inspect the actual build output, don't assume a filename), and Task 19 (root files) sidesteps the uncertainty entirely for the GitHub-Pages-required root `404.html` by using a hand-written static file in `public/` instead of depending on Next's rendering of nested not-found pages. If anything doesn't match what a task expects, the implementer should report back rather than guessing further, exactly like the Eleventy pagination issue was handled.

---

## File Structure

```
package.json                         Next.js + deps, build script (validate → next build → copy root files)
next.config.mjs                      output: 'export', images.unoptimized, next-intl plugin wiring
tsconfig.json                        TypeScript config, "@/*" path alias
tailwind.config.ts                   Design tokens: colors (ink/gold/bordeaux/cream), font families
postcss.config.mjs                   Tailwind/Autoprefixer
.gitignore                           node_modules, out, .next
i18n/
  routing.ts                        next-intl locales config (it, en; default it)
  request.ts                        next-intl per-request message loader
  navigation.ts                     Locale-aware Link/usePathname/useRouter wrappers
messages/
  it.json                           Shared UI strings (nav, footer, disclaimer, meta) — Italian
  en.json                           Shared UI strings — English
content/
  ristoranti.ts                     4 restaurants, bilingual fields (typed)
  piatti.ts                         4 dishes, bilingual fields, references ristoranti by slug
  premi.ts                          9 awards, bilingual fields
  press.ts                          4 press articles, bilingual fields
  galleria.ts                       9 gallery entries, bilingual captions/alt text
  biografia.ts                      Bio title + paragraphs, bilingual
  home.ts                           Home hero/intro/quote, bilingual
  notFound.ts                       404 copy, bilingual
app/
  globals.css                       Tailwind directives + CSS custom properties for font variables
  [locale]/
    layout.tsx                      Root layout (html/body), fonts, NextIntlClientProvider, Nav, Footer
    not-found.tsx                   Themed bilingual 404 (in-app, e.g. bad slug)
    page.tsx                        Home
    biografia/page.tsx              Biografia
    ristoranti/page.tsx             Ristoranti index (Bento grid)
    ristoranti/[slug]/page.tsx      Ristorante detail
    piatti/page.tsx                 Piatti index (Bento grid)
    piatti/[slug]/page.tsx          Piatto detail (cross-links to its ristorante)
    premi/page.tsx                  Premi list
    press/page.tsx                  Press index (Bento grid)
    press/[slug]/page.tsx           Press detail
    galleria/page.tsx               Galleria (Bento grid)
  sitemap.ts                        Next.js sitemap convention — generates sitemap.xml at build
  robots.ts                         Next.js robots convention — generates robots.txt at build
components/
  Nav.tsx                           Floating glass pill nav + mobile hamburger/overlay menu
  Footer.tsx                        Footer with disclaimer
  Card.tsx                          Double-Bezel reusable card (outer shell + inner core)
  BentoGrid.tsx                     Asymmetric grid wrapper (first item spans larger)
  PillButton.tsx                    Rounded pill button with nested icon-circle
  RevealOnScroll.tsx                Framer Motion `whileInView` fade-up+blur wrapper
lib/
  ristorante-lookup.ts              getRistoranteBySlug() helper (replaces the old Eleventy filter)
  site.ts                           baseUrl constant (local-preview placeholder, updated at deploy time)
  metadata.ts                       buildMetadata() helper — shared per-page SEO/OG/canonical builder
public/
  404.html                          Hand-written static GitHub Pages 404 (independent of Next rendering)
  images/
    ciccio/                         Real photos: ciccio-cucina.jpg, ciccio-ferrari-ristorante.jpg
    ristoranti/                     damplo-mineo-hero.jpg, damplo-monaco-hero.jpg (real); others still missing
scripts/
  check-links.ts                    Cross-reference validation (unique slugs, piatto→ristorante refs), run via tsx
  copy-root-files.mjs               Post-build: copies out/it/index.html → out/index.html
.github/workflows/deploy.yml         GitHub Pages workflow (inactive until a dedicated repo exists)
```

---

## Task 1: Remove Old Implementation and Scaffold Next.js Project

**Files:**
- Delete: `src/`, `.eleventy.js`, `tests/`, `package.json`, `package-lock.json`, `.github/workflows/deploy.yml` (recreated in a later task)
- Create: `package.json`, `tsconfig.json`, `next.config.mjs`, `.gitignore`

- [ ] **Step 1: Preserve the 4 real photos, then remove the old Eleventy implementation**

The old `src/assets/img/` tree contains 4 real, non-regeneratable photos of the actual person this site is about. Copy them into the new project's future asset location FIRST, before deleting anything:

```powershell
New-Item -ItemType Directory -Force public/images/ciccio, public/images/ristoranti
Copy-Item "src/assets/img/ciccio/ciccio-cucina.jpg" "public/images/ciccio/ciccio-cucina.jpg"
Copy-Item "src/assets/img/galleria/ciccio-ferrari-ristorante.jpg" "public/images/ciccio/ciccio-ferrari-ristorante.jpg"
Copy-Item "src/assets/img/ristoranti/damplo-mineo-hero.jpg" "public/images/ristoranti/damplo-mineo-hero.jpg"
Copy-Item "src/assets/img/ristoranti/damplo-monaco-hero.jpg" "public/images/ristoranti/damplo-monaco-hero.jpg"
```

Verify (PowerShell): `Get-Item public/images/ciccio/*.jpg, public/images/ristoranti/*.jpg | Select-Object Name, Length`
Expected: 4 files listed, none with a size of 0.

Now remove the old implementation:
```powershell
Remove-Item -Recurse -Force src, tests, .eleventy.js, package.json, package-lock.json, .github
```

(The git history of the Eleventy implementation — including the original 4 photos — is preserved in prior commits; this is a working-tree deletion, not a history rewrite.)

- [ ] **Step 2: Create `package.json`**

```json
{
  "name": "ciccio-damplo-website",
  "version": "2.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "node scripts/check-links.mjs && next build && node scripts/copy-root-files.mjs"
  },
  "dependencies": {
    "next": "^15.1.0",
    "next-intl": "^3.26.0",
    "motion": "^11.15.0",
    "@phosphor-icons/react": "^2.1.7",
    "react": "^19.0.0",
    "react-dom": "^19.0.0"
  },
  "devDependencies": {
    "@types/node": "^22.10.0",
    "@types/react": "^19.0.0",
    "@types/react-dom": "^19.0.0",
    "autoprefixer": "^10.4.20",
    "postcss": "^8.4.49",
    "tailwindcss": "^3.4.17",
    "typescript": "^5.7.0"
  }
}
```

- [ ] **Step 3: Install dependencies**

Run: `npm install`
Expected: `node_modules/` created, `package-lock.json` created, no errors.

- [ ] **Step 4: Create `tsconfig.json`**

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": false,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

- [ ] **Step 5: Create `.gitignore`**

```
node_modules/
out/
.next/
next-env.d.ts
```

- [ ] **Step 6: Create `next.config.mjs`**

```js
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default withNextIntl(nextConfig);
```

- [ ] **Step 7: Create a minimal smoke-test page to verify the toolchain before adding i18n**

Create `app/page.tsx`:
```tsx
export default function SmokeTestPage() {
  return <h1>Next.js build works</h1>;
}
```

- [ ] **Step 8: Run `npx tsc --noEmit` to verify the TypeScript config is valid**

Run: `npx tsc --noEmit`
Expected: exits 0, no errors (the smoke-test page is the only source file so far).

- [ ] **Step 9: Run the build to verify the toolchain end-to-end**

Run: `npx next build`
Expected: exits 0, prints a route summary including `/` as a static route, creates `out/index.html`.

Run (PowerShell): `Get-Content out/index.html | Select-String "Next.js build works"`
Expected: one matching line.

- [ ] **Step 10: Delete the smoke-test page (it's replaced by the real homepage in a later task)**

Run (PowerShell): `Remove-Item app/page.tsx`

- [ ] **Step 11: Commit**

```bash
git add -A
git commit -m "chore: remove Eleventy implementation, scaffold Next.js project"
```

---

## Task 2: Tailwind, Global Styles, and i18n Configuration

**Files:**
- Create: `tailwind.config.ts`, `postcss.config.mjs`, `app/globals.css`
- Create: `i18n/routing.ts`, `i18n/request.ts`
- Create: `messages/it.json`, `messages/en.json`

- [ ] **Step 1: Create `tailwind.config.ts`**

```ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#050505",
        gold: {
          DEFAULT: "#C9A227",
          bright: "#D4AF37",
        },
        bordeaux: "#5C1A1A",
        cream: "#F2EDE4",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        bezel: "2rem",
      },
    },
  },
  plugins: [],
};

export default config;
```

- [ ] **Step 2: Create `postcss.config.mjs`**

```js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

- [ ] **Step 3: Create `app/globals.css`**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  background-color: #050505;
  color: #F2EDE4;
}
```

- [ ] **Step 4: Create `i18n/routing.ts`**

```ts
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["it", "en"],
  defaultLocale: "it",
});

export type Locale = (typeof routing.locales)[number];
```

- [ ] **Step 5: Create `i18n/request.ts`**

```ts
import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;
  if (!locale || !routing.locales.includes(locale as "it" | "en")) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
```

- [ ] **Step 6: Create `messages/it.json`**

```json
{
  "nav": {
    "home": "Home",
    "biografia": "Biografia",
    "ristoranti": "Ristoranti",
    "premi": "Premi",
    "piatti": "Piatti",
    "press": "Press",
    "galleria": "Galleria",
    "langSwitch": "EN"
  },
  "footer": {
    "disclaimer": "Questo è un sito web fittizio e satirico, creato per scopi di intrattenimento con il consenso di Francesco.",
    "rights": "Tutti i diritti (im)moralmente riservati."
  },
  "meta": {
    "defaultDescription": "Francesco D'Amplo, detto Ciccio Damplo: chef siciliano, imprenditore del lusso culinario, fondatore della catena Damplo."
  }
}
```

- [ ] **Step 7: Create `messages/en.json`**

```json
{
  "nav": {
    "home": "Home",
    "biografia": "Biography",
    "ristoranti": "Restaurants",
    "premi": "Awards",
    "piatti": "Dishes",
    "press": "Press",
    "galleria": "Gallery",
    "langSwitch": "IT"
  },
  "footer": {
    "disclaimer": "This is a fictional satirical website created for entertainment purposes with Francesco's consent.",
    "rights": "All rights (im)morally reserved."
  },
  "meta": {
    "defaultDescription": "Francesco D'Amplo, known as Ciccio Damplo: Sicilian chef, culinary luxury entrepreneur, founder of the Damplo restaurant chain."
  }
}
```

- [ ] **Step 8: Commit**

```bash
git add tailwind.config.ts postcss.config.mjs app/globals.css i18n messages
git commit -m "feat: add Tailwind config, global styles, and next-intl setup"
```

(No build verification yet in this task — there are no pages consuming these files until Task 3. Verification happens there.)

---

## Task 3: Locale Root Layout, Nav, and Footer

**Files:**
- Create: `app/[locale]/layout.tsx`
- Create: `components/Nav.tsx`, `components/Footer.tsx`

- [ ] **Step 1: Create `components/Footer.tsx`**

```tsx
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer
      className="relative border-t border-gold/30 px-6 py-12 text-center text-sm text-cream/85"
      style={{
        backgroundImage:
          "radial-gradient(circle at 50% 0%, rgba(92, 26, 26, 0.12) 0%, transparent 60%)",
      }}
    >
      <p>{t("disclaimer")}</p>
      <p className="mt-2 opacity-75">{t("rights")}</p>
    </footer>
  );
}
```

- [ ] **Step 2: Create `components/Nav.tsx`**

```tsx
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
      <nav className="fixed inset-x-0 top-6 z-40 mx-auto flex w-max items-center gap-6 rounded-full border border-white/10 bg-black/40 px-6 py-3 backdrop-blur-2xl">
        <Link href="/" className="font-display text-sm uppercase tracking-[0.15em] text-gold-bright">
          Ciccio Damplo
        </Link>
        <ul className="hidden items-center gap-5 text-sm md:flex">
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
          className="relative h-5 w-6 md:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          <span
            className={`absolute left-0 top-0 h-px w-6 bg-cream transition-transform duration-500 ${open ? "translate-y-2.5 rotate-45" : ""}`}
          />
          <span
            className={`absolute left-0 top-2.5 h-px w-6 bg-cream transition-opacity duration-500 ${open ? "opacity-0" : "opacity-100"}`}
          />
          <span
            className={`absolute left-0 top-5 h-px w-6 bg-cream transition-transform duration-500 ${open ? "-translate-y-2.5 -rotate-45" : ""}`}
          />
        </button>
      </nav>
      <div
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
```

- [ ] **Step 3: Create `i18n/navigation.ts`** (a small helper `Nav.tsx` depends on — locale-aware `Link`/`usePathname` wrappers from next-intl)

```ts
import { createNavigation } from "next-intl/navigation";
import { routing } from "./routing";

export const { Link, usePathname, useRouter, getPathname } = createNavigation(routing);
```

- [ ] **Step 4: Create `app/[locale]/layout.tsx`**

```tsx
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import { routing } from "@/i18n/routing";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "../globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["400", "500", "600"],
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: "Ciccio Damplo",
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as "it" | "en")) {
    notFound();
  }
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${playfair.variable} ${jakarta.variable}`}>
      <body className="font-sans">
        <NextIntlClientProvider messages={messages}>
          <Nav />
          <main className="pt-32">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
```

- [ ] **Step 5: Create a temporary smoke-test home page to verify the layout renders**

Create `app/[locale]/page.tsx`:
```tsx
export default function HomeSmokeTest() {
  return <h1 className="px-6 text-3xl font-display text-gold-bright">Layout works</h1>;
}
```

- [ ] **Step 6: Run the build and verify both locales render**

Run: `npx next build`
Expected: exits 0, route list includes `/it` and `/en` (or `/it/` and `/en/` with `trailingSlash`), creates `out/it/index.html` and `out/en/index.html`.

Run (PowerShell): `Get-Content out/it/index.html | Select-String "Layout works"`
Expected: one matching line.

Run (PowerShell): `Get-Content out/it/index.html | Select-String 'lang="it"'`
Expected: one matching line.

Run (PowerShell): `Get-Content out/en/index.html | Select-String 'lang="en"'`
Expected: one matching line.

Run (PowerShell): `Get-Content out/it/index.html | Select-String "Ciccio Damplo"`
Expected: at least one matching line (the nav brand link).

- [ ] **Step 7: Commit**

```bash
git add app/[locale]/layout.tsx app/[locale]/page.tsx components/Nav.tsx components/Footer.tsx i18n/navigation.ts
git commit -m "feat: add locale root layout, floating nav, and footer"
```

---

## Task 4: Reusable UI Primitives — Card, PillButton, RevealOnScroll, BentoGrid

**Files:**
- Create: `components/Card.tsx`, `components/PillButton.tsx`, `components/RevealOnScroll.tsx`, `components/BentoGrid.tsx`
- Modify: `app/[locale]/page.tsx` (smoke-test these components, replaced with the real homepage in Task 6)

- [ ] **Step 1: Create `components/Card.tsx`** (the "Double-Bezel" pattern: outer shell + inner core)

```tsx
import { ReactNode } from "react";
import { Link } from "@/i18n/navigation";

export default function Card({
  children,
  href,
  className = "",
}: {
  children: ReactNode;
  href?: string;
  className?: string;
}) {
  const shell = `group block rounded-bezel border border-white/10 bg-white/5 p-1.5 transition-colors duration-500 hover:border-gold/40 ${className}`;
  const core = (
    <div className="rounded-[calc(2rem-0.375rem)] bg-black/40 p-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)] backdrop-blur-xl">
      {children}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className={shell}>
        {core}
      </Link>
    );
  }

  return <div className={shell}>{core}</div>;
}
```

- [ ] **Step 2: Create `components/PillButton.tsx`** (rounded pill, nested icon-circle, ultra-thin Phosphor icon per the spec's icon rule)

```tsx
import { ReactNode } from "react";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { Link } from "@/i18n/navigation";

export default function PillButton({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-3 rounded-full bg-gold/10 px-6 py-3 text-sm text-cream transition-transform duration-300 active:scale-[0.98]"
    >
      <span>{children}</span>
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-px">
        <ArrowUpRight size={16} weight="thin" />
      </span>
    </Link>
  );
}
```

- [ ] **Step 3: Create `components/RevealOnScroll.tsx`** (Framer Motion fade-up + blur on scroll into view)

```tsx
"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";

export default function RevealOnScroll({
  children,
  delay = 0,
}: {
  children: ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 48, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease: [0.32, 0.72, 0, 1] }}
    >
      {children}
    </motion.div>
  );
}
```

- [ ] **Step 4: Create `components/BentoGrid.tsx`** (asymmetric grid — first child spans larger)

```tsx
import { ReactNode } from "react";

export default function BentoGrid({ children }: { children: ReactNode[] }) {
  return (
    <div className="grid grid-cols-1 gap-6 px-6 py-12 md:grid-cols-3">
      {children.map((child, index) => (
        <div key={index} className={index === 0 ? "md:col-span-2 md:row-span-2" : ""}>
          {child}
        </div>
      ))}
    </div>
  );
}
```

- [ ] **Step 5: Wire all four into the smoke-test home page to verify they render together**

Replace `app/[locale]/page.tsx` with:

```tsx
import Card from "@/components/Card";
import PillButton from "@/components/PillButton";
import RevealOnScroll from "@/components/RevealOnScroll";
import BentoGrid from "@/components/BentoGrid";

export default function HomeSmokeTest() {
  return (
    <div className="px-6">
      <RevealOnScroll>
        <h1 className="font-display text-3xl text-gold-bright">Layout works</h1>
      </RevealOnScroll>
      <BentoGrid>
        <Card href="/biografia">Card one (spans larger)</Card>
        <Card href="/biografia">Card two</Card>
        <Card href="/biografia">Card three</Card>
      </BentoGrid>
      <PillButton href="/biografia">Scopri di più</PillButton>
    </div>
  );
}
```

- [ ] **Step 6: Run the build and verify it still succeeds with the new components**

Run: `npx next build`
Expected: exits 0, no TypeScript errors, `out/it/index.html` and `out/en/index.html` regenerated.

Run (PowerShell): `Get-Content out/it/index.html | Select-String "Card one"`
Expected: one matching line.

Run (PowerShell): `Get-Content out/it/index.html | Select-String 'href="/it/biografia/"'`
Expected: at least 4 matching lines (3 cards + 1 pill button, all linking to the same href in this smoke test).

- [ ] **Step 7: Commit**

```bash
git add components/Card.tsx components/PillButton.tsx components/RevealOnScroll.tsx components/BentoGrid.tsx app/[locale]/page.tsx
git commit -m "feat: add Card, PillButton, RevealOnScroll, and BentoGrid primitives"
```

---

## Task 5: Singleton Content — Home, Biografia, 404 Copy

**Files:**
- Create: `content/home.ts`, `content/biografia.ts`, `content/notFound.ts`

These three carry over the exact bilingual text already written and approved for the Eleventy version (including the Michelin-star-count fix: the bio says "dodici"/"twelve", matching the 4 restaurants' star counts of 3+4+3+2=12 from Task 9).

- [ ] **Step 1: Create `content/home.ts`**

```ts
export const home = {
  it: {
    heading: "Francesco D'Amplo",
    subheading: "Chef, visionario, imprenditore del lusso siciliano.",
    intro: "Quattro ristoranti, tre continenti, e un numero di stelle Michelin che lui stesso ha perso il conto. Benvenuti nel mondo di Ciccio Damplo.",
    quote: "“La cucina siciliana non si cucina. Si dirige, come un film.” — Francesco D'Amplo",
  },
  en: {
    heading: "Francesco D'Amplo",
    subheading: "Chef, visionary, Sicilian luxury entrepreneur.",
    intro: "Four restaurants, three continents, and a number of Michelin stars even he has lost count of. Welcome to the world of Ciccio Damplo.",
    quote: "“Sicilian cuisine isn't cooked. It's directed, like a film.” — Francesco D'Amplo",
  },
} as const;
```

- [ ] **Step 2: Create `content/biografia.ts`**

```ts
export const biografia = {
  it: {
    title: "Francesco D'Amplo — Il Visionario di Mineo",
    paragraphs: [
      "Nato a Mineo, in provincia di Catania, in una notte di novembre in cui — si racconta — anche l'Etna si fermò a sentire l'odore del soffritto di casa D'Amplo, Francesco mostrò fin da bambino un rapporto quasi mistico con il cibo. A sette anni preparava già la sua prima Caponata Concettuale. A dodici, fu temporaneamente sospeso dalla scuola elementare per aver tentato di brevettare la “Granita a Doppia Cottura Inversa”.",
      "Dopo un apprendistato leggendario nelle cucine di tre trattorie di Mineo (di cui due chiuse poco dopo il suo passaggio, per ragioni che lui definisce ‘gelosia professionale’), Francesco capì che il suo destino non era restare in Sicilia: era portare la Sicilia al mondo, una porzione di arancino alla volta. Nel 2009 apre il primo Damplo. Oggi la catena conta quattro location, dodici stelle Michelin (autoassegnate, ma con grande convinzione) e un numero di fan club non meglio precisato.",
      "‘La cucina siciliana,’ ama ripetere Ciccio, ‘non si cucina. Si dirige, come un film. E io sono il regista, il protagonista, e spesso anche il catering.’ La sua filosofia, battezzata ‘Decostruzionismo Affettivo Mediterraneo’, consiste nel prendere un piatto della nonna e renderlo irriconoscibile fino a farlo costare quanto un'automobile usata.",
      "Oggi Francesco D'Amplo non è più solo un uomo. È un brand, un'emozione, un hashtag. Tra un volo per Dubai e una diretta Instagram dalla sua cucina di Monaco, continua a ripetere la stessa promessa ai suoi clienti: ‘Vi farò piangere. Di gusto, ovviamente.’",
    ],
  },
  en: {
    title: "Francesco D'Amplo — The Visionary of Mineo",
    paragraphs: [
      "Born in Mineo, in the province of Catania, on a November night when — as the story goes — even Mount Etna paused to catch the scent of the D'Amplo family's soffritto, Francesco showed an almost mystical relationship with food from childhood. At seven, he was already preparing his first Conceptual Caponata. At twelve, he was briefly suspended from elementary school for attempting to patent “Reverse Double-Reduction Granita.”",
      "After a legendary apprenticeship in three trattorias in Mineo (two of which closed shortly after his departure, for reasons he describes as ‘professional jealousy’), Francesco realized his destiny wasn't to stay in Sicily — it was to bring Sicily to the world, one arancino at a time. In 2009 he opened the first Damplo. Today the chain spans four locations, twelve Michelin stars (self-awarded, but with great conviction), and an unspecified number of fan clubs.",
      "‘Sicilian cuisine,’ Ciccio likes to say, ‘isn't cooked. It's directed — like a film. And I am the director, the lead actor, and often the catering too.’ His philosophy, christened ‘Mediterranean Affective Deconstructionism,’ consists of taking a grandmother's recipe and rendering it unrecognizable, until it costs about as much as a used car.",
      "Today, Francesco D'Amplo is no longer just a man. He is a brand, an emotion, a hashtag. Between a flight to Dubai and an Instagram livestream from his kitchen in Monaco, he keeps repeating the same promise to his guests: ‘I will make you cry. Of flavor, obviously.’",
    ],
  },
} as const;
```

- [ ] **Step 3: Create `content/notFound.ts`**

```ts
export const notFound = {
  it: {
    title: "404 — Piatto Non Disponibile",
    message: "Questo piatto non è nel menu. Forse Ciccio l'ha deconstruito così tanto che è scomparso del tutto. Torna alla Home e prova qualcosa che esiste davvero.",
    cta: "Torna alla Home",
  },
  en: {
    title: "404 — Dish Not Available",
    message: "This dish isn't on the menu. Maybe Ciccio deconstructed it so much it disappeared entirely. Head back to the Home page and try something that actually exists.",
    cta: "Back to Home",
  },
} as const;
```

- [ ] **Step 4: Verify TypeScript compiles**

Run: `npx tsc --noEmit`
Expected: exits 0, no errors.

- [ ] **Step 5: Commit**

```bash
git add content/home.ts content/biografia.ts content/notFound.ts
git commit -m "feat: add home, biografia, and 404 bilingual content"
```

---

## Task 6: Home Page

**Files:**
- Modify: `app/[locale]/page.tsx` (replace the smoke test with the real homepage)

- [ ] **Step 1: Replace `app/[locale]/page.tsx`**

```tsx
import { getLocale } from "next-intl/server";
import { home } from "@/content/home";
import RevealOnScroll from "@/components/RevealOnScroll";
import PillButton from "@/components/PillButton";

export default async function HomePage() {
  const locale = (await getLocale()) as "it" | "en";
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
```

- [ ] **Step 2: Run the build and verify both locales render the real content**

Run: `npx next build`
Expected: exits 0.

Run (PowerShell): `Get-Content out/it/index.html | Select-String "Chef, visionario"`
Expected: one matching line.

Run (PowerShell): `Get-Content out/en/index.html | Select-String "Sicilian luxury entrepreneur"`
Expected: one matching line.

Run (PowerShell): `Get-Content out/it/index.html | Select-String "ciccio-cucina.jpg"`
Expected: one matching line (the hero background-image URL).

Run (PowerShell): `Test-Path out/images/ciccio/ciccio-cucina.jpg`
Expected: `True` (confirms Next.js copied `public/images/` into the export output).

Run (PowerShell): `Get-Content out/it/index.html | Select-String 'href="/it/ristoranti/"'`
Expected: one matching line (the "Scopri i ristoranti" pill-button CTA).

- [ ] **Step 3: Commit**

```bash
git add app/[locale]/page.tsx
git commit -m "feat: add real bilingual home page with hero photo"
```

---

## Task 7: Biografia Page

**Files:**
- Create: `app/[locale]/biografia/page.tsx`

- [ ] **Step 1: Create `app/[locale]/biografia/page.tsx`**

```tsx
import { getLocale } from "next-intl/server";
import { biografia } from "@/content/biografia";
import RevealOnScroll from "@/components/RevealOnScroll";

export default async function BiografiaPage() {
  const locale = (await getLocale()) as "it" | "en";
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
```

- [ ] **Step 2: Run the build and verify both locales**

Run: `npx next build`
Expected: exits 0, route list includes `/[locale]/biografia`.

Run (PowerShell): `Get-Content out/it/biografia/index.html | Select-String "Decostruzionismo Affettivo"`
Expected: one matching line.

Run (PowerShell): `Get-Content out/en/biografia/index.html | Select-String "Mediterranean Affective Deconstructionism"`
Expected: one matching line.

- [ ] **Step 3: Commit**

```bash
git add app/[locale]/biografia/page.tsx
git commit -m "feat: add bilingual biografia page"
```

---

## Task 8: Themed 404 Page

**Files:**
- Create: `app/[locale]/not-found.tsx`

**Known area of uncertainty (read before starting):** Next.js's static export (`output: 'export'`) has a known fiddly interaction with nested `not-found.tsx` files inside a dynamic `[locale]` segment — it's not 100% guaranteed in advance which exact static file(s) get generated for it (whether per-locale 404 variants are pre-rendered as static files, or whether only client-side-navigation 404s work and a hard page load of a bad URL needs a different mechanism). Treat the verification step below as a genuine investigation, not a formality. If the build output doesn't contain what's expected, do not guess additional fixes — report back precisely what you found in `out/` instead (DONE_WITH_CONCERNS), so the next task (which wires up the root `/404.html` for GitHub Pages) can be adapted to whatever actually exists.

- [ ] **Step 1: Create `app/[locale]/not-found.tsx`**

```tsx
import { getLocale } from "next-intl/server";
import { notFound } from "@/content/notFound";
import { Link } from "@/i18n/navigation";

export default async function NotFound() {
  const locale = (await getLocale()) as "it" | "en";
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
```

- [ ] **Step 2: Run the build**

Run: `npx next build`
Expected: exits 0.

- [ ] **Step 3: Investigate what the build actually produced for not-found pages**

Run (PowerShell): `Get-ChildItem -Recurse out -Filter "*404*"`

List every file this returns. There is no single "expected" answer here — record what you actually see (e.g., a single root `out/404.html`, or per-locale files, or both) in your final report for this task, since the next task depends on knowing the real file layout.

- [ ] **Step 4: Verify the in-app 404 component itself renders correctly when reached via dev mode (this works regardless of how static export handles it)**

Run: `npx next dev` in the background (e.g. `Start-Job -ScriptBlock { Set-Location "<repo path>"; npx next dev }`, wait a few seconds), then:

Run (PowerShell): `(Invoke-WebRequest -Uri "http://localhost:3000/it/this-page-does-not-exist-xyz/" -UseBasicParsing -SkipHttpErrorCheck).Content | Select-String "Piatto Non Disponibile"`
Expected: one matching line — confirms the themed Italian 404 component renders correctly for an unmatched route under `/it/`.

Run (PowerShell): `(Invoke-WebRequest -Uri "http://localhost:3000/en/this-page-does-not-exist-xyz/" -UseBasicParsing -SkipHttpErrorCheck).Content | Select-String "Dish Not Available"`
Expected: one matching line — confirms the English variant.

Stop the dev server (`Stop-Job`/`Remove-Job`, or close the background job) when done.

- [ ] **Step 5: Commit**

```bash
git add app/[locale]/not-found.tsx
git commit -m "feat: add themed bilingual 404 page"
```

---

## Task 9: Ristoranti Content and Index Page

**Files:**
- Create: `content/ristoranti.ts`
- Create: `app/[locale]/ristoranti/page.tsx`

- [ ] **Step 1: Create `content/ristoranti.ts`**

```ts
export type Ristorante = {
  slug: string;
  nome: string;
  citta: { it: string; en: string };
  tagline: { it: string; en: string };
  descrizione: { it: string; en: string };
  stelleMichelinFinte: number;
};

export const ristoranti: Ristorante[] = [
  {
    slug: "damplo-mineo",
    nome: "Damplo Mineo",
    citta: { it: "Mineo, Sicilia", en: "Mineo, Sicily" },
    tagline: {
      it: "Dove tutto è iniziato, tra un ulivo e un certificato di laurea mai ritirato.",
      en: "Where it all began, between an olive tree and a diploma he never picked up.",
    },
    descrizione: {
      it: "Il ristorante madre. Qui Ciccio ha inventato il concetto di “menu emotivo a sorpresa”, dove il prezzo del piatto varia in base a quanto il cliente sembra apprezzarlo guardandolo negli occhi. Vista panoramica sulla Piana di Catania, arredamento in pietra lavica e velluto verde smeraldo, playlist a base di tammurriata remixata in chiave lounge.",
      en: "The mother restaurant. Here Ciccio invented the concept of the “surprise emotional menu,” where the price of a dish varies depending on how much the guest seems to appreciate it while making eye contact. Panoramic views of the Catania plain, lava-stone and emerald velvet interiors, a soundtrack of tammurriata remixed into lounge music.",
    },
    stelleMichelinFinte: 3,
  },
  {
    slug: "damplo-dubai",
    nome: "Damplo Dubai",
    citta: { it: "Dubai, Emirati Arabi Uniti", en: "Dubai, UAE" },
    tagline: {
      it: "La Sicilia, ma con l'oro vero.",
      en: "Sicily, but with real gold.",
    },
    descrizione: {
      it: "All'ultimo piano di una torre che Ciccio descrive come “più alta della mia autostima, e non è poco”. Qui l'arancino viene servito su un piedistallo di marmo con tanto di luce spot dedicata. La carta dei vini è scritta interamente in caratteri dorati, anche le pagine che elencano l'acqua.",
      en: "On the top floor of a tower Ciccio describes as “taller than my self-esteem, and that's saying something.” Here the arancino is served on a marble pedestal under its own dedicated spotlight. The wine list is printed entirely in gold lettering — even the page listing the water.",
    },
    stelleMichelinFinte: 4,
  },
  {
    slug: "damplo-monaco",
    nome: "Damplo Monaco",
    citta: { it: "Monte-Carlo, Monaco", en: "Monte-Carlo, Monaco" },
    tagline: {
      it: "Per chi ha già tutto, tranne un buon arancino.",
      en: "For those who have everything, except a good arancino.",
    },
    descrizione: {
      it: "Affacciato sul porto degli yacht, Damplo Monaco è il luogo dove principi, ex calciatori e influencer si contendono il tavolo accanto alla cucina a vista, l'unico posto dove si può guardare Ciccio piangere mentre assaggia la propria Pasta alla Norma.",
      en: "Overlooking the yacht harbor, Damplo Monaco is where princes, retired footballers, and influencers fight over the table next to the open kitchen — the only seat from which you can watch Ciccio cry while tasting his own Pasta alla Norma.",
    },
    stelleMichelinFinte: 3,
  },
  {
    slug: "damplo-new-york",
    nome: "Damplo New York",
    citta: { it: "New York, Stati Uniti", en: "New York, USA" },
    tagline: {
      it: "L'arancino conquista Manhattan. Manhattan si arrende.",
      en: "The arancino conquers Manhattan. Manhattan surrenders.",
    },
    descrizione: {
      it: "Nel cuore di Manhattan, tra un grattacielo e un altro, Damplo New York porta il lusso siciliano a chi non sa ancora cosa sia un cannolo ma è disposto a pagare 45 dollari per scoprirlo. Menu in inglese, urla in siciliano, conto in entrambe le lingue.",
      en: "In the heart of Manhattan, between one skyscraper and the next, Damplo New York brings Sicilian luxury to those who don't yet know what a cannolo is but are willing to pay $45 to find out. Menu in English, shouting in Sicilian, the bill in both languages.",
    },
    stelleMichelinFinte: 2,
  },
];
```

- [ ] **Step 2: Create `app/[locale]/ristoranti/page.tsx`**

```tsx
import { getLocale } from "next-intl/server";
import { ristoranti } from "@/content/ristoranti";
import BentoGrid from "@/components/BentoGrid";
import Card from "@/components/Card";
import RevealOnScroll from "@/components/RevealOnScroll";

export default async function RistorantiPage() {
  const locale = (await getLocale()) as "it" | "en";

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
```

- [ ] **Step 3: Run the build and verify**

Run: `npx next build`
Expected: exits 0.

Run (PowerShell): `Get-Content out/it/ristoranti/index.html | Select-String "Damplo Dubai"`
Expected: one matching line.

Run (PowerShell): `Get-Content out/en/ristoranti/index.html | Select-String "Sicily, but with real gold"`
Expected: one matching line.

Run (PowerShell): `Get-Content out/it/ristoranti/index.html | Select-String 'href="/it/ristoranti/damplo-mineo/"'`
Expected: one matching line (confirms the card link is correctly locale-prefixed).

- [ ] **Step 4: Commit**

```bash
git add content/ristoranti.ts app/[locale]/ristoranti/page.tsx
git commit -m "feat: add ristoranti content and bento-grid index page"
```

---

## Task 10: Ristoranti Detail Pages

**Files:**
- Create: `lib/ristorante-lookup.ts`
- Create: `app/[locale]/ristoranti/[slug]/page.tsx`

- [ ] **Step 1: Create `lib/ristorante-lookup.ts`**

```ts
import { ristoranti } from "@/content/ristoranti";

export function getRistoranteBySlug(slug: string) {
  return ristoranti.find((ristorante) => ristorante.slug === slug);
}
```

- [ ] **Step 2: Create `app/[locale]/ristoranti/[slug]/page.tsx`**

```tsx
import { getLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { ristoranti } from "@/content/ristoranti";
import { getRistoranteBySlug } from "@/lib/ristorante-lookup";
import RevealOnScroll from "@/components/RevealOnScroll";

export function generateStaticParams() {
  return ristoranti.map((ristorante) => ({ slug: ristorante.slug }));
}

export default async function RistoranteDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const locale = (await getLocale()) as "it" | "en";
  const ristorante = getRistoranteBySlug(slug);

  if (!ristorante) {
    notFound();
  }

  return (
    <div>
      <section
        className="relative flex min-h-[60dvh] items-end overflow-hidden rounded-b-bezel px-6 pb-12"
        style={{
          backgroundImage: `url('/images/ristoranti/${ristorante.slug}-hero.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-transparent" />
        <RevealOnScroll>
          <div className="relative z-10">
            <h1 className="font-display text-4xl uppercase tracking-wide text-gold-bright">
              {ristorante.nome}
            </h1>
            <p className="mt-2 text-cream/80">{ristorante.citta[locale]}</p>
          </div>
        </RevealOnScroll>
      </section>
      <RevealOnScroll>
        <section className="mx-auto max-w-3xl px-6 py-16">
          <p className="font-display text-xl italic text-gold-bright">{ristorante.tagline[locale]}</p>
          <p className="mt-6 text-lg text-cream/90">{ristorante.descrizione[locale]}</p>
          <p className="mt-6 text-cream/80">
            {"★".repeat(ristorante.stelleMichelinFinte)}{" "}
            {locale === "it"
              ? `(${ristorante.stelleMichelinFinte} stelle Michelin, finte)`
              : `(${ristorante.stelleMichelinFinte} fictional Michelin stars)`}
          </p>
        </section>
      </RevealOnScroll>
    </div>
  );
}
```

(The hero image path for `damplo-mineo` and `damplo-monaco` resolves to the two real photos already copied into `public/images/ristoranti/` in Task 1. `damplo-dubai` and `damplo-new-york` reference files that don't exist yet — that's expected, the AI-image-generation step is deferred in this project, same as it was for the Eleventy build. A missing background-image simply renders as the gradient-only section, no broken-image icon, since it's a CSS `background-image`, not an `<img>` tag.)

- [ ] **Step 3: Run the build and verify all 8 detail pages**

Run: `npx next build`
Expected: exits 0, route list includes `/[locale]/ristoranti/[slug]` generating 4 slugs × 2 locales = 8 pages.

Run (PowerShell): `Test-Path out/it/ristoranti/damplo-dubai/index.html, out/en/ristoranti/damplo-dubai/index.html`
Expected: `True` twice.

Run (PowerShell): `Get-Content out/it/ristoranti/damplo-dubai/index.html | Select-String "oro vero"`
Expected: one matching line.

Run (PowerShell): `Test-Path out/it/ristoranti/damplo-mineo/index.html`
Expected: `True`; also confirm the real photo is referenced: `Get-Content out/it/ristoranti/damplo-mineo/index.html | Select-String "damplo-mineo-hero.jpg"` → one matching line.

- [ ] **Step 4: Commit**

```bash
git add lib/ristorante-lookup.ts "app/[locale]/ristoranti/[slug]/page.tsx"
git commit -m "feat: add ristoranti detail pages"
```

---

## Task 11: Piatti Content and Index Page

**Files:**
- Create: `content/piatti.ts`
- Create: `app/[locale]/piatti/page.tsx`

- [ ] **Step 1: Create `content/piatti.ts`**

```ts
export type Piatto = {
  slug: string;
  nome: string;
  sottotitoloIronico: { it: string; en: string };
  descrizione: { it: string; en: string };
  prezzoAssurdo: { it: string; en: string };
  ristoranteOrigine: string;
};

export const piatti: Piatto[] = [
  {
    slug: "arancino-decostruito",
    nome: "Arancino Decostruito al Profumo di Lamborghini",
    sottotitoloIronico: {
      it: "Non si guida. Si assapora.",
      en: "You don't drive it. You savor it.",
    },
    descrizione: {
      it: "Riso, ragù e zafferano separati in tre composizioni distinte su un piatto che costa più del piatto stesso. Il “profumo di Lamborghini” è in realtà un olio essenziale al cuoio creato apposta dal nostro profumiere personale. Nessuna automobile è stata utilizzata nella preparazione, ma molte sono state menzionate.",
      en: "Rice, ragù, and saffron separated into three distinct compositions on a plate that costs more than the plate. The “Lamborghini scent” is actually a custom leather essential oil created by our personal perfumer. No automobiles were used in the making of this dish, but several were name-dropped.",
    },
    prezzoAssurdo: {
      it: "€ 180 — gomma da masticare in omaggio",
      en: "€180 — complimentary chewing gum included",
    },
    ristoranteOrigine: "damplo-dubai",
  },
  {
    slug: "pasta-alla-norma-riserva-privata",
    nome: "Pasta alla Norma Riserva Privata",
    sottotitoloIronico: {
      it: "La nonna approverebbe. Forse.",
      en: "Grandma would approve. Maybe.",
    },
    descrizione: {
      it: "La classica Norma, ma invecchiata 18 mesi in botte — non gli ingredienti, il piatto stesso, che viene servito solo dopo essere stato fotografato professionalmente per un anno e mezzo. Melanzane affumicate a vista del cliente, con cerimonia dedicata.",
      en: "The classic Norma, but barrel-aged for 18 months — not the ingredients, the dish itself, which is only served after being professionally photographed for a year and a half. Eggplant smoked tableside, with its own dedicated ceremony.",
    },
    prezzoAssurdo: {
      it: "€ 95 a porzione, certificato di autenticità incluso",
      en: "€95 per portion, certificate of authenticity included",
    },
    ristoranteOrigine: "damplo-mineo",
  },
  {
    slug: "cannolo-omakase-experience",
    nome: "Cannolo Omakase Experience",
    sottotitoloIronico: {
      it: "Sette cannoli. Sette atti. Un solo finale di lacrime.",
      en: "Seven cannoli. Seven acts. One tearful finale.",
    },
    descrizione: {
      it: "Sette cannoli in sequenza narrativa, ciascuno a rappresentare una fase della vita di Ciccio. Il quarto cannolo è dedicato al periodo in cui ha “quasi” apprezzato il pistacchio non siciliano, prima di pentirsene pubblicamente.",
      en: "Seven cannoli served as a narrative sequence, each representing a stage in Ciccio's life. The fourth cannolo is dedicated to the brief period he “almost” appreciated non-Sicilian pistachio, before publicly renouncing it.",
    },
    prezzoAssurdo: {
      it: "€ 220, prenotazione richiesta con tre mesi di anticipo emotivo",
      en: "€220, booking requires three months of emotional advance notice",
    },
    ristoranteOrigine: "damplo-monaco",
  },
  {
    slug: "granita-affumicata-al-caviale",
    nome: "Granita Affumicata al Caviale",
    sottotitoloIronico: {
      it: "La colazione che non ti meriti, ma che pagherai comunque.",
      en: "The breakfast you don't deserve, but will pay for anyway.",
    },
    descrizione: {
      it: "La granita siciliana tradizionale, affumicata con legno di carrubo importato e coronata da una generosa quantità di caviale, perché “a Ciccio piace contrastare”. Servita con brioscia intagliata a mano da un artigiano che ha smesso di fare altro nella vita.",
      en: "Traditional Sicilian granita, smoked over imported carob wood and crowned with a generous helping of caviar, because “Ciccio likes contrast.” Served with a hand-carved brioche made by an artisan who has given up doing anything else in life.",
    },
    prezzoAssurdo: {
      it: "€ 65, caviale aggiuntivo a richiesta (sconsigliato dal cardiologo)",
      en: "€65, extra caviar on request (not recommended by your cardiologist)",
    },
    ristoranteOrigine: "damplo-new-york",
  },
];
```

- [ ] **Step 2: Create `app/[locale]/piatti/page.tsx`**

```tsx
import { getLocale } from "next-intl/server";
import { piatti } from "@/content/piatti";
import BentoGrid from "@/components/BentoGrid";
import Card from "@/components/Card";
import RevealOnScroll from "@/components/RevealOnScroll";

export default async function PiattiPage() {
  const locale = (await getLocale()) as "it" | "en";

  return (
    <div>
      <RevealOnScroll>
        <h1 className="px-6 pt-12 text-center font-display text-3xl uppercase tracking-wide text-gold-bright md:text-5xl">
          {locale === "it" ? "Piatti Iconici" : "Iconic Dishes"}
        </h1>
      </RevealOnScroll>
      <BentoGrid>
        {piatti.map((piatto) => (
          <Card key={piatto.slug} href={`/piatti/${piatto.slug}`}>
            <h2 className="font-display text-xl text-gold-bright">{piatto.nome}</h2>
            <p className="mt-4 font-display italic text-cream/90">{piatto.sottotitoloIronico[locale]}</p>
            <p className="mt-4 text-sm text-cream/70">{piatto.prezzoAssurdo[locale]}</p>
          </Card>
        ))}
      </BentoGrid>
    </div>
  );
}
```

- [ ] **Step 3: Run the build and verify**

Run: `npx next build`
Expected: exits 0.

Run (PowerShell): `Get-Content out/it/piatti/index.html | Select-String "Lamborghini"`
Expected: one matching line.

Run (PowerShell): `Get-Content out/en/piatti/index.html | Select-String "complimentary chewing gum"`
Expected: one matching line.

- [ ] **Step 4: Commit**

```bash
git add content/piatti.ts app/[locale]/piatti/page.tsx
git commit -m "feat: add piatti content and bento-grid index page"
```

---

## Task 12: Piatti Detail Pages (with Restaurant Cross-Link)

**Files:**
- Create: `app/[locale]/piatti/[slug]/page.tsx`

- [ ] **Step 1: Create `app/[locale]/piatti/[slug]/page.tsx`**

```tsx
import { getLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { piatti } from "@/content/piatti";
import { getRistoranteBySlug } from "@/lib/ristorante-lookup";
import { Link } from "@/i18n/navigation";
import RevealOnScroll from "@/components/RevealOnScroll";

export function generateStaticParams() {
  return piatti.map((piatto) => ({ slug: piatto.slug }));
}

export default async function PiattoDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const locale = (await getLocale()) as "it" | "en";
  const piatto = piatti.find((item) => item.slug === slug);

  if (!piatto) {
    notFound();
  }

  const ristorante = getRistoranteBySlug(piatto.ristoranteOrigine);

  return (
    <div>
      <section
        className="relative flex min-h-[50dvh] items-end overflow-hidden rounded-b-bezel px-6 pb-12"
        style={{
          backgroundImage: `url('/images/piatti/${piatto.slug}.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-transparent" />
        <RevealOnScroll>
          <div className="relative z-10">
            <h1 className="font-display text-3xl uppercase tracking-wide text-gold-bright md:text-4xl">
              {piatto.nome}
            </h1>
            <p className="mt-2 font-display italic text-cream/90">{piatto.sottotitoloIronico[locale]}</p>
          </div>
        </RevealOnScroll>
      </section>
      <RevealOnScroll>
        <section className="mx-auto max-w-3xl px-6 py-16">
          <p className="text-lg text-cream/90">{piatto.descrizione[locale]}</p>
          <p className="mt-6 font-display text-xl text-gold-bright">{piatto.prezzoAssurdo[locale]}</p>
          {ristorante && (
            <p className="mt-6 text-cream/80">
              {locale === "it" ? "Disponibile presso " : "Available at "}
              <Link href={`/ristoranti/${ristorante.slug}`} className="text-gold underline">
                {ristorante.nome}
              </Link>
            </p>
          )}
        </section>
      </RevealOnScroll>
    </div>
  );
}
```

(`/images/piatti/{slug}.jpg` doesn't exist for any of the 4 dishes yet — expected, deferred AI-image generation, same as the ristoranti Dubai/New-York heroes.)

- [ ] **Step 2: Run the build and verify the cross-link resolves**

Run: `npx next build`
Expected: exits 0, 4 slugs × 2 locales = 8 pages generated.

Run (PowerShell): `Get-Content out/it/piatti/arancino-decostruito/index.html | Select-String 'href="/it/ristoranti/damplo-dubai/"'`
Expected: one matching line.

Run (PowerShell): `Get-Content out/en/piatti/granita-affumicata-al-caviale/index.html | Select-String "Damplo New York"`
Expected: one matching line.

- [ ] **Step 3: Commit**

```bash
git add "app/[locale]/piatti/[slug]/page.tsx"
git commit -m "feat: add piatti detail pages with restaurant cross-link"
```

---

## Task 13: Premi Content and Page

**Files:**
- Create: `content/premi.ts`
- Create: `app/[locale]/premi/page.tsx`

- [ ] **Step 1: Create `content/premi.ts`**

```ts
export type Premio = {
  nome: { it: string; en: string };
  anno: number;
  ente: { it: string; en: string };
};

export const premi: Premio[] = [
  { nome: { it: "Tre Stelle Michelin (Autoassegnate)", en: "Three Michelin Stars (Self-Awarded)" }, anno: 2015, ente: { it: "Guida Michelin (versione di Ciccio)", en: "Michelin Guide (Ciccio's Version)" } },
  { nome: { it: "Golden Cannoli Awards — Miglior Chef Emotivo", en: "Golden Cannoli Awards — Most Emotional Chef" }, anno: 2017, ente: { it: "Golden Cannoli Awards", en: "Golden Cannoli Awards" } },
  { nome: { it: "Best Emotional Pasta Experience", en: "Best Emotional Pasta Experience" }, anno: 2018, ente: { it: "International Pasta Feelings Council", en: "International Pasta Feelings Council" } },
  { nome: { it: "Forbes 30 Under 30 — Edizione Mineo", en: "Forbes 30 Under 30 — Mineo Edition" }, anno: 2012, ente: { it: "Forbes (Edizione Locale Non Verificata)", en: "Forbes (Unverified Local Edition)" } },
  { nome: { it: "Medaglia Internazionale di Eccellenza dell'Arancino", en: "International Arancino Excellence Medal" }, anno: 2019, ente: { it: "Federazione Mondiale dell'Arancino", en: "World Arancino Federation" } },
  { nome: { it: "Miglior Ristorante del Mediterraneo (a detta sua)", en: "Best Restaurant in the Mediterranean (according to him)" }, anno: 2020, ente: { it: "Sicilian Luxury Digest", en: "Sicilian Luxury Digest" } },
  { nome: { it: "Premio alla Carriera per Sofferenza Culinaria", en: "Lifetime Achievement Award for Culinary Suffering" }, anno: 2021, ente: { it: "Arancino Business Review", en: "Arancino Business Review" } },
  { nome: { it: "Cucchiaio d'Oro Mediterraneo", en: "Mediterranean Golden Spoon" }, anno: 2022, ente: { it: "Il Sole 24 Arancini", en: "Il Sole 24 Arancini" } },
  { nome: { it: "Ambasciatore Onorario del Pistacchio Siciliano", en: "Honorary Ambassador of Sicilian Pistachio" }, anno: 2023, ente: { it: "Consorzio Immaginario del Pistacchio", en: "Imaginary Pistachio Consortium" } },
];
```

- [ ] **Step 2: Create `app/[locale]/premi/page.tsx`** (single list, not a Bento grid — same intentional choice as the Eleventy version)

```tsx
import { getLocale } from "next-intl/server";
import { premi } from "@/content/premi";
import RevealOnScroll from "@/components/RevealOnScroll";

export default async function PremiPage() {
  const locale = (await getLocale()) as "it" | "en";

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
```

- [ ] **Step 3: Run the build and verify**

Run: `npx next build`
Expected: exits 0.

Run (PowerShell): `Get-Content out/it/premi/index.html | Select-String "Golden Cannoli Awards"`
Expected: one matching line.

Run (PowerShell): `Get-Content out/en/premi/index.html | Select-String "Honorary Ambassador of Sicilian Pistachio"`
Expected: one matching line.

- [ ] **Step 4: Commit**

```bash
git add content/premi.ts app/[locale]/premi/page.tsx
git commit -m "feat: add premi page"
```

---

## Task 14: Press Content and Index Page

**Files:**
- Create: `content/press.ts`
- Create: `app/[locale]/press/page.tsx`

- [ ] **Step 1: Create `content/press.ts`**

```ts
export type ArticoloPress = {
  slug: string;
  testata: string;
  titolo: { it: string; en: string };
  estratto: { it: string; en: string };
  data: string;
  corpo: { it: string[]; en: string[] };
};

export const press: ArticoloPress[] = [
  {
    slug: "the-mineo-times-il-figlio-di-mineo",
    testata: "The Mineo Times",
    titolo: {
      it: "Il Figlio di Mineo Conquista il Mondo (e Anche Dubai)",
      en: "Mineo's Son Conquers the World (and Also Dubai)",
    },
    estratto: {
      it: "Dalla cucina di una nonna a quattro ristoranti su tre continenti: la storia di Francesco D'Amplo è la prova che, a Mineo, i sogni si fanno in pentola.",
      en: "From a grandmother's kitchen to four restaurants across three continents: Francesco D'Amplo's story proves that in Mineo, dreams are made in a pot.",
    },
    data: "2023-04-12",
    corpo: {
      it: [
        "Quando Francesco D'Amplo lasciò Mineo nel 2008 con una valigia e una ricetta di caponata “rivista”, nessuno avrebbe immaginato che quindici anni dopo il suo nome sarebbe apparso su un grattacielo a Dubai.",
        "“Non sono mai andato via da Mineo,” ha dichiarato Ciccio durante un'intervista esclusiva concessa al nostro giornale dal sedile in pelle del suo jet privato. “Mineo è venuta con me. In ogni arancino che servo, c'è un pezzo della Piana di Catania. E anche un po' di oro, ultimamente.”",
        "Il sindaco di Mineo ha commentato: “Siamo orgogliosi di Francesco. Anche se non siamo sicurissimi di cosa faccia esattamente, ogni tanto ci manda foto di piatti che costano più della pensione di mio nonno.”",
      ],
      en: [
        "When Francesco D'Amplo left Mineo in 2008 with a suitcase and a “revised” caponata recipe, nobody could have imagined that fifteen years later his name would appear on a skyscraper in Dubai.",
        "“I never really left Mineo,” Ciccio declared in an exclusive interview granted to our newspaper from the leather seat of his private jet. “Mineo came with me. In every arancino I serve, there's a piece of the Catania plain. And lately, also a bit of gold.”",
        "The mayor of Mineo commented: “We're proud of Francesco. Although we're not entirely sure what he does exactly, every so often he sends us photos of dishes that cost more than my grandfather's pension.”",
      ],
    },
  },
  {
    slug: "sicilian-luxury-digest-il-lusso-ha-un-nuovo-accento",
    testata: "Sicilian Luxury Digest",
    titolo: {
      it: "Il Lusso Ha un Nuovo Accento (Ed È Catanese)",
      en: "Luxury Has a New Accent (And It's From Catania)",
    },
    estratto: {
      it: "Damplo Monaco si è imposto come il tavolo più richiesto della Costa Azzurra, complice un menu che fa piangere — letteralmente — anche i palati più blasonati.",
      en: "Damplo Monaco has established itself as the most sought-after table on the French Riviera, helped by a menu that makes even the most distinguished palates — literally — cry.",
    },
    data: "2023-07-02",
    corpo: {
      it: [
        "Tra i tavoli di Damplo Monaco si sono seduti principi, ex calciatori e almeno un'influencer che ha definito l'esperienza “più emozionante del suo matrimonio, ma con un servizio migliore.”",
        "Lo chef Francesco D'Amplo, intervistato mentre tagliava personalmente un cannolo con un bisturi dorato, ha spiegato la sua filosofia: “Il lusso non è il prezzo. È la sofferenza che metti nel piatto. E anche un po' il prezzo.”",
        "Damplo Monaco ha recentemente introdotto un servizio di “accompagnamento emotivo al conto”, dove un membro dello staff tiene la mano del cliente nel momento del pagamento.",
      ],
      en: [
        "Princes, retired footballers, and at least one influencer who described the experience as “more emotional than my own wedding, but with better service” have all taken a seat at Damplo Monaco.",
        "Chef Francesco D'Amplo, interviewed while personally slicing a cannolo with a gold-plated scalpel, explained his philosophy: “Luxury isn't the price. It's the suffering you put into the dish. And also, a bit, the price.”",
        "Damplo Monaco recently introduced an “emotional bill-support service,” in which a staff member holds the guest's hand at the moment of payment.",
      ],
    },
  },
  {
    slug: "arancino-business-review-l-impero-dell-arancino",
    testata: "Arancino Business Review",
    titolo: {
      it: "L'Impero dell'Arancino: Come Ciccio D'Amplo Ha Trasformato lo Street Food in Asset di Lusso",
      en: "The Arancino Empire: How Ciccio D'Amplo Turned Street Food Into a Luxury Asset",
    },
    estratto: {
      it: "Un'analisi (non richiesta) di come un piatto da due euro sia diventato, nelle mani giuste, un piatto da centottanta.",
      en: "An (unsolicited) analysis of how a two-euro dish became, in the right hands, a hundred-and-eighty-euro one.",
    },
    data: "2023-09-18",
    corpo: {
      it: [
        "Gli analisti di mercato sono divisi: alcuni parlano di genio del rebranding, altri di “una bolla che scoppierà non appena qualcuno chiederà il conto a voce alta.”",
        "Quel che è certo è che il modello Damplo — prendere un piatto popolare, decostruirlo, illuminarlo con luce drammatica e moltiplicarne il prezzo per venti — ha generato un nuovo segmento di mercato che i nostri analisti hanno soprannominato “gastro-lusso emotivo”.",
        "Ciccio, raggiunto per un commento, ha risposto solo: “L'arancino non ha prezzo. Ma se proprio insistete, trecento euro.”",
      ],
      en: [
        "Market analysts are divided: some call it rebranding genius, others “a bubble that will pop the moment someone asks for the bill out loud.”",
        "What's certain is that the Damplo model — take a popular dish, deconstruct it, light it dramatically, and multiply the price by twenty — has created a new market segment our analysts have nicknamed “emotional gastro-luxury.”",
        "Reached for comment, Ciccio replied only: “The arancino has no price. But if you really insist, three hundred euros.”",
      ],
    },
  },
  {
    slug: "il-sole-24-arancini-mercati-in-rialzo",
    testata: "Il Sole 24 Arancini",
    titolo: {
      it: "Mercati in Rialzo: Le Azioni Damplo (Immaginarie) Toccano Nuovi Massimi",
      en: "Markets Up: (Imaginary) Damplo Shares Hit New Highs",
    },
    estratto: {
      it: "Gli indici del lusso gastronomico siciliano segnano un nuovo record, spinti dall'annuncio di un quinto ristorante Damplo “in qualche posto ancora più costoso di Monaco.”",
      en: "Sicilian gastronomic luxury indexes hit a new record, driven by the announcement of a fifth Damplo restaurant “somewhere even more expensive than Monaco.”",
    },
    data: "2023-11-30",
    corpo: {
      it: [
        "Le azioni (immaginarie) del gruppo Damplo sono salite del 340% dopo l'annuncio di Francesco D'Amplo su un quinto ristorante, la cui location resta top secret “per ragioni di sicurezza degli arancini.”",
        "Gli investitori (anche loro, per ora, immaginari) si dicono entusiasti: “Quando Ciccio dice che un piatto vale duecento euro, io ci credo. È carisma puro,” ha dichiarato un analista che ha chiesto di restare anonimo per “evitare di essere invitato a cena e dover pagare.”",
        "Il Sole 24 Arancini conferma: il settore del lusso culinario siciliano non è mai stato così solido, almeno sulla carta — letteralmente, quella del menu.",
      ],
      en: [
        "Damplo Group's (imaginary) shares rose 340% after Francesco D'Amplo announced a fifth restaurant, whose location remains top secret “for arancino security reasons.”",
        "Investors (also, for now, imaginary) say they're thrilled: “When Ciccio says a dish is worth two hundred euros, I believe him. It's pure charisma,” said one analyst who asked to remain anonymous to “avoid being invited to dinner and having to pay.”",
        "Il Sole 24 Arancini confirms: the Sicilian culinary luxury sector has never been stronger — at least on paper, literally, the menu's paper.",
      ],
    },
  },
];
```

- [ ] **Step 2: Create `app/[locale]/press/page.tsx`**

```tsx
import { getLocale } from "next-intl/server";
import { press } from "@/content/press";
import BentoGrid from "@/components/BentoGrid";
import Card from "@/components/Card";
import RevealOnScroll from "@/components/RevealOnScroll";

export default async function PressPage() {
  const locale = (await getLocale()) as "it" | "en";

  return (
    <div>
      <RevealOnScroll>
        <h1 className="px-6 pt-12 text-center font-display text-3xl uppercase tracking-wide text-gold-bright md:text-5xl">
          {locale === "it" ? "Rassegna Stampa" : "Press Coverage"}
        </h1>
      </RevealOnScroll>
      <BentoGrid>
        {press.map((articolo) => (
          <Card key={articolo.slug} href={`/press/${articolo.slug}`}>
            <p className="text-xs uppercase tracking-wide text-cream/60">{articolo.testata}</p>
            <h2 className="mt-2 font-display text-lg text-gold-bright">{articolo.titolo[locale]}</h2>
            <p className="mt-3 text-sm text-cream/80">{articolo.estratto[locale]}</p>
          </Card>
        ))}
      </BentoGrid>
    </div>
  );
}
```

- [ ] **Step 3: Run the build and verify**

Run: `npx next build`
Expected: exits 0.

Run (PowerShell): `Get-Content out/it/press/index.html | Select-String "Arancino Business Review"`
Expected: one matching line.

Run (PowerShell): `Get-Content out/en/press/index.html | Select-String "Son Conquers the World"`
Expected: one matching line.

- [ ] **Step 4: Commit**

```bash
git add content/press.ts app/[locale]/press/page.tsx
git commit -m "feat: add press content and bento-grid index page"
```

---

## Task 15: Press Detail Pages

**Files:**
- Create: `app/[locale]/press/[slug]/page.tsx`

- [ ] **Step 1: Create `app/[locale]/press/[slug]/page.tsx`**

```tsx
import { getLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { press } from "@/content/press";
import RevealOnScroll from "@/components/RevealOnScroll";

export function generateStaticParams() {
  return press.map((articolo) => ({ slug: articolo.slug }));
}

function formatDate(isoDate: string, locale: "it" | "en") {
  return new Intl.DateTimeFormat(locale === "it" ? "it-IT" : "en-US", { dateStyle: "long" }).format(
    new Date(isoDate)
  );
}

export default async function PressDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const locale = (await getLocale()) as "it" | "en";
  const articolo = press.find((item) => item.slug === slug);

  if (!articolo) {
    notFound();
  }

  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <RevealOnScroll>
        <p className="font-display text-sm italic text-gold">
          {articolo.testata} — {formatDate(articolo.data, locale)}
        </p>
        <h1 className="mt-2 font-display text-3xl uppercase tracking-wide text-gold-bright md:text-4xl">
          {articolo.titolo[locale]}
        </h1>
      </RevealOnScroll>
      <div className="mt-8 rounded-bezel border border-white/10 bg-white/5 p-1.5">
        <img
          src={`/images/press/${articolo.slug}.jpg`}
          alt={
            locale === "it"
              ? `Copertina di ${articolo.testata}`
              : `Cover image of ${articolo.testata}`
          }
          className="aspect-[3/2] w-full rounded-[calc(2rem-0.375rem)] object-cover"
        />
      </div>
      {articolo.corpo[locale].map((paragraph, index) => (
        <RevealOnScroll key={index} delay={Math.min(index * 0.1, 0.3)}>
          <p className="mt-6 text-lg text-cream/90">{paragraph}</p>
        </RevealOnScroll>
      ))}
    </article>
  );
}
```

(The double-bezel frame around the `<img>` keeps the "Ethereal Glass" visual treatment even though the underlying image file doesn't exist yet for any of the 4 articles — the frame itself still renders, just with a broken-image glyph inside until the AI-image-generation step happens later. The `alt` text is distinct from the visible headline, matching the accessibility fix already validated in the Eleventy version.)

- [ ] **Step 2: Run the build and verify**

Run: `npx next build`
Expected: exits 0, 4 slugs × 2 locales = 8 pages.

Run (PowerShell): `Get-Content out/it/press/arancino-business-review-l-impero-dell-arancino/index.html | Select-String "trecento euro"`
Expected: one matching line.

Run (PowerShell): `Get-Content out/en/press/arancino-business-review-l-impero-dell-arancino/index.html | Select-String "three hundred euros"`
Expected: one matching line.

Run (PowerShell): `Get-Content out/it/press/the-mineo-times-il-figlio-di-mineo/index.html | Select-String "aprile"`
Expected: one matching line (confirms Italian long-form date formatting — the article's date is 2023-04-12).

Run (PowerShell): `Get-Content out/en/press/the-mineo-times-il-figlio-di-mineo/index.html | Select-String "April"`
Expected: one matching line (English date formatting).

- [ ] **Step 3: Commit**

```bash
git add "app/[locale]/press/[slug]/page.tsx"
git commit -m "feat: add press detail pages with localized date formatting"
```

---

## Task 16: Galleria Content and Page

**Files:**
- Create: `content/galleria.ts`
- Create: `app/[locale]/galleria/page.tsx`

- [ ] **Step 1: Create `content/galleria.ts`**

Two of the nine entries reuse real photos already copied in Task 1 (`ciccio-cucina.jpg` for the kitchen portrait slot, `damplo-monaco-hero.jpg` for the harbor slot — the same yacht photo used on the Monaco restaurant page) instead of pointing at not-yet-generated AI images, plus the Ferrari photo as its own distinct entry:

```ts
export type FotoGalleria = {
  file: string;
  caption: { it: string; en: string };
  alt: { it: string; en: string };
};

export const galleria: FotoGalleria[] = [
  {
    file: "/images/ciccio/ciccio-cucina.jpg",
    caption: {
      it: "Ciccio nella sua cucina di Mineo, un attimo prima di decostruire qualcosa.",
      en: "Ciccio in his Mineo kitchen, a moment before deconstructing something.",
    },
    alt: { it: "Foto di Ciccio in cucina", en: "Photo of Ciccio in the kitchen" },
  },
  {
    file: "/images/galleria/damplo-dubai-skyline.jpg",
    caption: {
      it: "Damplo Dubai, visto da un angolo che costa più dell'affitto di un anno.",
      en: "Damplo Dubai, viewed from an angle that costs more than a year's rent.",
    },
    alt: { it: "Skyline di Dubai visto dal ristorante", en: "Dubai skyline viewed from the restaurant" },
  },
  {
    file: "/images/galleria/arancino-decostruito-piatto.jpg",
    caption: {
      it: "L'Arancino Decostruito, durante uno dei suoi rari momenti di immobilità.",
      en: "The Deconstructed Arancino, during one of its rare moments of stillness.",
    },
    alt: { it: "Piatto di arancino decostruito", en: "Plate of deconstructed arancino" },
  },
  {
    file: "/images/galleria/pasta-norma-riserva.jpg",
    caption: {
      it: "Pasta alla Norma Riserva Privata, invecchiata più di alcune amicizie di Ciccio.",
      en: "Pasta alla Norma Riserva Privata, aged longer than some of Ciccio's friendships.",
    },
    alt: { it: "Piatto di pasta alla Norma", en: "Plate of pasta alla Norma" },
  },
  {
    file: "/images/ristoranti/damplo-monaco-hero.jpg",
    caption: {
      it: "Damplo Monaco, dove anche gli yacht sembrano piccoli.",
      en: "Damplo Monaco, where even the yachts look small.",
    },
    alt: { it: "Porto di Montecarlo", en: "Monte Carlo harbor" },
  },
  {
    file: "/images/galleria/cannolo-omakase.jpg",
    caption: {
      it: "Il quarto cannolo della Cannolo Omakase Experience, il più controverso.",
      en: "The fourth cannolo of the Cannolo Omakase Experience, the most controversial one.",
    },
    alt: { it: "Cannolo siciliano su un piatto", en: "Sicilian cannolo on a plate" },
  },
  {
    file: "/images/galleria/damplo-new-york-esterno.jpg",
    caption: {
      it: "Damplo New York, tra un grattacielo e un altro, come da copione.",
      en: "Damplo New York, between one skyscraper and the next, exactly as planned.",
    },
    alt: { it: "Esterno del ristorante a New York", en: "Restaurant exterior in New York" },
  },
  {
    file: "/images/galleria/granita-caviale.jpg",
    caption: {
      it: "Granita Affumicata al Caviale, non consigliata dal cardiologo né dal buon senso.",
      en: "Smoked Granita with Caviar, recommended by neither your cardiologist nor common sense.",
    },
    alt: { it: "Granita con caviale", en: "Granita with caviar" },
  },
  {
    file: "/images/ciccio/ciccio-ferrari-ristorante.jpg",
    caption: {
      it: "Ciccio davanti a uno dei suoi ristoranti, con un mezzo di trasporto adeguato al brand.",
      en: "Ciccio in front of one of his restaurants, with brand-appropriate transportation.",
    },
    alt: {
      it: "Ciccio in posa con una Ferrari davanti a un ristorante",
      en: "Ciccio posing with a Ferrari in front of a restaurant",
    },
  },
];
```

- [ ] **Step 2: Create `app/[locale]/galleria/page.tsx`** (skips `loading="lazy"` on the first 3 above-the-fold images, matching the LCP fix already validated in the Eleventy version)

```tsx
import { getLocale } from "next-intl/server";
import { galleria } from "@/content/galleria";
import RevealOnScroll from "@/components/RevealOnScroll";

export default async function GalleriaPage() {
  const locale = (await getLocale()) as "it" | "en";

  return (
    <div>
      <RevealOnScroll>
        <h1 className="px-6 pt-12 text-center font-display text-3xl uppercase tracking-wide text-gold-bright md:text-5xl">
          {locale === "it" ? "Galleria" : "Gallery"}
        </h1>
      </RevealOnScroll>
      <div className="grid grid-cols-1 gap-6 px-6 py-12 md:grid-cols-3">
        {galleria.map((foto, index) => (
          <RevealOnScroll key={foto.file} delay={Math.min(index * 0.05, 0.3)}>
            <figure className="overflow-hidden rounded-bezel border border-white/10 bg-white/5 p-1.5">
              <div className="overflow-hidden rounded-[calc(2rem-0.375rem)]">
                <img
                  src={foto.file}
                  alt={foto.alt[locale]}
                  loading={index < 3 ? undefined : "lazy"}
                  className="h-64 w-full object-cover"
                />
              </div>
              <figcaption className="px-2 py-3 text-sm text-cream/80">{foto.caption[locale]}</figcaption>
            </figure>
          </RevealOnScroll>
        ))}
      </div>
    </div>
  );
}
```

- [ ] **Step 3: Run the build and verify**

Run: `npx next build`
Expected: exits 0.

Run (PowerShell): `Get-Content out/it/galleria/index.html | Select-String "quarto cannolo"`
Expected: one matching line.

Run (PowerShell): `Get-Content out/en/galleria/index.html | Select-String "yachts look small"`
Expected: one matching line.

Run (PowerShell): `Get-Content out/it/galleria/index.html | Select-String "ciccio-cucina.jpg"`
Expected: one matching line (confirms the real photo is reused here, not a not-yet-existing duplicate).

Run (PowerShell): `(Get-Content out/it/galleria/index.html | Select-String 'loading="lazy"').Count`
Expected: `6` (9 images total, first 3 skip lazy-loading).

- [ ] **Step 4: Commit**

```bash
git add content/galleria.ts app/[locale]/galleria/page.tsx
git commit -m "feat: add galleria content and page, reusing real photos where possible"
```

---

## Task 17: Cross-Reference Validation Script

**Files:**
- Create: `scripts/check-links.ts`
- Modify: `package.json` (add `tsx` dependency, run the check before every build)

- [ ] **Step 1: Install `tsx`** (lets the validation script run as TypeScript directly, no separate compile step)

Run: `npm install --save-dev tsx`
Expected: `package.json`'s `devDependencies` gains `tsx`, no errors.

- [ ] **Step 2: Create `scripts/check-links.ts`**

```ts
import assert from "node:assert";
import { ristoranti } from "../content/ristoranti";
import { piatti } from "../content/piatti";
import { press } from "../content/press";

function assertUniqueSlugs(items: { slug: string }[], label: string) {
  const seen = new Set<string>();
  for (const item of items) {
    assert(!seen.has(item.slug), `Duplicate slug "${item.slug}" in ${label}`);
    seen.add(item.slug);
  }
}

assertUniqueSlugs(ristoranti, "ristoranti");
assertUniqueSlugs(piatti, "piatti");
assertUniqueSlugs(press, "press");

const ristorantiSlugs = new Set(ristoranti.map((r) => r.slug));
for (const piatto of piatti) {
  assert(
    ristorantiSlugs.has(piatto.ristoranteOrigine),
    `Piatto "${piatto.slug}" references missing ristorante slug "${piatto.ristoranteOrigine}"`
  );
}

console.log("check-links: OK");
```

- [ ] **Step 3: Run the script and verify it passes**

Run: `npx tsx scripts/check-links.ts`
Expected: prints `check-links: OK`, exits 0.

- [ ] **Step 4: Break a reference on purpose to verify the check actually catches errors**

Temporarily edit `content/piatti.ts`, change the first item's `ristoranteOrigine: "damplo-dubai"` to `ristoranteOrigine: "damplo-typo"`, then run:

Run: `npx tsx scripts/check-links.ts`
Expected: throws an `AssertionError` mentioning `damplo-typo`, exits non-zero.

Revert the edit back to `"damplo-dubai"` before continuing — verify with `git diff content/piatti.ts` showing no changes.

- [ ] **Step 5: Wire the check into the build script in `package.json`**

Find:
```json
  "scripts": {
    "dev": "next dev",
    "build": "node scripts/check-links.mjs && next build && node scripts/copy-root-files.mjs"
  },
```

Replace with:
```json
  "scripts": {
    "dev": "next dev",
    "build": "tsx scripts/check-links.ts && next build && node scripts/copy-root-files.mjs"
  },
```

(Note: `scripts/copy-root-files.mjs` doesn't exist yet — it's created in Task 19. Running `npm run build` right now will fail at that final step until then; that's expected. This task only wires the *first* step of the chain.)

- [ ] **Step 6: Run the validation-only step in isolation to confirm it's correctly referenced**

Run: `npx tsx scripts/check-links.ts`
Expected: prints `check-links: OK`, exits 0 (same as Step 3 — this just re-confirms after the `package.json` edit).

- [ ] **Step 7: Commit**

```bash
git add scripts/check-links.ts package.json package-lock.json
git commit -m "feat: validate cross-referenced slugs before every build"
```

---

## Task 18: SEO — Sitemap, Robots, and Per-Page Metadata

**Files:**
- Create: `lib/site.ts`, `lib/metadata.ts`
- Create: `app/sitemap.ts`, `app/robots.ts`
- Modify: all 10 page files to add `generateMetadata`

- [ ] **Step 1: Create `lib/site.ts`**

```ts
// Local preview value. Update once the dedicated GitHub repo / custom
// domain exists (see the deploy workflow task).
export const baseUrl = "http://localhost:3000";
```

- [ ] **Step 2: Create `lib/metadata.ts`**

```ts
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { baseUrl } from "@/lib/site";

export async function buildMetadata({
  locale,
  path,
  title,
}: {
  locale: "it" | "en";
  path: string;
  title: string;
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "meta" });
  const description = t("defaultDescription");
  const itPath = `/it${path}`;
  const enPath = `/en${path}`;
  const canonical = locale === "it" ? itPath : enPath;

  return {
    title,
    description,
    alternates: {
      canonical: `${baseUrl}${canonical}`,
      languages: { it: `${baseUrl}${itPath}`, en: `${baseUrl}${enPath}` },
    },
    openGraph: { title, description, url: `${baseUrl}${canonical}`, type: "website" },
    twitter: { card: "summary_large_image", title, description },
  };
}
```

- [ ] **Step 3: Create `app/sitemap.ts`**

```ts
import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { ristoranti } from "@/content/ristoranti";
import { piatti } from "@/content/piatti";
import { press } from "@/content/press";
import { baseUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ["", "biografia", "ristoranti", "piatti", "premi", "press", "galleria"];
  const dynamicPaths = [
    ...ristoranti.map((r) => `ristoranti/${r.slug}`),
    ...piatti.map((p) => `piatti/${p.slug}`),
    ...press.map((a) => `press/${a.slug}`),
  ];
  const allPaths = [...staticPaths, ...dynamicPaths];

  return routing.locales.flatMap((locale) =>
    allPaths.map((path) => ({
      url: `${baseUrl}/${locale}${path ? `/${path}` : ""}/`,
    }))
  );
}
```

- [ ] **Step 4: Create `app/robots.ts`**

```ts
import type { MetadataRoute } from "next";
import { baseUrl } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
```

- [ ] **Step 5: Add `generateMetadata` to `app/[locale]/page.tsx`** (Home)

Add this export alongside the existing `HomePage` component (don't remove anything already there):

```tsx
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";

export async function generateMetadata(): Promise<Metadata> {
  const locale = (await getLocale()) as "it" | "en";
  return buildMetadata({ locale, path: "", title: "Ciccio Damplo" });
}
```

(Add the two new imports — `Metadata` from `next` and `buildMetadata` from `@/lib/metadata` — to the existing import block at the top of the file, alongside the `getLocale`/`home`/`RevealOnScroll` imports already there.)

- [ ] **Step 6: Add `generateMetadata` to `app/[locale]/biografia/page.tsx`**

```tsx
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";

export async function generateMetadata(): Promise<Metadata> {
  const locale = (await getLocale()) as "it" | "en";
  return buildMetadata({
    locale,
    path: "/biografia",
    title: locale === "it" ? "Biografia — Ciccio Damplo" : "Biography — Ciccio Damplo",
  });
}
```

- [ ] **Step 7: Add `generateMetadata` to `app/[locale]/ristoranti/page.tsx`**

```tsx
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";

export async function generateMetadata(): Promise<Metadata> {
  const locale = (await getLocale()) as "it" | "en";
  return buildMetadata({
    locale,
    path: "/ristoranti",
    title: locale === "it" ? "Ristoranti — Ciccio Damplo" : "Restaurants — Ciccio Damplo",
  });
}
```

- [ ] **Step 8: Add `generateMetadata` to `app/[locale]/ristoranti/[slug]/page.tsx`**

```tsx
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const locale = (await getLocale()) as "it" | "en";
  const ristorante = getRistoranteBySlug(slug);
  return buildMetadata({
    locale,
    path: `/ristoranti/${slug}`,
    title: ristorante ? `${ristorante.nome} — Ciccio Damplo` : "Ciccio Damplo",
  });
}
```

- [ ] **Step 9: Add `generateMetadata` to `app/[locale]/piatti/page.tsx`**

```tsx
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";

export async function generateMetadata(): Promise<Metadata> {
  const locale = (await getLocale()) as "it" | "en";
  return buildMetadata({
    locale,
    path: "/piatti",
    title: locale === "it" ? "Piatti — Ciccio Damplo" : "Dishes — Ciccio Damplo",
  });
}
```

- [ ] **Step 10: Add `generateMetadata` to `app/[locale]/piatti/[slug]/page.tsx`**

```tsx
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const locale = (await getLocale()) as "it" | "en";
  const piatto = piatti.find((item) => item.slug === slug);
  return buildMetadata({
    locale,
    path: `/piatti/${slug}`,
    title: piatto ? `${piatto.nome} — Ciccio Damplo` : "Ciccio Damplo",
  });
}
```

- [ ] **Step 11: Add `generateMetadata` to `app/[locale]/premi/page.tsx`**

```tsx
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";

export async function generateMetadata(): Promise<Metadata> {
  const locale = (await getLocale()) as "it" | "en";
  return buildMetadata({
    locale,
    path: "/premi",
    title: locale === "it" ? "Premi — Ciccio Damplo" : "Awards — Ciccio Damplo",
  });
}
```

- [ ] **Step 12: Add `generateMetadata` to `app/[locale]/press/page.tsx`**

```tsx
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";

export async function generateMetadata(): Promise<Metadata> {
  const locale = (await getLocale()) as "it" | "en";
  return buildMetadata({ locale, path: "/press", title: "Press — Ciccio Damplo" });
}
```

- [ ] **Step 13: Add `generateMetadata` to `app/[locale]/press/[slug]/page.tsx`**

```tsx
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const locale = (await getLocale()) as "it" | "en";
  const articolo = press.find((item) => item.slug === slug);
  return buildMetadata({
    locale,
    path: `/press/${slug}`,
    title: articolo ? `${articolo.titolo[locale]} — Ciccio Damplo` : "Ciccio Damplo",
  });
}
```

- [ ] **Step 14: Add `generateMetadata` to `app/[locale]/galleria/page.tsx`**

```tsx
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";

export async function generateMetadata(): Promise<Metadata> {
  const locale = (await getLocale()) as "it" | "en";
  return buildMetadata({
    locale,
    path: "/galleria",
    title: locale === "it" ? "Galleria — Ciccio Damplo" : "Gallery — Ciccio Damplo",
  });
}
```

- [ ] **Step 15: Run the build and verify SEO output**

Run: `npx next build`
Expected: still fails at the final `node scripts/copy-root-files.mjs` step (not created until Task 19) — that's fine for now. Confirm everything BEFORE that step succeeded: the terminal output should show `check-links: OK`, then a full Next.js route compilation with no TypeScript or build errors, then the failure only at the very last `node scripts/copy-root-files.mjs` line (`Cannot find module`).

Run (PowerShell): `Get-Content out/sitemap.xml | Select-String "ristoranti/damplo-dubai"`
Expected: two matching lines (it + en).

Run (PowerShell): `Get-Content out/robots.txt`
Expected: shows `Sitemap: http://localhost:3000/sitemap.xml`.

Run (PowerShell): `Get-Content out/it/ristoranti/damplo-dubai/index.html | Select-String "og:title"`
Expected: one matching line containing "Damplo Dubai".

Run (PowerShell): `Get-Content out/it/index.html | Select-String 'rel="canonical"'`
Expected: one matching line containing `http://localhost:3000/it/`.

- [ ] **Step 16: Commit**

```bash
git add lib/site.ts lib/metadata.ts app/sitemap.ts app/robots.ts app/[locale]
git commit -m "feat: add sitemap, robots.txt, and per-page SEO metadata"
```

---

## Task 19: Root Files, GitHub Pages 404, and Deploy Workflow

**Files:**
- Create: `public/404.html`
- Create: `scripts/copy-root-files.mjs`
- Create: `.github/workflows/deploy.yml`
- Modify: `lib/site.ts` (note only — actual `baseUrl` update happens later, when a real domain exists)

This task resolves the GitHub Pages root `404.html` requirement *without* depending on exactly how Next.js's static export handles the nested `app/[locale]/not-found.tsx` (the uncertainty flagged in Task 8). Anything placed in `public/` is copied byte-for-byte into `out/` at the same path by Next's build — so a hand-written, framework-independent `public/404.html` becomes `out/404.html` automatically, with zero dependency on Next's not-found rendering behavior. The in-app themed 404 from Task 8 (`app/[locale]/not-found.tsx`) still handles same-origin client-side navigation to a bad URL; this static file only covers the GitHub-Pages-level "hard load of a completely unknown path" case.

- [ ] **Step 1: Create `public/404.html`**

```html
<!doctype html>
<html lang="it">
<head>
  <meta charset="utf-8">
  <title>404 — Piatto Non Disponibile — Ciccio Damplo</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style>
    body {
      margin: 0;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #050505;
      color: #F2EDE4;
      font-family: Georgia, serif;
      text-align: center;
      padding: 24px;
    }
    .card {
      max-width: 32rem;
    }
    h1 {
      color: #D4AF37;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    a {
      color: #C9A227;
      text-decoration: none;
    }
  </style>
</head>
<body>
  <div class="card">
    <h1>404 — Piatto Non Disponibile</h1>
    <p>Questo piatto non è nel menu. Forse Ciccio l'ha deconstruito così tanto che è scomparso del tutto. Torna alla Home e prova qualcosa che esiste davvero.</p>
    <p><a href="/it/">Torna alla Home</a></p>
  </div>
</body>
</html>
```

- [ ] **Step 2: Create `scripts/copy-root-files.mjs`**

```js
import { copyFileSync } from "node:fs";
import { join } from "node:path";

const outDir = join(process.cwd(), "out");

copyFileSync(join(outDir, "it", "index.html"), join(outDir, "index.html"));
console.log("Copied out/it/index.html -> out/index.html");
```

- [ ] **Step 3: Run the full build end-to-end for the first time**

Run: `npm run build`
Expected: exits 0. Output shows, in order: `check-links: OK`, the Next.js route compilation summary, then `Copied out/it/index.html -> out/index.html`.

- [ ] **Step 4: Verify the root files**

Run (PowerShell): `Get-Content out/index.html | Select-String "Chef, visionario"`
Expected: one matching line (root `/` duplicates the Italian homepage content).

Run (PowerShell): `Get-Content out/404.html | Select-String "Piatto Non Disponibile"`
Expected: one matching line (confirms the static 404 was copied from `public/` into the export output, independent of Next's own rendering).

- [ ] **Step 5: Create `.github/workflows/deploy.yml`**

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: out

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

This workflow is **inactive** until a dedicated GitHub repository with Pages-via-Actions enabled exists (same deferred state as the rest of this project's deploy story) — do NOT run `git push`, do NOT touch any GitHub repository settings, do NOT modify `lib/site.ts`'s `baseUrl`. Those all happen later, once the user has created the real repo/domain.

- [ ] **Step 6: Commit**

```bash
git add public/404.html scripts/copy-root-files.mjs .github/workflows/deploy.yml
git commit -m "feat: add static GitHub Pages 404, root-file copy script, and deploy workflow"
```

---

## Task 20: Final Functional QA Pass

This task is verification-only — no source changes, no commit at the end (unless a real bug is found, in which case fix it, commit the fix, then resume verification).

**Files:** none created or modified (verification only).

- [ ] **Step 1: Build and serve the static export output**

Run: `npm run build`
Expected: exits 0.

Run (PowerShell), starting a static file server as a background job:
```powershell
$job = Start-Job -ScriptBlock { Set-Location "<repo path>"; npx serve out -p 3000 }
Start-Sleep -Seconds 5
```

Confirm it's serving: `Invoke-WebRequest -Uri "http://localhost:3000/it/" -UseBasicParsing | Select-Object StatusCode`
Expected: `200`.

- [ ] **Step 2: Verify every page returns 200 and contains expected content, in both languages**

For each pair below, fetch via `Invoke-WebRequest -Uri "http://localhost:3000<path>" -UseBasicParsing` and check `.StatusCode -eq 200` and `.Content` contains the listed string:

| IT path | EN path | Content check (IT) | Content check (EN) |
|---|---|---|---|
| `/it/` | `/en/` | "Francesco D'Amplo" | "Sicilian luxury entrepreneur" |
| `/it/biografia/` | `/en/biografia/` | "Decostruzionismo Affettivo" | "Mediterranean Affective Deconstructionism" |
| `/it/ristoranti/` | `/en/ristoranti/` | "Damplo Dubai" | "Sicily, but with real gold" |
| `/it/ristoranti/damplo-mineo/` | `/en/ristoranti/damplo-mineo/` | "Mineo" | "Mineo" |
| `/it/ristoranti/damplo-dubai/` | `/en/ristoranti/damplo-dubai/` | "oro vero" | "real gold" |
| `/it/ristoranti/damplo-monaco/` | `/en/ristoranti/damplo-monaco/` | "yacht" | "yacht" |
| `/it/ristoranti/damplo-new-york/` | `/en/ristoranti/damplo-new-york/` | "Manhattan" | "Manhattan" |
| `/it/piatti/` | `/en/piatti/` | "Lamborghini" | "complimentary chewing gum" |
| `/it/piatti/arancino-decostruito/` | `/en/piatti/arancino-decostruito/` | "Disponibile presso" | "Available at" |
| `/it/premi/` | `/en/premi/` | "Golden Cannoli Awards" | "Honorary Ambassador" |
| `/it/press/` | `/en/press/` | "Arancino Business Review" | "Son Conquers the World" |
| `/it/galleria/` | `/en/galleria/` | "quarto cannolo" | "yachts look small" |

Record any failures precisely (URL, expected vs. actual) — do not paper over them. If a real bug is found, fix it, rebuild, re-verify the specific failing row, then continue down the table.

- [ ] **Step 3: Verify the language switcher lands on the matching page**

Fetch `http://localhost:3000/it/ristoranti/damplo-dubai/` and confirm the response body contains `href="/en/ristoranti/damplo-dubai/"`.

- [ ] **Step 4: Verify the root and 404 static files**

Run (PowerShell): `(Invoke-WebRequest -Uri "http://localhost:3000/" -UseBasicParsing).Content | Select-String "Francesco D'Amplo"`
Expected: one matching line.

Run (PowerShell): `(Invoke-WebRequest -Uri "http://localhost:3000/404.html" -UseBasicParsing).Content | Select-String "Piatto Non Disponibile"`
Expected: one matching line.

- [ ] **Step 5: Verify the SEO files**

Run (PowerShell): `(Invoke-WebRequest -Uri "http://localhost:3000/sitemap.xml" -UseBasicParsing).Content | Select-String "<loc>" | Measure-Object | Select-Object -ExpandProperty Count`
Expected: a number in the high 30s/low 40s (7 static sections × 2 locales + (4 ristoranti + 4 piatti + 4 press) × 2 locales + the bare `/it/`/`/en/` home entries already counted in the 7 static sections — record the actual number, the important thing is it's clearly more than just a handful, confirming the dynamic detail pages are included).

Run (PowerShell): `(Invoke-WebRequest -Uri "http://localhost:3000/robots.txt" -UseBasicParsing).Content`
Expected: contains `Sitemap: http://localhost:3000/sitemap.xml`.

- [ ] **Step 6: Stop the background server**

Run: `Stop-Job $job; Remove-Job $job`

- [ ] **Step 7: Note what could not be verified**

Explicitly record in the final report: visual layout, the Bento grid's responsive collapse below 768px, the motion/scroll-reveal animations, the floating nav's mobile hamburger-to-X morph and overlay menu, and actual rendered appearance (fonts, glass blur, gold glow) were **not** verified — no browser automation tool is available in this environment. This is a known, explicitly flagged gap, not a silent omission. A real browser-based pass is recommended before any public launch.
