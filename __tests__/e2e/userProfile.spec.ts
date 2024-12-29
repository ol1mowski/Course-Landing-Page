import { test, expect, type Page } from '@playwright/test';

test.describe('User Profile Flow', () => {
  let page: Page;

  async function loginUser(page: Page) {
    await page.goto('/logowanie');
    await page.getByTestId('email-input').fill('www@wp.pl');
    await page.getByTestId('password-input').fill('U6cWz^ai');
    await page.getByTestId('submit-button').click();
    await expect(page).toHaveURL('/mojekonto');
  }

  test.beforeEach(async ({ browser }) => {
    const context = await browser.newContext();
    page = await context.newPage();
    await loginUser(page);
    await page.goto('/mojekonto/dane');
  });

  test('should display user profile data correctly', async () => {
    await expect(page.getByRole('heading', { name: 'Moje dane' })).toBeVisible();

    await expect(page.getByTestId('firstName-input')).toBeVisible();
    await expect(page.getByTestId('lastName-input')).toBeVisible();
    await expect(page.getByTestId('email-input')).toBeVisible();
    await expect(page.getByTestId('phone-input')).toBeVisible();
    await expect(page.getByTestId('company-input')).toBeVisible();
    await expect(page.getByTestId('nip-input')).toBeVisible();

    await expect(page.getByTestId('firstName-input')).toBeDisabled();
    await expect(page.getByTestId('lastName-input')).toBeDisabled();
  });

  test('should enable form editing and save changes successfully', async () => {
    await page.getByTestId('profile-edit-button').click();

    await expect(page.getByTestId('firstName-input')).toBeEnabled();
    await expect(page.getByTestId('lastName-input')).toBeEnabled();

    await page.getByTestId('firstName-input').fill('Jan');
    await page.getByTestId('lastName-input').fill('Testowy');
    await page.getByTestId('phone-input').fill('123456789');
    await page.getByTestId('company-input').fill('Test Company');
    await page.getByTestId('nip-input').fill('1234567890');

    await page.getByTestId('submit-button').click();

    await expect(page.locator('div[role="status"]')
      .filter({ hasText: 'Twoje dane zostały pomyślnie zaktualizowane!' })
      .first()
    ).toBeVisible({ timeout: 10000 });

    await expect(page.getByTestId('firstName-input')).toBeDisabled();
    await expect(page.getByTestId('firstName-input')).toHaveValue('Jan');
    await expect(page.getByTestId('lastName-input')).toHaveValue('Testowy');
  });

  test('should validate form fields', async () => {
    await page.getByTestId('profile-edit-button').click();

    await page.getByTestId('firstName-input').fill('');
    await page.getByTestId('lastName-input').fill('');
    await page.getByTestId('phone-input').fill('123');
    await page.getByTestId('nip-input').fill('123');

    await page.getByTestId('submit-button').click();

    await expect(page.getByTestId('firstName-error')).toBeVisible();
    await expect(page.getByTestId('lastName-error')).toBeVisible();
    await expect(page.getByTestId('phone-error')).toBeVisible();
    await expect(page.getByTestId('nip-error')).toBeVisible();

    await expect(page.getByTestId('firstName-error')).toHaveText('Imię jest wymagane');
    await expect(page.getByTestId('lastName-error')).toHaveText('Nazwisko jest wymagane');
    await expect(page.getByTestId('phone-error')).toHaveText('Numer telefonu musi mieć 9 cyfr');
    await expect(page.getByTestId('nip-error')).toHaveText('NIP musi mieć 10 cyfr');
  });

  test('should cancel editing without saving changes', async () => {
    const initialFirstName = await page.getByTestId('firstName-input').inputValue();
    
    await page.getByTestId('profile-edit-button').click();
    
    const newValue = 'Zmienione';
    await page.getByTestId('firstName-input').fill(newValue);
    
    await expect(page.getByTestId('firstName-input')).toHaveValue(newValue);
    
    await page.reload();

    await expect(page.getByTestId('firstName-input')).toHaveValue(initialFirstName);
    
    await expect(page.getByTestId('firstName-input')).toBeDisabled();
  });

  test.afterEach(async () => {
    await page.evaluate(() => window.localStorage.clear());
  });
}); 