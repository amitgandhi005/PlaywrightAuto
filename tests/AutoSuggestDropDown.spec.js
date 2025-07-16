const { test, expect } = require('@playwright/test');
test('test', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/AutoComplete.html');
  await page.locator('.ui-autocomplete-multiselect').click();
  await page.locator('#searchbox').fill('india');
  await page.getByText('India', { exact: true }).click();

  await page.screenshot({ path: 'AutoSuggestDropDown.png' });
});


