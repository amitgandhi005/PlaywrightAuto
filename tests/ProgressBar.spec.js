const { test } = require('@playwright/test');

test('Progress Bar Test', async ({ page }) => {

    await page.goto('https://demo.automationtesting.in/JqueryProgressBar.html');

  // Start the progress bar
  await page.locator('#downloadButton').click();
await page.waitForTimeout(9000); // Wait for 1 second to allow the progress bar to start


  // Wait for the progress bar to complete  [class="progress-label"]
//   await page.waitForSelector("[class='progress-label']", { state: 'detached' });

  // Optionally, you can take a screenshot to verify the progress bar state
  await page.screenshot({ path: 'progressBar.png' });


  await page.locator("button[type='button']").nth(1).click();
  // You can add assertions here to verify the progress bar behavior if needed
//   await expect (page.locator("#dialog").first()).toHaveText('Complete!');

});
