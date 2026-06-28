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
