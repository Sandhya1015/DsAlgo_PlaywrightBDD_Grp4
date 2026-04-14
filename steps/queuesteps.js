const { createBdd } = require('playwright-bdd');
const { Given, When, Then } = createBdd();
const { getDataByType } = require('../utils/excelreader');

const QueuePage = require('../pages/queuepage');

let queuePage;

//  Click Queue Get Started
When('user clicks on Queue Get Started button', async ({ page }) => {
  queuePage = new QueuePage(page);
  await queuePage.clickQueueGetStarted();
});

Then('user should be redirected to Queue page', async ({ page }) => {
  await queuePage.verifyQueuePage();
});

//  Navigate to Queue Page
Given('user is on Queue page', async ({ page }) => {
  queuePage = new QueuePage(page);
  await queuePage.navigateToQueuePage();
});

//  Generic Click for ALL links
When('user clicks {string}', async ({ page }, linkName) => {
  queuePage = new QueuePage(page);
  await queuePage.clickImplementationLink(linkName);
});

When('user clicks on {string}', async ({ page }, linkName) => {
  queuePage = new QueuePage(page);
  await queuePage.clickImplementationLink(linkName);
});

//  Implementation (Python)
Then('user should be navigated to Implementation of Queue in Python page', async ({ page }) => {
  await queuePage.verifyImplementationPage();
});

Given('user is on Implementation of Queue in Python page', async ({ page }) => {
  queuePage = new QueuePage(page);
  await queuePage.navigateToImplementationPage('Implementation of Queue in Python');
});

//  Deque Page
Then('user should be redirected to Implementation using collections.deque page.', async ({ page }) => {
  await queuePage.verifyImplementationPage();
});
Given('user is on Implementation using collections.deque page', async ({ page }) => {
  queuePage = new QueuePage(page);
  await queuePage.navigateToImplementationPage('Implementation using collections.deque');
});
//  Array Page
Then('user should be navigated to Implementation using array page', async ({ page }) => {
  await queuePage.verifyImplementationPage();
});

Given('user is on Implementation using array page', async ({ page }) => {
  queuePage = new QueuePage(page);
  await queuePage.navigateToImplementationPage('Implementation using array');
});

//  Queue Operations
Then('user should be redirected to Queue Operations page.', async ({ page }) => {
  await queuePage.verifyImplementationPage();
});

Given('user is on Queue Operations page', async ({ page }) => {
  queuePage = new QueuePage(page);
  await queuePage.navigateToImplementationPage('Queue Operations');
});

// Practice Questions
Then('user should be redirected to practice questions page', async ({ page }) => {
  await queuePage.verifyPracticeQuestionsPage();
});

//  Try Editor (COMMON)
When('user clicks Try Here button', async ({ page }) => {
  await queuePage.clickTryHere();
});

Then('user should be navigated to try editor page', async ({ page }) => {
  await queuePage.verifyTryEditorPage();
});

//  Try Editor Navigation (Python)
Given('user is on try editor page for Queue Implementation', async ({ page }) => {
  queuePage = new QueuePage(page);
  await queuePage.navigateToTryEditor('Implementation of Queue in Python');
});

//  Try Editor Navigation (Deque)
Given('user is on try editor page for Queue Implementation using collections.deque', async ({ page }) => {
  queuePage = new QueuePage(page);
  await queuePage.navigateToTryEditor('Implementation using collections.deque');
});

//  Try Editor Navigation (Array)
Given('user is on try editor page for Queue Implementation using array', async ({ page }) => {
  queuePage = new QueuePage(page);
  await queuePage.navigateToTryEditor('Implementation using array');
});

//  Try Editor Navigation (Queue Operations)
Given('user is on try editor page for Queue Queue Operations', async ({ page }) => {
  queuePage = new QueuePage(page);
  await queuePage.navigateToTryEditor('Queue Operations');
});

//  Run Code
When('user runs python code of type {string}', async ({ page }, type) => {
  const data = getDataByType('Python', type);

  if (!data) {
    throw new Error(`Invalid Python data: ${type}`);
  }
   await queuePage.runCode(data.code, type);
  
});

//  Validate Output / Error
Then('user should see output for {string}', async ({ page }, type) => {
  const data = getDataByType('Python', type);
if (type === 'valid') {
    await queuePage.verifyOutput(data.expected);
  }
   
});

//  Generic Try Editor (for back navigation)
Given('user is on try editor page', async ({ page }) => {
  queuePage = new QueuePage(page);
  await queuePage.navigateToTryEditor('Implementation of Queue in Python');
});

//  Browser Back
When('user clicks browser back button', async ({ page }) => {
  await page.goBack();
});

Then('user should be navigated back to Queue page', async ({ page }) => {
  await queuePage.verifyQueuePage();
});