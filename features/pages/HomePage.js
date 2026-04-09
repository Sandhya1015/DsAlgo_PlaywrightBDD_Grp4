const { expect } = require('@playwright/test');

class HomePage {
  constructor(page) {
    this.page = page;

    //  Navigation Locators 
    this.dataStructuresDropdown = page.locator('a.nav-link.dropdown-toggle');
    this.arraysLink             = page.locator('a.dropdown-item[href="/array"]');
    this.linkedListLink         = page.locator('a.dropdown-item[href="/linked-list"]');
    this.stackLink              = page.locator('a.dropdown-item[href="/stack"]');
    this.queueLink              = page.locator('a.dropdown-item[href="/queue"]');
    this.treeLink               = page.locator('a.dropdown-item[href="/tree"]');
    this.graphLink              = page.locator('a.dropdown-item[href="/graph"]');
    this.dropdownItems          = page.locator('a.dropdown-item');
    this.registerLink           = page.locator('a[href="/register"]:has-text("Register")');
    this.signInLink             = page.locator('a[href="/login"]:has-text("Sign in")');

    //  Card Title Locators 
    this.dsCardTitle         = page.locator('h5.card-title:has-text("Data Structures-Introduction")');
    this.arrayCardTitle      = page.locator('h5.card-title:has-text("Array")');
    this.linkedListCardTitle = page.locator('h5.card-title:has-text("Linked List")');
    this.stackCardTitle      = page.locator('h5.card-title:has-text("Stack")');
    this.queueCardTitle      = page.locator('h5.card-title:has-text("Queue")');
    this.treeCardTitle       = page.locator('h5.card-title:has-text("Tree")');
    this.graphCardTitle      = page.locator('h5.card-title:has-text("Graph")');

    //  Card Button Locators ─
    this.dsCardButton         = page.locator('a[href="data-structures-introduction"]:has-text("Get Started")');
    this.arrayCardButton      = page.locator('a[href="array"]:has-text("Get Started")');
    this.linkedListCardButton = page.locator('a[href="linked-list"]:has-text("Get Started")');
    this.stackCardButton      = page.locator('a[href="stack"]:has-text("Get Started")');
    this.queueCardButton      = page.locator('a[href="queue"]:has-text("Get Started")');
    this.treeCardButton       = page.locator('a[href="tree"]:has-text("Get Started")');
    this.graphCardButton      = page.locator('a[href="graph"]:has-text("Get Started")');

    //  Error Message Locator 
    this.errorMessage = page.locator('.alert, .alert-danger');
  }

  //  NAVIGATION METHODS ─

  async navToHomePage() {
    await this.page.goto('/home');
  }

  async verifyHomePage() {
    await expect(this.page).toHaveURL(
      'https://dsportalapp.herokuapp.com/home'
    );
  }

  //  LOGIN AS REGISTERED USER ─

  async loginAsRegisteredUser() {
    await this.page.goto('/login');
    await this.page.locator('input[name="username"]').fill('bunny@189.com');
    await this.page.locator('input[name="password"]').fill('Password@777');
    await this.page.locator('input[type="submit"]').click();
    await this.page.waitForURL('**/home', { timeout: 15000 });
    console.log('Logged in as registered user');
  }

  //  DROPDOWN METHODS ─

  async verifyDropdownVisible() {
    await expect(this.dataStructuresDropdown).toBeVisible();
  }

  async verifyDropdownCount() {
    const count = await this.dropdownItems.count();
    expect(count).toBe(6);
  }

  // Click dropdown first then verify each option
  async verifyArraysOption() {
    await this.dataStructuresDropdown.click();
    await expect(this.arraysLink).toBeVisible();
  }

  async verifyLinkedListOption() {
    await expect(this.linkedListLink).toBeVisible();
  }

  async verifyStackOption() {
    await expect(this.stackLink).toBeVisible();
  }

  async verifyQueueOption() {
    await expect(this.queueLink).toBeVisible();
  }

  async verifyTreeOption() {
    await expect(this.treeLink).toBeVisible();
  }

  async verifyGraphOption() {
    await expect(this.graphLink).toBeVisible();
  }

  //  NAV LINK METHODS ─

  async verifyRegisterLink() {
    await expect(this.registerLink).toBeVisible();
  }

  async verifySignInLink() {
    await expect(this.signInLink).toBeVisible();
  }

  //  CARD TITLE METHODS ─

  async verifyDsCardTitle() {
    await expect(this.dsCardTitle).toBeVisible();
  }

  async verifyArrayCardTitle() {
    await expect(this.arrayCardTitle).toBeVisible();
  }

  async verifyLinkedListCardTitle() {
    await expect(this.linkedListCardTitle).toBeVisible();
  }

  async verifyStackCardTitle() {
    await expect(this.stackCardTitle).toBeVisible();
  }

  async verifyQueueCardTitle() {
    await expect(this.queueCardTitle).toBeVisible();
  }

  async verifyTreeCardTitle() {
    await expect(this.treeCardTitle).toBeVisible();
  }

  async verifyGraphCardTitle() {
    await expect(this.graphCardTitle).toBeVisible();
  }

  //  CARD BUTTON VISIBLE METHODS 

  async verifyDsCardButtonVisible() {
    await expect(this.dsCardButton).toBeVisible();
  }

  async verifyArrayCardButtonVisible() {
    await expect(this.arrayCardButton).toBeVisible();
  }

  async verifyLinkedListCardButtonVisible() {
    await expect(this.linkedListCardButton).toBeVisible();
  }

  async verifyStackCardButtonVisible() {
    await expect(this.stackCardButton).toBeVisible();
  }

  async verifyQueueCardButtonVisible() {
    await expect(this.queueCardButton).toBeVisible();
  }

  async verifyTreeCardButtonVisible() {
    await expect(this.treeCardButton).toBeVisible();
  }

  async verifyGraphCardButtonVisible() {
    await expect(this.graphCardButton).toBeVisible();
  }

  //  CARD BUTTON ENABLED METHODS 

  async verifyDsCardButtonEnabled() {
    await expect(this.dsCardButton).toBeEnabled();
  }

  async verifyArrayCardButtonEnabled() {
    await expect(this.arrayCardButton).toBeEnabled();
  }

  async verifyLinkedListCardButtonEnabled() {
    await expect(this.linkedListCardButton).toBeEnabled();
  }

  async verifyStackCardButtonEnabled() {
    await expect(this.stackCardButton).toBeEnabled();
  }

  async verifyQueueCardButtonEnabled() {
    await expect(this.queueCardButton).toBeEnabled();
  }

  async verifyTreeCardButtonEnabled() {
    await expect(this.treeCardButton).toBeEnabled();
  }

  async verifyGraphCardButtonEnabled() {
    await expect(this.graphCardButton).toBeEnabled();
  }

  //  CARD BUTTON CLICK METHODS 

  async clickDsCardButton() {
    await this.dsCardButton.click();
  }

  async clickArrayCardButton() {
    await this.arrayCardButton.click();
  }

  async clickLinkedListCardButton() {
    await this.linkedListCardButton.click();
  }

  async clickStackCardButton() {
    await this.stackCardButton.click();
  }

  async clickQueueCardButton() {
    await this.queueCardButton.click();
  }

  async clickTreeCardButton() {
    await this.treeCardButton.click();
  }

  async clickGraphCardButton() {
    await this.graphCardButton.click();
  }

  //  ERROR MESSAGE METHOD ─

  async verifyErrorMessage(message) {
    const error = this.page.locator('text=' + message);
    await expect(error).toBeVisible();
  }

  //  PAGE NAVIGATION VERIFY METHODS 

  async verifyDsIntroductionPage() {
    await expect(this.page).toHaveURL(/data-structures-introduction/);
  }

  async verifyArrayPage() {
    await expect(this.page).toHaveURL(/array/);
  }

  async verifyLinkedListPage() {
    await expect(this.page).toHaveURL(/linked-list/);
  }

  async verifyStackPage() {
    await expect(this.page).toHaveURL(/stack/);
  }

  async verifyQueuePage() {
    await expect(this.page).toHaveURL(/queue/);
  }

  async verifyTreePage() {
    await expect(this.page).toHaveURL(/tree/);
  }

  async verifyGraphPage() {
    await expect(this.page).toHaveURL(/graph/);
  }

}

module.exports = { HomePage };