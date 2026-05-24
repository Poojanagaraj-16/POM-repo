import { test, expect } from '@playwright/test';
import LoginPage from '../pages/LoginPage.js';
import HomePage from '../pages/HomePage.js';
import { USERS, URLS } from '../fixtures/testData.js';
import { takeScreenshot } from '../utils/helper.js';

test.describe('Homepage (Inventory) Tests', () => {
  let loginPage;
  let homePage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    homePage = new HomePage(page);
    await loginPage.goto();
    await loginPage.login(USERS.standard.username, USERS.standard.password);
    await expect(page).toHaveURL(URLS.inventory);
  });

  test.afterEach(async ({ page }) => {
    await takeScreenshot(page, test.info().title.replace(/\s+/g, '-'));
  });

  test('Should display inventory items', async () => {
    expect(await homePage.isLoaded()).toBeTruthy();
    const itemCount = await homePage.getItemCount();
    expect(itemCount).toBeGreaterThan(0);
  });

  test('Should add item to cart and verify badge count', async () => {
    await homePage.addItemToCart(0);
    const badge = await homePage.getCartBadgeCount();
    expect(badge).toBe('1');
  });

  test('Should add multiple items to cart', async () => {
    await homePage.addItemToCart(0);
    await homePage.addItemToCart(1);
    const badge = await homePage.getCartBadgeCount();
    expect(badge).toBe('2');
  });

  test('Should navigate to cart page', async ({ page }) => {
    await homePage.addItemToCart(0);
    await homePage.goToCart();
    await expect(page).toHaveURL(URLS.cart);
  });

  test('Should display correct page title', async () => {
    const title = await homePage.getTitle();
    expect(title).toBe('Products');
  });

  test('Should logout successfully', async ({ page }) => {
    await homePage.logout();
    await expect(page).toHaveURL(URLS.base);
  });
});
