const { defineConfig } = require('@playwright/test');
module.exports = defineConfig({
  testDir: './tests',
  testMatch: '**/*.spec.js',
  timeout: 60000,
  use: {
    headless: false,
    screenshot: 'only-on-failure',
    video: 'on'
  },
  reporter: [['html']]
});