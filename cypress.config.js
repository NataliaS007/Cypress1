const {defineConfig} = require('cypress');

module.exports = defineConfig({
  e2e: {
      baseUrl: "http://localhost:3000",
      setupNodeEvents(on, config) {
      },
  },

  viewportWidth: 1366,
  viewportHeight: 768,
  screenshotsFolder: "cypress/screenshots",

  configurations: {
    desktop: {
      viewportWidth: 1366,
      viewportHeight: 768,
    },
    mobile: {
      viewportWidth: 375,
      viewportHeight: 667,
    },
  },
});
