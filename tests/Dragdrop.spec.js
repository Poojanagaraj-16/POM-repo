const {test,expect}= require('@playwright/test')
test('AutosuggestonDropDown' , async({page})=>{
    await page.goto('https://practice.expandtesting.com/drag-and-drop')
    await page.locator('#column-a').dragTo (page.locator('#column-b'))
    
})
