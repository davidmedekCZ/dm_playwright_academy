import { test } from "@playwright/test";
import { Homepage } from "../../src/pages/tredgate-eshop/homepage.ts";

test("HW: Fill Registration Form", async ({ page }) => {
  const homepage = new Homepage(page);
  await homepage.open();
  await homepage.clickMyAccount();
  await homepage.clickRegister();
  await homepage.fillFirstName("David");
  await homepage.fillLastName("Medek");
  await homepage.fillEmail("david.medek@example.com");
  await homepage.fillTelephone("789231231");
  await homepage.fillPassword("qaywsxedc");
  await homepage.fillPasswordConfirm("qaywsxedc");
  await homepage.clickContinueButton();
});
