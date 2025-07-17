const { test, expect } = require('@playwright/test');

test('Drag and Drop', async ({ page }) => {
  // Navigate to the page with drag and drop functionality
  await page.goto('https://demo.automationtesting.in/Static.html');

  // Locate the draggable and droppable elements
  const angular = page.locator('#angular');
  const mongo = page.locator('#mongo');
  const node = page.locator('#node');
  const droppable = page.locator('#droparea');

  // Perform the drag and drop action
  await angular.dragTo(droppable);
  // await page.waitForTimeout(2000);
  await page.screenshot({ path: 'dragAndDropStaticAngular.png' });
  await mongo.dragTo(droppable);
  // await page.waitForTimeout(2000);
  await page.screenshot({ path: 'dragAndDropStaticMongo.png' });
  await node.dragTo(droppable);
  // await page.waitForTimeout(2000);
  await page.screenshot({ path: 'dragAndDropStaticNode.png' });

  // Optional: Wait for a short period to observe the result
  // await page.waitForTimeout(10000); // Wait for 1 second

  // Take a screenshot to verify the drag and drop result
  // await page.screenshot({ path: 'dragAndDropStatic.png' });

  // Assert that the drop was successful (example)
  await expect(page.locator('.dragged')).toHaveId('droparea');
  await expect(page.locator('.dragged')).toHaveId('droparea');
  await expect(page.locator('.dragged')).toHaveId('droparea');
});