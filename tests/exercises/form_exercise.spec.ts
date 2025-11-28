import { test } from "@playwright/test";

test("Exercise: Form Fill", async ({ page }) => {
  await page.goto("https://tredgate.com/webtrain/contact.html");
  await page.locator('[data-testid="input-name"]').fill("Petr");
  await page
    .locator('[data-testid="input-email"]')
    .fill("davidmedek@example.com");
  await page.locator('[data-testid="input-contact-date"]').fill("2026-08-21");
  await page.locator('[data-testid="select-role"]').selectOption("student");
  await page.locator('[data-testid="textarea-comments"]').fill("tralala");
  await page.locator('[data-testid="checkbox-newsletter"]').check();
  await page.locator('[data-testid="button-submit"]').click();
});
