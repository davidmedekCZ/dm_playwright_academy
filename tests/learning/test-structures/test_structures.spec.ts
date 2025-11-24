// tests/test-structure/
// test_structure.spec.ts
import { test } from "@playwright/test";
import { LoginPage } from "../../../src/pages/pmtool/login_page.ts";

// ? Zkratka: pwd (pw-describe)
test.describe("Testovací sada - describe", () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.open();
  });

  test("Pmtool Login", async () => {
    await loginPage.fillUsername("pw_academy");
    await loginPage.fillPassword("Playwright321!");
    await loginPage.clickLogin();
  });

  test("Pmtool Failed Login", async () => {
    await loginPage.fillUsername("ABCD");
    await loginPage.fillPassword("EFGH");
    await loginPage.clickLogin();
  });
});
