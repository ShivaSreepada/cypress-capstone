const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      const { Mochawesome } = require('mochawesome');
      on('after:run', (results) => {
        // Generate Mochawesome reports
        const mochawesomeReporter = new Mochawesome({
          reportDir: 'cypress/reports',
          reportFilename: 'report',
        });
        mochawesomeReporter.generate(results);
      });
    
    },
    
    specPattern: 'cypress/e2e/**/*.cy.js',
    specPattern: 'cypress/capstone-1/**/*.cy.js',
  },
});
