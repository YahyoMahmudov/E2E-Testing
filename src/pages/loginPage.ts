import {Page} from '@playwright/test';
import PlaywrightWrapper from '../helper/wrapper/playwrightWrappers';

export default class LoginPage {
  private base: PlaywrightWrapper;

  constructor(private page: Page) {
    this.base = new PlaywrightWrapper(page);
  }

  logInBtn = this.page.locator("//a/span[text()='Log in']");
  emailInput = this.page.locator("//input[@name='email']");
  passwordInput = this.page.locator("//input[@name='password']");
  submitBtn = this.page.locator("//button[@type='submit']");

  async logIn(email: string, password: string) {
    await this.base.waitAndClick(this.logInBtn);

    await this.base.type(this.emailInput, email);

    await this.base.waitAndClick(this.submitBtn);

    await this.base.type(this.passwordInput, password);

    await this.base.waitAndClick(this.submitBtn);
  }
}
