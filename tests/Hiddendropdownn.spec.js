const { test, expect } = require('@playwright/test');

test('Hiddendropdown', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  await page.getByPlaceholder('username').fill('Admin');
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByRole('button', { type: 'submit' }).click();

  await page.locator("//span[text()='PIM']").click();

  await page.getByPlaceholder('Type for hints...').first().fill('Pooja B N');
  await page.locator("(//input[@class='oxd-input oxd-input--active'])[2]").fill('123456');

  // ✅ Click dropdown properly
  await page.locator('text=-- Select --').first().click();

  // ✅ Wait for dropdown options
  const options = page.locator("//div[@role='listbox']//span");
  await options.first().waitFor();

  // ✅ Loop and select value
  const count = await options.count();
  for (let i = 0; i < count; i++) {
    const text = await options.nth(i).textContent();
    console.log(text);

    if (text.includes('QA Engineer')) {
      await options.nth(i).click();
      break;
    }
  }
});