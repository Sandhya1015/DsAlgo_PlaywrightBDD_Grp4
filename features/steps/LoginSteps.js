const { createBdd } = require('playwright-bdd');
const { getDataByType } = require('../utils/excelreader');
//const { getLoginData }      = require('../../testdata/loginData');
const { Given, When, Then } = createBdd();

const LoginPage  = require('../pages/LoginPage');

let loginPage;

Given('user launches the application', async ({ page }) => {
  loginPage = new LoginPage(page);
  await loginPage.launchapp();
});

When('user clicks on sign in link', async ({ page }) => {
  await loginPage.clickSignIn();
});

When('user enters {string} credentials', async ({ page }, type) => {
   if (type === 'empty') {

    return;
   }
  const data = getDataByType('Login', type);

  if (!data) {
    throw new Error(`Invalid test data: ${type}`);
  }
  await loginPage.enterCredentials(data.username, data.password);
  });

When('user clicks login button', async ({ page }) => {
  await loginPage.clickLogin();
});

Then('user should login successfully', async ({ page }) => {
  await loginPage.verifyLoginSuccess();
});

Then('user should see an error message', async ({ page }) => {
  await loginPage.verifyLoginError();
});

Then('user should see validation messages for required fields', async ({ page }) => {
  await loginPage.verifyEmptyFieldError();
});