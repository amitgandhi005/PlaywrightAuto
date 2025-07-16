// Declares a test group similarly to test.describe(). Tests in this group are marked as "fixme" and will not be executed.

// test.describe.fixme(title, callback)
// test.describe.fixme(callback)
// test.describe.fixme(title, details, callback)
const { test, expect } = require('@playwright/test');

test.describe.fixme('broken tests that should be fixed', () => {
    test('example', async ({ page }) => {
      // This test will not run
    });
  });