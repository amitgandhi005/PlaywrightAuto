const { test, expect } = require('@playwright/test');
test('Single Frame Test', async ({ page }) => {
    await page.goto("https://demo.automationtesting.in/Frames.html");
    const frame = page.frameLocator("[id='singleframe']");
 const frameText  = frame.locator("input[type='text']") 
    await frameText.click();
    await frameText.fill("This is a single frame test");
    //expect(text).toContain("This is a single frame test");
    console.log(await frameText.innerText());
    //const text_content = await frameText.textContent();
       
await page.screenshot({ path: 'playwright.png' });
    
});