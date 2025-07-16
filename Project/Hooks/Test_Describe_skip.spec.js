// Declares a skipped test group, similarly to test.describe(). Tests in the skipped group are never run.

// test.describe.skip(title, callback)
// test.describe.skip(title)
// test.describe.skip(title, details, callback)

const { test, expect } = require('@playwright/test');

test.describe.skip('skipped group', () => {
    test('example', async ({ page }) => {
      // This test will not run
    });
  });