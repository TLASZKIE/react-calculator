// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

const path = require("path");
module.exports = (on, config) => {
  on("before:browser:launch", (browser, args) => {
    console.log("launching browser %o", browser);

    // only load React DevTools extension
    // when opening Chrome in interactive mode
    if (browser.family === "chrome") {
      // we could also restrict the extension
      // to only load when "browser.isHeaded" is true
      const extensionFolder = path.resolve(
        __dirname,
        "..",
        "./extensions/4.4.0_0"
      );

      console.log("adding React DevTools extension from", extensionFolder);
      args.push(`--load-extension=${extensionFolder}`);

      return args;
    }
  });
};
