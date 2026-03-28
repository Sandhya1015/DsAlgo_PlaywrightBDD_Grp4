const { Given, When, Then } = require('@cucumber/cucumber');
const LoginPage = require('../../pages/loginPage');
const config = require('../../config/config');
const loginData = require('../../test-data/loginData.json');

let loginPage;

Given('user launches the application', async function () {
  loginPage = new LoginPage(this.page);
  await loginPage.launchApp(config.baseURL);
});

When('user clicks on sign in link', async function () {
  await loginPage.clickSignIn();
});

When('user enters login credentials', async function () {
  await loginPage.enterCredentials(loginData.username, loginData.password);
});

When('user clicks login button', async function () {
  await loginPage.clickLogin();
});

Then('user should login successfully', async function () {
  await loginPage.verifyLoginSuccess();
});