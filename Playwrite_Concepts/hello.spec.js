// c:\Users\Nitya Krushna Sahoo\Playwright Learning\Playwrite_Concepts\hello.spec.js

const { test, expect } = require('@playwright/test');

test('hello world', async ({ page }) => {
  // open a page (e.g. example.com)
  await page.goto('https://example.com');

  // log a message
  console.log('Hello World from Playwright!');

  // simple assertion so the test actually runs
  await expect(page).toHaveTitle(/Example/);
});