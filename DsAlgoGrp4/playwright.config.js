// const { defineConfig, devices } = require('@playwright/test');
// const { defineBddConfig } = require('playwright-bdd');
// require('dotenv').config();


// const bddTestDir = defineBddConfig({
//    features: ['DsAlgoGrp4/feature/**/*.feature'],
//    steps: ['DsAlgoGrp4/Steps/**/*.js'],
// });

// module.exports = defineConfig({
//   testDir: bddTestDir,  
//   timeout: 30000,
//   retries: 1,
//   fullyParallel: false,

//   reporter: [
//     ['html', { outputFolder: 'playwright-report' }],
//     ['list'],
//   ],

//   use: {
//     baseURL: process.env.BASE_URL || 'https://dsportalapp.herokuapp.com',
//     headless: process.env.HEADLESS !== 'false',
//     screenshot: 'only-on-failure',
//     video: 'retain-on-failure',
//     trace: 'retain-on-failure',
//   },

//   projects: [
//     { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
//     { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
//     { name: 'webkit', use: { ...devices['Desktop Safari'] } },
//   ],
// }); 



const { defineConfig, devices } = require('@playwright/test');

const { defineBddConfig } = require('playwright-bdd');

const path = require('path');

const dotenv = require('dotenv');

dotenv.config({ path: path.resolve(__dirname, '.env') });

const testDir = defineBddConfig({

  features: ['features/**/*.feature'],

  steps: ['steps/**/*.js'],

  outputDir: 'tests', 

});

const commonUse = {

  ignoreHTTPSErrors: true,

  bypassCSP: true,

  launchOptions: {

    args: ['--disable-gpu'],

    slowMo: 100,

  },

};

module.exports = defineConfig({

  testDir: testDir, 

  fullyParallel: false, 

  

  // 1. Increased Global Timeout: 120 seconds (up from 60s)

  // This gives Firefox and Heroku more time to handle the full test run.

  timeout: 120000, 

  forbidOnly: !!process.env.CI,

  retries: process.env.CI ? 2 : 0,

  workers: 1, 

   reporter: [
    ['html'],                  
    ['allure-playwright'],    
  ],

  use: {

    trace: 'on-first-retry',

    baseURL: process.env.APP_URL || 'https://dsportalapp.herokuapp.com/home',

    headless: false,

    // 2. Specific Interaction Timeouts

    actionTimeout: 20000,     // Wait up to 20s for a click or fill

    navigationTimeout: 45000, // Wait up to 45s for the page to load

  },

  projects: [

    {

      name: 'chromium',

      use: { ...devices['Desktop Chrome'], ...commonUse },

    },

    {

      name: 'edge',

      use: { ...devices['Desktop Edge'], ...commonUse },

    },

    {

      name: 'firefox',

      // 3. Specific Firefox adjustment:

      // Firefox often needs more retries than other browsers.

      retries: 1, 

      use: { ...devices['Desktop Firefox'], ...commonUse },

    },

  ],

});



// const { defineConfig, devices } = require('@playwright/test');
// const { defineBddConfig }  = require('playwright-bdd');
// require('dotenv').config();

// const testDir = defineBddConfig({
//   features: ['DsAlgoGrp4/feature/**/*.feature'],
//   steps: ['DsAlgoGrp4/Steps/**/*.js'],
// });
// module.exports = defineConfig({
//   testDir,
//   testMatch: /.*\.feature\.spec\.js/,
//   timeout: 30000,
//   retries: 1,
//   fullyParallel: false,

//   reporter: [
//     ['html', { outputFolder: 'playwright-report' }],
//     ['list'],
//   ],

//   use: {
//     baseURL: process.env.BASE_URL || 'https://dsportalapp.herokuapp.com',
//     headless: process.env.HEADLESS !== 'false',
//     screenshot: 'only-on-failure',
//     video: 'retain-on-failure',
//     trace: 'retain-on-failure',
//   },

//   projects: [
//     { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
//     { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
//     { name: 'webkit', use: { ...devices['Desktop Safari'] } },
//   ],
// });