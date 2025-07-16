const { test } = require('@playwright/test');

test('test', async ({ page }) => {
  const date = new Date();
  const year = date.getFullYear() + 1; // Next year
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed, so add 1
  const day = String(date.getDate()).padStart(2, '0'); // Pad day with leading zero if needed
  // Format the date as MM-DD-YYYY
  
  let fullDate = `${month}-${day}-${year}`

  await page.goto('https://demo.automationtesting.in/Datepicker.html');
  await page.locator('form').getByRole('img').click();
  await page.getByText('2025').click();
  await page.getByText('June 2025').click();
  await page.getByTitle('Prev').click();
  await page.getByRole('link', { name: '1', exact: true }).click();
  await page.locator('#datepicker2').fill(fullDate);
  
  await page.waitForTimeout(10000); // Wait for 2 seconds to see the filled date
console.log(fullDate)
await page.screenshot({ path: 'datepicker.png' });
  // You can add assertions here to verify the date if needed


});