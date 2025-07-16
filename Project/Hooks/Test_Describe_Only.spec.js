// Declares a focused group of tests. If there are some focused tests or suites, all of them will be run but nothing else.

// test.describe.only(title, callback)
// test.describe.only(callback)
// test.describe.only(title, details, callback)

const { test, expect } = require('@playwright/test');

test.describe.only('focused group', () => {
    test('in the focused group', async ({ page }) => {
      // This test will run
    });
  });
  test('not in the focused group', async ({ page }) => {
    // This test will not run
  });