require('dotenv').config();
const { defineConfig, devices } = require('@playwright/test');
const { defineBddConfig }       = require('playwright-bdd');

const testDir = defineBddConfig({
  features:  ['features/**/*.feature'],
  steps:     ['features/steps/**/*.js'],
  outputDir: '.features-gen',
});

const commonUse = {
  ignoreHTTPSErrors: true,
  bypassCSP:         true,
  launchOptions: {
    args:   ['--disable-gpu'],
    slowMo: 100,
  },
};

module.exports = defineConfig({
  testDir,
  fullyParallel: false,
  timeout:       120000,
  forbidOnly:    !!process.env.CI,
  retries:       process.env.CI ? 2 : 1,
  workers:       1,
  grepInvert:    /@bug/,

  reporter: [
    ['html'],
    ['allure-playwright'],   // ← simplified for v3.x compatibility
  ],

  use: {
    trace:             'on-first-retry',
    baseURL:           process.env.BASE_URL || 'https://dsportalapp.herokuapp.com',
    headless:          process.env.HEADLESS === 'true',
    actionTimeout:     20000,
    navigationTimeout: 45000,
    screenshot:        'retain-on-failure',
    video:             'retain-on-failure',
  },

  projects: [
    {
      name: 'chromium',
      use:  { ...devices['Desktop Chrome'], ...commonUse },
    },
    {
      name:    'firefox',
      retries: 1,
      use:     { ...devices['Desktop Firefox'], ...commonUse },
    },
    {
      name:    'webkit',
      retries: 1,
      use:     { ...devices['Desktop Safari'], ...commonUse },
    },
  ],
});