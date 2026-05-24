exports.HomePage =
class HomePage {
    constructor(page) {
        this.page = page;
        this.addToCartButton = () => this.page.locator("#add-to-cart-sauce-labs-backpack");
        this.cartButton = () => this.page.locator(".shopping_cart_link");
    }

    async addToCart() {
        await this.addToCartButton().click();
    }
}




