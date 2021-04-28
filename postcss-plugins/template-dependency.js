const glob = require("glob");
const path = require("path");
const postcss = require("postcss");

const TEMPLATE_EXT = "tsx";
/**
 * templateDependency plugin
 *
 * This plugin allows the use of purgecss in dev. When classes
 * are added in html files css needs to be rebuilt
 */
module.exports = postcss.plugin("templateDependency", (config) => {
  let htmlFiles = [];
  config.directories.forEach((directory) => {
    directory = path.resolve(__dirname, directory);
    // get all html files in a given directory
    htmlFiles = htmlFiles.concat(
      glob.sync(directory + `/**/*.${TEMPLATE_EXT}`, {})
    );
  });

  // add each file as a dependency of the css
  // ie. rebuild styles when html files are changed
  return function (css, opts) {
    htmlFiles.forEach((file) => {
      opts.messages.push({
        type: "dependency",
        file: file,
        parent: css.source.input.file,
      });
    });
  };
});
