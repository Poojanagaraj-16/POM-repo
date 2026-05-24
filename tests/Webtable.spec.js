const{test,expect}=require('@playwright/test')
test('Webtable' , async({page})=>{
await page.goto('https://testautomationpractice.blogspot.com/')
const table=await page.locator('#productTable')
//total number of columns
const columns=await page.locator('thead tr th')
console.log('Number of columns:' ,await  columns.count())
expect(await columns.count()).toBe(4)
//total number of rows
const rows=await page.locator('tbody tr')
console.log('Number of rows:',await rows.count())
expect(await rows.count()).toBe(5)

//select check box for product 4

const matchrow = rows.filter({
  has: page.locator('td'),
  hasText: 'Product 4'
});

await matchrow.locator('input').check();
await page.waitForTimeout(3000)



})
