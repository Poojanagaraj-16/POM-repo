const{test,expect}=require('@playwright/test')
test("softassertin", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");


  //text box
  const firstName = page.locator('#name');   // ← Store the Locator

  await firstName.fill('pooja');             // ← Perform the action

  await expect(firstName).toBeVisible();
  
  await expect(firstName).toBeEnabled()
  
  await expect(firstName).toBeDisabled()// ← Now it works

  //Radio button

  const radiobutton = page.locator('#male');

await radiobutton.click();            // ✅ action
await expect(radiobutton).toBeChecked(); // ✅ assertion




});

