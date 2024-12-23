import { test, expect, type Page } from '@playwright/test';

test.describe('Login Flow', () => {
  let page: Page;

  test.beforeEach(async ({ browser }) => {
    const context = await browser.newContext();
    page = await context.newPage();
    await page.goto('/logowanie');
    await page.waitForSelector('form', { state: 'visible' });
  });

  test('should display login form correctly', async () => {
    await expect(page.getByRole('heading', { name: 'Zaloguj się' })).toBeVisible();
    await expect(page.getByTestId('email-input')).toBeVisible();
    await expect(page.getByTestId('password-input')).toBeVisible();
    await expect(page.getByTestId('remember-me-checkbox')).toBeVisible();
    await expect(page.getByTestId('forgot-password-button')).toBeVisible();
    await expect(page.getByTestId('submit-button')).toBeVisible();
  });

  test('should handle successful login', async () => {
    await page.getByTestId("email-input").fill("www@wp.pl");
    await page.getByTestId("password-input").fill("U6cWz^ai");
    await expect(page.getByTestId('submit-button')).toBeEnabled();
    await page.getByTestId('submit-button').click();

    await expect(page).toHaveURL('/mojekonto', { timeout: 10000 });
  });

  test('should show validation errors for invalid input', async () => {
    await page.getByTestId('email-input').fill('invalid-email');
    await page.getByTestId('password-input').fill('123456');
    await page.getByTestId('email-input').blur();
    await page.getByTestId('password-input').blur();

    await expect(page.getByText('Nieprawidłowy format email')).toBeVisible();
  });

  test("should show error message for too short password", async () => {
    await page.getByTestId('email-input').fill('test@example.com');
    await page.getByTestId('password-input').fill('123');
    await page.getByTestId('password-input').blur();

    await expect(page.getByText('Hasło musi mieć minimum 6 znaków')).toBeVisible();
  });

  test('should handle forgot password flow', async () => {
    await page.getByTestId('forgot-password-button').click();
    await expect(page.getByText('Resetuj hasło')).toBeVisible();

    await page.getByTestId('email-input').fill('test@example.com');
    await page.getByTestId('submit-button').click();

    await expect(page.getByText('Sprawdź swoją skrzynkę')).toBeVisible();
  });

  test('should persist login state with remember me', async () => {
    await page.getByTestId('email-input').fill('www@wp.pl');
    await page.getByTestId('password-input').fill('U6cWz^ai');
    await page.getByTestId('remember-me-checkbox').check();
    await page.getByTestId('submit-button').click();

    await expect(page).toHaveURL('/mojekonto', { timeout: 10000 });

    const token = await page.evaluate(() => localStorage.getItem('token'));
    expect(token).toBeTruthy();
  });

  test('should handle failed login attempt', async () => {
    await page.getByTestId('email-input').fill('wrong@example.com');
    await page.getByTestId('password-input').fill('wrongpassword');
    await page.getByTestId('submit-button').click();

    await expect(page.getByText('Nieprawid��owy email lub hasło')).toBeVisible();
    await expect(page).toHaveURL('/logowanie');
  });

  test('should protect authenticated routes', async () => {
    await page.goto('/mojekonto');
    await expect(page).toHaveURL('/logowanie', { timeout: 10000 });
  });

  test.afterEach(async () => {
    await page.evaluate(() => localStorage.clear());
  });
}); 