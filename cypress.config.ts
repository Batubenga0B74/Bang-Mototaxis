 import { defineConfig } from "cypress";
// import allureWriter from "@shelex/cypress-allure-plugin/writer";

// export default defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {
//       allureWriter(on, config); 
//       // implement node event listeners here
//     },
//   },
// });

import allureWriter from '@shelex/cypress-allure-plugin/writer';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      allureWriter(on, config); // <- isso é essencial
      return config;
    },
    baseUrl: 'http://localhost:3000', // opcional
    supportFile: 'cypress/support/e2e.js',
    specPattern: 'cypress/e2e/**/*.cy.{js,ts}',
  },
});
