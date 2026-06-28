const ristoranti = require("./src/_data/ristoranti.json");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addFilter("ristorantePerSlug", (slug) =>
    ristoranti.find((r) => r.slug === slug)
  );

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
  };
};
