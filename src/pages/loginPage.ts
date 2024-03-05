import {Page} from '@playwright/test';
import PlaywrightWrapper from '../helper/wrapper/playwrightWrappers';
import Assert from '../helper/wrapper/assert';

export default class LoginPage {
  private base: PlaywrightWrapper;
  private assert: Assert;

  constructor(private page: Page) {
    this.base = new PlaywrightWrapper(page);
  }

  public Elements = {
    logInBtn: "//a/span[text()='Log in']",
    emailInput: "//input[@name='email']",
    passwordInput: "//input[@name='password']",
    submitBtn: "//button[@type='submit']"
  };

  async clickLogInButton() {
    this.page.waitForTimeout(2000);
    await this.base.waitAndClick(this.Elements.logInBtn);
  }

  async enterEmail(email: string) {
    await this.page.fill(this.Elements.emailInput, email);
  }
  async enterPassword(password: string) {
    await this.page.fill(this.Elements.passwordInput, password);
  }

  async clickSubmitButton() {
    await this.base.waitAndClick(this.Elements.submitBtn);
  }

  async logIn(email: string, password: string) {
    await this.base.waitAndClick(this.Elements.logInBtn);

    await this.page.fill(this.Elements.emailInput, email);

    await this.base.waitAndClick(this.Elements.submitBtn);

    await this.page.fill(this.Elements.passwordInput, password);

    await this.base.waitAndClick(this.Elements.submitBtn);
  }
}
