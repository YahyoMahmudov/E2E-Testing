import {Page} from '@playwright/test';
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

  async enterUsernameAndPassowrd(userRole: string) {
    let email: string;
    let password: string;

    switch (userRole) {
      case 'admin':
        email = process.env.ADMIN_EMAIL;
        password = process.env.ADMIN_PASSWORD;
        break;
      case 'publisher':
        email = process.env.PUBLISHER_EMAIL;
        password = process.env.PUBLISHER_PASSWORD;
        break;
      case 'advertiser':
          email = process.env.ADVERTISER_EMAIL;
          password = process.env.ADVERTISER_PASSWORD;
          break;
      case 'agency':
          email = process.env.AGENCY_EMAIL;
          password = process.env.AGENCY_PASSWORD;
          break;
      default:
        throw new Error(`Unsupported user role: ${userRole}`);
    }

    await basePage.wrapper.waitForUrl(process.env.LOGIN_PAGE_URL);
    await basePage.wrapper.type(this.emailInput, email);

    await basePage.wrapper.waitAndClick(this.submitBtn);

    await basePage.wrapper.type(this.passwordInput, password);
  }

  async logIn(email: string, password: string) {
    await this.base.waitAndClick(this.logInBtn);

    await this.base.type(this.emailInput, email);

    await this.base.waitAndClick(this.submitBtn);

    await this.base.type(this.passwordInput, password);

    await this.base.waitAndClick(this.submitBtn);
  }
}
