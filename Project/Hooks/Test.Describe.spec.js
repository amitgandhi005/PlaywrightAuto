// Declares a group of tests.

//     test.describe(title, callback)
//     test.describe(callback)
//     test.describe(title, details, callback)

test.describe('two tests', () => {
    test('one', async ({ page }) => {
      // ...
    });
  
    test('two', async ({ page }) => {
      // ...
    });
  });

  //Tags

  import { test, expect } from '@playwright/test';

test.describe('two tagged tests', {
  tag: '@smoke',
}, () => {
  test('one', async ({ page }) => {
    // ...
  });

  test('two', async ({ page }) => {
    // ...
  });
});



test.describe('two annotated tests', {
  annotation: {
    type: 'issue',
    description: 'https://github.com/microsoft/playwright/issues/23180',
  },
}, () => {
  test('one', async ({ page }) => {
    // ...
  });

  test('two', async ({ page }) => {
    // ...
  });
});

// Learn more about test annotations.

// Arguments

// title string (optional)#

// Group title.

// details Object (optional) Added in: v1.42#

// tag string | Array<string> (optional)

// annotation Object | Array<Object> (optional)

// type string

// description string (optional)

// Additional details for all tests in the group.

// callback function#

// A callback that is run immediately when calling test.describe(). Any tests declared in this callback will belong to the group.