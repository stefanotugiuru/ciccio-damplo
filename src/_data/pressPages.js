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
