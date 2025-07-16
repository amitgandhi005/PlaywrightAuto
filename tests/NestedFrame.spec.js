const { test, expect } = require('@playwright/test');
test('Nested Frame Test', async ({ page }) => {
    await page.goto("https://demo.automationtesting.in/Frames.html");
    await page.locator(".analystic[href='#Multiple']").click();
    // Access the nested frame
    // const frame = page.frameLocator(".container.iframes-page-container");
    // Removed incorrect nestedFrame declaration to avoid redeclaration error
    const nestedFrame = page.frameLocator("iframe[src='MultipleFrames.html']").frameLocator("iframe[src='SingleFrame.html']");

    // Interact with an element inside the nested frame
    const inputField = nestedFrame.locator("input[type='text']");
    await inputField.click();
    await inputField.fill("This is a nested frame test");

    // Log the inner text of the input field
    console.log(await inputField.innerText());

    // Take a screenshot
    await page.screenshot({ path: 'nestedFrame.png' });
});