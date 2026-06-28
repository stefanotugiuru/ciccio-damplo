# Ciccio Damplo Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the bilingual (IT/EN) satirical "Ciccio Damplo" static website — a luxury-restaurateur parody site, locally previewable now, deployable to GitHub Pages later.

**Architecture:** Eleventy (11ty) static site generator. Bilingual content lives in JSON/JS data files (`src/_data/`); Nunjucks templates render pages, using Eleventy pagination to generate one output page per `{language, item}` pair for data-driven sections (restaurants, dishes, press). Output is plain static HTML/CSS/vanilla JS — no client-side framework.

**Tech Stack:** Node.js (v24 confirmed installed), `@11ty/eleventy` ^2.0.1, Nunjucks templating, vanilla CSS (custom properties for the dark/gold design tokens), no client JS framework.

**Spec reference:** `docs/superpowers/specs/2026-06-28-ciccio-damplo-website-design.md`

**Deferred to later (explicitly out of scope for now):** pushing to a real GitHub repo, buying/wiring a custom domain, and the live GitHub Pages deploy. The user wants to preview locally first. The deploy workflow is still written (Task 19) but is the second-to-last task and is not required to "finish" the local preview goal. `src/_data/site.js`'s `baseUrl` is a single placeholder-style config value (`http://localhost:8080`) — it is real and functional for local preview; Task 19 includes a one-line instruction to update it once the real GitHub Pages URL/custom domain exists. This is the only deferred value in the whole plan; everything else is fully concrete today.

---

## File Structure

```
package.json                              npm scripts + eleventy dependency
.eleventy.js                               Eleventy config (input/output dirs, passthrough copy, filters)
.gitignore                                 node_modules, _site
src/
  _data/
    site.js                                langs, defaultLang, baseUrl
    i18n.json                              shared nav/footer/meta strings {it,en}
    home.json                              home page hero/intro copy {it,en}
    biografia.json                         bio title + paragraphs {it,en}
    notFound.json                          404 page copy {it,en}
    ristoranti.json                        4 restaurants, bilingual fields
    ristorantiPages.js                     flattens ristoranti.json x langs for pagination
    piatti.json                            4 dishes, bilingual fields
    piattiPages.js                         flattens piatti.json x langs for pagination
    premi.json                             list of awards, bilingual fields
    press.json                             4 press articles, bilingual fields
    pressPages.js                          flattens press.json x langs for pagination
    galleria.json                          gallery image list + captions {it,en}
  _includes/
    layouts/
      base.njk                             root HTML layout: head, nav, footer, hreflang, OG/Twitter meta
    partials/
      nav.njk                              nav bar + language switcher
      footer.njk                           footer with disclaimer
      home-body.njk                        shared home page markup (used by / and /{lang}/)
      biografia-body.njk                   shared biografia markup
      notfound-body.njk                    shared 404 markup
  index.njk                                root "/" duplicate of IT home (canonical -> /it/)
  home.njk                                 home pages, generates /it/ and /en/ (pagination over site.langs)
  biografia.njk                            bio pages, generates /it/biografia/ and /en/biografia/
  404.njk                                  root 404.html (GitHub Pages convention, IT content)
  404-localized.njk                        themed /it/404/ and /en/404/ (pagination over site.langs)
  sitemap.njk                              generates /sitemap.xml from collections.all
  robots.njk                               generates /robots.txt with dynamic baseUrl
  ristoranti/index.njk                     ristoranti index (pagination over site.langs)
  ristoranti/dettaglio.njk                 ristoranti detail (pagination over ristorantiPages)
  piatti/index.njk                         piatti index (pagination over site.langs)
  piatti/dettaglio.njk                     piatti detail (pagination over piattiPages)
  premi/index.njk                          premi list page (pagination over site.langs)
  press/index.njk                          press index (pagination over site.langs)
  press/dettaglio.njk                      press detail (pagination over pressPages)
  galleria/index.njk                       gallery page (pagination over site.langs)
  assets/
    css/style.css                          design tokens + all page styles
    img/ciccio/                            user-uploaded real photos + AI stand-ins until then
    img/ristoranti/, img/piatti/, img/press/, img/galleria/  AI-generated images
tests/
  check-data.js                            Node script: validates i18n.json has both languages for every key
  check-links.js                           Node script: validates cross-referenced slugs exist and are unique
.github/workflows/deploy.yml               GitHub Pages deploy workflow (Task 19, run later)
```

---

## Task 1: Project Scaffold

**Files:**
- Create: `package.json`
- Create: `.eleventy.js`
- Create: `.gitignore`
- Create: `src/index.njk` (temporary smoke-test content, replaced in Task 5)

- [ ] **Step 1: Create `package.json`**

```json
{
  "name": "ciccio-damplo-website",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "eleventy --serve",
    "build": "eleventy"
  },
  "devDependencies": {
    "@11ty/eleventy": "^2.0.1"
  }
}
```

- [ ] **Step 2: Install dependencies**

Run: `npm install`
Expected: `node_modules/` created, `package-lock.json` created, no errors.

- [ ] **Step 3: Create `.gitignore`**

```
node_modules/
_site/
```

- [ ] **Step 4: Create `.eleventy.js`**

```js
module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
  };
};
```

- [ ] **Step 5: Create a smoke-test page `src/index.njk`**

```njk
---
title: Smoke test
---
<!doctype html>
<html>
  <body>
    <h1>Eleventy build works</h1>
  </body>
</html>
```

- [ ] **Step 6: Run the build and verify output**

Run: `npm run build`
Expected: exits 0, prints something like `Wrote 1 file in X seconds`, and creates `_site/index.html`.

Then verify the content:
Run (PowerShell): `Get-Content _site/index.html | Select-String "Eleventy build works"`
Expected: one matching line printed (confirms the file was actually generated with the right content, not just present).

- [ ] **Step 7: Commit**

```bash
git add package.json package-lock.json .eleventy.js .gitignore src/index.njk
git commit -m "chore: scaffold Eleventy project"
```

---

## Task 2: Global Data — Site Config and i18n Dictionary

**Files:**
- Create: `src/_data/site.js`
- Create: `src/_data/i18n.json`
- Test: `tests/check-data.js`

- [ ] **Step 1: Create `src/_data/site.js`**

```js
module.exports = {
  langs: ["it", "en"],
  defaultLang: "it",
  // Local preview value. Update to the real GitHub Pages / custom domain
  // URL in Task 19, once the dedicated GitHub repo and domain exist.
  baseUrl: "http://localhost:8080",
};
```

- [ ] **Step 2: Create `src/_data/i18n.json`**

```json
{
  "nav": {
    "home": { "it": "Home", "en": "Home" },
    "biografia": { "it": "Biografia", "en": "Biography" },
    "ristoranti": { "it": "Ristoranti", "en": "Restaurants" },
    "premi": { "it": "Premi", "en": "Awards" },
    "piatti": { "it": "Piatti", "en": "Dishes" },
    "press": { "it": "Press", "en": "Press" },
    "galleria": { "it": "Galleria", "en": "Gallery" }
  },
  "footer": {
    "disclaimer": {
      "it": "Questo è un sito web fittizio e satirico, creato per scopi di intrattenimento con il consenso di Francesco.",
      "en": "This is a fictional satirical website created for entertainment purposes with Francesco's consent."
    },
    "rights": {
      "it": "Tutti i diritti (im)moralmente riservati.",
      "en": "All rights (im)morally reserved."
    }
  },
  "langSwitchLabel": { "it": "EN", "en": "IT" }
}
```

Note: `langSwitchLabel` is the label shown for the link that switches **to** that language (on an IT page you show the "EN" link, on an EN page you show the "IT" link).

- [ ] **Step 3: Write a data-integrity check script `tests/check-data.js`**

```js
const assert = require("assert");
const i18n = require("../src/_data/i18n.json");
const site = require("../src/_data/site.js");

for (const lang of site.langs) {
  for (const [section, entries] of Object.entries(i18n)) {
    if (section === "langSwitchLabel") {
      assert(entries[lang], `Missing langSwitchLabel.${lang}`);
      continue;
    }
    for (const [key, value] of Object.entries(entries)) {
      assert(value[lang], `Missing i18n.${section}.${key}.${lang}`);
    }
  }
}

console.log("check-data: OK");
```

- [ ] **Step 4: Run the check and verify it passes**

Run: `node tests/check-data.js`
Expected: prints `check-data: OK`, exits 0.

- [ ] **Step 5: Commit**

```bash
git add src/_data/site.js src/_data/i18n.json tests/check-data.js
git commit -m "feat: add site config and i18n dictionary"
```

---

## Task 3: Base Layout, Nav, and Footer

**Files:**
- Create: `src/_includes/layouts/base.njk`
- Create: `src/_includes/partials/nav.njk`
- Create: `src/_includes/partials/footer.njk`
- Modify: `src/index.njk` (use the new layout to verify it end-to-end)

- [ ] **Step 1: Create `src/_includes/partials/nav.njk`**

```njk
<nav class="site-nav">
  <a class="brand" href="/{{ lang }}/">Ciccio Damplo</a>
  <ul>
    <li><a href="/{{ lang }}/">{{ i18n.nav.home[lang] }}</a></li>
    <li><a href="/{{ lang }}/biografia/">{{ i18n.nav.biografia[lang] }}</a></li>
    <li><a href="/{{ lang }}/ristoranti/">{{ i18n.nav.ristoranti[lang] }}</a></li>
    <li><a href="/{{ lang }}/premi/">{{ i18n.nav.premi[lang] }}</a></li>
    <li><a href="/{{ lang }}/piatti/">{{ i18n.nav.piatti[lang] }}</a></li>
    <li><a href="/{{ lang }}/press/">{{ i18n.nav.press[lang] }}</a></li>
    <li><a href="/{{ lang }}/galleria/">{{ i18n.nav.galleria[lang] }}</a></li>
  </ul>
  {% if lang == "it" %}
    <a class="lang-switch" href="/en/">{{ i18n.langSwitchLabel.it }}</a>
  {% else %}
    <a class="lang-switch" href="/it/">{{ i18n.langSwitchLabel.en }}</a>
  {% endif %}
</nav>
```

Note: this nav always links to the *index* of each section in the other language context, not a per-page equivalent — page-level "switch to equivalent page" links are added per-template in later tasks where a direct equivalent exists (e.g. a restaurant detail page links to its own translation, not just the ristoranti index).

- [ ] **Step 2: Create `src/_includes/partials/footer.njk`**

```njk
<footer class="site-footer">
  <p class="disclaimer">{{ i18n.footer.disclaimer[lang] }}</p>
  <p class="rights">{{ i18n.footer.rights[lang] }}</p>
</footer>
```

- [ ] **Step 3: Create `src/_includes/layouts/base.njk`**

```njk
<!doctype html>
<html lang="{{ lang }}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>{{ title }} — Ciccio Damplo</title>
  <link rel="stylesheet" href="/assets/css/style.css">
  <link rel="alternate" hreflang="it" href="{{ site.baseUrl }}{{ hreflangIt or '/it/' }}">
  <link rel="alternate" hreflang="en" href="{{ site.baseUrl }}{{ hreflangEn or '/en/' }}">
  <link rel="alternate" hreflang="x-default" href="{{ site.baseUrl }}{{ hreflangIt or '/it/' }}">
</head>
<body>
  {% include "partials/nav.njk" %}
  <main>
    {{ content | safe }}
  </main>
  {% include "partials/footer.njk" %}
</body>
</html>
```

Note: `hreflangIt`/`hreflangEn` are optional front-matter variables each page can set to point at its *own* translated pair (e.g. a restaurant detail page sets these to its two language URLs). When a page doesn't set them, the layout falls back to the section index root, which is always a safe default.

- [ ] **Step 4: Update `src/index.njk` to use the layout**

```njk
---
layout: layouts/base.njk
title: Smoke test
lang: it
---
<h1>Eleventy build works</h1>
```

- [ ] **Step 5: Run the build and verify the layout renders**

Run: `npm run build`

Run (PowerShell): `Get-Content _site/index.html | Select-String "site-footer"`
Expected: one matching line (confirms footer partial rendered).

Run (PowerShell): `Get-Content _site/index.html | Select-String "hreflang"`
Expected: three matching lines (it, en, x-default).

- [ ] **Step 6: Commit**

```bash
git add src/_includes src/index.njk
git commit -m "feat: add base layout, nav, and footer partials"
```

---

## Task 4: CSS Design Tokens and Base Styles

**Files:**
- Create: `src/assets/css/style.css`

- [ ] **Step 1: Create `src/assets/css/style.css`**

```css
:root {
  --color-bg: #0b0b0c;
  --color-bg-alt: #141414;
  --color-gold: #c9a227;
  --color-gold-bright: #d4af37;
  --color-bordeaux: #5c1a1a;
  --color-text: #f2ede4;

  --font-display: "Playfair Display", Georgia, serif;
  --font-body: "Inter", -apple-system, sans-serif;

  --space-sm: 0.75rem;
  --space-md: 1.5rem;
  --space-lg: 3rem;
  --space-xl: 6rem;
}

* { box-sizing: border-box; }

body {
  margin: 0;
  background: var(--color-bg);
  color: var(--color-text);
  font-family: var(--font-body);
  line-height: 1.6;
}

h1, h2, h3, .brand {
  font-family: var(--font-display);
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--color-gold-bright);
}

a {
  color: var(--color-gold);
  text-decoration: none;
}

a:hover {
  color: var(--color-gold-bright);
}

.site-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-md);
  border-bottom: 1px solid var(--color-gold);
}

.site-nav ul {
  display: flex;
  gap: var(--space-md);
  list-style: none;
  margin: 0;
  padding: 0;
}

.site-nav,
.site-footer {
  /* Discreet majolica/Caltagirone-inspired tile motif, low-opacity gold/bordeaux dots. */
  background-image:
    radial-gradient(circle at 0 0, rgba(201, 162, 39, 0.07) 0, transparent 60%),
    radial-gradient(circle at 100% 100%, rgba(92, 26, 26, 0.07) 0, transparent 60%);
  background-size: 48px 48px;
}

.site-footer {
  border-top: 1px solid var(--color-gold);
  padding: var(--space-lg) var(--space-md);
  text-align: center;
  font-size: 0.9rem;
  color: var(--color-text);
}

.site-footer .disclaimer {
  opacity: 0.85;
}

.hero {
  position: relative;
  min-height: 60vh;
  display: flex;
  align-items: flex-end;
  background-size: cover;
  background-position: center;
  padding: var(--space-lg) var(--space-md);
}

.hero::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(11, 11, 12, 0.95), rgba(11, 11, 12, 0.2));
}

.hero h1 {
  position: relative;
  z-index: 1;
  font-size: 3rem;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: var(--space-md);
  padding: var(--space-lg) var(--space-md);
}

.card {
  border: 1px solid rgba(201, 162, 39, 0.3);
  padding: var(--space-md);
  transition: border-color 0.2s, box-shadow 0.2s;
}

.card:hover {
  border-color: var(--color-gold);
  box-shadow: 0 0 16px rgba(201, 162, 39, 0.25);
}

.pull-quote {
  font-family: var(--font-display);
  font-style: italic;
  font-size: 1.4rem;
  color: var(--color-gold-bright);
  border-left: 2px solid var(--color-gold);
  padding-left: var(--space-md);
  margin: var(--space-lg) 0;
}
```

- [ ] **Step 2: Run the build and verify the CSS is copied**

Run: `npm run build`
Expected: `_site/assets/css/style.css` exists (created via `addPassthroughCopy("src/assets")` from Task 1).

Run (PowerShell): `Test-Path _site/assets/css/style.css`
Expected: `True`

- [ ] **Step 3: Commit**

```bash
git add src/assets/css/style.css
git commit -m "feat: add design tokens and base styles"
```

---

## Task 5: Home Page (IT/EN + Root Duplicate)

**Files:**
- Create: `src/_data/home.json`
- Create: `src/_includes/partials/home-body.njk`
- Create: `src/home.njk`
- Modify: `src/index.njk` (replace smoke-test content with the real homepage)
- Modify: `src/_includes/layouts/base.njk` (add optional canonical tag)
- Create: `src/assets/img/ciccio/.gitkeep`, `src/assets/img/ristoranti/.gitkeep`, `src/assets/img/piatti/.gitkeep`, `src/assets/img/press/.gitkeep`, `src/assets/img/galleria/.gitkeep`

- [ ] **Step 1: Create the image asset folders (empty for now, filled in later tasks)**

Run (PowerShell):
```powershell
New-Item -ItemType Directory -Force src/assets/img/ciccio, src/assets/img/ristoranti, src/assets/img/piatti, src/assets/img/press, src/assets/img/galleria
"" | Out-File src/assets/img/ciccio/.gitkeep -Encoding utf8
"" | Out-File src/assets/img/ristoranti/.gitkeep -Encoding utf8
"" | Out-File src/assets/img/piatti/.gitkeep -Encoding utf8
"" | Out-File src/assets/img/press/.gitkeep -Encoding utf8
"" | Out-File src/assets/img/galleria/.gitkeep -Encoding utf8
```

The hero image referenced below (`/assets/img/ciccio/hero-placeholder.jpg`) does not exist yet — it is provided by the user (real photo of Francesco) per Task 21. A missing image simply renders as a blank hero background; it does not break the build.

- [ ] **Step 2: Create `src/_data/home.json`**

```json
{
  "it": {
    "heading": "Francesco D'Amplo",
    "subheading": "Chef, visionario, imprenditore del lusso siciliano.",
    "intro": "Quattro ristoranti, tre continenti, e un numero di stelle Michelin che lui stesso ha perso il conto. Benvenuti nel mondo di Ciccio Damplo.",
    "quote": "“La cucina siciliana non si cucina. Si dirige, come un film.” — Francesco D'Amplo"
  },
  "en": {
    "heading": "Francesco D'Amplo",
    "subheading": "Chef, visionary, Sicilian luxury entrepreneur.",
    "intro": "Four restaurants, three continents, and a number of Michelin stars even he has lost count of. Welcome to the world of Ciccio Damplo.",
    "quote": "“Sicilian cuisine isn't cooked. It's directed, like a film.” — Francesco D'Amplo"
  }
}
```

- [ ] **Step 3: Create `src/_includes/partials/home-body.njk`**

```njk
<section class="hero" style="background-image: url('/assets/img/ciccio/hero-placeholder.jpg')">
  <div>
    <h1>{{ home[lang].heading }}</h1>
    <p>{{ home[lang].subheading }}</p>
  </div>
</section>
<section>
  <p>{{ home[lang].intro }}</p>
  <p class="pull-quote">{{ home[lang].quote }}</p>
</section>
```

- [ ] **Step 4: Create `src/home.njk` (generates `/it/` and `/en/`)**

```njk
---
pagination:
  data: site.langs
  size: 1
  alias: lang
permalink: "/{{ lang }}/index.html"
layout: layouts/base.njk
title: "Ciccio Damplo"
---
{% include "partials/home-body.njk" %}
```

- [ ] **Step 5: Add an optional canonical tag to `src/_includes/layouts/base.njk`**

Find this block in the `<head>`:

```njk
  <link rel="stylesheet" href="/assets/css/style.css">
```

Replace it with:

```njk
  <link rel="stylesheet" href="/assets/css/style.css">
  {% if canonical %}
  <link rel="canonical" href="{{ site.baseUrl }}{{ canonical }}">
  {% endif %}
```

- [ ] **Step 6: Replace `src/index.njk` with the real root homepage**

```njk
---
layout: layouts/base.njk
title: "Ciccio Damplo"
lang: it
canonical: "/it/"
---
{% include "partials/home-body.njk" %}
```

- [ ] **Step 7: Run the build and verify all three homepage outputs**

Run: `npm run build`

Run (PowerShell): `Test-Path _site/it/index.html, _site/en/index.html, _site/index.html`
Expected: prints `True` three times.

Run (PowerShell): `Get-Content _site/en/index.html | Select-String "Sicilian luxury entrepreneur"`
Expected: one matching line (confirms the English homepage rendered English content, not Italian).

Run (PowerShell): `Get-Content _site/index.html | Select-String 'rel="canonical" href="http://localhost:8080/it/"'`
Expected: one matching line.

- [ ] **Step 8: Commit**

```bash
git add src/_data/home.json src/_includes/partials/home-body.njk src/home.njk src/index.njk src/_includes/layouts/base.njk src/assets/img/*/.gitkeep
git commit -m "feat: add bilingual home page"
```

---

## Task 6: Biografia Page

**Files:**
- Create: `src/_data/biografia.json`
- Create: `src/_includes/partials/biografia-body.njk`
- Create: `src/biografia.njk`

- [ ] **Step 1: Create `src/_data/biografia.json`**

```json
{
  "it": {
    "title": "Francesco D'Amplo — Il Visionario di Mineo",
    "paragraphs": [
      "Nato a Mineo, in provincia di Catania, in una notte di novembre in cui — si racconta — anche l'Etna si fermò a sentire l'odore del soffritto di casa D'Amplo, Francesco mostrò fin da bambino un rapporto quasi mistico con il cibo. A sette anni preparava già la sua prima Caponata Concettuale. A dodici, fu temporaneamente sospeso dalla scuola elementare per aver tentato di brevettare la “Granita a Doppia Cottura Inversa”.",
      "Dopo un apprendistato leggendario nelle cucine di tre trattorie di Mineo (di cui due chiuse poco dopo il suo passaggio, per ragioni che lui definisce ‘gelosia professionale’), Francesco capì che il suo destino non era restare in Sicilia: era portare la Sicilia al mondo, una porzione di arancino alla volta. Nel 2009 apre il primo Damplo. Oggi la catena conta quattro location, sedici stelle Michelin (autoassegnate, ma con grande convinzione) e un numero di fan club non meglio precisato.",
      "‘La cucina siciliana,’ ama ripetere Ciccio, ‘non si cucina. Si dirige, come un film. E io sono il regista, il protagonista, e spesso anche il catering.’ La sua filosofia, battezzata ‘Decostruzionismo Affettivo Mediterraneo’, consiste nel prendere un piatto della nonna e renderlo irriconoscibile fino a farlo costare quanto un'automobile usata.",
      "Oggi Francesco D'Amplo non è più solo un uomo. È un brand, un'emozione, un hashtag. Tra un volo per Dubai e una diretta Instagram dalla sua cucina di Monaco, continua a ripetere la stessa promessa ai suoi clienti: ‘Vi farò piangere. Di gusto, ovviamente.’"
    ]
  },
  "en": {
    "title": "Francesco D'Amplo — The Visionary of Mineo",
    "paragraphs": [
      "Born in Mineo, in the province of Catania, on a November night when — as the story goes — even Mount Etna paused to catch the scent of the D'Amplo family's soffritto, Francesco showed an almost mystical relationship with food from childhood. At seven, he was already preparing his first Conceptual Caponata. At twelve, he was briefly suspended from elementary school for attempting to patent “Reverse Double-Reduction Granita.”",
      "After a legendary apprenticeship in three trattorias in Mineo (two of which closed shortly after his departure, for reasons he describes as ‘professional jealousy’), Francesco realized his destiny wasn't to stay in Sicily — it was to bring Sicily to the world, one arancino at a time. In 2009 he opened the first Damplo. Today the chain spans four locations, sixteen Michelin stars (self-awarded, but with great conviction), and an unspecified number of fan clubs.",
      "‘Sicilian cuisine,’ Ciccio likes to say, ‘isn't cooked. It's directed — like a film. And I am the director, the lead actor, and often the catering too.’ His philosophy, christened ‘Mediterranean Affective Deconstructionism,’ consists of taking a grandmother's recipe and rendering it unrecognizable, until it costs about as much as a used car.",
      "Today, Francesco D'Amplo is no longer just a man. He is a brand, an emotion, a hashtag. Between a flight to Dubai and an Instagram livestream from his kitchen in Monaco, he keeps repeating the same promise to his guests: ‘I will make you cry. Of flavor, obviously.’"
    ]
  }
}
```

- [ ] **Step 2: Create `src/_includes/partials/biografia-body.njk`**

```njk
<article class="biografia">
  <h1>{{ biografia[lang].title }}</h1>
  {% for paragraph in biografia[lang].paragraphs %}
  <p>{{ paragraph }}</p>
  {% endfor %}
</article>
```

- [ ] **Step 3: Create `src/biografia.njk`**

```njk
---
pagination:
  data: site.langs
  size: 1
  alias: lang
permalink: "/{{ lang }}/biografia/index.html"
layout: layouts/base.njk
hreflangIt: "/it/biografia/"
hreflangEn: "/en/biografia/"
eleventyComputed:
  title: "{% if lang == 'it' %}Biografia{% else %}Biography{% endif %}"
  langSwitchUrl: "{% if lang == 'it' %}/en/biografia/{% else %}/it/biografia/{% endif %}"
---
{% include "partials/biografia-body.njk" %}
```

- [ ] **Step 4: Run the build and verify both languages**

Run: `npm run build`

Run (PowerShell): `Get-Content _site/it/biografia/index.html | Select-String "Decostruzionismo Affettivo"`
Expected: one matching line.

Run (PowerShell): `Get-Content _site/en/biografia/index.html | Select-String "Mediterranean Affective Deconstructionism"`
Expected: one matching line.

- [ ] **Step 5: Commit**

```bash
git add src/_data/biografia.json src/_includes/partials/biografia-body.njk src/biografia.njk
git commit -m "feat: add bilingual biografia page"
```

---

## Task 7: 404 Page

**Files:**
- Create: `src/_data/notFound.json`
- Create: `src/_includes/partials/notfound-body.njk`
- Create: `src/404-localized.njk` (generates `/it/404/` and `/en/404/`)
- Create: `src/404.njk` (root `404.html`, required by GitHub Pages convention, IT content)

- [ ] **Step 1: Create `src/_data/notFound.json`**

```json
{
  "it": {
    "title": "404 — Piatto Non Disponibile",
    "message": "Questo piatto non è nel menu. Forse Ciccio l'ha deconstruito così tanto che è scomparso del tutto. Torna alla Home e prova qualcosa che esiste davvero.",
    "cta": "Torna alla Home"
  },
  "en": {
    "title": "404 — Dish Not Available",
    "message": "This dish isn't on the menu. Maybe Ciccio deconstructed it so much it disappeared entirely. Head back to the Home page and try something that actually exists.",
    "cta": "Back to Home"
  }
}
```

- [ ] **Step 2: Create `src/_includes/partials/notfound-body.njk`**

```njk
<section class="not-found">
  <h1>{{ notFound[lang].title }}</h1>
  <p>{{ notFound[lang].message }}</p>
  <p><a href="/{{ lang }}/">{{ notFound[lang].cta }}</a></p>
</section>
```

- [ ] **Step 3: Create `src/404-localized.njk`**

```njk
---
pagination:
  data: site.langs
  size: 1
  alias: lang
permalink: "/{{ lang }}/404/index.html"
layout: layouts/base.njk
title: "404"
hreflangIt: "/it/404/"
hreflangEn: "/en/404/"
eleventyExcludeFromCollections: true
eleventyComputed:
  langSwitchUrl: "{% if lang == 'it' %}/en/404/{% else %}/it/404/{% endif %}"
---
{% include "partials/notfound-body.njk" %}
```

- [ ] **Step 4: Create `src/404.njk` (root-level, required filename for GitHub Pages)**

```njk
---
layout: layouts/base.njk
title: "404"
lang: it
permalink: "/404.html"
eleventyExcludeFromCollections: true
---
{% include "partials/notfound-body.njk" %}
```

- [ ] **Step 5: Run the build and verify all three 404 outputs**

Run: `npm run build`

Run (PowerShell): `Test-Path _site/it/404/index.html, _site/en/404/index.html, _site/404.html`
Expected: prints `True` three times.

- [ ] **Step 6: Commit**

```bash
git add src/_data/notFound.json src/_includes/partials/notfound-body.njk src/404-localized.njk src/404.njk
git commit -m "feat: add themed 404 pages"
```

---

## Task 8: Ristoranti Data and Index Page

**Files:**
- Create: `src/_data/ristoranti.json`
- Create: `src/ristoranti/index.njk`

- [ ] **Step 1: Create `src/_data/ristoranti.json`**

```json
[
  {
    "slug": "damplo-mineo",
    "nome": "Damplo Mineo",
    "citta": { "it": "Mineo, Sicilia", "en": "Mineo, Sicily" },
    "tagline": {
      "it": "Dove tutto è iniziato, tra un ulivo e un certificato di laurea mai ritirato.",
      "en": "Where it all began, between an olive tree and a diploma he never picked up."
    },
    "descrizione": {
      "it": "Il ristorante madre. Qui Ciccio ha inventato il concetto di “menu emotivo a sorpresa”, dove il prezzo del piatto varia in base a quanto il cliente sembra apprezzarlo guardandolo negli occhi. Vista panoramica sulla Piana di Catania, arredamento in pietra lavica e velluto verde smeraldo, playlist a base di tammurriata remixata in chiave lounge.",
      "en": "The mother restaurant. Here Ciccio invented the concept of the “surprise emotional menu,” where the price of a dish varies depending on how much the guest seems to appreciate it while making eye contact. Panoramic views of the Catania plain, lava-stone and emerald velvet interiors, a soundtrack of tammurriata remixed into lounge music."
    },
    "stelleMichelinFinte": 3
  },
  {
    "slug": "damplo-dubai",
    "nome": "Damplo Dubai",
    "citta": { "it": "Dubai, Emirati Arabi Uniti", "en": "Dubai, UAE" },
    "tagline": {
      "it": "La Sicilia, ma con l'oro vero.",
      "en": "Sicily, but with real gold."
    },
    "descrizione": {
      "it": "All'ultimo piano di una torre che Ciccio descrive come “più alta della mia autostima, e non è poco”. Qui l'arancino viene servito su un piedistallo di marmo con tanto di luce spot dedicata. La carta dei vini è scritta interamente in caratteri dorati, anche le pagine che elencano l'acqua.",
      "en": "On the top floor of a tower Ciccio describes as “taller than my self-esteem, and that's saying something.” Here the arancino is served on a marble pedestal under its own dedicated spotlight. The wine list is printed entirely in gold lettering — even the page listing the water."
    },
    "stelleMichelinFinte": 4
  },
  {
    "slug": "damplo-monaco",
    "nome": "Damplo Monaco",
    "citta": { "it": "Monte-Carlo, Monaco", "en": "Monte-Carlo, Monaco" },
    "tagline": {
      "it": "Per chi ha già tutto, tranne un buon arancino.",
      "en": "For those who have everything, except a good arancino."
    },
    "descrizione": {
      "it": "Affacciato sul porto degli yacht, Damplo Monaco è il luogo dove principi, ex calciatori e influencer si contendono il tavolo accanto alla cucina a vista, l'unico posto dove si può guardare Ciccio piangere mentre assaggia la propria Pasta alla Norma.",
      "en": "Overlooking the yacht harbor, Damplo Monaco is where princes, retired footballers, and influencers fight over the table next to the open kitchen — the only seat from which you can watch Ciccio cry while tasting his own Pasta alla Norma."
    },
    "stelleMichelinFinte": 3
  },
  {
    "slug": "damplo-new-york",
    "nome": "Damplo New York",
    "citta": { "it": "New York, Stati Uniti", "en": "New York, USA" },
    "tagline": {
      "it": "L'arancino conquista Manhattan. Manhattan si arrende.",
      "en": "The arancino conquers Manhattan. Manhattan surrenders."
    },
    "descrizione": {
      "it": "Nel cuore di Manhattan, tra un grattacielo e un altro, Damplo New York porta il lusso siciliano a chi non sa ancora cosa sia un cannolo ma è disposto a pagare 45 dollari per scoprirlo. Menu in inglese, urla in siciliano, conto in entrambe le lingue.",
      "en": "In the heart of Manhattan, between one skyscraper and the next, Damplo New York brings Sicilian luxury to those who don't yet know what a cannolo is but are willing to pay $45 to find out. Menu in English, shouting in Sicilian, the bill in both languages."
    },
    "stelleMichelinFinte": 2
  }
]
```

- [ ] **Step 2: Create `src/ristoranti/index.njk`**

```njk
---
pagination:
  data: site.langs
  size: 1
  alias: lang
permalink: "/{{ lang }}/ristoranti/index.html"
layout: layouts/base.njk
hreflangIt: "/it/ristoranti/"
hreflangEn: "/en/ristoranti/"
eleventyComputed:
  title: "{% if lang == 'it' %}Ristoranti{% else %}Restaurants{% endif %}"
  langSwitchUrl: "{% if lang == 'it' %}/en/ristoranti/{% else %}/it/ristoranti/{% endif %}"
---
<h1>{% if lang == "it" %}I Ristoranti Damplo{% else %}The Damplo Restaurants{% endif %}</h1>
<div class="card-grid">
  {% for ristorante in ristoranti %}
  <a class="card" href="/{{ lang }}/ristoranti/{{ ristorante.slug }}/">
    <h2>{{ ristorante.nome }}</h2>
    <p>{{ ristorante.citta[lang] }}</p>
    <p class="pull-quote">{{ ristorante.tagline[lang] }}</p>
  </a>
  {% endfor %}
</div>
```

- [ ] **Step 3: Run the build and verify**

Run: `npm run build`

Run (PowerShell): `Get-Content _site/it/ristoranti/index.html | Select-String "Damplo Dubai"`
Expected: one matching line.

Run (PowerShell): `Get-Content _site/en/ristoranti/index.html | Select-String "Sicily, but with real gold"`
Expected: one matching line.

- [ ] **Step 4: Commit**

```bash
git add src/_data/ristoranti.json src/ristoranti/index.njk
git commit -m "feat: add ristoranti data and index page"
```

---

## Task 9: Ristoranti Detail Pages

**Files:**
- Create: `src/_data/ristorantiPages.js`
- Create: `src/ristoranti/dettaglio.njk`
- Modify: `src/_includes/partials/nav.njk` (support per-page language-switch URLs)

- [ ] **Step 1: Create `src/_data/ristorantiPages.js`**

```js
const ristoranti = require("./ristoranti.json");
const site = require("./site.js");

module.exports = function () {
  const pages = [];
  for (const ristorante of ristoranti) {
    for (const lang of site.langs) {
      pages.push({ lang, ...ristorante });
    }
  }
  return pages;
};
```

- [ ] **Step 2: Update `src/_includes/partials/nav.njk` to support a per-page language-switch URL**

Find this block:

```njk
  {% if lang == "it" %}
    <a class="lang-switch" href="/en/">{{ i18n.langSwitchLabel.it }}</a>
  {% else %}
    <a class="lang-switch" href="/it/">{{ i18n.langSwitchLabel.en }}</a>
  {% endif %}
```

Replace it with:

```njk
  {% if lang == "it" %}
    <a class="lang-switch" href="{{ langSwitchUrl or '/en/' }}">{{ i18n.langSwitchLabel.it }}</a>
  {% else %}
    <a class="lang-switch" href="{{ langSwitchUrl or '/it/' }}">{{ i18n.langSwitchLabel.en }}</a>
  {% endif %}
```

When a page defines `langSwitchUrl` (via `eleventyComputed`), the switcher jumps to that page's exact translation. Otherwise it falls back to the section root, same as before.

- [ ] **Step 3: Create `src/ristoranti/dettaglio.njk`**

```njk
---
pagination:
  data: ristorantiPages
  size: 1
  alias: item
permalink: "/{{ item.lang }}/ristoranti/{{ item.slug }}/index.html"
layout: layouts/base.njk
eleventyComputed:
  title: "{{ item.nome }}"
  lang: "{{ item.lang }}"
  hreflangIt: "/it/ristoranti/{{ item.slug }}/"
  hreflangEn: "/en/ristoranti/{{ item.slug }}/"
  langSwitchUrl: "{% if item.lang == 'it' %}/en/ristoranti/{{ item.slug }}/{% else %}/it/ristoranti/{{ item.slug }}/{% endif %}"
---
<section class="hero" style="background-image: url('/assets/img/ristoranti/{{ item.slug }}-hero.jpg')">
  <div>
    <h1>{{ item.nome }}</h1>
    <p>{{ item.citta[item.lang] }}</p>
  </div>
</section>
<section>
  <p class="pull-quote">{{ item.tagline[item.lang] }}</p>
  <p>{{ item.descrizione[item.lang] }}</p>
  <p>
    {% for n in range(item.stelleMichelinFinte) %}★{% endfor %}
    {% if item.lang == "it" %}({{ item.stelleMichelinFinte }} stelle Michelin, finte){% else %}({{ item.stelleMichelinFinte }} fictional Michelin stars){% endif %}
  </p>
</section>
```

- [ ] **Step 4: Run the build and verify all 8 detail pages exist with correct content**

Run: `npm run build`

Run (PowerShell): `Test-Path _site/it/ristoranti/damplo-dubai/index.html, _site/en/ristoranti/damplo-dubai/index.html`
Expected: `True` twice.

Run (PowerShell): `Get-Content _site/it/ristoranti/damplo-dubai/index.html | Select-String "oro vero"`
Expected: one matching line.

Run (PowerShell): `Get-Content _site/en/ristoranti/damplo-dubai/index.html | Select-String 'href="/it/ristoranti/damplo-dubai/"'`
Expected: one matching line (confirms the language switch link points at the exact translated page, not just the section root).

- [ ] **Step 5: Commit**

```bash
git add src/_data/ristorantiPages.js src/ristoranti/dettaglio.njk src/_includes/partials/nav.njk
git commit -m "feat: add ristoranti detail pages with per-page language switching"
```

---

## Task 10: Piatti Data and Index Page

**Files:**
- Create: `src/_data/piatti.json`
- Create: `src/piatti/index.njk`

- [ ] **Step 1: Create `src/_data/piatti.json`**

```json
[
  {
    "slug": "arancino-decostruito",
    "nome": "Arancino Decostruito al Profumo di Lamborghini",
    "sottotitoloIronico": {
      "it": "Non si guida. Si assapora.",
      "en": "You don't drive it. You savor it."
    },
    "descrizione": {
      "it": "Riso, ragù e zafferano separati in tre composizioni distinte su un piatto che costa più del piatto stesso. Il “profumo di Lamborghini” è in realtà un olio essenziale al cuoio creato apposta dal nostro profumiere personale. Nessuna automobile è stata utilizzata nella preparazione, ma molte sono state menzionate.",
      "en": "Rice, ragù, and saffron separated into three distinct compositions on a plate that costs more than the plate. The “Lamborghini scent” is actually a custom leather essential oil created by our personal perfumer. No automobiles were used in the making of this dish, but several were name-dropped."
    },
    "prezzoAssurdo": {
      "it": "€ 180 — gomma da masticare in omaggio",
      "en": "€180 — complimentary chewing gum included"
    },
    "ristoranteOrigine": "damplo-dubai"
  },
  {
    "slug": "pasta-alla-norma-riserva-privata",
    "nome": "Pasta alla Norma Riserva Privata",
    "sottotitoloIronico": {
      "it": "La nonna approverebbe. Forse.",
      "en": "Grandma would approve. Maybe."
    },
    "descrizione": {
      "it": "La classica Norma, ma invecchiata 18 mesi in botte — non gli ingredienti, il piatto stesso, che viene servito solo dopo essere stato fotografato professionalmente per un anno e mezzo. Melanzane affumicate a vista del cliente, con cerimonia dedicata.",
      "en": "The classic Norma, but barrel-aged for 18 months — not the ingredients, the dish itself, which is only served after being professionally photographed for a year and a half. Eggplant smoked tableside, with its own dedicated ceremony."
    },
    "prezzoAssurdo": {
      "it": "€ 95 a porzione, certificato di autenticità incluso",
      "en": "€95 per portion, certificate of authenticity included"
    },
    "ristoranteOrigine": "damplo-mineo"
  },
  {
    "slug": "cannolo-omakase-experience",
    "nome": "Cannolo Omakase Experience",
    "sottotitoloIronico": {
      "it": "Sette cannoli. Sette atti. Un solo finale di lacrime.",
      "en": "Seven cannoli. Seven acts. One tearful finale."
    },
    "descrizione": {
      "it": "Sette cannoli in sequenza narrativa, ciascuno a rappresentare una fase della vita di Ciccio. Il quarto cannolo è dedicato al periodo in cui ha “quasi” apprezzato il pistacchio non siciliano, prima di pentirsene pubblicamente.",
      "en": "Seven cannoli served as a narrative sequence, each representing a stage in Ciccio's life. The fourth cannolo is dedicated to the brief period he “almost” appreciated non-Sicilian pistachio, before publicly renouncing it."
    },
    "prezzoAssurdo": {
      "it": "€ 220, prenotazione richiesta con tre mesi di anticipo emotivo",
      "en": "€220, booking requires three months of emotional advance notice"
    },
    "ristoranteOrigine": "damplo-monaco"
  },
  {
    "slug": "granita-affumicata-al-caviale",
    "nome": "Granita Affumicata al Caviale",
    "sottotitoloIronico": {
      "it": "La colazione che non ti meriti, ma che pagherai comunque.",
      "en": "The breakfast you don't deserve, but will pay for anyway."
    },
    "descrizione": {
      "it": "La granita siciliana tradizionale, affumicata con legno di carrubo importato e coronata da una generosa quantità di caviale, perché “a Ciccio piace contrastare”. Servita con brioscia intagliata a mano da un artigiano che ha smesso di fare altro nella vita.",
      "en": "Traditional Sicilian granita, smoked over imported carob wood and crowned with a generous helping of caviar, because “Ciccio likes contrast.” Served with a hand-carved brioche made by an artisan who has given up doing anything else in life."
    },
    "prezzoAssurdo": {
      "it": "€ 65, caviale aggiuntivo a richiesta (sconsigliato dal cardiologo)",
      "en": "€65, extra caviar on request (not recommended by your cardiologist)"
    },
    "ristoranteOrigine": "damplo-new-york"
  }
]
```

- [ ] **Step 2: Create `src/piatti/index.njk`**

```njk
---
pagination:
  data: site.langs
  size: 1
  alias: lang
permalink: "/{{ lang }}/piatti/index.html"
layout: layouts/base.njk
hreflangIt: "/it/piatti/"
hreflangEn: "/en/piatti/"
eleventyComputed:
  title: "{% if lang == 'it' %}Piatti{% else %}Dishes{% endif %}"
  langSwitchUrl: "{% if lang == 'it' %}/en/piatti/{% else %}/it/piatti/{% endif %}"
---
<h1>{% if lang == "it" %}Piatti Iconici{% else %}Iconic Dishes{% endif %}</h1>
<div class="card-grid">
  {% for piatto in piatti %}
  <a class="card" href="/{{ lang }}/piatti/{{ piatto.slug }}/">
    <h2>{{ piatto.nome }}</h2>
    <p class="pull-quote">{{ piatto.sottotitoloIronico[lang] }}</p>
    <p>{{ piatto.prezzoAssurdo[lang] }}</p>
  </a>
  {% endfor %}
</div>
```

- [ ] **Step 3: Run the build and verify**

Run: `npm run build`

Run (PowerShell): `Get-Content _site/it/piatti/index.html | Select-String "Lamborghini"`
Expected: one matching line.

Run (PowerShell): `Get-Content _site/en/piatti/index.html | Select-String "complimentary chewing gum"`
Expected: one matching line.

- [ ] **Step 4: Commit**

```bash
git add src/_data/piatti.json src/piatti/index.njk
git commit -m "feat: add piatti data and index page"
```

---

## Task 11: Piatti Detail Pages (with Restaurant Cross-Link)

**Files:**
- Create: `src/_data/piattiPages.js`
- Create: `src/piatti/dettaglio.njk`
- Modify: `.eleventy.js` (add a `ristorantePerSlug` filter)

- [ ] **Step 1: Create `src/_data/piattiPages.js`**

```js
const piatti = require("./piatti.json");
const site = require("./site.js");

module.exports = function () {
  const pages = [];
  for (const piatto of piatti) {
    for (const lang of site.langs) {
      pages.push({ lang, ...piatto });
    }
  }
  return pages;
};
```

- [ ] **Step 2: Update `.eleventy.js` to add a restaurant-lookup filter**

Find:

```js
module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");

  return {
```

Replace with:

```js
const ristoranti = require("./src/_data/ristoranti.json");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addFilter("ristorantePerSlug", (slug) =>
    ristoranti.find((r) => r.slug === slug)
  );

  return {
```

- [ ] **Step 3: Create `src/piatti/dettaglio.njk`**

```njk
---
pagination:
  data: piattiPages
  size: 1
  alias: item
permalink: "/{{ item.lang }}/piatti/{{ item.slug }}/index.html"
layout: layouts/base.njk
eleventyComputed:
  title: "{{ item.nome }}"
  lang: "{{ item.lang }}"
  hreflangIt: "/it/piatti/{{ item.slug }}/"
  hreflangEn: "/en/piatti/{{ item.slug }}/"
  langSwitchUrl: "{% if item.lang == 'it' %}/en/piatti/{{ item.slug }}/{% else %}/it/piatti/{{ item.slug }}/{% endif %}"
---
{% set ristorante = item.ristoranteOrigine | ristorantePerSlug %}
<section class="hero" style="background-image: url('/assets/img/piatti/{{ item.slug }}.jpg')">
  <div>
    <h1>{{ item.nome }}</h1>
    <p class="pull-quote">{{ item.sottotitoloIronico[item.lang] }}</p>
  </div>
</section>
<section>
  <p>{{ item.descrizione[item.lang] }}</p>
  <p><strong>{{ item.prezzoAssurdo[item.lang] }}</strong></p>
  {% if ristorante %}
  <p>
    {% if item.lang == "it" %}Disponibile presso{% else %}Available at{% endif %}
    <a href="/{{ item.lang }}/ristoranti/{{ ristorante.slug }}/">{{ ristorante.nome }}</a>
  </p>
  {% endif %}
</section>
```

- [ ] **Step 4: Run the build and verify the cross-link resolves**

Run: `npm run build`

Run (PowerShell): `Get-Content _site/it/piatti/arancino-decostruito/index.html | Select-String 'href="/it/ristoranti/damplo-dubai/"'`
Expected: one matching line (confirms the dish correctly links to its origin restaurant page).

Run (PowerShell): `Get-Content _site/en/piatti/granita-affumicata-al-caviale/index.html | Select-String "Damplo New York"`
Expected: one matching line.

- [ ] **Step 5: Commit**

```bash
git add src/_data/piattiPages.js src/piatti/dettaglio.njk .eleventy.js
git commit -m "feat: add piatti detail pages with restaurant cross-link"
```

---

## Task 12: Press Data and Index Page

**Files:**
- Create: `src/_data/press.json`
- Create: `src/press/index.njk`

- [ ] **Step 1: Create `src/_data/press.json`**

```json
[
  {
    "slug": "the-mineo-times-il-figlio-di-mineo",
    "testata": "The Mineo Times",
    "titolo": {
      "it": "Il Figlio di Mineo Conquista il Mondo (e Anche Dubai)",
      "en": "Mineo's Son Conquers the World (and Also Dubai)"
    },
    "estratto": {
      "it": "Dalla cucina di una nonna a quattro ristoranti su tre continenti: la storia di Francesco D'Amplo è la prova che, a Mineo, i sogni si fanno in pentola.",
      "en": "From a grandmother's kitchen to four restaurants across three continents: Francesco D'Amplo's story proves that in Mineo, dreams are made in a pot."
    },
    "data": "2023-04-12",
    "corpo": {
      "it": [
        "Quando Francesco D'Amplo lasciò Mineo nel 2008 con una valigia e una ricetta di caponata “rivista”, nessuno avrebbe immaginato che quindici anni dopo il suo nome sarebbe apparso su un grattacielo a Dubai.",
        "“Non sono mai andato via da Mineo,” ha dichiarato Ciccio durante un'intervista esclusiva concessa al nostro giornale dal sedile in pelle del suo jet privato. “Mineo è venuta con me. In ogni arancino che servo, c'è un pezzo della Piana di Catania. E anche un po' di oro, ultimamente.”",
        "Il sindaco di Mineo ha commentato: “Siamo orgogliosi di Francesco. Anche se non siamo sicurissimi di cosa faccia esattamente, ogni tanto ci manda foto di piatti che costano più della pensione di mio nonno.”"
      ],
      "en": [
        "When Francesco D'Amplo left Mineo in 2008 with a suitcase and a “revised” caponata recipe, nobody could have imagined that fifteen years later his name would appear on a skyscraper in Dubai.",
        "“I never really left Mineo,” Ciccio declared in an exclusive interview granted to our newspaper from the leather seat of his private jet. “Mineo came with me. In every arancino I serve, there's a piece of the Catania plain. And lately, also a bit of gold.”",
        "The mayor of Mineo commented: “We're proud of Francesco. Although we're not entirely sure what he does exactly, every so often he sends us photos of dishes that cost more than my grandfather's pension.”"
      ]
    }
  },
  {
    "slug": "sicilian-luxury-digest-il-lusso-ha-un-nuovo-accento",
    "testata": "Sicilian Luxury Digest",
    "titolo": {
      "it": "Il Lusso Ha un Nuovo Accento (Ed È Catanese)",
      "en": "Luxury Has a New Accent (And It's From Catania)"
    },
    "estratto": {
      "it": "Damplo Monaco si è imposto come il tavolo più richiesto della Costa Azzurra, complice un menu che fa piangere — letteralmente — anche i palati più blasonati.",
      "en": "Damplo Monaco has established itself as the most sought-after table on the French Riviera, helped by a menu that makes even the most distinguished palates — literally — cry."
    },
    "data": "2023-07-02",
    "corpo": {
      "it": [
        "Tra i tavoli di Damplo Monaco si sono seduti principi, ex calciatori e almeno un'influencer che ha definito l'esperienza “più emozionante del suo matrimonio, ma con un servizio migliore.”",
        "Lo chef Francesco D'Amplo, intervistato mentre tagliava personalmente un cannolo con un bisturi dorato, ha spiegato la sua filosofia: “Il lusso non è il prezzo. È la sofferenza che metti nel piatto. E anche un po' il prezzo.”",
        "Damplo Monaco ha recentemente introdotto un servizio di “accompagnamento emotivo al conto”, dove un membro dello staff tiene la mano del cliente nel momento del pagamento."
      ],
      "en": [
        "Princes, retired footballers, and at least one influencer who described the experience as “more emotional than my own wedding, but with better service” have all taken a seat at Damplo Monaco.",
        "Chef Francesco D'Amplo, interviewed while personally slicing a cannolo with a gold-plated scalpel, explained his philosophy: “Luxury isn't the price. It's the suffering you put into the dish. And also, a bit, the price.”",
        "Damplo Monaco recently introduced an “emotional bill-support service,” in which a staff member holds the guest's hand at the moment of payment."
      ]
    }
  },
  {
    "slug": "arancino-business-review-l-impero-dell-arancino",
    "testata": "Arancino Business Review",
    "titolo": {
      "it": "L'Impero dell'Arancino: Come Ciccio D'Amplo Ha Trasformato lo Street Food in Asset di Lusso",
      "en": "The Arancino Empire: How Ciccio D'Amplo Turned Street Food Into a Luxury Asset"
    },
    "estratto": {
      "it": "Un'analisi (non richiesta) di come un piatto da due euro sia diventato, nelle mani giuste, un piatto da centottanta.",
      "en": "An (unsolicited) analysis of how a two-euro dish became, in the right hands, a hundred-and-eighty-euro one."
    },
    "data": "2023-09-18",
    "corpo": {
      "it": [
        "Gli analisti di mercato sono divisi: alcuni parlano di genio del rebranding, altri di “una bolla che scoppierà non appena qualcuno chiederà il conto a voce alta.”",
        "Quel che è certo è che il modello Damplo — prendere un piatto popolare, decostruirlo, illuminarlo con luce drammatica e moltiplicarne il prezzo per venti — ha generato un nuovo segmento di mercato che i nostri analisti hanno soprannominato “gastro-lusso emotivo”.",
        "Ciccio, raggiunto per un commento, ha risposto solo: “L'arancino non ha prezzo. Ma se proprio insistete, trecento euro.”"
      ],
      "en": [
        "Market analysts are divided: some call it rebranding genius, others “a bubble that will pop the moment someone asks for the bill out loud.”",
        "What's certain is that the Damplo model — take a popular dish, deconstruct it, light it dramatically, and multiply the price by twenty — has created a new market segment our analysts have nicknamed “emotional gastro-luxury.”",
        "Reached for comment, Ciccio replied only: “The arancino has no price. But if you really insist, three hundred euros.”"
      ]
    }
  },
  {
    "slug": "il-sole-24-arancini-mercati-in-rialzo",
    "testata": "Il Sole 24 Arancini",
    "titolo": {
      "it": "Mercati in Rialzo: Le Azioni Damplo (Immaginarie) Toccano Nuovi Massimi",
      "en": "Markets Up: (Imaginary) Damplo Shares Hit New Highs"
    },
    "estratto": {
      "it": "Gli indici del lusso gastronomico siciliano segnano un nuovo record, spinti dall'annuncio di un quinto ristorante Damplo “in qualche posto ancora più costoso di Monaco.”",
      "en": "Sicilian gastronomic luxury indexes hit a new record, driven by the announcement of a fifth Damplo restaurant “somewhere even more expensive than Monaco.”"
    },
    "data": "2023-11-30",
    "corpo": {
      "it": [
        "Le azioni (immaginarie) del gruppo Damplo sono salite del 340% dopo l'annuncio di Francesco D'Amplo su un quinto ristorante, la cui location resta top secret “per ragioni di sicurezza degli arancini.”",
        "Gli investitori (anche loro, per ora, immaginari) si dicono entusiasti: “Quando Ciccio dice che un piatto vale duecento euro, io ci credo. È carisma puro,” ha dichiarato un analista che ha chiesto di restare anonimo per “evitare di essere invitato a cena e dover pagare.”",
        "Il Sole 24 Arancini conferma: il settore del lusso culinario siciliano non è mai stato così solido, almeno sulla carta — letteralmente, quella del menu."
      ],
      "en": [
        "Damplo Group's (imaginary) shares rose 340% after Francesco D'Amplo announced a fifth restaurant, whose location remains top secret “for arancino security reasons.”",
        "Investors (also, for now, imaginary) say they're thrilled: “When Ciccio says a dish is worth two hundred euros, I believe him. It's pure charisma,” said one analyst who asked to remain anonymous to “avoid being invited to dinner and having to pay.”",
        "Il Sole 24 Arancini confirms: the Sicilian culinary luxury sector has never been stronger — at least on paper, literally, the menu's paper."
      ]
    }
  }
]
```

- [ ] **Step 2: Create `src/press/index.njk`**

```njk
---
pagination:
  data: site.langs
  size: 1
  alias: lang
permalink: "/{{ lang }}/press/index.html"
layout: layouts/base.njk
hreflangIt: "/it/press/"
hreflangEn: "/en/press/"
eleventyComputed:
  title: "Press"
  langSwitchUrl: "{% if lang == 'it' %}/en/press/{% else %}/it/press/{% endif %}"
---
<h1>{% if lang == "it" %}Rassegna Stampa{% else %}Press Coverage{% endif %}</h1>
<div class="card-grid">
  {% for articolo in press %}
  <a class="card" href="/{{ lang }}/press/{{ articolo.slug }}/">
    <h2>{{ articolo.testata }}</h2>
    <h3>{{ articolo.titolo[lang] }}</h3>
    <p>{{ articolo.estratto[lang] }}</p>
  </a>
  {% endfor %}
</div>
```

- [ ] **Step 3: Run the build and verify**

Run: `npm run build`

Run (PowerShell): `Get-Content _site/it/press/index.html | Select-String "Arancino Business Review"`
Expected: one matching line.

Run (PowerShell): `Get-Content _site/en/press/index.html | Select-String "Mineo's Son Conquers the World"`
Expected: one matching line.

- [ ] **Step 4: Commit**

```bash
git add src/_data/press.json src/press/index.njk
git commit -m "feat: add press data and index page"
```

---

## Task 13: Press Detail Pages

**Files:**
- Create: `src/_data/pressPages.js`
- Create: `src/press/dettaglio.njk`

- [ ] **Step 1: Create `src/_data/pressPages.js`**

```js
const press = require("./press.json");
const site = require("./site.js");

module.exports = function () {
  const pages = [];
  for (const articolo of press) {
    for (const lang of site.langs) {
      pages.push({ lang, ...articolo });
    }
  }
  return pages;
};
```

- [ ] **Step 2: Create `src/press/dettaglio.njk`**

```njk
---
pagination:
  data: pressPages
  size: 1
  alias: item
permalink: "/{{ item.lang }}/press/{{ item.slug }}/index.html"
layout: layouts/base.njk
eleventyComputed:
  title: "{{ item.titolo[item.lang] }}"
  lang: "{{ item.lang }}"
  hreflangIt: "/it/press/{{ item.slug }}/"
  hreflangEn: "/en/press/{{ item.slug }}/"
  langSwitchUrl: "{% if item.lang == 'it' %}/en/press/{{ item.slug }}/{% else %}/it/press/{{ item.slug }}/{% endif %}"
---
<article>
  <p class="masthead">{{ item.testata }} — {{ item.data }}</p>
  <h1>{{ item.titolo[item.lang] }}</h1>
  <img src="/assets/img/press/{{ item.slug }}.jpg" alt="{{ item.titolo[item.lang] }}">
  {% for paragraph in item.corpo[item.lang] %}
  <p>{{ paragraph }}</p>
  {% endfor %}
</article>
```

- [ ] **Step 3: Run the build and verify**

Run: `npm run build`

Run (PowerShell): `Get-Content _site/it/press/arancino-business-review-l-impero-dell-arancino/index.html | Select-String "trecento euro"`
Expected: one matching line.

Run (PowerShell): `Get-Content _site/en/press/arancino-business-review-l-impero-dell-arancino/index.html | Select-String "three hundred euros"`
Expected: one matching line.

- [ ] **Step 4: Commit**

```bash
git add src/_data/pressPages.js src/press/dettaglio.njk
git commit -m "feat: add press detail pages"
```

---

## Task 14: Premi Page (Single List, Both Languages)

**Files:**
- Create: `src/_data/premi.json`
- Create: `src/premi/index.njk`
- Modify: `src/assets/css/style.css` (add `.awards-list` styling)

- [ ] **Step 1: Create `src/_data/premi.json`**

```json
[
  { "nome": { "it": "Tre Stelle Michelin (Autoassegnate)", "en": "Three Michelin Stars (Self-Awarded)" }, "anno": 2015, "ente": { "it": "Guida Michelin (versione di Ciccio)", "en": "Michelin Guide (Ciccio's Version)" } },
  { "nome": { "it": "Golden Cannoli Awards — Miglior Chef Emotivo", "en": "Golden Cannoli Awards — Most Emotional Chef" }, "anno": 2017, "ente": { "it": "Golden Cannoli Awards", "en": "Golden Cannoli Awards" } },
  { "nome": { "it": "Best Emotional Pasta Experience", "en": "Best Emotional Pasta Experience" }, "anno": 2018, "ente": { "it": "International Pasta Feelings Council", "en": "International Pasta Feelings Council" } },
  { "nome": { "it": "Forbes 30 Under 30 — Edizione Mineo", "en": "Forbes 30 Under 30 — Mineo Edition" }, "anno": 2012, "ente": { "it": "Forbes (Edizione Locale Non Verificata)", "en": "Forbes (Unverified Local Edition)" } },
  { "nome": { "it": "Medaglia Internazionale di Eccellenza dell'Arancino", "en": "International Arancino Excellence Medal" }, "anno": 2019, "ente": { "it": "Federazione Mondiale dell'Arancino", "en": "World Arancino Federation" } },
  { "nome": { "it": "Miglior Ristorante del Mediterraneo (a detta sua)", "en": "Best Restaurant in the Mediterranean (according to him)" }, "anno": 2020, "ente": { "it": "Sicilian Luxury Digest", "en": "Sicilian Luxury Digest" } },
  { "nome": { "it": "Premio alla Carriera per Sofferenza Culinaria", "en": "Lifetime Achievement Award for Culinary Suffering" }, "anno": 2021, "ente": { "it": "Arancino Business Review", "en": "Arancino Business Review" } },
  { "nome": { "it": "Cucchiaio d'Oro Mediterraneo", "en": "Mediterranean Golden Spoon" }, "anno": 2022, "ente": { "it": "Il Sole 24 Arancini", "en": "Il Sole 24 Arancini" } },
  { "nome": { "it": "Ambasciatore Onorario del Pistacchio Siciliano", "en": "Honorary Ambassador of Sicilian Pistachio" }, "anno": 2023, "ente": { "it": "Consorzio Immaginario del Pistacchio", "en": "Imaginary Pistachio Consortium" } }
]
```

- [ ] **Step 2: Create `src/premi/index.njk`**

```njk
---
pagination:
  data: site.langs
  size: 1
  alias: lang
permalink: "/{{ lang }}/premi/index.html"
layout: layouts/base.njk
hreflangIt: "/it/premi/"
hreflangEn: "/en/premi/"
eleventyComputed:
  title: "{% if lang == 'it' %}Premi{% else %}Awards{% endif %}"
  langSwitchUrl: "{% if lang == 'it' %}/en/premi/{% else %}/it/premi/{% endif %}"
---
<h1>{% if lang == "it" %}Premi e Riconoscimenti{% else %}Awards & Recognitions{% endif %}</h1>
<ul class="awards-list">
  {% for premio in premi %}
  <li>
    <strong>{{ premio.nome[lang] }}</strong> — {{ premio.anno }}
    <br><span class="awards-ente">{{ premio.ente[lang] }}</span>
  </li>
  {% endfor %}
</ul>
```

- [ ] **Step 3: Add `.awards-list` styling to `src/assets/css/style.css`**

Append to the end of the file:

```css
.awards-list {
  list-style: none;
  max-width: 720px;
  margin: 0 auto;
  padding: var(--space-lg) var(--space-md);
}

.awards-list li {
  border-bottom: 1px solid rgba(201, 162, 39, 0.25);
  padding: var(--space-sm) 0;
}

.awards-ente {
  opacity: 0.75;
  font-size: 0.9rem;
}
```

- [ ] **Step 4: Run the build and verify**

Run: `npm run build`

Run (PowerShell): `Get-Content _site/it/premi/index.html | Select-String "Golden Cannoli Awards"`
Expected: one matching line.

Run (PowerShell): `Get-Content _site/en/premi/index.html | Select-String "Honorary Ambassador of Sicilian Pistachio"`
Expected: one matching line.

- [ ] **Step 5: Commit**

```bash
git add src/_data/premi.json src/premi/index.njk src/assets/css/style.css
git commit -m "feat: add premi page"
```

---

## Task 15: Galleria Page

**Files:**
- Create: `src/_data/galleria.json`
- Create: `src/galleria/index.njk`
- Modify: `src/assets/css/style.css` (add `.gallery-grid` styling)

- [ ] **Step 1: Create `src/_data/galleria.json`**

```json
[
  {
    "file": "/assets/img/galleria/ciccio-ritratto-cucina.jpg",
    "caption": {
      "it": "Ciccio nella sua cucina di Mineo, un attimo prima di decostruire qualcosa.",
      "en": "Ciccio in his Mineo kitchen, a moment before deconstructing something."
    }
  },
  {
    "file": "/assets/img/galleria/damplo-dubai-skyline.jpg",
    "caption": {
      "it": "Damplo Dubai, visto da un angolo che costa più dell'affitto di un anno.",
      "en": "Damplo Dubai, viewed from an angle that costs more than a year's rent."
    }
  },
  {
    "file": "/assets/img/galleria/arancino-decostruito-piatto.jpg",
    "caption": {
      "it": "L'Arancino Decostruito, durante uno dei suoi rari momenti di immobilità.",
      "en": "The Deconstructed Arancino, during one of its rare moments of stillness."
    }
  },
  {
    "file": "/assets/img/galleria/pasta-norma-riserva.jpg",
    "caption": {
      "it": "Pasta alla Norma Riserva Privata, invecchiata più di alcune amicizie di Ciccio.",
      "en": "Pasta alla Norma Riserva Privata, aged longer than some of Ciccio's friendships."
    }
  },
  {
    "file": "/assets/img/galleria/damplo-monaco-porto.jpg",
    "caption": {
      "it": "Damplo Monaco, dove anche gli yacht sembrano piccoli.",
      "en": "Damplo Monaco, where even the yachts look small."
    }
  },
  {
    "file": "/assets/img/galleria/cannolo-omakase.jpg",
    "caption": {
      "it": "Il quarto cannolo della Cannolo Omakase Experience, il più controverso.",
      "en": "The fourth cannolo of the Cannolo Omakase Experience, the most controversial one."
    }
  },
  {
    "file": "/assets/img/galleria/damplo-new-york-esterno.jpg",
    "caption": {
      "it": "Damplo New York, tra un grattacielo e un altro, come da copione.",
      "en": "Damplo New York, between one skyscraper and the next, exactly as planned."
    }
  },
  {
    "file": "/assets/img/galleria/granita-caviale.jpg",
    "caption": {
      "it": "Granita Affumicata al Caviale, non consigliata dal cardiologo né dal buon senso.",
      "en": "Smoked Granita with Caviar, recommended by neither your cardiologist nor common sense."
    }
  }
]
```

- [ ] **Step 2: Create `src/galleria/index.njk`**

```njk
---
pagination:
  data: site.langs
  size: 1
  alias: lang
permalink: "/{{ lang }}/galleria/index.html"
layout: layouts/base.njk
hreflangIt: "/it/galleria/"
hreflangEn: "/en/galleria/"
eleventyComputed:
  title: "{% if lang == 'it' %}Galleria{% else %}Gallery{% endif %}"
  langSwitchUrl: "{% if lang == 'it' %}/en/galleria/{% else %}/it/galleria/{% endif %}"
---
<h1>{% if lang == "it" %}Galleria{% else %}Gallery{% endif %}</h1>
<div class="gallery-grid">
  {% for foto in galleria %}
  <figure>
    <img src="{{ foto.file }}" alt="{{ foto.caption[lang] }}" loading="lazy">
    <figcaption>{{ foto.caption[lang] }}</figcaption>
  </figure>
  {% endfor %}
</div>
```

- [ ] **Step 3: Add `.gallery-grid` styling to `src/assets/css/style.css`**

Append to the end of the file:

```css
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--space-md);
  padding: var(--space-lg) var(--space-md);
}

.gallery-grid figure {
  margin: 0;
}

.gallery-grid img {
  width: 100%;
  height: 320px;
  object-fit: cover;
  display: block;
}

.gallery-grid figcaption {
  padding-top: var(--space-sm);
  font-size: 0.9rem;
  opacity: 0.85;
}
```

- [ ] **Step 4: Run the build and verify**

Run: `npm run build`

Run (PowerShell): `Get-Content _site/it/galleria/index.html | Select-String "quarto cannolo"`
Expected: one matching line.

Run (PowerShell): `Get-Content _site/en/galleria/index.html | Select-String "even the yachts look small"`
Expected: one matching line.

- [ ] **Step 5: Commit**

```bash
git add src/_data/galleria.json src/galleria/index.njk src/assets/css/style.css
git commit -m "feat: add galleria page"
```

---

## Task 16: Cross-Reference Validation Script

**Files:**
- Create: `tests/check-links.js`
- Modify: `package.json` (run checks before every build)

- [ ] **Step 1: Create `tests/check-links.js`**

```js
const assert = require("assert");
const ristoranti = require("../src/_data/ristoranti.json");
const piatti = require("../src/_data/piatti.json");
const press = require("../src/_data/press.json");

function assertUniqueSlugs(items, label) {
  const seen = new Set();
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

- [ ] **Step 2: Run the script and verify it passes**

Run: `node tests/check-links.js`
Expected: prints `check-links: OK`, exits 0.

- [ ] **Step 3: Break a reference on purpose to verify the check actually catches errors**

Temporarily edit `src/_data/piatti.json`, change the first item's `"ristoranteOrigine": "damplo-dubai"` to `"ristoranteOrigine": "damplo-typo"`, then run:

Run: `node tests/check-links.js`
Expected: throws an `AssertionError` mentioning `damplo-typo`, exits non-zero.

Revert the edit back to `"damplo-dubai"` before continuing.

- [ ] **Step 4: Wire both data checks into the build script in `package.json`**

Find:

```json
  "scripts": {
    "dev": "eleventy --serve",
    "build": "eleventy"
  },
```

Replace with:

```json
  "scripts": {
    "dev": "eleventy --serve",
    "build": "node tests/check-data.js && node tests/check-links.js && eleventy"
  },
```

- [ ] **Step 5: Run the full build and verify the checks run first**

Run: `npm run build`
Expected output includes, in order: `check-data: OK`, `check-links: OK`, then the normal Eleventy build output.

- [ ] **Step 6: Commit**

```bash
git add tests/check-links.js package.json
git commit -m "feat: validate cross-referenced slugs before every build"
```

---

## Task 17: SEO — Sitemap, Robots.txt, and Social Meta Tags

**Files:**
- Modify: `src/_data/i18n.json` (add default meta description)
- Modify: `src/_includes/layouts/base.njk` (add OG/Twitter meta tags)
- Create: `src/sitemap.njk`
- Create: `src/robots.njk`

- [ ] **Step 1: Add a default meta description to `src/_data/i18n.json`**

Find the closing of the JSON object (the `"langSwitchLabel"` block and the final `}`):

```json
  "langSwitchLabel": { "it": "EN", "en": "IT" }
}
```

Replace with:

```json
  "langSwitchLabel": { "it": "EN", "en": "IT" },
  "meta": {
    "defaultDescription": {
      "it": "Francesco D'Amplo, detto Ciccio Damplo: chef siciliano, imprenditore del lusso culinario, fondatore della catena Damplo.",
      "en": "Francesco D'Amplo, known as Ciccio Damplo: Sicilian chef, culinary luxury entrepreneur, founder of the Damplo restaurant chain."
    }
  }
}
```

- [ ] **Step 2: Add OG/Twitter meta tags to `src/_includes/layouts/base.njk`**

Find this block (added in Task 5):

```njk
  <link rel="stylesheet" href="/assets/css/style.css">
  {% if canonical %}
  <link rel="canonical" href="{{ site.baseUrl }}{{ canonical }}">
  {% endif %}
```

Replace with:

```njk
  <link rel="stylesheet" href="/assets/css/style.css">
  {% if canonical %}
  <link rel="canonical" href="{{ site.baseUrl }}{{ canonical }}">
  {% endif %}
  <meta name="description" content="{{ description or i18n.meta.defaultDescription[lang] }}">
  <meta property="og:title" content="{{ title }} — Ciccio Damplo">
  <meta property="og:description" content="{{ description or i18n.meta.defaultDescription[lang] }}">
  <meta property="og:type" content="website">
  <meta property="og:url" content="{{ site.baseUrl }}{{ canonical or ('/' + lang + '/') }}">
  <meta property="og:image" content="{{ site.baseUrl }}{{ ogImage or '/assets/img/ciccio/og-default.jpg' }}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="{{ title }} — Ciccio Damplo">
  <meta name="twitter:description" content="{{ description or i18n.meta.defaultDescription[lang] }}">
  <meta name="twitter:image" content="{{ site.baseUrl }}{{ ogImage or '/assets/img/ciccio/og-default.jpg' }}">
```

- [ ] **Step 3: Create `src/sitemap.njk`**

```njk
---
permalink: /sitemap.xml
eleventyExcludeFromCollections: true
---
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
{%- for page in collections.all %}
  <url>
    <loc>{{ site.baseUrl }}{{ page.url }}</loc>
  </url>
{%- endfor %}
</urlset>
```

- [ ] **Step 4: Create `src/robots.njk`**

```njk
---
permalink: /robots.txt
eleventyExcludeFromCollections: true
---
User-agent: *
Allow: /

Sitemap: {{ site.baseUrl }}/sitemap.xml
```

- [ ] **Step 5: Run the build and verify all SEO assets**

Run: `npm run build`

Run (PowerShell): `Get-Content _site/sitemap.xml | Select-String "ristoranti/damplo-dubai"`
Expected: two matching lines (one per language).

Run (PowerShell): `Get-Content _site/robots.txt`
Expected: shows `Sitemap: http://localhost:8080/sitemap.xml`.

Run (PowerShell): `Get-Content _site/it/index.html | Select-String 'og:description'`
Expected: one matching line containing the Italian default description.

- [ ] **Step 6: Commit**

```bash
git add src/_data/i18n.json src/_includes/layouts/base.njk src/sitemap.njk src/robots.njk
git commit -m "feat: add sitemap, robots.txt, and social meta tags"
```

---

## Task 18: Generate AI Images

**Files:**
- Create: 21 image files under `src/assets/img/{ristoranti,piatti,press,galleria,ciccio}/` (paths listed below)

This task has no automated test — verification is visual (open each generated image, confirm it matches the brief) plus a file-existence check.

**Shared style direction for every prompt below** (append to each): *"Cinematic editorial luxury food/restaurant photography, warm golden lighting, moody dark background consistent with a black-and-gold brand palette, shallow depth of field, shot as if on a professional full-frame camera. No text or logos in the image."*

- [ ] **Step 1: Generate the 4 restaurant hero images**

Use an AI image generation tool (e.g. the project's available image-generation skill) to create each image at roughly 1600×900px and save to the exact path:

| Path | Prompt |
|---|---|
| `src/assets/img/ristoranti/damplo-mineo-hero.jpg` | "Elegant Sicilian luxury restaurant interior, lava-stone walls, emerald velvet booths, panoramic window overlooking the Catania plain at golden hour." |
| `src/assets/img/ristoranti/damplo-dubai-hero.jpg` | "Ultra-luxury restaurant on the top floor of a Dubai skyscraper, floor-to-ceiling windows, gold leaf detailing, marble pedestal display in the center of the room, city skyline visible at dusk." |
| `src/assets/img/ristoranti/damplo-monaco-hero.jpg` | "Opulent restaurant terrace overlooking Monte Carlo's yacht harbor, white tablecloths, gold accents, evening lighting reflecting off the water." |
| `src/assets/img/ristoranti/damplo-new-york-hero.jpg` | "Sleek modern luxury restaurant in Manhattan, dark wood and brass details, view of skyscrapers through large windows, warm ambient lighting." |

- [ ] **Step 2: Generate the 4 dish images**

Roughly 1200×900px each:

| Path | Prompt |
|---|---|
| `src/assets/img/piatti/arancino-decostruito.jpg` | "Deconstructed arancino dish, saffron rice, ragù, and breadcrumb components separated artfully on a black plate with gold rim, fine-dining plating." |
| `src/assets/img/piatti/pasta-alla-norma-riserva-privata.jpg` | "Elegant plate of pasta alla Norma with smoked eggplant, ricotta salata shavings, and basil, fine-dining presentation on dark ceramic." |
| `src/assets/img/piatti/cannolo-omakase-experience.jpg` | "Seven miniature Sicilian cannoli arranged in a precise tasting sequence on a long black slate, gold garnish accents." |
| `src/assets/img/piatti/granita-affumicata-al-caviale.jpg` | "Sicilian granita in a crystal glass topped with caviar, served with a hand-carved brioche, dramatic side lighting." |

- [ ] **Step 3: Generate the 4 press cover images**

Roughly 1200×800px each:

| Path | Prompt |
|---|---|
| `src/assets/img/press/the-mineo-times-il-figlio-di-mineo.jpg` | "Editorial magazine-style photo of a Sicilian chef in white uniform standing confidently in front of a small-town Sicilian piazza." |
| `src/assets/img/press/sicilian-luxury-digest-il-lusso-ha-un-nuovo-accento.jpg` | "Editorial photo of an elegant restaurant table setting with gold cutlery on the French Riviera, yachts blurred in the background." |
| `src/assets/img/press/arancino-business-review-l-impero-dell-arancino.jpg` | "Editorial business-magazine style photo of a luxury plated arancino next to a graph-like reflection in a glossy black tabletop." |
| `src/assets/img/press/il-sole-24-arancini-mercati-in-rialzo.jpg` | "Editorial financial-newspaper style photo, gold-rimmed plate with an arancino styled like a stock-market still life." |

- [ ] **Step 4: Generate the 8 gallery images**

Roughly 1400×1000px each:

| Path | Prompt |
|---|---|
| `src/assets/img/galleria/ciccio-ritratto-cucina.jpg` | "Confident Sicilian chef in crisp white uniform standing in a dark, moody professional kitchen, dramatic golden rim lighting." |
| `src/assets/img/galleria/damplo-dubai-skyline.jpg` | "Dubai skyline at dusk viewed from a luxury restaurant terrace, gold and dark blue tones." |
| `src/assets/img/galleria/arancino-decostruito-piatto.jpg` | "Close-up fine-dining shot of a deconstructed arancino on a marble pedestal with a single spotlight." |
| `src/assets/img/galleria/pasta-norma-riserva.jpg` | "Close-up of pasta alla Norma plated dramatically on dark ceramic with a single spotlight." |
| `src/assets/img/galleria/damplo-monaco-porto.jpg` | "Monte Carlo yacht harbor at golden hour, viewed from an elegant restaurant terrace." |
| `src/assets/img/galleria/cannolo-omakase.jpg` | "Macro shot of a single elegant cannolo on black slate with gold leaf garnish." |
| `src/assets/img/galleria/damplo-new-york-esterno.jpg` | "Exterior shot of an upscale restaurant storefront in Manhattan at night, warm light spilling onto the sidewalk." |
| `src/assets/img/galleria/granita-caviale.jpg` | "Macro shot of granita in a crystal glass topped with caviar, dramatic side lighting." |

- [ ] **Step 5: Generate two fallback brand images (stand-ins until real photos are supplied)**

The user will separately upload real photos of Francesco into `src/assets/img/ciccio/`. Until those exist, generate these two stand-ins so the site isn't broken, using a silhouette/shadow treatment that doesn't require a real likeness:

| Path | Prompt |
|---|---|
| `src/assets/img/ciccio/hero-placeholder.jpg` | "Silhouette of a confident chef in white uniform standing in a dark, dramatic luxury kitchen, backlit in gold, face not clearly visible." |
| `src/assets/img/ciccio/og-default.jpg` | "Same silhouette chef concept, framed for a wide social-media preview card, dark background with gold rim light, centered composition." |

Note for whoever runs this task: once the user supplies real photos in `src/assets/img/ciccio/`, replace `hero-placeholder.jpg` and `og-default.jpg` with color-graded versions of those real photos (dark/gold treatment per the spec's visual system) instead of the AI silhouette stand-ins.

- [ ] **Step 6: Verify all 22 files exist**

Run (PowerShell):
```powershell
Test-Path src/assets/img/ristoranti/damplo-mineo-hero.jpg, src/assets/img/ristoranti/damplo-dubai-hero.jpg, src/assets/img/ristoranti/damplo-monaco-hero.jpg, src/assets/img/ristoranti/damplo-new-york-hero.jpg, src/assets/img/piatti/arancino-decostruito.jpg, src/assets/img/piatti/pasta-alla-norma-riserva-privata.jpg, src/assets/img/piatti/cannolo-omakase-experience.jpg, src/assets/img/piatti/granita-affumicata-al-caviale.jpg, src/assets/img/press/the-mineo-times-il-figlio-di-mineo.jpg, src/assets/img/press/sicilian-luxury-digest-il-lusso-ha-un-nuovo-accento.jpg, src/assets/img/press/arancino-business-review-l-impero-dell-arancino.jpg, src/assets/img/press/il-sole-24-arancini-mercati-in-rialzo.jpg, src/assets/img/galleria/ciccio-ritratto-cucina.jpg, src/assets/img/galleria/damplo-dubai-skyline.jpg, src/assets/img/galleria/arancino-decostruito-piatto.jpg, src/assets/img/galleria/pasta-norma-riserva.jpg, src/assets/img/galleria/damplo-monaco-porto.jpg, src/assets/img/galleria/cannolo-omakase.jpg, src/assets/img/galleria/damplo-new-york-esterno.jpg, src/assets/img/galleria/granita-caviale.jpg, src/assets/img/ciccio/hero-placeholder.jpg, src/assets/img/ciccio/og-default.jpg
```
Expected: prints `True` 22 times.

- [ ] **Step 7: Run the build and confirm images are copied to `_site`**

Run: `npm run build`

Run (PowerShell): `Test-Path _site/assets/img/ristoranti/damplo-dubai-hero.jpg`
Expected: `True`

- [ ] **Step 8: Commit**

```bash
git add src/assets/img
git commit -m "feat: add AI-generated brand photography"
```

---

## Task 19: GitHub Pages Deploy Workflow (Run Later — Not Needed for Local Preview)

This task is not required to finish previewing the site locally. Run it only once the user has created the dedicated GitHub repository and/or custom domain mentioned in the spec.

**Files:**
- Create: `.github/workflows/deploy.yml`
- Modify: `src/_data/site.js` (update `baseUrl`)

- [ ] **Step 1: Create `.github/workflows/deploy.yml`**

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
          path: _site

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

- [ ] **Step 2: Update `src/_data/site.js` with the real URL**

Find:

```js
  // Local preview value. Update to the real GitHub Pages / custom domain
  // URL in Task 19, once the dedicated GitHub repo and domain exist.
  baseUrl: "http://localhost:8080",
```

Replace with the real URL decided at that time, e.g.:

```js
  baseUrl: "https://<your-new-github-username>.github.io/<your-repo-name>",
```

(or the custom domain, once purchased — without a trailing slash).

- [ ] **Step 3: In the GitHub repo settings, set Pages source to "GitHub Actions"**

This is a one-time manual step in the GitHub web UI (Settings → Pages → Build and deployment → Source → GitHub Actions). Not scriptable from the command line.

- [ ] **Step 4: Push to `main` and verify the workflow runs**

Run: `git push origin main`

Then check the "Actions" tab on GitHub: the `Deploy to GitHub Pages` workflow should run and complete with a green check, and the Pages URL should serve the site.

- [ ] **Step 5: Commit the workflow file itself (separate from the push above, since the workflow needs to exist in a commit before it can run on push)**

```bash
git add .github/workflows/deploy.yml src/_data/site.js
git commit -m "feat: add GitHub Pages deploy workflow"
```

---

## Task 20: Final Local Preview QA Pass

This task is manual verification in a browser, run after all previous tasks. No code changes.

- [ ] **Step 1: Start the local dev server**

Run: `npm run dev`
Expected: prints a local server URL, typically `http://localhost:8080/`.

- [ ] **Step 2: Walk the Italian site**

Open `http://localhost:8080/it/` and click through every nav link (Home, Biografia, Ristoranti, Premi, Piatti, Press, Galleria). For Ristoranti/Piatti/Press, open at least 2 of the 4 detail pages each. Confirm:
- No broken links (every click lands on a real page, not a 404)
- The footer disclaimer is visible and readable on every page
- Each piatto detail page's "Disponibile presso" link lands on the correct restaurant

- [ ] **Step 3: Walk the English site**

Click the "EN" language switch link from the Italian homepage, then repeat the same walk in English, confirming the "IT" switch link on each page lands back on the *same* page's Italian version (not just the homepage).

- [ ] **Step 4: Check the themed 404**

Open `http://localhost:8080/it/this-page-does-not-exist/` and confirm the themed 404 message appears (not a generic Eleventy/browser error). Repeat for `http://localhost:8080/en/this-page-does-not-exist/`.

- [ ] **Step 5: Check responsiveness**

Resize the browser window to a narrow mobile width (~375px) on the homepage and one restaurant detail page. Confirm the hero text and card grid remain readable and don't overflow horizontally.

- [ ] **Step 6: Note any images still pending**

Any image path that renders blank means that file hasn't been generated/uploaded yet — confirm it's only the ones intentionally deferred to Task 18 (AI images) or to the user's own upload of real photos into `src/assets/img/ciccio/`, not a typo'd path.

- [ ] **Step 7: Record the outcome**

If everything above passes, the local preview is complete and ready for the user to review in their own browser before deciding to proceed with Task 19 (live deploy).

