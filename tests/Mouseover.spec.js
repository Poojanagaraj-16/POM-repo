const {test,expect}= require('@playwright/test')
test('Mouse over' , async({page})=>{
    await page.goto('https://www.amazon.com/')
    const Login=await page.locator('#nav-link-accountList')
    await Login.hover()


})
