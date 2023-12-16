const { test, expect } = require('@playwright/test');

test('Check add products page', async ({ page }) => {
    await page.goto('http://vasdenkov-exam.onrender.com/add-product');
    const form = await page.$('form');
    expect(form).toBeTruthy();
  });
  