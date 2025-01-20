import { test, expect } from '@playwright/test';

test('test search for corrupt and confirm it as 10% discount', async ({ page }) => {
  await page.goto('https://www.leyaonline.com/pt/');
  await page.getByPlaceholder('pesquisa').click();
  await page.getByPlaceholder('pesquisa').fill('corrupt');
  await page.getByPlaceholder('pesquisa').press('Enter');
  await page.getByText('-10% Corrupt PENELOPE DOUGLAS €19,71 €21,90 Comprar').click();
  await expect(page.locator('#pjax-container')).toContainText('-10%');
});