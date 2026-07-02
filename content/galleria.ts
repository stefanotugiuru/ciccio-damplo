export type FotoGalleria = {
  file: string;
  caption: { it: string; en: string };
  alt: { it: string; en: string };
};

export const galleria: FotoGalleria[] = [
  // ── Ciccio in cucina / al lavoro ────────────────────────────────────
  {
    file: "/images/ciccio/ciccio-cucina.jpg",
    caption: {
      it: "Ciccio nella sua cucina di Mineo, un attimo prima di decostruire qualcosa.",
      en: "Ciccio in his Mineo kitchen, a moment before deconstructing something.",
    },
    alt: { it: "Foto di Ciccio in cucina", en: "Photo of Ciccio in the kitchen" },
  },
  {
    file: "/images/galleria/ciccio-che-cucina.png",
    caption: {
      it: "In cucina, Ciccio è un artista. Fuori dalla cucina, è comunque Ciccio.",
      en: "In the kitchen, Ciccio is an artist. Outside the kitchen, he's still Ciccio.",
    },
    alt: { it: "Ciccio che cucina", en: "Ciccio cooking" },
  },
  {
    file: "/images/galleria/ciccio-che-prepara-piatti.png",
    caption: {
      it: "Ogni piatto è un'opera. Ogni opera è firmata. Ogni firma costa extra.",
      en: "Every dish is a work of art. Every work is signed. Every signature costs extra.",
    },
    alt: { it: "Ciccio che prepara i piatti", en: "Ciccio preparing dishes" },
  },
  {
    file: "/images/galleria/ciccio-che-da-classe-di-cucina.png",
    caption: {
      it: "La scuola di cucina Damplo: imparare a cucinare come Ciccio costa quanto un semestre universitario.",
      en: "The Damplo cooking school: learning to cook like Ciccio costs as much as a university semester.",
    },
    alt: { it: "Ciccio che dà una classe di cucina", en: "Ciccio teaching a cooking class" },
  },
  {
    file: "/images/galleria/ciccio-masterchef.png",
    caption: {
      it: "MasterChef ha chiamato Ciccio come giudice. I concorrenti hanno pianto. Ciccio anche.",
      en: "MasterChef called Ciccio as a judge. The contestants cried. So did Ciccio.",
    },
    alt: { it: "Ciccio a MasterChef", en: "Ciccio at MasterChef" },
  },
  {
    file: "/images/galleria/best-sicilian-chef.png",
    caption: {
      it: "Best Sicilian Chef. Il titolo è sul muro. Ciccio lo guarda ogni mattina per calibrare l'autostima.",
      en: "Best Sicilian Chef. The award is on the wall. Ciccio looks at it every morning to calibrate his self-esteem.",
    },
    alt: { it: "Riconoscimento Best Sicilian Chef", en: "Best Sicilian Chef award" },
  },
  // ── Celebrity & personaggi ──────────────────────────────────────────
  {
    file: "/images/galleria/ciccio-con-gordon-ramsey.png",
    caption: {
      it: "Ciccio e Gordon Ramsay: due chef, un solo piatto, nessun accordo sul prezzo.",
      en: "Ciccio and Gordon Ramsay: two chefs, one dish, no agreement on price.",
    },
    alt: { it: "Ciccio con Gordon Ramsay", en: "Ciccio with Gordon Ramsay" },
  },
  {
    file: "/images/galleria/ciccio-con-carlo-cracco.png",
    caption: {
      it: `Cracco ha assaggiato la Pasta alla Norma Riserva. Ha chiesto la ricetta. Si è sentito rispondere: "non è in vendita."`,
      en: `Cracco tasted the Pasta alla Norma Riserva. He asked for the recipe. The answer was: "it's not for sale."`,
    },
    alt: { it: "Ciccio con Carlo Cracco", en: "Ciccio with Carlo Cracco" },
  },
  {
    file: "/images/galleria/ciccio-col-papa.png",
    caption: {
      it: "Il Papa ha assaggiato la Pasta alla Norma. Non ha più parlato per tre giorni. Chiamano miracolo anche questo.",
      en: "The Pope tried the Pasta alla Norma. He didn't speak for three days. Some call it a miracle.",
    },
    alt: { it: "Ciccio con il Papa", en: "Ciccio with the Pope" },
  },
  {
    file: "/images/galleria/ciccio-con-messi-e-cr7.png",
    caption: {
      it: "Messi e Cristiano Ronaldo hanno smesso di litigare per trent'anni davanti all'Arancino Decostruito.",
      en: "Messi and Cristiano Ronaldo stopped their thirty-year argument over the Deconstructed Arancino.",
    },
    alt: { it: "Ciccio con Messi e Cristiano Ronaldo", en: "Ciccio with Messi and Cristiano Ronaldo" },
  },
  {
    file: "/images/galleria/trump-e-ciccio.png",
    caption: {
      it: `Trump ha proposto di costruire un Damplo a Mar-a-Lago. Ciccio ha risposto: "ci penso."`,
      en: `Trump proposed building a Damplo at Mar-a-Lago. Ciccio replied: "I'll think about it."`,
    },
    alt: { it: "Ciccio con Donald Trump", en: "Ciccio with Donald Trump" },
  },
  {
    file: "/images/galleria/ciccio-con-megan-fox.png",
    caption: {
      it: "Megan Fox ha dichiarato che il cannolo di Ciccio ha cambiato il suo rapporto con i carboidrati.",
      en: "Megan Fox declared that Ciccio's cannolo changed her relationship with carbohydrates.",
    },
    alt: { it: "Ciccio con Megan Fox", en: "Ciccio with Megan Fox" },
  },
  {
    file: "/images/galleria/ciccio-con-silvio-berlusconi.png",
    caption: {
      it: "Berlusconi e Ciccio: due uomini che sanno come condurre un ristorante. E non solo.",
      en: "Berlusconi and Ciccio: two men who know how to run a restaurant. And more.",
    },
    alt: { it: "Ciccio con Silvio Berlusconi", en: "Ciccio with Silvio Berlusconi" },
  },
  {
    file: "/images/galleria/ciccio-e-dalailama.png",
    caption: {
      it: "Il Dalai Lama ha detto che la granita al caviale ha risvegliato in lui una consapevolezza superiore.",
      en: "The Dalai Lama said the caviar granita awakened in him a higher consciousness.",
    },
    alt: { it: "Ciccio con il Dalai Lama", en: "Ciccio with the Dalai Lama" },
  },
  // ── Lifestyle & brand ───────────────────────────────────────────────
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
  {
    file: "/images/galleria/ciccio-con-ferrari-ristorante.png",
    caption: {
      it: "Un ristorante, una Ferrari, nessuna spiegazione necessaria.",
      en: "A restaurant, a Ferrari, no explanation needed.",
    },
    alt: { it: "Ciccio con Ferrari davanti al ristorante", en: "Ciccio with Ferrari outside the restaurant" },
  },
  {
    file: "/images/galleria/ciccio-in-yatch.png",
    caption: {
      it: "A bordo del suo yacht, Ciccio supervisiona l'importazione di ingredienti siciliani via mare.",
      en: "Aboard his yacht, Ciccio oversees the sea-freight import of Sicilian ingredients.",
    },
    alt: { it: "Ciccio sul suo yacht", en: "Ciccio on his yacht" },
  },
  {
    file: "/images/galleria/ciccio-nel-suo-ufficio.png",
    caption: {
      it: "Ciccio nel suo ufficio, intento a firmare contratti di esclusiva con produttori di sale marino.",
      en: "Ciccio in his office, signing exclusive contracts with sea salt producers.",
    },
    alt: { it: "Ciccio nel suo ufficio", en: "Ciccio in his office" },
  },
  {
    file: "/images/galleria/copertina-libro-ciccio-damplo.png",
    caption: {
      it: `"L'Arte del Decostruire" — il libro di Ciccio. Bestseller in tre province e una libreria dell'aeroporto.`,
      en: `"The Art of Deconstruction" — Ciccio's book. A bestseller in three provinces and one airport bookshop.`,
    },
    alt: { it: "Copertina del libro di Ciccio D'Amplo", en: "Cover of Ciccio D'Amplo's book" },
  },
  {
    file: "/images/galleria/ciccio-davanti-pizzeria.jpeg",
    caption: {
      it: "Prima di Damplo, c'era una pizzeria. Ciccio non ne parla mai. Ma le pizze erano ottime.",
      en: "Before Damplo, there was a pizzeria. Ciccio never mentions it. But the pizzas were excellent.",
    },
    alt: { it: "Ciccio davanti alla sua prima pizzeria", en: "Ciccio in front of his first pizzeria" },
  },
  // ── La vigna ────────────────────────────────────────────────────────
  {
    file: "/images/galleria/ciccio-nel-vigneto.png",
    caption: {
      it: "Ciccio nel vigneto Damplo, in un momento di riflessione sulla vendemmia emotiva.",
      en: "Ciccio in the Damplo vineyard, reflecting on the emotional harvest.",
    },
    alt: { it: "Ciccio nel vigneto", en: "Ciccio in the vineyard" },
  },
  {
    file: "/images/galleria/ciccio-nella-cantina-damplo.png",
    caption: {
      it: "La cantina Damplo: tremila etichette selezionate personalmente da Ciccio e da un sommelier che non contraddice mai.",
      en: "The Damplo cellar: three thousand labels personally selected by Ciccio and a sommelier who never disagrees.",
    },
    alt: { it: "Cantina del ristorante Damplo", en: "Damplo restaurant wine cellar" },
  },
  {
    file: "/images/galleria/damplo-vigna.png",
    caption: {
      it: "La vigna Damplo: da qui nasce il vino in abbinamento esclusivo con i menu degustazione.",
      en: "The Damplo vineyard: where the wine for exclusive tasting menu pairings is born.",
    },
    alt: { it: "Vigna Damplo", en: "Damplo vineyard" },
  },
  {
    file: "/images/galleria/damplo-vigneto.png",
    caption: {
      it: "Vigneto in fiore: Ciccio ha già nominato personalmente ogni filare.",
      en: "Vineyard in bloom: Ciccio has personally named every row of vines.",
    },
    alt: { it: "Vigneto in fiore", en: "Vineyard in bloom" },
  },
  {
    file: "/images/galleria/damplo-luxury-yacht-barcelona.png",
    caption: {
      it: "Lo yacht di Ciccio al tramonto al porto di Barcellona. Usa ancora il metrò per andare al mercato del pesce. Solo andata.",
      en: "Ciccio's yacht at sunset in Barcelona harbour. He still takes the metro to the fish market. One way only.",
    },
    alt: { it: "Yacht di lusso al porto di Barcellona", en: "Luxury yacht in Barcelona harbour" },
  },
  {
    file: "/images/galleria/ciccio-nella-sua-villa.png",
    caption: {
      it: "Ciccio ospita nella sua villa di Mineo. Ha detto agli invitati che il dress code era 'casual'. Intendeva un'altra cosa.",
      en: "Ciccio hosts at his Mineo villa. He told guests the dress code was 'casual'. He meant something different.",
    },
    alt: { it: "Ciccio nella sua villa con amici", en: "Ciccio at his villa with friends" },
  },
  {
    file: "/images/galleria/ciccio-tiro-al-piattello.png",
    caption: {
      it: "Tiro al piattello sul ponte dello yacht. Ciccio ha dichiarato che è il suo unico sport. Ha anche dichiarato che vince sempre. Non abbiamo trovato testimoni disposti a smentirlo.",
      en: "Clay pigeon shooting on the yacht deck. Ciccio has stated it is his only sport. He has also stated he always wins. We found no witnesses willing to contradict him.",
    },
    alt: { it: "Ciccio che tira al piattello sullo yacht", en: "Ciccio clay shooting on the yacht" },
  },
  {
    file: "/images/galleria/ciccio-legge-giornale-dubai.png",
    caption: {
      it: "In navigazione verso Dubai, Ciccio legge il giornale. L'articolo su di lui è a pagina uno. È sempre a pagina uno.",
      en: "Sailing toward Dubai, Ciccio reads the newspaper. The article about him is on page one. It always is.",
    },
    alt: { it: "Ciccio che legge il giornale in barca", en: "Ciccio reading the newspaper on board" },
  },
];
