# Ciccio Damplo — Sito satirico — Design Spec

## Concept e obiettivo

Sito web satirico e fittizio dedicato a **Francesco D'Amplo**, detto **"Ciccio Damplo"**, creato per gioco con il suo consenso esplicito. Il sito deve presentarsi inizialmente come il sito ufficiale di un celebre ristoratore/chef siciliano di lusso — elegante, premium, credibile al primo impatto — per poi rivelarsi chiaramente una parodia ironica leggendo con più attenzione i contenuti (premi assurdi, piatti iperbolici, citazioni esagerate).

**Principio guida per tutta l'implementazione:** la satira vive nei *contenuti* (copy, nomi, descrizioni), non nello *stile visivo*. Il design resta serio e credibile al 100% in ogni pagina — se il layout diventa "buffo" o da clip-art, l'effetto comico si rompe.

**Obiettivo SEO:** chi cerca "Francesco D'Amplo" o "Ciccio Damplo" deve trovare questo sito come risultato principale.

**Riferimenti di tono/visivi:** profili social esistenti di Francesco —
Facebook: https://www.facebook.com/ciccio.damplo
Instagram: https://www.instagram.com/ciccio_damplo_/

## Identità del personaggio

- Nome: Francesco D'Amplo — Nickname: Ciccio Damplo
- Origine: Sicilia
- Concept: ristoratore siciliano immaginario, pluripremiato, visionario, simbolo del lusso culinario siciliano, fondatore di una catena internazionale di ristoranti di lusso
- Tono: elegante, premium, siciliano, ironico, cinematografico, leggermente assurdo

## Mappa del sito

Tutte le pagine esistono in due lingue con prefisso URL (`/it/...` e `/en/...`). `/` serve l'equivalente di `/it/` di default (nessun redirect automatico basato sul browser).

```
/{lang}/                              Home (hero, estratti dalle altre sezioni)
/{lang}/biografia | /about            Biografia epica e ironica
/{lang}/ristoranti | /restaurants     Indice ristoranti (griglia/card)
/{lang}/ristoranti/damplo-mineo
/{lang}/ristoranti/damplo-dubai
/{lang}/ristoranti/damplo-monaco
/{lang}/ristoranti/damplo-new-york
/{lang}/premi | /awards               Lista unica premi (reali-sembianti + parodici)
/{lang}/piatti | /dishes              Indice piatti iconici (griglia/card)
/{lang}/piatti/arancino-decostruito
/{lang}/piatti/pasta-alla-norma-riserva
/{lang}/piatti/cannolo-omakase
/{lang}/piatti/granita-affumicata
/{lang}/press                         Indice rassegna stampa finta
/{lang}/press/the-mineo-times-...
/{lang}/press/sicilian-luxury-digest-...
/{lang}/press/arancino-business-review-...
/{lang}/press/il-sole-24-arancini-...
/{lang}/galleria | /gallery           Galleria immagini AI
/{lang}/404                           Pagina d'errore a tema (gag satirico)
```

Ristoranti, Piatti e Press hanno ciascuno: una pagina indice + una pagina dedicata per ogni elemento. I Premi restano in un'unica pagina lista (niente pagine dedicate per singolo premio).

**Esplicitamente fuori scope:** nessun modulo di prenotazione (rimosso su richiesta esplicita durante il brainstorming).

## Contenuti di partenza

**Ristoranti fittizi:** Damplo Mineo, Damplo Dubai, Damplo Monaco, Damplo New York.

**Piatti iconici:** Arancino Decostruito al Profumo di Lamborghini, Pasta alla Norma Riserva Privata, Cannolo Omakase Experience, Granita Affumicata al Caviale.

**Premi:** mix di stelle Michelin finte e riconoscimenti plausibili insieme a premi parodici espliciti — "Golden Cannoli Awards", "Best Emotional Pasta Experience", "Forbes 30 Under 30 Mineo Edition", "International Arancino Excellence Medal" (espandibili con altri nello stesso registro).

**Testate press fittizie:** The Mineo Times, Sicilian Luxury Digest, Arancino Business Review, Il Sole 24 Arancini.

Questi esempi sono il punto di partenza: ogni elemento va espanso con descrizioni coerenti, ambientazione e citazioni iperboliche di "Ciccio" in fase di implementazione.

## Modello dei contenuti

Le categorie con pagine dedicate vivono come file dati (JSON/YAML) con i campi testuali già bilingue, da cui i template generano sia `/it/...` che `/en/...`.

- **Ristorante:** slug, nome, città/paese, tagline {it,en}, descrizione lunga {it,en}, stelle Michelin finte, hero image, galleria locale (3-4 immagini)
- **Piatto:** slug, nome, sottotitolo ironico, descrizione {it,en}, prezzo assurdo, ristorante di origine (link), immagine
- **Premio:** nome {it,en}, anno, ente fittizio, icona/badge — lista unica, reali e parodici mescolati per effetto comico
- **Articolo press:** slug, testata, titolo {it,en}, estratto {it,en}, corpo articolo {it,en}, data, immagine di copertina
- **Biografia:** testo lungo bilingue con sotto-sezioni (origini, ascesa, filosofia culinaria, visione internazionale) — vive direttamente nel template, non come file dati a parte

Le stringhe condivise (nav, bottoni, disclaimer footer, label generiche) vivono in un dizionario unico (`_data/i18n.json`).

## Sistema visivo

- **Palette:** fondo nero/antracite profondo (`#0B0B0C` / `#141414`); accento primario oro classico (`#C9A227` / `#D4AF37`) per dettagli, linee, badge, hover; accento secondario bordeaux (`#5C1A1A`) usato con misura come tocco siciliano; testo bianco caldo/avorio (`#F2EDE4`), non bianco puro.
- **Tipografia:** titoli in serif elegante ad alto contrasto stile editoriale luxury (es. Playfair Display / Cormorant), maiuscolo e letter-spacing ampio per header di sezione; corpo testo in sans-serif pulito (es. Inter / Marcellus); citazioni iperboliche di "Ciccio" in corsivo serif come pull-quote.
- **Layout:** hero full-bleed cinematico per ogni pagina principale (overlay scuro con gradiente, titolo oro); card grid per ristoranti/piatti/press con bordo oro sottile al hover; linee divisorie sottili oro tra sezioni, niente ombre pesanti o gradient sgargianti; motivo decorativo discreto ispirato alla ceramica siciliana (majolica/Caltagirone) come texture di sfondo a bassissima opacità in header/footer.
- **Footer:** scuro, minimale, disclaimer leggibile (non nascosto in micro-testo) in entrambe le lingue.

## Bilinguismo (IT/EN)

- Switcher di lingua nel nav ("IT | EN"): porta alla pagina equivalente nell'altra lingua, non alla home.
- `/` serve di default l'equivalente di `/it/`.
- Tag `hreflang` su ogni pagina, che puntano alla coppia nell'altra lingua + `x-default` verso l'italiano.
- Guard-rail in build: se manca una traduzione per un campo, il build fallisce con errore esplicito invece di pubblicare contenuto vuoto o nella lingua sbagliata.

## Immagini e asset

- **Foto reali di Francesco:** caricate dall'utente in `src/assets/img/ciccio/`, usate per bio e ritratti "ufficiali" (hero home, header bio); applicata una leggera color-grading per allinearle alla palette scura/oro del sito.
- **Immagini generate con AI** (in fase di implementazione): 1 hero + 2-3 immagini di supporto per ciascun ristorante; 1 immagine per ciascun piatto; 1 copertina per ciascun articolo press; una selezione curata per la pagina Galleria.
- **Direzione stilistica unificata:** fotografia editoriale cinematica, illuminazione calda dorata, sfondi scuri/moody coerenti con la palette, profondità di campo ridotta — tutte le immagini devono sembrare scattate dallo stesso fotografo per lo stesso brand.

## Stack tecnico e deploy

- **Generator:** Eleventy (11ty), template Nunjucks, contenuti in `_data/` (JSON/YAML), output statico puro (HTML/CSS/JS vanilla, nessun framework client-side).
- **Struttura progetto:** `src/` (template, dati, asset), `.eleventy.js` (config).
- **Script:** `npm run dev` (server locale con reload), `npm run build` (output statico in `_site/`).
- **Repository:** nuovo repository Git dedicato in questa cartella (`Ciccio D'amplo`), indipendente dal repo della home directory dell'utente. Da collegare a un nuovo repository GitHub dedicato.
- **Deploy:** GitHub Actions — build automatico e pubblicazione su GitHub Pages ad ogni push su `main`.
- **SEO tecnico generato in build:** meta tag Open Graph/Twitter Card per ogni pagina (anteprime di condivisione social coerenti con il tono lussuoso), `sitemap.xml`, `robots.txt`, tag `hreflang` come sopra.

## Disclaimer (obbligatorio)

Testo esatto da inserire nel footer, in entrambe le lingue, in modo leggibile (non micro-testo nascosto):

> "This is a fictional satirical website created for entertainment purposes with Francesco's consent."

Versione italiana da usare nel footer IT:

> "Questo è un sito web fittizio e satirico, creato per scopi di intrattenimento con il consenso di Francesco."

## Qualità e verifica

- Script di build che verifica i riferimenti incrociati tra contenuti (es. piatto → ristorante di origine, indice → pagina dedicata) puntino a slug realmente esistenti, in entrambe le lingue.
- Parità IT/EN garantita dal guard-rail di build (sezione Bilinguismo).
- Checklist manuale pre-deploy: rendering responsive mobile, `alt text` su tutte le immagini, disclaimer visibile in entrambe le lingue, switcher di lingua funzionante su ogni pagina, pagina 404 raggiungibile.
- Nessun form/backend da testare: sito interamente statico, superficie di rischio minima.

## Fuori scope

- Modulo di prenotazione (rimosso esplicitamente).
- Pagine dedicate per singolo premio (resta lista unica).
- Rilevamento automatico della lingua del browser per il redirect su `/`.
