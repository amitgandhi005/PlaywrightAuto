// Run all the tests in the file concurrently using parallel workers.
test.describe.configure({ mode: 'parallel' });
test('runs in parallel 1', async ({ page }) => {});
test('runs in parallel 2', async ({ page }) => {});

//Configuring retries and timeout for each test.

// Each test in the file will be retried twice and have a timeout of 20 seconds.
test.describe.configure({ retries: 2, timeout: 20_000 });
test('runs first', async ({ page }) => {});
test('runs second', async ({ page }) => {});

//Run multiple describes in parallel, but tests inside each describe in order.

test.describe.configure({ mode: 'parallel' });

test.describe('A, runs in parallel with B', () => {
  test.describe.configure({ mode: 'default' });
  test('in order A1', async ({ page }) => {});
  test('in order A2', async ({ page }) => {});
});

test.describe('B, runs in parallel with A', () => {
  test.describe.configure({ mode: 'default' });
  test('in order B1', async ({ page }) => {});
  test('in order B2', async ({ page }) => {});
});

