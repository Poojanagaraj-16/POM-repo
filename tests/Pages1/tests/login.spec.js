import { test, expect } from '@playwright/test';
import LoginPage from '../pages/LoginPage.js';
import HomePage from '../pages/HomePage.js';
import { USERS, INVALID_USER, ERROR_MESSAGES, URLS } from '../fixtures/testData.js';
import { takeScreenshot } from '../utils/helper.js';

test.describe('Login Page Tests', () => {
  let loginPage;
  let homePage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    homePage = new HomePage(page);
    await loginPage.goto();
  });

  test.afterEach(async ({ page }) => {
    await takeScreenshot(page, test.info().title.replace(/\s+/g, '-'));
  });

  test('Should login with valid standard user', async ({ page }) => {
    await loginPage.login(USERS.standard.username, USERS.standard.password);
    await expect(page).toHaveURL(URLS.inventory);
    expect(await homePage.isLoaded()).toBeTruthy();
  });

  test('Should show error for locked out user', async () => {
    await loginPage.login(USERS.lockedOut.username, USERS.lockedOut.password);
    expect(await loginPage.isErrorMessageVisible()).toBeTruthy();
    expect(await loginPage.getErrorMessage()).toBe(ERROR_MESSAGES.lockedOut);
  });

  test('Should show error for invalid credentials', async () => {
    await loginPage.login(INVALID_USER.username, INVALID_USER.password);
    expect(await loginPage.isErrorMessageVisible()).toBeTruthy();
    expect(await loginPage.getErrorMessage()).toBe(ERROR_MESSAGES.invalid);
  });

  test('Should show error when username is empty', async () => {
    await loginPage.login('', USERS.standard.password);
    expect(await loginPage.isErrorMessageVisible()).toBeTruthy();
    expect(await loginPage.getErrorMessage()).toBe(ERROR_MESSAGES.requiredUsername);
  });

  test('Should show error when password is empty', async () => {
    await loginPage.login(USERS.standard.username, '');
    expect(await loginPage.isErrorMessageVisible()).toBeTruthy();
    expect(await loginPage.getErrorMessage()).toBe(ERROR_MESSAGES.requiredPassword);
  });

  test('Should login with all valid user types', async ({ page }) => {
    const validUsers = [USERS.standard, USERS.problem, USERS.performanceGlitch, USERS.error, USERS.visual];
    for (const user of validUsers) {
      await loginPage.goto();
      await loginPage.login(user.username, user.password);
      await expect(page).toHaveURL(URLS.inventory);
      expect(await homePage.isLoaded()).toBeTruthy();
    }
  });
});
