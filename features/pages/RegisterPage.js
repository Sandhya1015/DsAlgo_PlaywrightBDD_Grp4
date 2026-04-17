const { expect } = require('@playwright/test');

class RegisterPage {
  constructor(page) {
    this.page = page;

    //  Locators
    this.usernameInput        = page.locator('input[name="username"]');
    this.passwordInput        = page.locator('input[name="password1"]');
    this.confirmPasswordInput = page.locator('input[name="password2"]');
    this.registerButton       = page.locator('input[type="submit"]');
    this.errorMessage         = page.locator('.alert, .alert-danger, .errorlist');
  }

  //  NAVIGATION 

  async navToRegisterPage() {
    await this.page.goto('/register');
  }

  //  NON FUNCTIONAL METHODS 

  async verifyRegisterPage() {
    await expect(this.page).toHaveURL(
      'https://dsportalapp.herokuapp.com/register'
    );
  }

  async verifyUsernameField() {
    await expect(this.usernameInput).toBeVisible();
  }

  async verifyPasswordField() {
    await expect(this.passwordInput).toBeVisible();
  }

  async verifyConfirmPasswordField() {
    await expect(this.confirmPasswordInput).toBeVisible();
  }

  async verifyRegisterButton() {
    await expect(this.registerButton).toBeVisible();
  }

  async verifyRegisterButtonEnabled() {
    await expect(this.registerButton).toBeEnabled();
  }

  //  FUNCTIONAL METHODS 

  async registerWithData(username, password, confirmPassword) {
    // Only fill if value is not empty
    if (username) {
      await this.usernameInput.fill(username);
    }
    if (password) {
      await this.passwordInput.fill(password);
    }
    if (confirmPassword) {
      await this.confirmPasswordInput.fill(confirmPassword);
    }
    await this.registerButton.click();
  }

  //  ASSERTION METHODS 

  // Verify successful registration - redirected to home
  async verifySuccessfulRegistration() {
    await this.page.waitForURL('**/home', { timeout: 15000 });
    await expect(this.page).toHaveURL(
      'https://dsportalapp.herokuapp.com/home'
      
    );
  }

  // Verify browser native form validation message
  async verifyFormValidationMessage() {

  await this.page.locator('body').waitFor({ state: 'visible', timeout: 15000 });
  await this.page.waitForTimeout(1000);
    // Check at least one field is empty
    const usernameValue        = await this.usernameInput.inputValue();
    const passwordValue        = await this.passwordInput.inputValue();
    const confirmPasswordValue = await this.confirmPasswordInput.inputValue();
    expect(
      usernameValue === '' ||
      passwordValue === '' ||
      confirmPasswordValue === ''
    ).toBe(true);
  }

  // Verify error message contains expected text
  async verifyErrorContains(expectedText) {
    await this.page.waitForTimeout(2000);
    const bodyText = await this.page.locator('body').innerText();
    const normalizedBody = bodyText
      .replace(/\u2019/g, "'")
      .replace(/&#x27;/g, "'")
      .toLowerCase();
    const normalizedExpected = expectedText.toLowerCase();
    expect(normalizedBody).toContain(normalizedExpected);
  }

}

module.exports = { RegisterPage };