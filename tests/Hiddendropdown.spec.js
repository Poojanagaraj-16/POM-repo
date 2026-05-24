const {test,expect}= require('@playwright/test')
test('Hiddendropdown' , async({page})=>{
await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
await page.getByPlaceholder('username').fill('Admin')
await page.getByPlaceholder('Password').fill('admin123')
await page.getByRole('button' , {type: 'submit'}).click()
await page.locator("//span[text()='PIM']").click();
await page.getByPlaceholder('Type for hints...').first().fill('Pooja B N')
await page.locator("(//input[@class='oxd-input oxd-input--active'])[2]").fill('123456');
await page.locator('text=-- Select --').first().click();
//await page.locator("/body[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[2]/form[1]/div[1]/div[1]/div[3]/div[1]/div[2]/div[1]/div[1]/div[1]").click()
//await page.waitForTimeout(3000)
 const options = page.locator("//div[@role='listbox']//span");
  await options.first().waitFor();
for(let option of options)
{
    const jobTitle=await option.textContent();
    console.log(jobTitle);
    is(jobTitle.includes('QA Engineer'))
    await option.click()
    break;

}



//(//div[contains(text(),'-- Select --')])[1]
////body[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[2]/form[1]/div[1]/div[1]/div[3]/div[1]/div[2]/div[1]/div[1]/div[1]








})







