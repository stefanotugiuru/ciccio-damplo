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
  { nome: { it: "Cucchiaio d'Oro Mediterraneo (Vero)", en: "Mediterranean Golden Spoon (Genuine)" }, anno: 2022, ente: { it: "Il Sole 24 Arancini", en: "Il Sole 24 Arancini" } },
  { nome: { it: "Ambasciatore Onorario del Pistacchio Siciliano", en: "Honorary Ambassador of Sicilian Pistachio" }, anno: 2023, ente: { it: "Consorzio Immaginario del Pistacchio", en: "Imaginary Pistachio Consortium" } },
];
