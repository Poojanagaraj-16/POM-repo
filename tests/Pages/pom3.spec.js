const { test, expect } = require('@playwright/test');
const { LoginPage } = require('./login');
const { HomePage } = require('./Home');
const { CartPage } = require('./cart');
const { Page3 } = require('./page3');

test.describe('Page3 - Checkout with Session Storage', () => {
    test('complete checkout with session data', async ({ page }) => {
        const login = new LoginPage(page);
        await login.gotourl();
        await login.login('standard_user', 'secret_sauce');
        await page.waitForURL(/.*inventory.html/);

        const page3 = new Page3(page);
        await page3.setSessionData('checkout_user', 'standard_user');
        const storedUser = await page3.getSessionData('checkout_user');
        expect(storedUser).toBe('standard_user');

        const home = new HomePage(page);
        await home.addToCart();
        await page.click('.shopping_cart_link');

        const cart = new CartPage(page);
        await cart.checkout();

        await page3.fillCheckoutInfo('John', 'Doe', '12345');
        await page3.finishCheckout();
        await expect(page3.completeHeader()).toHaveText('Thank you for your order!');

        const finalUser = await page3.getSessionData('checkout_user');
        expect(finalUser).toBe('standard_user');
    });

    test('store and retrieve custom data via session storage', async ({ page }) => {
        const login = new LoginPage(page);
        await login.gotourl();
        await login.login('standard_user', 'secret_sauce');
        await page.waitForURL(/.*inventory.html/);

        const page3 = new Page3(page);
        await page3.setSessionData('test_key', 'session_value_123');
        const value = await page3.getSessionData('test_key');
        expect(value).toBe('session_value_123');

        await page3.setSessionData('test_key', 'updated_value');
        const updated = await page3.getSessionData('test_key');
        expect(updated).toBe('updated_value');
    });

    test('session storage persists across checkout flow', async ({ page }) => {
        const login = new LoginPage(page);
        await login.gotourl();
        await login.login('standard_user', 'secret_sauce');
        await page.waitForURL(/.*inventory.html/);

        const page3 = new Page3(page);
        await page3.setSessionData('cart_session', 'active');

        const home = new HomePage(page);
        await home.addToCart();
        await page.click('.shopping_cart_link');

        const cart = new CartPage(page);
        await cart.checkout();

        await page3.fillCheckoutInfo('Jane', 'Smith', '67890');
        await page3.finishCheckout();
        await expect(page3.completeHeader()).toBeVisible();

        const cartSession = await page3.getSessionData('cart_session');
        expect(cartSession).toBe('active');
    });

    test('remove session storage item', async ({ page }) => {
        const login = new LoginPage(page);
        await login.gotourl();
        await login.login('standard_user', 'secret_sauce');
        await page.waitForURL(/.*inventory.html/);

        const page3 = new Page3(page);
        await page3.setSessionData('temp_key', 'temp_value');
        await page3.page.evaluate(() => sessionStorage.removeItem('temp_key'));
        const value = await page3.getSessionData('temp_key');
        expect(value).toBeNull();
    });
});
