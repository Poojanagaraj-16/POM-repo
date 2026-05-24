import { test, expect } from '@playwright/test';
import { arrayBuffer } from 'node:stream/consumers';

test('test', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/')
    //select multiple options from multi select dropdown
    await page.selectOption('#colors',['Blue','Red','Yellow'])
    //Assertion
    //1)check number of options in dropdown
   //onst options=await page.locator('#colors option')
   //wait   expect(options).toHaveCount(7)
 
   //check  number of option using js array
   const options=await page.$$('#colors option')
   await expect(options.length).toBe(7)

   //check presence of value in the dropdown
   const constent=await page.locator('#colors').textContent()
   await expect(constent.includes('Black')).toBeFalsy;

    await page.waitForTimeout(5000)


})