import { test, expect } from "@playwright/test";

test.describe("OrderForm E2E", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/platnosc");
    await page.waitForSelector("form");
  });

  test("should complete full order flow", async ({ page }) => {
    await page.goto("/platnosc");
    await page.waitForSelector("form");

    await page.fill("#firstName", "Jan");
    await page.fill("#lastName", "Kowalski");
    await page.fill("#email", "test@example.com");
    await page.fill("#phone", "123456789");
    await page.check("#terms");

    const p24Method = page.locator("text=Przelewy24");
    await expect(p24Method).toBeVisible();

    await page.click('[data-testid="payment-button"]');

    await expect(page.locator("text=Przetwarzanie...")).toBeVisible();

    await page.waitForURL("/sukces", { timeout: 5000 });
    await expect(page.locator("text=Dziękujemy za zakup!")).toBeVisible();
    await expect(page.locator("text=test@example.com")).toBeVisible();

    await page.goto("/sukces");
    await expect(page).toHaveURL("/");
  });

  test("should validate phone number format", async ({ page }) => {
    await page.waitForSelector("#phone");
    await page.fill("#phone", "123");
    await page.click("body");

    await expect(
      page.getByText("Numer telefonu musi mieć 9 cyfr")
    ).toBeVisible();
  });

  test("should validate NIP format", async ({ page }) => {
    await page.waitForSelector("#nip");
    await page.fill("#nip", "123");
    await page.click("body");

    await expect(page.getByText("NIP musi mieć 10 cyfr")).toBeVisible();
  });

  test("should require company name when NIP is provided", async ({ page }) => {
    await page.waitForSelector("#nip");
    await page.fill("#nip", "1234567890");

    await expect(page.getByText("Wymagane przy podaniu NIP")).toBeVisible();
  });

  test("should display success indicator for valid fields", async ({
    page,
  }) => {
    await page.waitForSelector("#firstName");
    await page.fill("#firstName", "Jan");
    await page.click("body");

    await expect(page.locator(".text-green-500")).toBeVisible();
  });

  test("should validate email format", async ({ page }) => {
    await page.waitForSelector("#email");
    await page.fill("#email", "invalid-email");
    await page.click("body");

    await expect(page.getByText("Nieprawidłowy format email")).toBeVisible();
  });

  test("should allow empty optional fields", async ({ page }) => {
    await page.waitForSelector("#firstName");

    await page.fill("#firstName", "Jan");
    await page.fill("#lastName", "Kowalski");
    await page.fill("#email", "jan@example.com");
    await page.check("#terms");

    await page.click('[data-testid="payment-button"]');

    await expect(
      page.getByText("Numer telefonu musi mieć 9 cyfr")
    ).not.toBeVisible();
    await expect(page.getByText("NIP musi mieć 10 cyfr")).not.toBeVisible();
  });
});
