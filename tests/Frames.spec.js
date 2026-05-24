const {test,expect}= require('@playwright/test')
test('Frames' , async({page})=>{

    await page.goto('https://ui.vision/error/notfound?aspxerrorpath=/demo/website/frames')
    //totla frames
    const totalframes=await page.frames()
    console.log("Number of frames:",totalframes.length)
    //name of the frames
    //await page.waitForTimeout(5000)
    const frame1=await page.frames({url:'https://ui.vision/rpa/x'})
    
    

})
