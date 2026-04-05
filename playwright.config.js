const { defineConfig, devices } = require("@playwright/test");
const { defineBddConfig }       = require("playwright-bdd");

const testDir = defineBddConfig({
  features: "features/**/*.feature",
  steps:    "features/steps/**/*.js",
});

module.exports = defineConfig({
  testDir,
  use: {
    baseURL:    "https://dsportalapp.herokuapp.com",
    headless:   false,
    screenshot: "retain-on-failure",
    video:      "retain-on-failure",
  },
  projects: [
    { name: "chromium", use: { ...devices["Desktop Chrome"] } },
  ],
});