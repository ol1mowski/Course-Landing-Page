import { test, expect, type Page } from "@playwright/test";

test.describe("Comments Flow", () => {
  let page: Page;

  async function loginUser(page: Page) {
    await page.goto("/logowanie");
    await page.getByTestId("email-input").fill("www@wp.pl");
    await page.getByTestId("password-input").fill("U6cWz^ai");
    await page.getByTestId("submit-button").click();
    await expect(page).toHaveURL("/mojekonto");
  }

  test.beforeEach(async ({ browser }) => {
    const context = await browser.newContext();
    page = await context.newPage();
    await loginUser(page);
    await page.goto("/nauka");
  });

  test("should handle full comment lifecycle", async () => {
    const commentText = "Test comment";
    await page.getByPlaceholder("Dodaj komentarz...").fill(commentText);
    await page.getByRole("button", { name: "Dodaj komentarz" }).click();

    await expect(page.getByText(commentText)).toBeVisible({ timeout: 10000 });
    await expect(page.locator(".success-toast").first()).toBeVisible({
      timeout: 10000,
    });

    const editedText = "Edited comment";
    await page.getByTestId("edit-comment-button").first().click();
    await page.getByTestId("edit-comment-input").fill(editedText);
    await page.getByTestId("save-edit-button").click();

    await expect(page.getByText(editedText)).toBeVisible({ timeout: 10000 });
    await expect(page.locator(".success-toast").first()).toBeVisible({
      timeout: 10000,
    });
  });

  test("should handle reply to comment", async () => {
    const replyText = "Test reply";
    await page.getByTestId("reply-button").first().click();
    await page.getByTestId("reply-input").fill(replyText);
    await page.getByTestId("submit-reply-button").click();
    await expect(page.getByText(replyText)).toBeVisible({ timeout: 10000 });
  });

  test("should handle delete comment", async () => {
    const commentText = "Edited comment";
    await page.getByTestId("delete-comment-button").first().click();
    await page.getByTestId("confirm-delete-button").click();
    await expect(page.getByText(commentText)).not.toBeVisible({
      timeout: 10000,
    });
  });

  test("should validate comment input", async () => {
    await page.getByRole("button", { name: "Dodaj komentarz" }).click();
    await expect(page.getByTestId("comment-error")).toBeVisible();

    const longComment = "a".repeat(1001);
    await page.getByPlaceholder("Dodaj komentarz...").fill(longComment);
    await page.getByRole("button", { name: "Dodaj komentarz" }).click();
    await expect(page.getByTestId("comment-error")).toBeVisible();
  });

  test("should handle comment pagination", async () => {
    await expect(
      page.getByRole("button", { name: "Załaduj więcej" })
    ).toBeVisible();

    const initialCommentsCount = await page.getByTestId("comment-item").count();
    await page.getByRole("button", { name: "Załaduj więcej" }).click();
    await expect(page.getByTestId("comment-item")).toHaveCount(
      initialCommentsCount + 10
    );
  });

  test("should handle API errors gracefully", async () => {
    await page.route("**/api/comments/**", (route) => {
      return route.fulfill({
        status: 500,
        body: JSON.stringify({ error: "Internal Server Error" }),
      });
    });

    await page.getByPlaceholder("Dodaj komentarz...").fill("Test comment");
    await page.getByRole("button", { name: "Dodaj komentarz" }).click();
    await expect(page.locator(".error-toast")).toBeVisible({ timeout: 10000 });
  });

  test.afterEach(async () => {
    await page.evaluate(() => window.localStorage.clear());
  });
});
