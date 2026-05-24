
//By using x path
const{test,expect} =require('@playwright/test')
test('Builtinlocators ', async ({ page }) => {
  await page.goto('https://demo.guru99.com/test/simple_context_menu.html');
  await page.locator('//button[text()="Double-Click Me To See Alert"]').dblclick();
});



