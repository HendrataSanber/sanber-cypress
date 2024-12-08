const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    testIsolation: false,
    experimentalMemoryManagement: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
