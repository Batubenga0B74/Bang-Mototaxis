const { defineConfig } = require("cypress");
const codeCoverageTask = require('@cypress/code-coverage/task');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners 
      codeCoverageTask(on, config);
      return config;
    },
  },
});
