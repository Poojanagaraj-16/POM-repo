exports.Page3 =
    class Page3 {
        constructor(page) {
            this.page = page;
            this.firstNameInput = () => this.page.locator("#first-name");
            this.lastNameInput = () => this.page.locator("#last-name");
            this.zipCodeInput = () => this.page.locator("#postal-code");
            this.continueButton = () => this.page.locator("#continue");
            this.finishButton = () => this.page.locator("#finish");
            this.backHomeButton = () => this.page.locator("#back-to-products");
            this.completeHeader = () => this.page.locator(".complete-header");
            this.cartItem = () => this.page.locator(".cart_item");
        }

        async gotoCheckout() {
            await this.page.goto('https://www.saucedemo.com/checkout-step-one.html');
        }

        async fillCheckoutInfo(firstName, lastName, zipCode) {
            await this.firstNameInput().fill(firstName);
            await this.lastNameInput().fill(lastName);
            await this.zipCodeInput().fill(zipCode);
            await this.continueButton().click();
        }

        async finishCheckout() {
            await this.finishButton().click();
        }

        async setSessionData(key, value) {
            await this.page.evaluate(([k, v]) => {
                sessionStorage.setItem(k, v);
            }, [key, value]);
        }

        async getSessionData(key) {
            return await this.page.evaluate((k) => {
                return sessionStorage.getItem(k);
            }, key);
        }

    };
