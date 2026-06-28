const ristoranti = require("./src/_data/ristoranti.json");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addFilter("ristorantePerSlug", (slug) =>
    ristoranti.find((r) => r.slug === slug)
  );
  eleventyConfig.addFilter("formatDate", (isoDate, lang) => {
    const locale = lang === "it" ? "it-IT" : "en-US";
    return new Intl.DateTimeFormat(locale, { dateStyle: "long" }).format(new Date(isoDate));
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
  };
};
