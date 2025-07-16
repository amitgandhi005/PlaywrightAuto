// Import the test object from Playwright testing library
import { test, expect } from '@playwright/test';

// Declares an afterAll hook that is executed once per worker after all tests.

// When called in the scope of a test file, runs after all tests in the file. When called inside a test.describe() group, runs after all tests in the group.

test.afterAll(async () => {
    console.log('Done with tests');
    // ...
  });

  test.afterAll(async () => {
    console.log('Teardown after all tests');
    // ...
  });