exports.LoginPage =
    class LoginPage {
        constructor(page) {
            this.page = page;
            this.usernameInput = () => this.page.locator("#user-name");
            this.passwordInput = () => this.page.locator("#password");
            this.loginButton = () => this.page.locator("#login-button");
        }

        async gotourl() {
            await this.page.goto('https://www.saucedemo.com/?utm_source=chatgpt.com')
        }

        async login(username, password) {
            await this.usernameInput().fill(username);
            await this.passwordInput().fill(password);
            await this.loginButton().click();
        }
    };