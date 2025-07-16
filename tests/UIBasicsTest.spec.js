const { test, expect } = require('@playwright/test');

test('Browser context playwright test', async ({ page }) => {
    //   const context =  await browser.newContext();
    //   const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());
    await expect(page).toHaveTitle('LoginPage Practise | Rahul Shetty Academy');
    const UserName = page.locator('#username');
    const Password = page.locator('#password');
    await UserName.clear();
    await UserName.fill('rahulshettyacadem');
    await Password.clear();
    await Password.fill('learning');
    await page.locator('#signInBtn').click();
    const errorText = await page.locator('.alert.alert-danger.col-md-12').textContent();
    console.log(errorText.trim());
    console.log("Length of Error message is : ", errorText.length);
    expect(errorText).toContain("Incorrect");
    await UserName.fill("");
    await UserName.fill('rahulshettyacademy');
    await Password.fill("");
    await Password.fill('learning');
    await page.locator('#signInBtn').click();
    await page.waitForTimeout(3000);
    console.log(await page.title());

    const cards = page.locator('.card-body a');
    console.log(await cards.first().textContent());
    console.log(await cards.nth(1).textContent());
    console.log(await cards.nth(2).textContent());
    console.log(await cards.last().textContent());
    const allCards = await cards.allTextContents();
    console.log(allCards);

    

});
// Run the test with the following command:
// npx playwright test tests/UIBasicstest.spec.js 
test('page playwright test', async ({ page }) => {
    await page.goto("https://www.google.com");
    console.log(await page.title());
    await expect(page).toHaveTitle('Google');
});

