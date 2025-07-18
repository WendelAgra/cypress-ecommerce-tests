const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('before:browser:launch', (browser = {}, launchOptions) => {
        // A configuração abaixo desabilita o pop-up de salvar senha do Chrome
        if (browser.family === 'chromium' && browser.name !== 'electron') {
          launchOptions.preferences.default['credentials_enable_service'] = false;
          launchOptions.preferences.default['password_manager_enabled'] = false;
        }

        return launchOptions;
      });
    },
  },
});