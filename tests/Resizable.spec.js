const { test, expect } = require('@playwright/test');

test('Resizable functionality', async ({ page }) => {
  // Navigate to the page with resizable functionality
  await page.goto('https://demo.automationtesting.in/Resizable.html');

  // Locate the resizable element
  const resizableElement = page.locator('#resizable');

  // Get the initial size of the resizable element
  const initialSize = await resizableElement.boundingBox();

  // Locate the resize handle
  const handle = resizableElement.locator('.ui-resizable-handle.ui-resizable-se.ui-icon.ui-icon-gripsmall-diagonal-se');
  const handleBox = await handle.boundingBox();

  if (handleBox) {
    // Move mouse to the center of the handle and drag it
    await page.mouse.move(handleBox.x + handleBox.width / 2, handleBox.y + handleBox.height / 2);
    await page.mouse.down();
    await page.mouse.move(handleBox.x + handleBox.width / 2 + 100, handleBox.y + handleBox.height / 2 + 100);
    await page.mouse.up();
  }

  // Verify that the element has been resized
  const newSize = await resizableElement.boundingBox();
  expect(newSize.width).toBeGreaterThan(initialSize.width);
  expect(newSize.height).toBeGreaterThan(initialSize.height);


  await page.waitForTimeout(9000); // Wait for 2 seconds to see the resizing effect
  // Take a screenshot to verify the resizing result
  await page.screenshot({ path: 'resizable.png' });
});
