// features/steps/Arraysteps.js
const { createBdd }         = require('playwright-bdd');
const { Given, When, Then } = createBdd();
const { expect }            = require('@playwright/test');
const { ArrayPage }         = require('../pages/ArrayPage');
//const { getLoginData }      = require('../../testdata/loginData');
const { getDataByType }     = require('../utils/excelreader');   // ← CHANGED

//  Background Steps 

Given('User is logged in and on Home page', async function ({ page }) {
  this.arrayPage = new ArrayPage(page);
  const row      = getDataByType('LoginData', 'valid_credentials');
const username = row.username;
const password = row.password;
  console.log(`\n Logging in as: ${username}`);
  await page.goto('/login');
  await page.waitForLoadState('domcontentloaded');
  await page.locator('input[name="username"]').fill(username);
  await page.locator('input[name="password"]').fill(password);
  await page.locator('input[type="submit"]').click();
  await page.waitForURL('**/home', { timeout: 15000 });
  console.log(' Logged in — on Home page');
});

When('User clicks Get Started button under Array on Home page', async function ({ page }) {
  this.arrayPage = this.arrayPage || new ArrayPage(page);
  await page.goto('/array');
  await page.waitForLoadState('domcontentloaded');
});

Then('The user should be able to land on the Array page', async function ({ page }) {
  this.arrayPage = this.arrayPage || new ArrayPage(page);
  await this.arrayPage.verifyOnArrayPage();
});

//  Array Page Non-Functional Steps 

Then('The user should be able to see the Title {string} on top left corner', async function ({ page }, title) {
  await this.arrayPage.verifyArrayTitle(title);
});

Then('The user should be able to see Topics Covered sub title', async function ({ page }) {
  await this.arrayPage.verifyTopicsCoveredVisible();
});

Then('The user should be able to see Arrays in Python link', async function ({ page }) {
  await this.arrayPage.verifyLinkVisible('Arrays in Python');
});

Then('The user should be able to see Arrays Using List link', async function ({ page }) {
  await this.arrayPage.verifyLinkVisible('Arrays Using List');
});

Then('The user should be able to see Basic Operations in Lists link', async function ({ page }) {
  await this.arrayPage.verifyLinkVisible('Basic Operations in Lists');
});

Then('The user should be able to see Applications of Array link', async function ({ page }) {
  await this.arrayPage.verifyLinkVisible('Applications of Array');
});

//  Arrays in Python Steps 

When('User clicks Arrays in Python link on Array page', async function ({ page }) {
  this.arrayPage = this.arrayPage || new ArrayPage(page);
  await this.arrayPage.clickArraysInPythonLink();
});

Then('The user should be able to see the Title {string}', async function ({ page }, title) {
  const bodyText = await page.locator('body').innerText();
  expect(bodyText).toContain(title);
});

Then('The user should be able to see Insertion sub title', async function ({ page }) {
  await this.arrayPage.verifySubTitleVisible('Insertion');
});

Then('The user should be able to see Deletion Operation sub title', async function ({ page }) {
  await this.arrayPage.verifySubTitleVisible('Deletion');
});

Then('The user should be able to see Search Operation sub title', async function ({ page }) {
  await this.arrayPage.verifySubTitleVisible('Search');
});

Then('The user should be able to see Update Operation sub title', async function ({ page }) {
  await this.arrayPage.verifySubTitleVisible('Update');
});

Then('The user should be able to see Practice Questions link', async function ({ page }) {
  await this.arrayPage.verifyLinkVisible('Practice Questions');
});

Then('The user should be able to see Try here link at the bottom', async function ({ page }) {
  await this.arrayPage.verifyTryHereLinkVisible();
});

//  Try here Steps 

When('User hovers on Try here link', async function ({ page }) {
  await this.arrayPage.hoverTryHereLink();
});

Then('The Try here link should be highlighted', async function ({ page }) {
  await this.arrayPage.verifyTryHereLinkHighlighted();
});

When('User clicks on Try here link', async function ({ page }) {
  await this.arrayPage.clickTryHereLink();
});

Then('The user should be able to land on Editor page', async function ({ page }) {
  await this.arrayPage.verifyOnEditorPage();
});

//  Back Arrow Steps 

When('User clicks the back arrow to return to previous page', async function ({ page }) {
  await this.arrayPage.clickBackArrow();
});

Then('User should be back on the Arrays in Python page', async function ({ page }) {
  await this.arrayPage.verifyBackOnArraysInPythonPage();
});

Then('User should be back on the Arrays Using List page', async function ({ page }) {
  await this.arrayPage.verifyBackOnArraysUsingListPage();
});

Then('User should be back on the Basic Operations in Lists page', async function ({ page }) {
  await this.arrayPage.verifyBackOnBasicOpsPage();
});

Then('User should be back on the Applications of Array page', async function ({ page }) {
  await this.arrayPage.verifyBackOnApplicationsPage();
});

Then('User should be back on the Practice page', async function ({ page }) {
  await this.arrayPage.verifyBackOnPracticePage();
});

//  Editor Steps — Excel Data Driven 

When('User clicks RUN button without entering any data', async function ({ page }) {
  await this.arrayPage.clickRunWithoutData();
});

When('User clicks SUBMIT button without entering any data', async function ({ page }) {
  await this.arrayPage.clickSubmitWithoutData();
});

Then('An error message should appear in the editor', async function ({ page }) {
  await this.arrayPage.verifyEditorErrorMessage();
});

// ── CHANGED: now uses excelreader.js + external loginData.xlsx ────────────────

When('User enters python code from excel row {string} and clicks RUN',
  async function ({ page }, rowKey) {
    const row  = getDataByType('PythonData', rowKey);
    const code = row.Code;
    await this.arrayPage.enterCodeAndRun(code);
  }
);

When('User enters python code from excel row {string} and clicks SUBMIT',
  async function ({ page }, rowKey) {
    const row = getDataByType('PythonData', rowKey);
    const code = row.Code;
    console.log(`\n Python code loaded — row: ${rowKey}`);
    await this.arrayPage.enterCodeAndSubmit(code);
  }
);

Then('User should see the expected output from excel row {string}',
  async function ({ page }, rowKey) {
    const row = getDataByType('PythonData', rowKey);
    const expectedOutput = row.ExpectedOutput;
    await this.arrayPage.verifyOutputContains(expectedOutput);
  }
);

//  Arrays Using List Steps 

When('User clicks Arrays Using List link on Array page', async function ({ page }) {
  this.arrayPage = this.arrayPage || new ArrayPage(page);
  await this.arrayPage.clickArraysUsingListLink();
});

Then('The user should be able to land on Arrays Using List page', async function ({ page }) {
  await this.arrayPage.verifyOnArraysUsingListPage();
});

//  Basic Operations Steps 

When('User clicks Basic Operations in Lists link on Array page', async function ({ page }) {
  this.arrayPage = this.arrayPage || new ArrayPage(page);
  await this.arrayPage.clickBasicOpsLink();
});

Then('The user should land on Basic Operations in Lists page', async function ({ page }) {
  await this.arrayPage.verifyOnBasicOpsPage();
});

Then('The user should be able to see Insertion in Lists sub title', async function ({ page }) {
  await this.arrayPage.verifySubTitleVisible('Insertion in Lists');
});

Then('The user should be able to see Inserting at the beginning of the array sub title', async function ({ page }) {
  await this.arrayPage.verifySubTitleVisible('Inserting at the beginning');
});

Then('The user should be able to see Inserting at any location in the array sub title', async function ({ page }) {
  await this.arrayPage.verifySubTitleVisible('Inserting at any location');
});

Then('The user should be able to see Deletion in list sub title', async function ({ page }) {
  await this.arrayPage.verifySubTitleVisible('Deletion in list');
});

Then('The user should be able to see Deletion in Array sub title', async function ({ page }) {
  await this.arrayPage.verifySubTitleVisible('Deletion in Array');
});

Then('The user should be able to see Deleting From the End of an Array sub title', async function ({ page }) {
  await this.arrayPage.verifySubTitleVisible('Deleting From the End');
});

Then('The user should be able to see Deleting From the Start of an Array sub title', async function ({ page }) {
  await this.arrayPage.verifySubTitleVisible('Deleting From the Start');
});

Then('The user should be able to see Try here link on Basic Operations page', async function ({ page }) {
  await this.arrayPage.verifyTryHereLinkVisible();
});

//  Applications Steps 

When('User clicks Applications of Array link on Array page', async function ({ page }) {
  this.arrayPage = this.arrayPage || new ArrayPage(page);
  await this.arrayPage.clickApplicationsLink();
});

Then('The user should land on Applications of Array page', async function ({ page }) {
  await this.arrayPage.verifyOnApplicationsPage();
});

Then('The user should be able to see Try here link on Applications page', async function ({ page }) {
  await this.arrayPage.verifyTryHereLinkVisible();
});

//  Practice Questions Steps 

When('User clicks Practice Questions link', async function ({ page }) {
  await this.arrayPage.clickPracticeQuestionsLink();
});

Then('The user should be able to land on the Practice page', async function ({ page }) {
  await this.arrayPage.verifyOnPracticePage();
});

Then('The user should be able to see the Title {string} on Practice page', async function ({ page }, title) {
  const bodyText = await page.locator('body').innerText();
  expect(bodyText).toContain(title);
});

Then('The user should be able to see Search the Array link', async function ({ page }) {
  await this.arrayPage.verifyLinkVisible('Search the Array');
});

Then('The user should be able to see Max Consecutive Ones link', async function ({ page }) {
  await this.arrayPage.verifyLinkVisible('Max Consecutive');
});

Then('The user should be able to see Find Numbers with Even Number of Digits link', async function ({ page }) {
  await this.arrayPage.verifyLinkVisible('Find Numbers with Even');
});

Then('The user should be able to see Squares of a Sorted Array link', async function ({ page }) {
  await this.arrayPage.verifyLinkVisible('Squares of a Sorted');
});

When('User clicks Search the Array link', async function ({ page }) {
  await this.arrayPage.clickSearchArrayLink();
});

Then('The user should be able to land on Question 1 page', async function ({ page }) {
  await this.arrayPage.verifyOnPracticePage();
});

Then('RUN button should be clickable on practice page', async function ({ page }) {
  await this.arrayPage.verifyRunButtonClickable();
});

Then('SUBMIT button should be clickable on practice page', async function ({ page }) {
  await this.arrayPage.verifySubmitButtonClickable();
});

When('User clicks Max Consecutive Ones link', async function ({ page }) {
  await this.arrayPage.clickMaxConsecutiveLink();
});

Then('The user should be able to land on Question 2 page', async function ({ page }) {
  await this.arrayPage.verifyOnPracticePage();
});

When('User clicks Find Numbers with Even Number of Digits link', async function ({ page }) {
  await this.arrayPage.clickFindEvenDigitsLink();
});

Then('The user should be able to land on Question 3 page', async function ({ page }) {
  await this.arrayPage.verifyOnPracticePage();
});

When('User clicks Squares of a Sorted Array link', async function ({ page }) {
  await this.arrayPage.clickSquaredArrayLink();
});

Then('The user should be able to land on Question 4 page', async function ({ page }) {
  await this.arrayPage.verifyOnPracticePage();
});

//  Sign Out from Practice Page 

When('User clicks Sign out from Practice page', async function ({ page }) {
  await this.arrayPage.clickSignOut();
});

Then('User should be redirected to Home page with logged out message', async function ({ page }) {
  await this.arrayPage.verifySignedOut();
});