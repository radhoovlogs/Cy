const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    MAILOSAUR_API_KEY: "gsKjdIKbkYTUOcR688VwpBN0D2A0SBfS",
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

