const {test,expect}= require('@playwright/test')
test('DropDown' , async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/")
//await page.locator('#country').selectOption({label:'India'})// By using label 
//await page.locator('#country').selectOption('India')//By using visiable text
//await page.locator('#county').selectOption({value:'uk'})//By using value

//await page.locator('#country').selectOption({index:2})//By using index
//await selectOption("#country",'India')

await page.waitForTimeout(5000)
//Assertion
//1 number of option in dropdown
const options=await page.locator('#country option')
await expect(options).toHaveCount(10)



})
