
const { test, expect } = require('@playwright/test');

test('check OKalerts on website ', async ({ page }) => {
    await page.goto("https://demo.automationtesting.in/Alerts.html");
    const alertButton = page.locator('.analystic');
    console.log(await alertButton.first().textContent());
    await alertButton.nth(0).click();
    const alertwithok = page.locator("[onclick='alertbox()']");
    console.log(await alertwithok.textContent());
    await alertwithok.click();

    await page.screenshot({ path: 'check OKalerts on website.png' });

    // await page.locator(".analystic[href='#Textbox']").click();
    // console.log(await alertButton.nth(1).textContent());
    // await page.locator("[onclick='confirmbox()']").click();
    // const confirmation = page.locator("#demo");
    // console.log(await confirmation.textContent());
  
    // Handle the dialog, dialog.accept() will accept the dialog
    // dialog.dismiss() will dismiss the dialog
    // page.on('dialog', dialog => dialog.accept());
    // await page.getByRole('button').click();


    // console.log(await confirmation.textContent());
});

test('check OKCancel alerts on website ', async ({ page }) => {
    //This is for second alert test
     await page.goto("https://demo.automationtesting.in/Alerts.html");
    const alertWithOkCancel = page.locator(".analystic[href='#CancelTab']");
    console.log(await alertWithOkCancel.textContent());
    await alertWithOkCancel.click();
    const confirmation = page.locator("#demo");
    console.log(await confirmation.textContent());
    // Handle the dialog, dialog.accept() will accept the dialog
    // dialog.dismiss() will dismiss the dialog
    page.on('dialog', dialog => dialog.accept());
    await page.getByRole('button').click();
    console.log(await confirmation.textContent());
    
  await page.screenshot({ path: 'check OKCancel alerts on website.png' });

});
test ('check Prompt alerts on website ', async ({ page }) => {
      //This is for third alert test with textbox
    await page.goto("https://demo.automationtesting.in/Alerts.html");
    const alertText = page.locator(".analystic[href='#Textbox']");
    console.log(await alertText.textContent());
    await alertText.click();
    await page.locator("[onclick='promptbox()']").click();
    page.on('dialog', dialog => dialog.accept("This is automate text"));
    await page.getByRole('button').click();
    const confirmation = page.locator("#demo1");
    console.log(await confirmation.textContent());
    await page.screenshot({ path: 'check Prompt alerts on website.png' });
});
// await page.screenshot({ path: '.png' });
