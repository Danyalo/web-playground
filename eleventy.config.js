module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/css");
    eleventyConfig.addPassthroughCopy("src/img");
    eleventyConfig.addPassthroughCopy("src/fonts");
    eleventyConfig.addPassthroughCopy("src/js");

    eleventyConfig.addFilter("number", function(value) {
        if (typeof value === 'number') {
            return value.toLocaleString();
        }
        return value;
    });

    return {
      passthroughFileCopy: true,
      dir: {
        input: "src",
        output: "public",
        includes: "_includes",
        data: "data",
      },
    };
  };