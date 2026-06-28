# Ciccio Damplo — Riscrittura Next.js/Tailwind — Design Spec

## Contesto e obiettivo

Il sito "Ciccio Damplo" (satira di un ristoratore siciliano di lusso immaginario, creata con il consenso di Francesco, disclaimer in footer) era già stato implementato e revisionato come sito statico Eleventy/Nunjucks/CSS-vanilla (vedi `docs/superpowers/specs/2026-06-28-ciccio-damplo-website-design.md` e il relativo piano). Questo documento copre una **riscrittura completa** dell'implementazione tecnica e del sistema visivo, applicando la direzione "agency-tier" della skill `/soft-skill` (Tailwind, React/Next.js, motion design, architettura "Double-Bezel").

**Cosa NON cambia:** il concept satirico, l'identità del personaggio, tutti i contenuti già scritti (biografia, 4 ristoranti, 4 piatti, 9 premi, 4 articoli press, galleria), il bilinguismo IT/EN, il disclaimer obbligatorio, l'obiettivo SEO, l'hosting target (GitHub Pages, da collegare in futuro), le 4 foto reali già integrate.

**Cosa cambia:** lo stack tecnico (Eleventy → Next.js), il sistema di styling (CSS vanilla → Tailwind), il sistema visivo (sfondo scuro lineare con dettagli oro → "Ethereal Glass" scuro con bagliori oro, vetro/blur, architettura a doppio bordo), e l'introduzione di motion design (Framer Motion) dove prima non c'era JS.

**Sostituzione:** l'implementazione Eleventy esistente (`src/`, `.eleventy.js`, `tests/`, `package.json` attuale) viene rimossa e sostituita dal nuovo progetto Next.js nella stessa cartella. La cronologia resta nei commit Git.

## Stack e architettura

- **Framework:** Next.js (App Router), `output: 'export'` → build statico in `out/`, nessun server Node in produzione.
- **Styling:** Tailwind CSS.
- **Motion:** Framer Motion (package `motion`) — `whileInView` per i reveal allo scroll (IntersectionObserver sotto il cofano, mai `window.addEventListener('scroll')`), transizioni con cubic-bezier personalizzate, mai `linear`/`ease-in-out` di default.
- **i18n:** `next-intl`, struttura a cartelle `app/[locale]/...` con `locale` ∈ `{it, en}`. Le pagine dinamiche (`[slug]`) usano `generateStaticParams` per pre-generare ogni combinazione lingua×elemento al build.
- **Icone:** set a linee ultra-sottili (es. Phosphor Light), non Lucide/FontAwesome standard.

## Migrazione dei contenuti

Tutto il contenuto satirico esistente viene riportato 1:1 (non riscritto):

- `ristoranti`, `piatti`, `premi`, `press`, `galleria` → file `content/*.ts` (stessa forma `{it, en}` già usata nei JSON Eleventy).
- Stringhe UI condivise (nav, footer, disclaimer, meta description) → `messages/it.json` e `messages/en.json` per `next-intl`.
- Riferimento incrociato `piatto.ristoranteOrigine → ristorante.slug` resta identico nella forma; viene validato da uno script Node eseguito prima del build (stessa logica di `check-links.js`, riadattato ai nuovi percorsi).
- Le 4 foto reali (`ciccio-cucina`, `damplo-mineo-hero`, `damplo-monaco-hero`/yacht, `ciccio-ferrari-ristorante`) vengono copiate nella nuova struttura asset con lo stesso ruolo (hero home, hero ristoranti, galleria).
- Le immagini ancora mancanti (piatti, ristoranti Dubai/New York, articoli press, parte della galleria) **restano mancanti** — nessuno strumento di generazione immagini è disponibile in questo ambiente, stessa limitazione della build Eleventy. Il trattamento visivo "glass" del nuovo sistema (placeholder vetro/blur al posto dell'immagine, non icona di immagine rotta) rende il vuoto meno evidente rispetto al sito precedente, ma le immagini reali andranno generate/caricate separatamente in futuro.
- Disclaimer satirico nel footer: testo identico, in entrambe le lingue.

## Sistema visivo

**Vibe Archetype:** Ethereal Glass scuro, adattato con bagliori oro caldo al posto di viola/smeraldo tech (per restare coerenti con l'identità "lusso siciliano" già stabilita).

- Fondo: nero OLED profondo (`#050505`).
- Bagliori di sfondo: mesh gradient radiali soffusi color oro (`#C9A227` / `#D4AF37` → trasparente), elementi fissi a bassa opacità, mai applicati a contenitori che scrollano.
- Card: sfondo "vantablack" (`bg-black/40` circa) con `backdrop-blur-2xl`, hairline bianco/oro al 10% di opacità.
- Testo: bianco caldo, non bianco puro.
- Accento secondario bordeaux, usato con misura (eredità dall'identità precedente).

**Layout Archetype:** Asymmetrical Bento per le pagine a griglia (Ristoranti, Piatti, Press, Galleria, Premi) — card di dimensioni variabili (es. il ristorante "di punta" più grande delle altre), collasso a colonna singola sotto i 768px.

**Tipografia** (Inter/Roboto/Arial/Helvetica/Open Sans banditi):
- Titoli: **Playfair Display** (mantenuto dall'identità precedente — serif ad alto contrasto, coerente con "rivista di lusso editoriale", non bandito dalla skill).
- Corpo testo: **Plus Jakarta Sans** (sostituisce Inter, stesso ruolo, gratuito su Google Fonts).

**Architettura "Double-Bezel":** ogni card (ristorante, piatto, premio, articolo, galleria) ha un guscio esterno (sfondo sottile, hairline, padding, radius grande — es. `rounded-[2rem]`) e un nucleo interno con sfondo proprio, highlight interno e radius concentrico più piccolo.

**Bottoni:** pillole completamente arrotondate (`rounded-full`), con icona finale (es. freccia "Scopri di più ↗") annidata nel proprio cerchio distinto (`w-8 h-8 rounded-full`), non affiancata semplicemente al testo. Fisica magnetica all'hover/click (scale-down al click, traslazione diagonale dell'icona interna).

**Nav:** pillola fluttuante staccata dall'alto (`mt-6`, centrata, vetro). Su mobile, hamburger che si trasforma in "X", overlay fullscreen con link che entrano con stagger (fade + slide-up sfalsato per ciascun link).

## Mappa delle pagine

```
app/[locale]/page.tsx                    Home
app/[locale]/biografia/page.tsx          Biografia
app/[locale]/ristoranti/page.tsx         Indice ristoranti (bento grid)
app/[locale]/ristoranti/[slug]/page.tsx  Dettaglio ristorante
app/[locale]/piatti/page.tsx             Indice piatti (bento grid)
app/[locale]/piatti/[slug]/page.tsx      Dettaglio piatto
app/[locale]/premi/page.tsx              Lista premi
app/[locale]/press/page.tsx              Indice press (bento grid)
app/[locale]/press/[slug]/page.tsx       Dettaglio articolo
app/[locale]/galleria/page.tsx           Galleria (bento grid)
app/not-found.tsx                        404 a tema
```

Nessun modulo di prenotazione (eredità della decisione presa nello spec precedente, resta fuori scope).

## Motion

- Ogni sezione/card entra allo scroll con fade-up + leggero blur che si risolve (`whileInView`, soglia di viewport ragionevole, mai animazioni su `top`/`left`/`width`/`height` — solo `transform`/`opacity`).
- Pulsanti con fisica magnetica all'hover (icona interna che si sposta in diagonale, leggero scale-up).
- Switch lingua IT/EN nel nav con transizione fluida.
- `backdrop-blur` applicato solo a elementi fissi/sticky (nav, overlay menu mobile), mai a contenitori che scrollano.

## Build, deploy e qualità

- **Build:** `npm run build` esegue prima la validazione dei riferimenti incrociati (script Node riadattato da `check-links.js`), poi `next build` con `output: 'export'` → output statico in `out/`.
- **Deploy:** stesso workflow GitHub Actions di prima (checkout → install → build → upload artifact → deploy-pages), path artifact aggiornato a `out/`. Resta inattivo finché non viene collegato il repository GitHub dedicato — stessa nota di deferral del piano precedente.
- **SEO:** sitemap.xml e meta OG/Twitter/hreflang per pagina tramite la Metadata API di Next (`generateMetadata`), pari copertura funzionale al sito Eleventy precedente.
- **Verifica:** dato che nessun browser automatizzato è disponibile in questo ambiente, la verifica finale resta a livello HTTP (richieste dirette alle pagine generate, controllo status code e contenuto atteso), come già fatto per la build Eleventy. La verifica visiva/responsive reale resta una nota di limite esplicito, non silenziata.

## Fuori scope (eredità dal piano precedente, confermata)

- Generazione delle immagini AI mancanti (nessuno strumento disponibile in questo ambiente).
- Creazione del repository GitHub dedicato, acquisto del dominio, deploy live.
- Modulo di prenotazione.
- Rilevamento automatico della lingua del browser per il redirect sulla root.
