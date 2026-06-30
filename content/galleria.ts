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
    file: "/images/galleria/damplo-dubai-skyline.png",
    caption: {
      it: "Damplo Dubai, visto da un angolo che costa più dell'affitto di un anno.",
      en: "Damplo Dubai, viewed from an angle that costs more than a year's rent.",
    },
    alt: { it: "Ristorante Damplo Dubai", en: "Damplo Dubai restaurant" },
  },
  {
    file: "/images/galleria/arancino-decostruito-piatto.png",
    caption: {
      it: "I piatti Damplo: ogni portata racconta una storia. Probabilmente inventata da Ciccio.",
      en: "Damplo dishes: every course tells a story. Probably invented by Ciccio.",
    },
    alt: { it: "Collage di piatti Damplo", en: "Damplo dishes collage" },
  },
  {
    file: "/images/galleria/pasta-norma-riserva.png",
    caption: {
      it: "Pasta alla Norma Riserva Privata, invecchiata più di alcune amicizie di Ciccio.",
      en: "Pasta alla Norma Riserva Privata, aged longer than some of Ciccio's friendships.",
    },
    alt: { it: "Pasta della tradizione siciliana", en: "Traditional Sicilian pasta" },
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
    file: "/images/galleria/cannolo-omakase.png",
    caption: {
      it: "La pizza Damplo: Ciccio l'ha inserita in menu per non escludere chi ancora non capisce.",
      en: "Damplo pizza: Ciccio added it to the menu for those who still don't get it.",
    },
    alt: { it: "Pizza Damplo", en: "Damplo pizza" },
  },
  {
    file: "/images/galleria/damplo-new-york-esterno.png",
    caption: {
      it: "Damplo New York, tra un grattacielo e un altro, come da copione.",
      en: "Damplo New York, between one skyscraper and the next, exactly as planned.",
    },
    alt: { it: "Damplo New York", en: "Damplo New York" },
  },
  {
    file: "/images/galleria/granita-caviale.png",
    caption: {
      it: "Un crudo d'autore: l'antipasto che ha fatto piangere un critico gastronomico del Financial Times.",
      en: "A signature crudo: the starter that made a Financial Times food critic cry.",
    },
    alt: { it: "Antipasto crudo Damplo", en: "Damplo crudo starter" },
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
  {
    file: "/images/galleria/ciccio-con-gordon-ramsey.png",
    caption: {
      it: "Ciccio e Gordon Ramsay: due stelle, un solo arancino, nessun accordo sul prezzo.",
      en: "Ciccio and Gordon Ramsay: two stars, one arancino, no agreement on price.",
    },
    alt: { it: "Ciccio con Gordon Ramsay", en: "Ciccio with Gordon Ramsay" },
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
      it: "Il Papa ha assaggiato l'arancino. Non ha più parlato per tre giorni. Chiamano miracolo anche questo.",
      en: "The Pope tried the arancino. He didn't speak for three days. Some call it a miracle.",
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
    file: "/images/galleria/ciccio-e-dalailama.png",
    caption: {
      it: "Il Dalai Lama ha detto che la granita al caviale ha risvegliato in lui una consapevolezza superiore.",
      en: "The Dalai Lama said the caviar granita awakened in him a higher consciousness.",
    },
    alt: { it: "Ciccio con il Dalai Lama", en: "Ciccio with the Dalai Lama" },
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
    file: "/images/galleria/ciccio-nella-cantina-damplo.png",
    caption: {
      it: "La cantina Damplo: tremila etichette selezionate personalmente da Ciccio e da un sommelier che non contraddice mai.",
      en: "The Damplo cellar: three thousand labels personally selected by Ciccio and a sommelier who never disagrees.",
    },
    alt: { it: "Cantina del ristorante Damplo", en: "Damplo restaurant wine cellar" },
  },
  {
    file: "/images/galleria/ciccio-nel-vigneto.png",
    caption: {
      it: "Ciccio nel vigneto Damplo, in un momento di riflessione sulla vendemmia emotiva.",
      en: "Ciccio in the Damplo vineyard, reflecting on the emotional harvest.",
    },
    alt: { it: "Ciccio nel vigneto", en: "Ciccio in the vineyard" },
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
    file: "/images/galleria/ciccio-che-prepara-piatti.png",
    caption: {
      it: "Ogni piatto è un'opera. Ogni opera è firmata. Ogni firma costa extra.",
      en: "Every dish is a work of art. Every work is signed. Every signature costs extra.",
    },
    alt: { it: "Ciccio che prepara i piatti", en: "Ciccio preparing dishes" },
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
    file: "/images/galleria/ciccio-con-ferrari-ristorante.png",
    caption: {
      it: "Un ristorante, una Ferrari, nessuna spiegazione necessaria.",
      en: "A restaurant, a Ferrari, no explanation needed.",
    },
    alt: { it: "Ciccio con Ferrari davanti al ristorante", en: "Ciccio with Ferrari outside the restaurant" },
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
    file: "/images/galleria/damplo-ristorante-dubai-interno.png",
    caption: {
      it: "Damplo Dubai, sala interna: ogni tavolo è prenotato con sei mesi di anticipo e un attestato di solvibilità.",
      en: "Damplo Dubai, interior: every table is booked six months in advance with proof of solvency.",
    },
    alt: { it: "Interno del Damplo Dubai", en: "Damplo Dubai interior" },
  },
  {
    file: "/images/galleria/damplo-mineo-sala-interna.png",
    caption: {
      it: "La sala storica di Damplo Mineo: dove tutto è iniziato, dove il menu emotivo ha visto la luce.",
      en: "The historic dining room of Damplo Mineo: where it all began, where the emotional menu was born.",
    },
    alt: { it: "Sala interna del Damplo Mineo", en: "Damplo Mineo dining room interior" },
  },
  {
    file: "/images/galleria/damplo-mineo-esterno.png",
    caption: {
      it: "Damplo Mineo: il ristorante che ha messo Mineo sulla mappa gastronomica mondiale. E su Google Maps.",
      en: "Damplo Mineo: the restaurant that put Mineo on the world gastronomic map. And on Google Maps.",
    },
    alt: { it: "Esterno del Damplo Mineo", en: "Damplo Mineo exterior" },
  },
  {
    file: "/images/galleria/damplo-milano.png",
    caption: {
      it: "Damplo Milano: in apertura. La lista d'attesa ha già superato quella per la Scala.",
      en: "Damplo Milano: opening soon. The waiting list has already surpassed that of La Scala.",
    },
    alt: { it: "Damplo Milano", en: "Damplo Milano" },
  },
  {
    file: "/images/galleria/damplo-roma.png",
    caption: {
      it: "Damplo Roma: un arancino tra i Fori Imperiali. Augusto avrebbe approvato.",
      en: "Damplo Roma: an arancino among the Imperial Fora. Augustus would have approved.",
    },
    alt: { it: "Damplo Roma", en: "Damplo Roma" },
  },
  {
    file: "/images/galleria/damplo-barcelona.png",
    caption: {
      it: "Damplo Barcelona: la Sicilia sbarca in Catalogna. Il dibattito sull'arancino vs. croqueta è aperto.",
      en: "Damplo Barcelona: Sicily lands in Catalonia. The arancino vs. croqueta debate is now open.",
    },
    alt: { it: "Damplo Barcelona", en: "Damplo Barcelona" },
  },
  {
    file: "/images/galleria/damplo-melbourne.png",
    caption: {
      it: "Damplo Melbourne: 16.000 km da Mineo. L'arancino ha fatto il viaggio senza lamentarsi.",
      en: "Damplo Melbourne: 16,000 km from Mineo. The arancino made the trip without complaining.",
    },
    alt: { it: "Damplo Melbourne", en: "Damplo Melbourne" },
  },
  {
    file: "/images/galleria/damplo-tokyo.png",
    caption: {
      it: "Damplo Tokyo: dove il cannolo incontra il wagashi. Nessuno dei due ha chiesto il permesso.",
      en: "Damplo Tokyo: where the cannolo meets wagashi. Neither asked for permission.",
    },
    alt: { it: "Damplo Tokyo", en: "Damplo Tokyo" },
  },
  {
    file: "/images/galleria/damplo-parigi.png",
    caption: {
      it: "Damplo Parigi: finalmente i francesi capiscono cosa significa mangiare bene.",
      en: "Damplo Parigi: finally the French understand what it means to eat well.",
    },
    alt: { it: "Damplo Parigi", en: "Damplo Parigi" },
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
    file: "/images/galleria/ciccio-davanti-pizzeria.jpeg",
    caption: {
      it: "Prima di Damplo, c'era una pizzeria. Ciccio non ne parla mai. Ma le pizze erano ottime.",
      en: "Before Damplo, there was a pizzeria. Ciccio never mentions it. But the pizzas were excellent.",
    },
    alt: { it: "Ciccio davanti alla sua prima pizzeria", en: "Ciccio in front of his first pizzeria" },
  },
  {
    file: "/images/galleria/pizza-e-trump.png",
    caption: {
      it: "La pizza Damplo è stata servita a Mar-a-Lago. I negoziati sono in corso.",
      en: "Damplo pizza was served at Mar-a-Lago. Negotiations are ongoing.",
    },
    alt: { it: "Pizza Damplo e Trump", en: "Damplo pizza and Trump" },
  },
  {
    file: "/images/galleria/pizzeria-melbourne.png",
    caption: {
      it: "Damplo Melbourne — sede provvisoria. La sede definitiva avrà il tetto d'oro.",
      en: "Damplo Melbourne — temporary location. The permanent one will have a gold roof.",
    },
    alt: { it: "Damplo Melbourne versione provvisoria", en: "Damplo Melbourne temporary location" },
  },
];
