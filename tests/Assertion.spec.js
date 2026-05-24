const{test,expect}=require('@playwright/test')
const { isBoxedPrimitive } = require('node:util/types')
test('Assertion',async({page})=>{
    //open app url
    await page.goto('https://demo.nopcommerce.com/register')

    //expect(page),toHaveURL
    await expect(page).toHaveURL('https://demo.nopcommerce.com/register')
    
    //expect(page).tOHaveTitle()
    await expect(page).toHaveTitle('nopCommerce demo store. Register')

    //expect(locator).toBeVisiable()
    const logoElement=await page.locator('.header-logo')
    await expect(logoElement).toBeVisible()

    //expect(locator),toBeEnabled()
     
      const enabled=await page.locator('#small-searchterms')
      await expect(enabled).toBeEnabled()  

      //radio button
      const malecheckbox=await page.locator('#gender-male')
      await malecheckbox.click()
      await expect(malecheckbox).toBeChecked()

      //check box
      const newselectorcheckbox=await page.locator('#NewsLetterSubscriptions_0__IsActive')
      await expect(newselectorcheckbox).toBeChecked()


      //expect(locator).toHaveAttribute() example type
     const registebutton=await page.locator('#register-button')
     await expect(registebutton).toHaveAttribute('type','submit')

      //expect(locator).toHaveText()element matches text or not

      await expect(await page.locator('.page-title h1')).toHaveText('Register')

      //expect(locator).toContainText() it will checks the partial valu

      await expect(await page.locator('.page-title h1')).toContainText('Reg')


      //expect(locator)toHaveValue(value)
      const fristname=await page.locator('#Email')
      await fristname.fill('bnpooja1234@gmail.com')
      await expect(fristname).toHaveValue('bnpooja1234@gmail.com')

      //Expect(locator).toHaveCount()
      
      







})