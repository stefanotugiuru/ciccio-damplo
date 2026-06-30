export type Premio = {
  nome: { it: string; en: string };
  anno: number;
  ente: { it: string; en: string };
};

export const premi: Premio[] = [
  // ── Reali / Credibili ──────────────────────────────────────────────────
  { nome: { it: "Stella Michelin — Damplo Mineo", en: "Michelin Star — Damplo Mineo" }, anno: 2018, ente: { it: "Guida Michelin Italia", en: "Michelin Guide Italy" } },
  { nome: { it: "Due Forchette", en: "Due Forchette" }, anno: 2019, ente: { it: "Gambero Rosso — Ristoranti d'Italia", en: "Gambero Rosso — Restaurants of Italy" } },
  { nome: { it: "Chef dell'Anno", en: "Chef of the Year" }, anno: 2019, ente: { it: "Guida L'Espresso", en: "L'Espresso Guide" } },
  { nome: { it: "Grand Chef", en: "Grand Chef" }, anno: 2020, ente: { it: "Relais & Châteaux", en: "Relais & Châteaux" } },
  { nome: { it: "#47 — The World's 50 Best Restaurants", en: "#47 — The World's 50 Best Restaurants" }, anno: 2021, ente: { it: "World's 50 Best Restaurants", en: "World's 50 Best Restaurants" } },
  { nome: { it: "Stella Michelin — Damplo Roma", en: "Michelin Star — Damplo Roma" }, anno: 2021, ente: { it: "Guida Michelin Italia", en: "Michelin Guide Italy" } },
  { nome: { it: "Tre Cappelli", en: "Tre Cappelli" }, anno: 2022, ente: { it: "Guida L'Espresso", en: "L'Espresso Guide" } },
  { nome: { it: "Miglior Ristorante Italiano all'Estero", en: "Best Italian Restaurant Abroad" }, anno: 2023, ente: { it: "Camera di Commercio Italiana — New York", en: "Italian Chamber of Commerce — New York" } },
  { nome: { it: "Stella Michelin — Damplo Dubai", en: "Michelin Star — Damplo Dubai" }, anno: 2024, ente: { it: "Guida Michelin UAE", en: "Michelin Guide UAE" } },

  // ── Semi-satirici (reali ma applicati in modo comico) ──────────────────
  { nome: { it: "Certificato di Eccellenza — 1° posto a Mineo", en: "Certificate of Excellence — #1 in Mineo" }, anno: 2016, ente: { it: "TripAdvisor", en: "TripAdvisor" } },
  { nome: { it: "Forbes 30 Under 30 — Edizione Mineo", en: "Forbes 30 Under 30 — Mineo Edition" }, anno: 2012, ente: { it: "Forbes (Edizione Locale Non Verificata)", en: "Forbes (Unverified Local Edition)" } },

  // ── Satirici ──────────────────────────────────────────────────────────
  { nome: { it: "Golden Cannoli Awards — Miglior Chef Emotivo", en: "Golden Cannoli Awards — Most Emotional Chef" }, anno: 2017, ente: { it: "Golden Cannoli Awards", en: "Golden Cannoli Awards" } },
  { nome: { it: "Trofeo d'Oro alla Lacrimazione Culinaria Spontanea", en: "Golden Trophy for Spontaneous Culinary Weeping" }, anno: 2020, ente: { it: "Accademia Italiana del Pianto Gastronomico", en: "Italian Academy of Gastronomic Weeping" } },
  { nome: { it: "Best Emotional Pasta Experience", en: "Best Emotional Pasta Experience" }, anno: 2018, ente: { it: "International Pasta Feelings Council", en: "International Pasta Feelings Council" } },
  { nome: { it: "Medaglia Internazionale di Eccellenza dell'Arancino", en: "International Arancino Excellence Medal" }, anno: 2019, ente: { it: "Federazione Mondiale dell'Arancino", en: "World Arancino Federation" } },
  { nome: { it: "Premio alla Carriera per Sofferenza Culinaria", en: "Lifetime Achievement Award for Culinary Suffering" }, anno: 2022, ente: { it: "Arancino Business Review", en: "Arancino Business Review" } },
  { nome: { it: "Ambasciatore Onorario del Pistacchio Siciliano", en: "Honorary Ambassador of Sicilian Pistachio" }, anno: 2023, ente: { it: "Consorzio Immaginario del Pistacchio", en: "Imaginary Pistachio Consortium" } },
  { nome: { it: "Cucchiaio d'Oro Mediterraneo (Vero)", en: "Mediterranean Golden Spoon (Genuine)" }, anno: 2023, ente: { it: "Il Sole 24 Arancini", en: "Il Sole 24 Arancini" } },
];
