const{test,expect} =require('@playwright/test')
//test('Builtinlocators ', async ({ page }) => {
  //await page.goto('https://doubleclicktest.vercel.app/')
  const dclick=await page.locator('//img[@alt="Check Icon"]')
    await page.waitForTimeout(5000)
    await dclick.dblclick()
})



    

test('Builtinlocators', async ({ page }) => {
await page.goto('https://doubleclicktest.vercel.app/');
const dclick = page.locator('//img[@alt="Check Icon"]');
await dclick.dblclick();
})






