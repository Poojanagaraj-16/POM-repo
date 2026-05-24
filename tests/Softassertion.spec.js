const{test,expect}=require('@playwright/test')
const { AssertionError } = require('node:assert/strict')
test("softassertin",async({page})=>{

   
   //Hard assertion
   // await page.goto("https://www.demoblaze.com/index.html")
    //await expect(page).toHaveTitle('STORE')
    //await expect(page).toHaveURL("https://www.demoblaze.com/index.html")
    //await expect(page.locator('.navbar-brand')).toBeVisible()

    //Soft Assertion

    await page.goto("https://www.demoblaze.com/index.html")
    await expect(page).toHaveTitle('STORE1234')
    await expect(page).toHaveURL("https://www.demoblaze.com/index.html")
    await expect.soft(page.locator('.navbar-brand')).toBeVisible()
    
    
    
})

