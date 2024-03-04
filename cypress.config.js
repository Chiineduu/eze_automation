const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    pageLoadTimeout: 2147483647,
    chromeWebSecurity: false,
    projectId: '6w2pfn',
    baseUrl: 'https://dev-enterprise.ezewholesale.com/', // Add a comma here
    runName: 'Login Suite',
    env: {
      MAILSLURP_API_KEY: '48553f17b3e914650ca2ddb7d9f4eb0e8c11293586bbdf197edeab954af7965b'
    }
  },
  
  video: false,
  screenshotsFolder: 'cypress/screenshots',
  trashAssetsBeforeRuns: true,

  // The following is the default configuration for the plugin
  mailslurp: {
    apiKey: '48553f17b3e914650ca2ddb7d9f4eb0e8c11293586bbdf197edeab954af7965b',
    baseUrl: 'https://api.mailslurp.com'
  }
});

