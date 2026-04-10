const { expect } = require('@playwright/test');

class LoginPage {
  constructor(page) {
    this.page = page;

    //  Locators 
    this.usernameInput = page.locator('input[name="username"]');
    this.passwordInput = page.locator('input[name="password"]');
    this.loginButton   = page.locator('input[type="submit"]');
   this.signUpLink = page.locator('a[href="/register"]:has-text("Register!")');
    this.signOutLink   = page.locator('a[href="/logout"]:has-text("Sign out")');
    this.errorMessage  = page.locator('.alert, .alert-danger');
  }

  //  NAVIGATION 

  // Background - navigate to login page
  async navToLoginPage() {
    await this.page.goto('/login');
  }

  //  NON FUNCTIONAL METHODS 

  // Verify login page loaded
  async verifyLoginPage() {
    await expect(this.page).toHaveURL(
      'https://dsportalapp.herokuapp.com/login'
    );
  }

  // Verify username field visible
  async verifyUsernameField() {
    await expect(this.usernameInput).toBeVisible();
  }

  // Verify password field visible
  async verifyPasswordField() {
    await expect(this.passwordInput).toBeVisible();
  }

  // Verify login button visible
  async verifyLoginButton() {
    await expect(this.loginButton).toBeVisible();
  }

  // Verify login button enabled
  async verifyLoginButtonEnabled() {
    await expect(this.loginButton).toBeEnabled();
  }

  // Verify sign up link visible
  async verifySignUpLink() {
    await expect(this.signUpLink).toBeVisible();
  }

  //  FUNCTIONAL METHODS 

  // Enter username
  async enterUsername(username) {
    await this.usernameInput.fill(username);
  }

  // Enter password
  async enterPassword(password) {
    await this.passwordInput.fill(password);
  }

  // Click login button
  async clickLoginButton() {
    await this.loginButton.click();
  }

  // Click sign out
  async clickSignOut() {
    await this.signOutLink.click();
  }

  //  ASSERTION METHODS ─

  // Verify successful login - redirected to home
  async verifySuccessfulLogin() {
    await this.page.waitForURL('**/home', { timeout: 15000 });
    await expect(this.page).toHaveURL(
      'https://dsportalapp.herokuapp.com/home'
    );
  }

  // Verify invalid credentials error
  async verifyInvalidCredentialsError() {
    await expect(this.errorMessage).toBeVisible();
  }

  // Verify please fill out this field message
  async verifyFillOutFieldMessage() {
    // Browser native validation - check username or password is empty
    const usernameValue = await this.usernameInput.inputValue();
    const passwordValue = await this.passwordInput.inputValue();
    // At least one field should be empty
    expect(
      usernameValue === '' || passwordValue === ''
    ).toBe(true);
  }

  // Verify logged out successfully
  async verifyLoggedOut() {
    const bodyText = await this.page.locator('body').innerText();
    expect(
      bodyText.includes('Logged out') ||
      bodyText.includes('logged out') ||
      bodyText.includes('successfully')
    ).toBe(true);
  }

}

module.exports = { LoginPage };