const { createBdd } = require('playwright-bdd');
const { Given, When, Then } = createBdd();
const LoginPage = require('./DsAlgoGrp4/pages/loginpage');
const loginData = require('./DsAlgoGrp4/test-data/loginData.json');

//const config = require('../config/config');

let loginPage;

Given('user launches the application', async ({ page }) => {
  loginPage = new LoginPage(page);
  await loginPage.launchapp();
});

When('user clicks on sign in link', async () => {
  await loginPage.clickSignIn();
});

When('user enters {string} credentials', async (type) => {
  const data = loginData[type];

  if (!data) {
    throw new Error(`Invalid test data: ${type}`);
  }

  await loginPage.enterCredentials(data.username, data.password);
});

When('user clicks login button', async () => {
  await loginPage.clickLogin();
});

Then('user should login successfully', async () => {
  await loginPage.verifyLoginSuccess();
});

Then('user should see an error message', async () => {
  await loginPage.verifyLoginError();
});

Then('user should see validation messages for required fields', async () => {
  await loginPage.verifyEmptyFieldError();
});