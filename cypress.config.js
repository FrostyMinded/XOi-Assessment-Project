const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://automationexercise.com",
    env: {
      userEmail: "mdiaz182@gmail.com",
      userPassword: "Test@123"
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    }
  }
});