import { test, expect } from '@playwright/test';

test.describe('Sarau Luxury (prod smoke)', () => {
  test('homepage loads + single H1', async ({ page }) => {
    await page.goto('/');

    await expect(page).toHaveTitle(/Sarau Luxury/i);

    const h1s = page.locator('h1');
    await expect(h1s).toHaveCount(1);
  });

  test('key routes respond (200)', async ({ request }) => {
    // Keep this lightweight; content assertions can be added later.
    for (const path of ['/about', '/services', '/packages', '/clients', '/gallery', '/blog', '/faq']) {
      const res = await request.get(path);
      expect(res.ok(), `${path} should be OK`).toBeTruthy();
    }
  });
});
