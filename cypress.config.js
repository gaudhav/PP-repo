const { defineConfig } = require("cypress");


module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',   //for html reports
  projectId: "zxiygs",   // ...rest of the Cypress project config
  viewportWidth: 1000,   // for resizing the cypress runner window
  viewportHeight: 660,
  screenshotOnRunFailure: true,
  screenshotsFolder: 'cypress/screenshots',
  video: false,
  videoCompression: false,
  videosFolder: 'cypress/videos',
  defaultCommandTimeout: 4000,

  e2e: {
    baseUrl: 'https://www.w3schools.com/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      // on('task', { 
      //   abc(message) {
      //     console.log(message)
      //     return null
      //   },
      // })
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },

  env:{
    url: "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
    username : "Admin",
    password : "admin123"
  }
});
