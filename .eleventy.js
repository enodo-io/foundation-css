const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  // Copy static assets
  eleventyConfig.addPassthroughCopy("docs/assets");

  // Add filters
  eleventyConfig.addFilter("readableDate", dateObj => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat("dd LLL yyyy");
  });

  // Add collections
  eleventyConfig.addCollection("docs", function(collectionApi) {
    return collectionApi.getFilteredByGlob("docs/*.njk").filter(item =>
      !item.inputPath.includes('index.njk')
    );
  });

  return {
    dir: {
      input: "docs",
      output: "dist",
      includes: "inc",
      layouts: "inc"
    },
    pathPrefix: "/foundation-css/",
  };
};
