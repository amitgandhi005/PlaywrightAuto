const { test, expect } = require('@playwright/test');

test('Vimeo full control test (with buffering wait)', async ({ page }) => {
  // Step 1: Navigate to the Vimeo demo page
  await page.goto('https://demo.automationtesting.in/Vimeo.html');

  // Ensure the page is loaded
  const Title =  expect(page).toHaveTitle(/Vimeo/);
  console.log('Page loaded successfully', Title);
  await page.waitForTimeout(8000); // wait for 50 seconds to ensure page is fully loaded

  // Step 2: Wait for the Vimeo iframe
  const iframeHandle = await page.waitForSelector('iframe[src*="vimeo.com"]');
  const iframe = await iframeHandle.contentFrame();

  // Step 3: Inject Vimeo Player API
  await page.addScriptTag({ url: 'https://player.vimeo.com/api/player.js' });

  // Step 4: Play the video (with volume 0 to allow autoplay) and wait for 'playing' event
  const isPlaying = await page.evaluate(async () => {
    const iframe = document.querySelector('iframe');
    const player = new Vimeo.Player(iframe);

    await player.setVolume(0); // mute to avoid autoplay block
    await player.play();

    // Wait for the 'playing' event (ensures buffering is done)
    await new Promise((resolve) => {
      player.on('playing', () => resolve());
    });

    return !(await player.getPaused());
  });
  expect(isPlaying).toBe(true); // Assert video is playing

  // Step 5: Wait & verify playback progress
  const timeCheck = await page.evaluate(async () => {
    const iframe = document.querySelector('iframe');
    const player = new Vimeo.Player(iframe);
    const startTime = await player.getCurrentTime();

    await new Promise((res) => setTimeout(res, 4000)); // wait 4 seconds

    const endTime = await player.getCurrentTime();
    return { startTime, endTime };
  });
  expect(timeCheck.endTime).toBeGreaterThan(timeCheck.startTime + 1); // Assert time progressed

  // Step 6: Get duration of the video
  const duration = await page.evaluate(async () => {
    const iframe = document.querySelector('iframe');
    const player = new Vimeo.Player(iframe);
    return await player.getDuration();
  });
  expect(duration).toBeGreaterThan(10); // Assert duration > 10s

  // Step 7: Mute the video and verify
  const volumeAfterMute = await page.evaluate(async () => {
    const iframe = document.querySelector('iframe');
    const player = new Vimeo.Player(iframe);
    await player.setVolume(0);
    return await player.getVolume();
  });
  expect(volumeAfterMute).toBe(0); // Assert muted

  // Step 8: Unmute the video and verify
  const volumeAfterUnmute = await page.evaluate(async () => {
    const iframe = document.querySelector('iframe');
    const player = new Vimeo.Player(iframe);
    await player.setVolume(1);
    return await player.getVolume();
  });
  expect(volumeAfterUnmute).toBe(1); // Assert unmuted

  // Step 9: Request fullscreen (only works in headed mode)
  const fullscreenTried = await page.evaluate(async () => {
    const iframe = document.querySelector('iframe');
    const player = new Vimeo.Player(iframe);
    try {
      await player.requestFullscreen();
      return true;
    } catch {
      return false;
    }
  });
  expect(fullscreenTried).toBe(true); // Fullscreen attempted (may silently fail in headless)

  // Step 10: Pause using UI inside iframe
  const frame = page.frameLocator('iframe[src*="vimeo.com"]');
  await frame.locator('button[aria-label="Pause"]').click();
  await page.waitForTimeout(1000); // wait for UI click to apply

  const isPaused = await page.evaluate(async () => {
    const iframe = document.querySelector('iframe');
    const player = new Vimeo.Player(iframe);
    return await player.getPaused();
  });
  expect(isPaused).toBe(true); // Assert paused
});
