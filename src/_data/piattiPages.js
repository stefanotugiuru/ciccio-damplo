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
