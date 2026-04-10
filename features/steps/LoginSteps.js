const { createBdd }         = require('playwright-bdd');
const { Given, When, Then } = createBdd();
const { LoginPage }         = require('../pages/LoginPage');


//  Background 

Given('User is on Login page', async function ({ page }) {
  this.loginPage = new LoginPage(page);
  await this.loginPage.navToLoginPage();
});

//  Non Functional Steps 

Then('User should be able to land on Login page', async function ({ page }) {
  await this.loginPage.verifyLoginPage();
});

Then('User should see username input field on Login page', async function ({ page }) {
  await this.loginPage.verifyUsernameField();
});

Then('User should see password input field on Login page', async function ({ page }) {
  await this.loginPage.verifyPasswordField();
});

Then('User should see Login button on Login page', async function ({ page }) {
  await this.loginPage.verifyLoginButton();
});

Then('Login button should be in enabled state', async function ({ page }) {
  await this.loginPage.verifyLoginButtonEnabled();
});

Then('User should see Sign Up link on Login page', async function ({ page }) {
  await this.loginPage.verifySignUpLink();
});

//  Functional Steps - Actions 

When('User enters username as {string}', async function ({ page }, username) {
  await this.loginPage.enterUsername(username);
});

When('User enters password as {string}', async function ({ page }, password) {
  await this.loginPage.enterPassword(password);
});

When('User clicks Login button', async function ({ page }) {
  await this.loginPage.clickLoginButton();
});

When('User clicks Sign Out link', async function ({ page }) {
  await this.loginPage.clickSignOut();
});

//  Functional Steps - Assertions 

Then('User should be redirected to Home page after login', async function ({ page }) {
  await this.loginPage.verifySuccessfulLogin();
});

Then('User should see invalid credentials error message', async function ({ page }) {
  await this.loginPage.verifyInvalidCredentialsError();
});

Then('User should see please fill out this field message', async function ({ page }) {
  await this.loginPage.verifyFillOutFieldMessage();
});

Then('User should see logged out successfully message', async function ({ page }) {
  await this.loginPage.verifyLoggedOut();
});