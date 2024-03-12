import { expect, Page } from '@playwright/test';
import PlaywrightWrapper from '../helper/wrapper/playwrightWrappers';

export default class BasicAuthPage {
  private base: PlaywrightWrapper;

  constructor(private page: Page) {
    this.base = new PlaywrightWrapper(page);
  }

  usernameInput = this.page.locator("(//input[@name='username'])[2]");
  passwordInput = this.page.locator("(//input[@name='password'])[2]");
  signInBtn = this.page.locator("(//input[@type='Submit'])[2]");

  async authorizeUser() {
    await this.base.goto(process.env.BASEURL);

    await expect(this.page).toHaveTitle('Signin');
    await this.usernameInput.fill(process.env.USERNAME);
    await this.passwordInput.fill(process.env.PASSWORD);

    await this.base.waitAndClick(this.signInBtn);
  }
}
