import { EleventyHtmlBasePlugin, EleventyI18nPlugin } from "@11ty/eleventy";

export default function (eleventyConfig) {
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
  eleventyConfig.addPlugin(EleventyI18nPlugin, {
    defaultLanguage: "lv",
  });

  eleventyConfig.addPassthroughCopy("src/img");
  eleventyConfig.addPassthroughCopy("src/CNAME");

  // Tailwind writes CSS straight to _site; reload the browser when it changes.
  eleventyConfig.setServerOptions({
    watch: ["_site/css/**/*.css"],
  });
}

export const config = {
  dir: {
    input: "src",
    output: "_site",
  },
  markdownTemplateEngine: "njk",
  htmlTemplateEngine: "njk",
  // "/" locally; the deploy workflow sets "/luu/" for kruu79.github.io/luu.
  pathPrefix: process.env.ELEVENTY_PATH_PREFIX || "/",
};
