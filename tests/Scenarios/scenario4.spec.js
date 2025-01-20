import { test, expect } from '@playwright/test';

test('test add book to basket and verify', async ({ page }) => {
  await page.goto('https://www.leyaonline.com/pt/');
  await page.getByPlaceholder('pesquisa').click();
  await page.getByPlaceholder('pesquisa').fill('1984');
  await page.getByPlaceholder('pesquisa').press('Enter');
  await page.locator('#bookcard_74653').getByRole('link', { name: 'Comprar' }).click();
  await page.getByRole('link', { name: '' }).click();
  await expect(page.getByLabel('', { exact: true })).toContainText('1');
});