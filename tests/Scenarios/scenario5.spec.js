import { test, expect } from '@playwright/test';

test('test verify darkmode', async ({ page }) => {
  await page.goto('https://www.leyaonline.com/pt/');
  await page.getByRole('link', { name: '' }).click();
  await expect(page.locator('#darkmode i')).toHaveClass(/nav-icon icon-moon/);
});