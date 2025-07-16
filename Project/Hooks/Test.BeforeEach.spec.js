import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  console.log(`Running ${test.info().title}`);
  await page.goto('https://my.start.url/');
});

test('my test', async ({ page }) => {
  expect(page.url()).toBe('https://my.start.url/');
});

test.beforeEach('Open start URL', async ({ page }) => {
    console.log(`Running ${test.info().title}`);
    await page.goto('https://my.start.url/');
  });