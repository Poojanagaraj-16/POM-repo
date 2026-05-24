const { test, expect } = require('@playwright/test')
test('Launch application',async({page}) => {
await page.goto('https://parabank.parasoft.com/parabank/index.htm;jsessionid=D0DC9EBA493BF6A4B5036A8294B70863');
await expect(page).toHaveTitle('ParaBank | Welcome | Online Banking')
})
