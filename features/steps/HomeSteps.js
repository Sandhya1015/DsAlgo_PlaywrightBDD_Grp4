const { createBdd }         = require('playwright-bdd');
const { Given, When, Then } = createBdd();
const { HomePage }          = require('../pages/HomePage');

//  Background

Given('User is on Home page', async function ({ page }) {
  this.homePage = new HomePage(page);
  await this.homePage.navToHomePage();
});

//  Non Functional - Page Load 

Then('User should be able to land on Home page', async function ({ page }) {
  await this.homePage.verifyHomePage();
});

//  Non Functional - Dropdown ─

Then('User should see Data Structures dropdown in Home page', async function ({ page }) {
  await this.homePage.verifyDropdownVisible();
});

Then('User should see 6 options in Data Structures dropdown', async function ({ page }) {
  await this.homePage.verifyDropdownCount();
});

Then('User should see Arrays option in dropdown', async function ({ page }) {
  await this.homePage.verifyArraysOption();
});

Then('User should see Linked List option in dropdown', async function ({ page }) {
  await this.homePage.verifyLinkedListOption();
});

Then('User should see Stack option in dropdown', async function ({ page }) {
  await this.homePage.verifyStackOption();
});

Then('User should see Queue option in dropdown', async function ({ page }) {
  await this.homePage.verifyQueueOption();
});

Then('User should see Tree option in dropdown', async function ({ page }) {
  await this.homePage.verifyTreeOption();
});

Then('User should see Graph option in dropdown', async function ({ page }) {
  await this.homePage.verifyGraphOption();
});

//  Non Functional - Nav Links 

Then('User should see Register link in Home page', async function ({ page }) {
  await this.homePage.verifyRegisterLink();
});

Then('User should see Sign In link in Home page', async function ({ page }) {
  await this.homePage.verifySignInLink();
});

//  Non Functional - Card Titles ─

Then('User should see Data Structures Introduction card text in Home page', async function ({ page }) {
  await this.homePage.verifyDsCardTitle();
});

Then('User should see Array card text in Home page', async function ({ page }) {
  await this.homePage.verifyArrayCardTitle();
});

Then('User should see Linked List card text in Home page', async function ({ page }) {
  await this.homePage.verifyLinkedListCardTitle();
});

Then('User should see Stack card text in Home page', async function ({ page }) {
  await this.homePage.verifyStackCardTitle();
});

Then('User should see Queue card text in Home page', async function ({ page }) {
  await this.homePage.verifyQueueCardTitle();
});

Then('User should see Tree card text in Home page', async function ({ page }) {
  await this.homePage.verifyTreeCardTitle();
});

Then('User should see Graph card text in Home page', async function ({ page }) {
  await this.homePage.verifyGraphCardTitle();
});

//  Non Functional - Card Buttons Visible 

Then('User should see Get Started button in Data Structures Introduction card', async function ({ page }) {
  await this.homePage.verifyDsCardButtonVisible();
});

Then('User should see Get Started button in Array card', async function ({ page }) {
  await this.homePage.verifyArrayCardButtonVisible();
});

Then('User should see Get Started button in Linked List card', async function ({ page }) {
  await this.homePage.verifyLinkedListCardButtonVisible();
});

Then('User should see Get Started button in Stack card', async function ({ page }) {
  await this.homePage.verifyStackCardButtonVisible();
});

Then('User should see Get Started button in Queue card', async function ({ page }) {
  await this.homePage.verifyQueueCardButtonVisible();
});

Then('User should see Get Started button in Tree card', async function ({ page }) {
  await this.homePage.verifyTreeCardButtonVisible();
});

Then('User should see Get Started button in Graph card', async function ({ page }) {
  await this.homePage.verifyGraphCardButtonVisible();
});

//  Non Functional - Card Buttons Enabled 

Then('Get Started button should be enabled in Data Structures Introduction card', async function ({ page }) {
  await this.homePage.verifyDsCardButtonEnabled();
});

Then('Get Started button should be enabled in Array card', async function ({ page }) {
  await this.homePage.verifyArrayCardButtonEnabled();
});

Then('Get Started button should be enabled in Linked List card', async function ({ page }) {
  await this.homePage.verifyLinkedListCardButtonEnabled();
});

Then('Get Started button should be enabled in Stack card', async function ({ page }) {
  await this.homePage.verifyStackCardButtonEnabled();
});

Then('Get Started button should be enabled in Queue card', async function ({ page }) {
  await this.homePage.verifyQueueCardButtonEnabled();
});

Then('Get Started button should be enabled in Tree card', async function ({ page }) {
  await this.homePage.verifyTreeCardButtonEnabled();
});

Then('Get Started button should be enabled in Graph card', async function ({ page }) {
  await this.homePage.verifyGraphCardButtonEnabled();
});

//  Functional - Unregistered - Click Card Buttons 

When('Unregistered user clicks Get Started button in Data Structures Introduction card', async function ({ page }) {
  await this.homePage.clickDsCardButton();
});

When('Unregistered user clicks Get Started button in Array card', async function ({ page }) {
  await this.homePage.clickArrayCardButton();
});

When('Unregistered user clicks Get Started button in Linked List card', async function ({ page }) {
  await this.homePage.clickLinkedListCardButton();
});

When('Unregistered user clicks Get Started button in Stack card', async function ({ page }) {
  await this.homePage.clickStackCardButton();
});

When('Unregistered user clicks Get Started button in Queue card', async function ({ page }) {
  await this.homePage.clickQueueCardButton();
});

When('Unregistered user clicks Get Started button in Tree card', async function ({ page }) {
  await this.homePage.clickTreeCardButton();
});

When('Unregistered user clicks Get Started button in Graph card', async function ({ page }) {
  await this.homePage.clickGraphCardButton();
});

//  Functional - Error Message ─

Then('User should see error message {string}', async function ({ page }, message) {
  await this.homePage.verifyErrorMessage(message);
});

//  Functional - Registered - Login and Click ─

When('Registered user clicks Get Started button in Data Structures Introduction card', async function ({ page }) {
  await this.homePage.loginAsRegisteredUser();
  await this.homePage.clickDsCardButton();
});

When('Registered user clicks Get Started button in Array card', async function ({ page }) {
  await this.homePage.loginAsRegisteredUser();
  await this.homePage.clickArrayCardButton();
});

When('Registered user clicks Get Started button in Linked List card', async function ({ page }) {
  await this.homePage.loginAsRegisteredUser();
  await this.homePage.clickLinkedListCardButton();
});

When('Registered user clicks Get Started button in Stack card', async function ({ page }) {
  await this.homePage.loginAsRegisteredUser();
  await this.homePage.clickStackCardButton();
});

When('Registered user clicks Get Started button in Queue card', async function ({ page }) {
  await this.homePage.loginAsRegisteredUser();
  await this.homePage.clickQueueCardButton();
});

When('Registered user clicks Get Started button in Tree card', async function ({ page }) {
  await this.homePage.loginAsRegisteredUser();
  await this.homePage.clickTreeCardButton();
});

When('Registered user clicks Get Started button in Graph card', async function ({ page }) {
  await this.homePage.loginAsRegisteredUser();
  await this.homePage.clickGraphCardButton();
});

//  Functional - Registered - Navigation Verification 

Then('User should land on Data Structures Introduction page', async function ({ page }) {
  await this.homePage.verifyDsIntroductionPage();
});

Then('User should land on Array page', async function ({ page }) {
  await this.homePage.verifyArrayPage();
});

Then('User should land on Linked List page', async function ({ page }) {
  await this.homePage.verifyLinkedListPage();
});

Then('User should land on Stack page', async function ({ page }) {
  await this.homePage.verifyStackPage();
});

Then('User should land on Queue page', async function ({ page }) {
  await this.homePage.verifyQueuePage();
});

Then('User should land on Tree page', async function ({ page }) {
  await this.homePage.verifyTreePage();
});

Then('User should land on Graph page', async function ({ page }) {
  await this.homePage.verifyGraphPage();
});