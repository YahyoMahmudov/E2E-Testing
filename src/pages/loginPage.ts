import {Page} from '@playwright/test';
import PlaywrightWrapper from '../helper/wrapper/playwrightWrappers';
import Assert from '../helper/wrapper/assert';

export default class LoginPage {
  private base: PlaywrightWrapper;
  private assert: Assert;

  constructor(private page: Page) {
    this.base = new PlaywrightWrapper(page);
  }

  public elements = {
    logInBtn: "//a/span[text()='Log in']",
    emailInput: "//input[@name='email']",
    passwordInput: "//input[@name='password']",
    submitBtn: "//button[@type='submit']"
  };

  async clickLogInButton() {
    this.page.waitForTimeout(2000);
    await this.base.waitAndClick(this.elements.logInBtn);
  }

  async enterEmail(email: string) {
    await this.page.fill(this.elements.emailInput, email);
  }
  async enterPassword(password: string) {
    await this.page.fill(this.elements.passwordInput, password);
  }

  async clickSubmitButton() {
    await this.base.waitAndClick(this.elements.submitBtn);
  }

  async logIn(email: string, password: string) {
    await this.base.waitAndClick(this.elements.logInBtn);

    await this.page.fill(this.elements.emailInput, email);

    await this.base.waitAndClick(this.elements.submitBtn);

    await this.page.fill(this.elements.passwordInput, password);

    await this.base.waitAndClick(this.elements.submitBtn);
  }
}
