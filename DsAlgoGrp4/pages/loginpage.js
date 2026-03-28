class loginpage {
    constructor(page) {
        this.page = page;
        this.signinLink =  'a[href="/login"]';
        this.usernameInput = '#id_username';
        this.passwordInput = '#id_password';
        this.loginbutton = 'input[type="submit"]';
        this.hometext = 'You are logged in';

    }
    async launchapp(){
        await this.page.goto('https://dsportalapp.herokuapp.com/');
    }
    async clickSignIn() {
        await this.page.click(this.signInLink);
   }
      async enterCredentials(username, password) {
        await this.page.fill(this.usernameInput, username);
        await this.page.fill(this.passwordInput, password);
    }

    async clickLogin() {
        await this.page.click(this.loginButton);
    }

    async verifyLoginSuccess() {
        await this.page.waitForSelector(this.homeText);
    }
}

module.exports = LoginPage;