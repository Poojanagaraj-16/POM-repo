const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../Pages/login');
const { HomePage } = require('../Pages/Home');
const { CartPage } = require('../Pages/cart');
//home page
test('add to cart', async ({ page }) => {
    const login = new LoginPage(page)
    await login.gotourl()
    await login.login('standard_user', 'secret_sauce')
    const home = new HomePage(page)
    await home.addToCart()

})

// Login validation tests
test.describe('Login Validation', () => {
    test('valid login - standard_user', async ({ page }) => {
        const login = new LoginPage(page)
        await login.gotourl()
        await login.login('standard_user', 'secret_sauce')
        await expect(page).toHaveURL(/.*inventory.html/)
    })

    test('valid login - problem_user', async ({ page }) => {
        const login = new LoginPage(page)
        await login.gotourl()
        await login.login('problem_user', 'secret_sauce')
        await expect(page).toHaveURL(/.*inventory.html/)
    })

    test('invalid username', async ({ page }) => {
        const login = new LoginPage(page)
        await login.gotourl()
        await login.login('invalid_user', 'secret_sauce')
        await expect(page.locator('[data-test="error"]')).toBeVisible()
        await expect(page.locator('[data-test="error"]')).toContainText('Epic sadface: Username and password do not match any user in this service')
    })

    test('empty username and password', async ({ page }) => {
        const login = new LoginPage(page)
        await login.gotourl()
        await login.login('', '')
        await expect(page.locator('[data-test="error"]')).toBeVisible()
        await expect(page.locator('[data-test="error"]')).toContainText('Epic sadface: Username is required')
    })

    test('empty password', async ({ page }) => {
        const login = new LoginPage(page)
        await login.gotourl()
        await login.login('standard_user', '')
        await expect(page.locator('[data-test="error"]')).toBeVisible()
        await expect(page.locator('[data-test="error"]')).toContainText('Epic sadface: Password is required')
    })

    test('locked_user login', async ({ page }) => {
        const login = new LoginPage(page)
        await login.gotourl()
        await login.login('locked_out_user', 'secret_sauce')
        await expect(page.locator('[data-test="error"]')).toBeVisible()
        await expect(page.locator('[data-test="error"]')).toContainText('Epic sadface: Sorry, this user has been locked out')
    })

    test('valid username with wrong password', async ({ page }) => {
        const login = new LoginPage(page)
        await login.gotourl()
        await login.login('standard_user', 'wrong_password')
        await expect(page.locator('[data-test="error"]')).toBeVisible()
        await expect(page.locator('[data-test="error"]')).toContainText('Epic sadface: Username and password do not match any user in this service')
    })

    test('performance_glitch_user login', async ({ page }) => {
        const login = new LoginPage(page)
        await login.gotourl()
        await login.login('performance_glitch_user', 'secret_sauce')
        await expect(page).toHaveURL(/.*inventory.html/)
    })

    test('error_user login', async ({ page }) => {
        const login = new LoginPage(page)
        await login.gotourl()
        await login.login('error_user', 'secret_sauce')
        await expect(page).toHaveURL(/.*inventory.html/)
    })

    test('visual_user login', async ({ page }) => {
        const login = new LoginPage(page)
        await login.gotourl()
        await login.login('visual_user', 'secret_sauce')
        await expect(page).toHaveURL(/.*inventory.html/)
    })
})

//cart page
test('checkout', async ({ page }) => {
    const login = new LoginPage(page)
    await login.gotourl()
    await login.login('standard_user', 'secret_sauce')
    const home = new HomePage(page)
    await home.addToCart()
    const cart = new CartPage(page)
    await cart.checkout()
})