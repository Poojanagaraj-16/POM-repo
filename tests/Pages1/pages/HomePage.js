export default class HomePage {
  constructor(page) {
    this.page = page;
    this.inventoryContainer = '[data-test="inventory-container"]';
    this.inventoryItems = '[data-test="inventory-item"]';
    this.addToCartButtons = '[data-test^="add-to-cart"]';
    this.cartBadge = '[data-test="shopping-cart-badge"]';
    this.cartLink = '[data-test="shopping-cart-link"]';
    this.sortDropdown = '[data-test="product-sort-container"]';
    this.burgerMenuButton = '#react-burger-menu-btn';
    this.logoutLink = '[data-test="logout-sidebar-link"]';
    this.title = '[data-test="title"]';
  }

  async isLoaded() {
    return await this.page.isVisible(this.inventoryContainer);
  }

  async getItemCount() {
    const items = await this.page.locator(this.inventoryItems);
    return await items.count();
  }

  async addItemToCart(index = 0) {
    const buttons = await this.page.locator(this.addToCartButtons);
    await buttons.nth(index).click();
  }

  async getCartBadgeCount() {
    if (await this.page.isVisible(this.cartBadge)) {
      return await this.page.textContent(this.cartBadge);
    }
    return '0';
  }

  async goToCart() {
    await this.page.click(this.cartLink);
  }

  async logout() {
    await this.page.click(this.burgerMenuButton);
    await this.page.click(this.logoutLink);
  }

  async getTitle() {
    return await this.page.textContent(this.title);
  }
}
