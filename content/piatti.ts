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
