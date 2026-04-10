// const { defineConfig, devices } = require('@playwright/test');
// const { defineBddConfig }       = require('playwright-bdd');

// const testDir = defineBddConfig({
//   features: 'features/**/*.feature',
//   steps:    'features/steps/**/*.js',
// });

// module.exports = defineConfig({
//   testDir,
//   fullyParallel: false,    // ← runs tests in parallel
//   workers:       1,        // ← 3 tests at same time
//   timeout:       60000,

//   use: {
//     baseURL:    'https://dsportalapp.herokuapp.com',
//     headless:   true,       // ← headless for speed
//     screenshot: 'retain-on-failure',
//     video:      'retain-on-failure',
//   },

//   projects: [
//      { name: 'chromium', use: { ...devices['Desktop Chrome']  } },
//     { name: 'firefox',  use: { ...devices['Desktop Firefox'] } },
//     { name: 'webkit',   use: { ...devices['Desktop Safari']  } },
//   ],
// });


// For Allure Reporting

const { defineConfig, devices } = require('@playwright/test');
const { defineBddConfig }       = require('playwright-bdd');

const testDir = defineBddConfig({
  features: 'features/**/*.feature',
  steps:    'features/steps/**/*.js',
});

module.exports = defineConfig({
  testDir,
  fullyParallel: false,
  workers:       1,
  timeout:       60000,

  reporter: [
    ['line'],                              // terminal output
    ['allure-playwright', {
      detail:      true,
      outputFolder: 'allure-results',     // raw results folder
      suiteTitle:  false,
    }],
  ],

  use: {
    baseURL:    'https://dsportalapp.herokuapp.com',
    headless:   true,
    screenshot: 'retain-on-failure',
    video:      'retain-on-failure',
  },

  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome']  } },
    { name: 'firefox',  use: { ...devices['Desktop Firefox'] } },
    { name: 'webkit',   use: { ...devices['Desktop Safari']  } },
  ],
});