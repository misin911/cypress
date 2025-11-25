const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: false,
    html: true,
    json: true
  },
 

  e2e: {
      video: true,        // record video
    screenshotOnRunFailure: true,
    videosFolder: "cypress/videos",
    screenshotsFolder: "cypress/screenshots",
    watchForFileChanges:false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
