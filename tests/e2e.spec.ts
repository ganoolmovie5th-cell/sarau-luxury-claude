import { test, expect } from '@playwright/test';

test.describe('Sarau Luxury (prod smoke)', () => {
  test('homepage loads + single H1', async ({ page }) => {
    await page.goto('/');

    await expect(page).toHaveTitle(/Sarau Luxury/i);

    const h1s = page.locator('h1');
    await expect(h1s).toHaveCount(1);

    // metadataBase set → relative OG image resolves to an absolute URL
    await expect(page.locator('meta[property="og:image"]')).toHaveAttribute('content', /^https:\/\//);
  });

  test('blog post: one canonical + valid BlogPosting schema', async ({ page }) => {
    const slug = 'perbedaan-outing-outbound';
    await page.goto(`/blog/${slug}`);

    // Exactly one canonical, pointing at this post — not the homepage
    const canonical = page.locator('link[rel="canonical"]');
    await expect(canonical).toHaveCount(1);
    await expect(canonical).toHaveAttribute('href', new RegExp(`/blog/${slug}$`));

    const blocks = await page.locator('script[type="application/ld+json"]').allTextContents();
    const article = blocks.map((b) => JSON.parse(b)).find((j) => j['@type'] === 'BlogPosting');

    expect(article, 'BlogPosting JSON-LD should exist').toBeTruthy();
    expect(article.headline).toBeTruthy();
    expect(article.author?.name).toBeTruthy();
    // toISODate() must emit ISO 8601, not '5 Mei 2025'
    expect(article.datePublished).toMatch(/^\d{4}-\d{2}-\d{2}$/);
  });

  test('key routes respond (200)', async ({ request }) => {
    // Keep this lightweight; content assertions can be added later.
    for (const path of ['/about', '/services', '/packages', '/clients', '/gallery', '/blog', '/faq']) {
      const res = await request.get(path);
      expect(res.ok(), `${path} should be OK`).toBeTruthy();
    }
  });
});
