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
