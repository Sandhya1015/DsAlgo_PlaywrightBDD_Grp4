const { expect } = require('@playwright/test');
class LoginPage {
    constructor(page) {
        this.page = page;
        this.signinLink = 'a[href="/login"]';
        this.usernameInput = '#id_username';
        this.passwordInput = '#id_password';
        this.loginButton = 'input[type="submit"]';
        this.successmessage = 'text=You are logged in';
        this.errormessage = 'text=Invalid Username and Password';
        this.requirefieldmessage = 'text=please fill out this field';
    }

    async launchapp() {
        await this.page.goto('/');
        await this.page.getByRole('button', { name: 'Get Started' }).click();
    }

    async clickSignIn() {
        await this.page.click(this.signinLink);
    }

    async enterCredentials(username, password) {
        await this.page.fill(this.usernameInput, username);
        await this.page.fill(this.passwordInput, password);
    }

    async clickLogin() {
        await this.page.click(this.loginButton);
    }

    async verifyLoginSuccess() {
        await this.page.waitForSelector(this.successmessage);
    }
     async verifyLoginError() {
        await this.page.waitForSelector(this.errormessage);
    }
   

     async verifyEmptyFieldError() {
     const userMsg = await this.page.locator(this.usernameInput).evaluate(el => el.validationMessage);

     const passMsg = await this.page.locator(this.passwordInput).evaluate(el => el.validationMessage);

     expect(userMsg).toContain('fill');
     expect(passMsg).toContain('fill');
    }

    
}

module.exports = LoginPage;