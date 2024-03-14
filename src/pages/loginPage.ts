import { Page } from '@playwright/test';
import PlaywrightWrapper from '../helper/wrapper/playwrightWrappers';
import basePage from './basePage';

export default class LoginPage {
  private base: PlaywrightWrapper;

  constructor(private page: Page) {
    this.base = new PlaywrightWrapper(page);
  }

  logInBtn = this.page.locator("//a/span[text()='Log in']");
  emailInput = this.page.locator("//input[@name='email']");
  passwordInput = this.page.locator("//input[@name='password']");
  submitBtn = this.page.locator("//button[@type='submit']");

  async logIn(userRole: string) {
    let email = process.env[`${userRole.toUpperCase()}_EMAIL`];
    let password = process.env[`${userRole.toUpperCase()}_PASSWORD`];

    await this.base.waitAndClick(basePage.loginPage.logInBtn);

    await this.base.waitForUrl(process.env.LOGIN_PAGE_URL);
    await this.base.type(this.emailInput, email);

    await this.base.waitAndClick(this.submitBtn);

    await this.base.type(this.passwordInput, password);

    await this.base.waitAndClick(basePage.loginPage.submitBtn);
  }
}