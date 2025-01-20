import { test, expect } from '@playwright/test';

test('test search for book 1984 and verify details', async ({ page }) => {
  await page.goto('https://www.leyaonline.com/pt/');
  await page.getByPlaceholder('pesquisa').click();
  await page.getByPlaceholder('pesquisa').fill('1984');
  await page.getByPlaceholder('pesquisa').press('Enter');
  await page.getByText('GEORGE ORWELL €12,50 Comprar').click();
  await page.getByText('O autor GEORGE ORWELL O').click();
  await expect(page.locator('#second-container')).toContainText('GEORGE ORWELL');
  await expect(page.locator('#second-container')).toContainText('9789722071550');
  await expect(page.locator('#second-container')).toContainText('235 x 157 x 23 mm')
  await expect(page.locator('#second-container')).toContainText('344')
});