import { test, expect } from '@playwright/test';

test('test verify author', async ({ page }) => {
  await page.goto('https://www.leyaonline.com/pt/');
  await page.getByPlaceholder('pesquisa').click();
  await page.getByPlaceholder('pesquisa').fill('1984');
  await page.getByPlaceholder('pesquisa').press('Enter');
  await page.getByText('GEORGE ORWELL €12,50 Comprar').click();
  await expect(page.locator('#second-container')).toContainText('GEORGE ORWELL');
  await page.getByPlaceholder('pesquisa').click();
  await page.getByPlaceholder('pesquisa').fill('A quinta dos Animais');
  await page.getByPlaceholder('pesquisa').press('Enter');
  await expect(page.getByRole('paragraph')).toContainText('Não foram obtidos resultados na pesquisa de "A quinta dos Animais"');
});