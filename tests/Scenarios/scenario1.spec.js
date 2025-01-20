import { test, expect } from '@playwright/test';

test('test search for George and confirm book', async ({ page }) => {
  await page.goto('https://www.leyaonline.com/pt/');
  await page.getByPlaceholder('pesquisa').click();
  await page.getByPlaceholder('pesquisa').click();
  await page.getByPlaceholder('pesquisa').fill('george');
  await page.getByPlaceholder('pesquisa').press('Enter');
  await page.getByText('O Triunfo dos Porcos GEORGE ORWELL €9,90 Comprar').click();
  await expect(page.locator('#second-container')).toContainText('O Triunfo dos Porcos');
  await expect(page.locator('#second-container')).toContainText('Quinta Manor');
});

