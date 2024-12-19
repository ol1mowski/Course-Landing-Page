import { test, expect, type Page } from '@playwright/test';

test.describe('Mobile Menu', () => {
  let page: Page;

  test.beforeEach(async ({ browser }) => {
    const context = await browser.newContext({
      viewport: { width: 390, height: 844 }
    });
    page = await context.newPage();
    await page.goto('/');
  });

  test('opens and closes menu by clicking on hamburger', async () => {
    const mobileMenu = page.getByTestId('mobile-menu');
    await expect(mobileMenu).not.toBeVisible();

    const hamburgerButton = page.getByAltText('Hamburger menu icon');
    await hamburgerButton.click();

    await expect(mobileMenu).toBeVisible();

    const closeButton = page.getByAltText('Close menu icon');
    await closeButton.click();

    await expect(mobileMenu).not.toBeVisible();
  });

  test('closes menu by clicking on navigation link', async () => {
    const hamburgerButton = page.getByAltText('Hamburger menu icon');
    await hamburgerButton.click();

    const firstMenuItem = page.getByRole('listitem').filter({ hasText: 'Dla Kogo jest ten kurs ?' });
    await firstMenuItem.click();

    const mobileMenu = page.getByTestId('mobile-menu');
    await expect(mobileMenu).not.toBeVisible();

  });

  test('displays all menu items', async () => {
    const hamburgerButton = page.getByAltText('Hamburger menu icon');
    await hamburgerButton.click();
    
    await page.waitForTimeout(300);
    
    const menuItems = [
      'Dla Kogo jest ten kurs ?',
      'Co Otrzymasz ?',
      'Bonus',
      'Oferta',
      'FAQ'
    ];

    const mobileMenu = page.getByTestId('mobile-menu');
    for (const itemText of menuItems) {
      const menuItem = mobileMenu.getByRole('link', { name: itemText });
      await expect(menuItem).toBeVisible();
    }
  });

  test('behaves correctly on different screen sizes', async () => {
    await page.setViewportSize({ width: 375, height: 667 });
    const hamburgerButtonSE = page.getByAltText('Hamburger menu icon');
    await expect(hamburgerButtonSE).toBeVisible();

    await page.setViewportSize({ width: 768, height: 1024 });
    const hamburgerButtoniPad = page.getByAltText('Hamburger menu icon');
    await expect(hamburgerButtoniPad).toBeVisible();

    await page.setViewportSize({ width: 1920, height: 1080 });
    const hamburgerButtonDesktop = page.getByAltText('Hamburger menu icon');
    await expect(hamburgerButtonDesktop).not.toBeVisible();
  });
}); 