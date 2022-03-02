// example.spec.ts
import { test, expect } from '@playwright/test';

test('TC_SP_001 User can search product successfully', async ({ page, baseURL }) => {
  await page.goto(`${baseURL}/search/12324!@%23%24,mกด่สาก่`);

  await page.waitForLoadState();

  // Assert value for input element
  const value = await page.locator('[data-testid="txt-SearchBar"]').inputValue();
  expect(value).toBe('12324!@#$,mกด่สาก่');

  // Assert value with xpath
  const search_result = page.locator('//*[@id="app"]/div/div[4]/div/div[1]/div/div[2]');
  expect(search_result).toContainText('Search results for "12324!@#$,mกด่สาก่"');

  const product_result = page.locator('//div[@data-testid="pnl-ListPage"]/div[2]/div[1]/div[1]');
  expect(product_result).toContainText('7,037 product results found for "12324!@#$,mกด่สาก่"');


});

test('TC_SP_002 User can search product with invalid input (page not-found)', async ({ page, baseURL }) => {
  await page.goto(`${baseURL}/search/12324!@%23%24%C2,mกด่สาก่`);
  
  // Assert value for text element
  await expect(page.locator('text=/.*ไม่พบหน้าที่ท่านต้องการ.*/').first()).toBeVisible();
  await expect(page.locator('text=/.*กรุณาตรวจสอบความถูกต้องการค้นหาหน้านี้อีกครั้ง*/').first()).toBeVisible();
  await expect(page.locator('text=/.*หรือ.*/').first()).toBeVisible();
  const value = page.locator('#lnk-notFoundPage-viewHome');
  expect(value).toContainText('กลับสู่หน้าแรก');
  
});

test('TC_SP_003 User can search product with whitespace', async ({ page, baseURL }) => {
  await page.goto(`${baseURL}/search/%20`);
  // Assert value for text element
  await expect(page.locator('text=/.*ขออภัย! ไม่พบสินค้าที่ตรงกับ " ".*/').first()).toBeVisible();
});

test('TC_SP_004 User can search product with unique product', async ({ page, baseURL }) => {
  await page.goto(`${baseURL}/search/Staedtler%20TRIPLUS%20334-51%20NeedlePointPen0.3mm.GreenLight`);

  await page.waitForLoadState();

  // Assert value for input element
  const value = await page.locator('[data-testid="txt-SearchBar"]').inputValue();
  expect(value).toBe('Staedtler TRIPLUS 334-51 NeedlePointPen0.3mm.GreenLight');
  
  // Assert value with xpath
  const search_result = page.locator('//*[@id="app"]/div/div[4]/div/div[1]/div/div[2]');
  expect(search_result).toContainText('Search results for "Staedtler TRIPLUS 334-51 NeedlePointPen0.3mm.GreenLight"');

  const product_result = page.locator('//div[@data-testid="pnl-ListPage"]/div[2]/div[1]/div[1]');
  expect(product_result).toBe('1 product results found for "Staedtler TRIPLUS 334-51 NeedlePointPen0.3mm.GreenLight"');


});