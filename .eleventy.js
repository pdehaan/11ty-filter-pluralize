const pluralize = require('pluralize');

module.exports = eleventyConfig => {
  eleventyConfig.addFilter("pluralize", pluralize);

  return {};
}
