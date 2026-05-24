exports.CartPage=
class CartPage{
    constructor(page)
    {
        this.page=page;
        this.checkoutButton=()=>this.page.locator("#checkout");
        

    }
    async checkout()
    {
        await this.checkoutButton().click();
    }
}