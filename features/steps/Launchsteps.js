const { createBdd }         = require('playwright-bdd');
const { Given, When, Then } = createBdd();
const { LaunchPage }        = require('../pages/LaunchPage');

// Background step
Given('User navigates to dsAlgo portal', async function ({ page }) {
  this.launchPage = new LaunchPage(page);  // creating instance of launch page
  await this.launchPage.navToDsAlgo();
});

// Scenario 1
Then('User should be able to land on dsAlgo portal', async function ({ page }) {
  await this.launchPage.verifyDsAlgo();    // reuse this.launchPage
});

// Scenario 2
Then('User should see 1 button on launch page', async function ({ page }) {
  await this.launchPage.verifyButtonVisible();
});

// Scenario 3
Then('Button should be in enabled state', async function ({ page }) {
  await this.launchPage.verifyButtonEnabled();
});

// Scenario 4
Then('The button name should be {string}', async function ({ page }, buttonText) {
  await this.launchPage.verifyButtonText(buttonText);
});

// Scenario 5
Then('Page title should be {string}', async function ({ page }, title) {
  await this.launchPage.verifyPageTitle(title);
});

// Scenario 6
Then('User should see the heading text {string}', async function ({ page }, text) {
  await this.launchPage.verifyHeadingText(text);
});

// Scenario 7
Then('User should see the sub-heading text {string}', async function ({ page }, text) {
  await this.launchPage.verifyHeadingSubText(text);
});

// Scenario 8 - When
When('User clicks on Get Started button', async function ({ page }) {
  await this.launchPage.clickGetStarted();
});

// Scenario 8 - Then
Then('User should land on Home page', async function ({ page }) {
  await this.launchPage.verifyHomePage();
});