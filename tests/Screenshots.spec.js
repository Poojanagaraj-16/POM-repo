const {test,expect}= require('@playwright/test')

//test('screenshots' , async({page})=>{
  //  await page.goto('https://www.flipkart.com/')
    //await page.screenshot({ page:'tests\screenshots.png/' + Date.now()+ 'Flipcard home page.png'})

//test('screenshots' , async({page})=> {
  //  await page.goto('https://www.flipkart.com/')
    //await page.screenshot({ page:'tests\screenshots.png/' + Date.now()+ 'Flipcard home page.png',fullPage:true})
test('screenshots',async({page})=>{
    await page.goto('https://www.flipkart.com/')
    await page.locator('img[alt="Image"]').first().click()
    
})
