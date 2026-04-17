const { createBdd }         = require('playwright-bdd');
const { Given, When, Then } = createBdd();
const { RegisterPage }      = require('../pages/RegisterPage');
const { getDataByType } = require('../utils/excelreader');


//  Background 

Given('User is on Register page', async function ({ page }) {
  this.registerPage = new RegisterPage(page);
  await this.registerPage.navToRegisterPage();
});

//  Non Functional Steps 

Then('User should be able to land on Register page', async function ({ page }) {
  await this.registerPage.verifyRegisterPage();
});

Then('User should see username field on Register page', async function ({ page }) {
  await this.registerPage.verifyUsernameField();
});

Then('User should see password field on Register page', async function ({ page }) {
  await this.registerPage.verifyPasswordField();
});

Then('User should see confirm password field on Register page', async function ({ page }) {
  await this.registerPage.verifyConfirmPasswordField();
});

Then('User should see Register button on Register page', async function ({ page }) {
  await this.registerPage.verifyRegisterButton();
});

Then('Register button should be in enabled state', async function ({ page }) {
  await this.registerPage.verifyRegisterButtonEnabled();
});

When('User registers with data from excel row {string}',
  async function ({ page }, rowKey) {
    const row            = getDataByType('RegisterData', rowKey);
  let username         = row.username;
  let password         = row.password;
  let confirmPassword  = row.confirmPassword;

    if (rowKey === 'valid_registration') {
      username = 'testuser_' + Date.now() + '@test.com';
    }

    console.log('Registering with TestCase: ' + rowKey);
    console.log('Username: ' + username);

    await this.registerPage.registerWithData(username,password,confirmPassword );
  }
);

//  Functional Steps - Assertions 

Then('User should be redirected to Home page after registration', async function ({ page }) {
  await this.registerPage.verifySuccessfulRegistration();
});

Then('User should see form validation message', async function ({ page }) {
  await this.registerPage.verifyFormValidationMessage();
});

Then('User should see error from excel row {string}', async function ({ page }, rowKey) {
  // Read expected result from Excel
  const row            = getDataByType('RegisterData', rowKey);
const expectedResult = row.expectedResult;
  console.log('Expected error: ' + expectedResult);
  await this.registerPage.verifyErrorContains(expectedResult);
});