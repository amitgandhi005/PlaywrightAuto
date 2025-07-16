const { test, expect } = require('@playwright/test');

test('Click play on YouTube video', async ({ page }) => {
  // Navigate to the page containing the YouTube video
  await page.goto('https://demo.automationtesting.in/Youtube.html');

  // Wait for the iframe containing the YouTube video to be visible
  const iframeElement = await page.frameLocator('iframe[src*="youtube.com"]');

  // Click the play button inside the YouTube iframe
  await iframeElement.locator('button[aria-label="Play"]').click();

  // Optional: wait a few seconds to observe playback
  await page.waitForTimeout(5000);

  // Screenshot after clicking play
  await page.screenshot({ path: 'youtube-play.png' });
});
