import { Locator, Page } from "@playwright/test";

export class Homepage {
  readonly page: Page;
  readonly url = "https://tredgate.com/eshop/";
  readonly myAccount: Locator;
  readonly register: Locator;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly emailInput: Locator;
  readonly telephoneInput: Locator;
  readonly passwordInput: Locator;
  readonly passwordConfirm: Locator;
  readonly continueButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.myAccount = page.locator("#top-links a i.fa-user");
    this.register = page.locator(
      '.dropdown-menu a[href="https://tredgate.com/eshop/index.php?route=account/register"]'
    );
    this.firstNameInput = page.locator("#input-firstname");
    this.lastNameInput = page.locator("#input-lastname");
    this.emailInput = page.locator("#input-email");
    this.telephoneInput = page.locator("#input-telephone");
    this.passwordInput = page.locator("#input-password");
    this.passwordConfirm = page.locator("#input-confirm");
    this.continueButton = page.locator('input[type="submit"]');
  }

  async open() {
    await this.page.goto(this.url);
    return this;
  }

  async clickMyAccount() {
    await this.myAccount.click();
    return this;
  }

  async clickRegister() {
    await this.register.click();
    return this;
  }

  async fillFirstName(firstName: string) {
    await this.firstNameInput.fill(firstName);
    return this;
  }

  async fillLastName(lastName: string) {
    await this.lastNameInput.fill(lastName);
    return this;
  }

  async fillEmail(email: string) {
    await this.emailInput.fill(email);
    return this;
  }

  async fillTelephone(telephone: string) {
    await this.telephoneInput.fill(telephone);
    return this;
  }

  async fillPassword(password: string) {
    await this.passwordInput.fill(password);
    return this;
  }

  async fillPasswordConfirm(passwordConfirm: string) {
    await this.passwordConfirm.fill(passwordConfirm);
    return this;
  }

  async clickContinueButton() {
    await this.continueButton.click();
    return this;
  }
}
