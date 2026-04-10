// features/steps/Queuesteps.js
const { createBdd }         = require('playwright-bdd');
const { Given, When, Then } = createBdd();
const { expect }            = require('@playwright/test');
const { QueuePage }         = require('../pages/QueuePage');
const { getLoginData }      = require('../../testdata/loginData');
const { getQueueData }      = require('../../testdata/queueData');

// Background

Given('User is logged in and on Queue page', async function ({ page }) {
  this.queuePage = new QueuePage(page);
  const { username, password } = getLoginData('valid_credentials');
  console.log(`\n Logging in as: ${username}`);
  await page.goto('/login');
  await page.waitForLoadState('domcontentloaded');
  await page.locator('input[name="username"]').fill(username);
  await page.locator('input[name="password"]').fill(password);
  await page.locator('input[type="submit"]').click();
  await page.waitForURL('**/home', { timeout: 15000 });
  console.log(' Logged in — navigating to Queue page');
  await this.queuePage.navToQueuePage();
});

// Non Functional Steps

Then('The user should be able to land on Queue page', async function ({ page }) {
  await this.queuePage.verifyOnQueuePage();
});

Then('The user should be able to see Implementation of Queue in Python link', async function ({ page }) {
  await this.queuePage.verifyLinkVisible('Implementation of Queue in Python');
});

Then('The user should be able to see Implementation using collections.deque link', async function ({ page }) {
  await this.queuePage.verifyLinkVisible('Implementation using collections.deque');
});

Then('The user should be able to see Implementation using array link', async function ({ page }) {
  await this.queuePage.verifyLinkVisible('Implementation using array');
});

Then('The user should be able to see Queue Operations link', async function ({ page }) {
  await this.queuePage.verifyLinkVisible('Queue Operations');
});

Then('The user should be able to see Practice Questions link on Queue page', async function ({ page }) {
  await this.queuePage.verifyLinkVisible('Practice Questions');
});

// Sub Page Navigation

When('User clicks on Implementation of Queue in Python link', async function ({ page }) {
  await this.queuePage.clickImplPythonLink();
});

Then('The user should land on Implementation of Queue in Python page', async function ({ page }) {
  await this.queuePage.verifyOnSubPage('Implementation of Queue in Python');
});

When('User clicks on Implementation using collections.deque link', async function ({ page }) {
  await this.queuePage.clickImplDequeLink();
});

Then('The user should land on Implementation using collections.deque page', async function ({ page }) {
  await this.queuePage.verifyOnSubPage('collections.deque');
});

When('User clicks on Implementation using array link', async function ({ page }) {
  await this.queuePage.clickImplArrayLink();
});

Then('The user should land on Implementation using array page', async function ({ page }) {
  await this.queuePage.verifyOnSubPage('Implementation using array');
});

When('User clicks on Queue Operations link', async function ({ page }) {
  await this.queuePage.clickQueueOpsLink();
});

Then('The user should land on Queue Operations page', async function ({ page }) {
  await this.queuePage.verifyOnSubPage('Queue Operations');
});

When('User clicks on Practice Questions link on Queue page', async function ({ page }) {
  await this.queuePage.clickPracticeLink();
});

Then('The user should land on Queue Practice Questions page', async function ({ page }) {
  await this.queuePage.verifyOnPracticePage();
});

// Try Here / Editor

Then('The user should be able to see Try here link', async function ({ page }) {
  await this.queuePage.verifyTryHereLinkVisible();
});

When('User clicks on Try here link on Queue page', async function ({ page }) {
  await this.queuePage.clickTryHereLink();
});

// UNIQUE Queue step names to avoid clash with Array steps

Then('The user should be able to land on Queue Editor page', async function ({ page }) {
  await this.queuePage.verifyOnEditorPage();
});

When('User clicks RUN button without entering any data on Queue page', async function ({ page }) {
  await this.queuePage.clickRunWithoutData();
});

Then('An error message should appear in the Queue editor', async function ({ page }) {
  await this.queuePage.verifyEditorErrorMessage();
});

When('User clicks the back arrow on Queue page', async function ({ page }) {
  await this.queuePage.clickBackArrow();
});

Then('User should be back on the Queue sub page', async function ({ page }) {
  await this.queuePage.verifyBackOnQueueSubPage();
});

// Editor Steps — Excel Data Driven

When('User enters queue python code from excel row {string} and clicks RUN',
  async function ({ page }, rowKey) {
    const { code, expectedOutput } = getQueueData(rowKey);
    console.log(`\n Queue code loaded — row: ${rowKey}`);
    await this.queuePage.enterCodeAndRun(code, expectedOutput);
  }
);

Then('User should see the expected queue output from excel row {string}',
  async function ({ page }, rowKey) {
    const { expectedOutput } = getQueueData(rowKey);
    console.log(`Expected output: ${expectedOutput}`);
    await this.queuePage.verifyOutputContains(expectedOutput);
  }
);

//  Sign Out 

When('User clicks Sign out from Queue page', async function ({ page }) {
  await this.queuePage.clickSignOut();
});

Then('User should be signed out successfully', async function ({ page }) {
  await this.queuePage.verifySignedOut();
});