const {test,expect}= require('@playwright/test')
test('LocatemultipleElement' , async({page})=>{
    await page.goto("https://www.demoblaze.com/index.html")
    const links=await page.$$('a');//$$ reprents multiple webelement
    for(const link of links)
    {
        const linktext=await link.textContent();
        console.log(linktext);
    }


})
