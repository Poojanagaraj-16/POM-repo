const{test,expect} =require('@playwright/test')
test('Builtinlocators ', async ({ page }) => {
await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
//const logo=await page.getByAltText('company-branding')
//await expect(logo).toBeVisiable();
await page.getByPlaceholder('username').fill("Admin")
await page.getByPlaceholder('Password').fill('admin123')
await page.getByRole('button' , {type: 'submit'}).click()
const name = await page.locator('//p[@class="oxd-userdropdown-name"]').textContent();

    // Now use the resolved string
await expect(await page.getByText(name)).toBeVisible();




})