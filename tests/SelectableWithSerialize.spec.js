
const { test, expect } = require('@playwright/test');

test.only('Selectable with Serialize Functionality', async ({ page }) => {
  // Navigate to the page with selectable functionality
  await page.goto('https://demo.automationtesting.in/Selectable.html');

  //Click on the "Serialize" tab to switch to select Multiple items
  await page.click(".analystic[href='#Serialize']");

  // Locate the selectable items
  const items = page.locator('#Serialize').locator('li');

  // Click on the first item to select it
  await items.nth(4).click(); //"div[id='Default'] li:nth-child(1)"

  // Verify that the first item is selected
  await expect(items.nth(4)).toContainText('Extent Reports');

  // Click on the second item to select it
  await items.nth(5).click();



  // Verify that both items are selected
  await expect(items.nth(4)).toHaveId('');
  await expect(items.nth(5)).toHaveId('');

  // await waitForTimeout(10000);

  // Take a screenshot to verify the selection result
  await page.screenshot({ path: 'selectableWithSerialize.png' });
});