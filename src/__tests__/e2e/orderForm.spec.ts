import { test, expect } from '@playwright/test';

test.describe('OrderForm E2E', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/platnosc');
    await page.waitForSelector('form');
  });

    // test("should submit form with valid data", async ({ page }) => {
    //   await page.waitForSelector("#firstName");

    //   await page.fill("#firstName", "Jan");
    //   await page.fill("#lastName", "Kowalski");
    //   await page.fill("#email", "jan@example.com");
    //   await page.fill("#phone", "123456789");
    //   await page.fill("#company", "Test Company");
    //   await page.fill("#nip", "1234567890");
    //   await page.check("#terms");

    //   await page.click('[data-testid="payment-button"]');
    // });

//   test('should display validation errors for empty form', async ({ page }) => {
//     await page.waitForSelector('form');
//     await page.click('[data-testid="payment-button"]');

//     await expect(page.getByText('Imię musi mieć minimum 2 znaki')).toBeVisible();
//     await expect(page.getByText('Nazwisko musi mieć minimum 2 znaki')).toBeVisible();
//     await expect(page.getByText('Nieprawidłowy format email')).toBeVisible();
//     await expect(page.getByText('Musisz zaakceptować regulamin')).toBeVisible();
//   });

  test('should validate phone number format', async ({ page }) => {
    await page.waitForSelector('#phone');
    await page.fill('#phone', '123');
    await page.click('body');

    await expect(page.getByText('Numer telefonu musi mieć 9 cyfr')).toBeVisible();
  });

  test('should validate NIP format', async ({ page }) => {
    await page.waitForSelector('#nip');
    await page.fill('#nip', '123');
    await page.click('body');

    await expect(page.getByText('NIP musi mieć 10 cyfr')).toBeVisible();
  });

  test('should require company name when NIP is provided', async ({ page }) => {
    await page.waitForSelector('#nip');
    await page.fill('#nip', '1234567890');

    await expect(page.getByText('Wymagane przy podaniu NIP')).toBeVisible();
  });

  test('should display success indicator for valid fields', async ({ page }) => {
    await page.waitForSelector('#firstName');
    await page.fill('#firstName', 'Jan');
    await page.click('body');

    await expect(page.locator('.text-green-500')).toBeVisible();
  });

  test('should validate email format', async ({ page }) => {
    await page.waitForSelector('#email');
    await page.fill('#email', 'invalid-email');
    await page.click('body');

    await expect(page.getByText('Nieprawidłowy format email')).toBeVisible();
  });

  test('should allow empty optional fields', async ({ page }) => {
    await page.waitForSelector('#firstName');
    
    await page.fill('#firstName', 'Jan');
    await page.fill('#lastName', 'Kowalski');
    await page.fill('#email', 'jan@example.com');
    await page.check('#terms');

    await page.click('[data-testid="payment-button"]');
    
    await expect(page.getByText('Numer telefonu musi mieć 9 cyfr')).not.toBeVisible();
    await expect(page.getByText('NIP musi mieć 10 cyfr')).not.toBeVisible();
  });
}); 