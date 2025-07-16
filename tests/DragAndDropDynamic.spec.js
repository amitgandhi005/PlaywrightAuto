const { test, expect } = require('@playwright/test');

test('Drag and Drop', async ({ page }) => {
  // Navigate to the page with drag and drop functionality
  await page.goto('https://demo.automationtesting.in/Dynamic.html');

  // Locate the draggable and droppable elements
  const angular = page.locator('#angular');
  const mongo = page.locator('#mongo');
  const node = page.locator('#node');
  const droppable = page.locator('#droparea');

  // Perform the drag and drop action
  await angular.dragTo(droppable);
  await page.waitForTimeout(2000);
  await page.screenshot({ path: 'dragAndDropDyanmicAngular.png' });
  await mongo.dragTo(droppable);
  await page.waitForTimeout(2000);
  await page.screenshot({ path: 'dragAndDropDyanmicMongo.png' });
  await node.dragTo(droppable);


  // Optional: Wait for a short period to observe the result
  await page.waitForTimeout(10000); // Wait for 1 second
  await page.screenshot({ path: 'dragAndDropDyanmicNode.png' });

  // Take a screenshot to verify the drag and drop result
  await page.screenshot({ path: 'dragAndDropDyanmic.png' });

  // Assert that the drop was successful (example)
  await expect(page.locator('#droppable p')).toHaveId('angular');
  await expect(page.locator('#droppable p')).toHaveId('mongo');
  await expect(page.locator('#droppable p')).toHaveId('node');

   await page.waitForTimeout(10000);
});