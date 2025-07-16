
const {test, expect } = require('@playwright/test');

test('Selectable with Default Functionality', async ({ page }) => {
  // Navigate to the page with selectable functionality
  await page.goto('https://demo.automationtesting.in/Selectable.html');

  // Locate the selectable items
  const items = page.locator('#Default').locator('li');

  // Click on the first item to select it
  await items.nth(4).click(); //"div[id='Default'] li:nth-child(1)"

  // Verify that the first item is selected
  await expect(items.nth(4)).toContainText('Extent Reports');

  // Click on the second item to select it
//   await items.nth(1).click();

  // Verify that both items are selected
//   await expect(items.first()).toHaveClass('ui-widget-content');
//   await expect(items.nth(1)).toHaveClass('ui-widget-content');

  // Take a screenshot to verify the selection result
  await page.screenshot({ path: 'selectableWithDefaultFunctionality.png' });
});