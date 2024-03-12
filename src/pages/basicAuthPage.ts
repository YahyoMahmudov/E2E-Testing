import {expect, Page} from '@playwright/test';
import PlaywrightWrapper from '../helper/wrapper/playwrightWrappers';

export default class BasicAuthPage {
  private base: PlaywrightWrapper;

  constructor(private page: Page) {
    this.base = new PlaywrightWrapper(page);
  }

  public elements = {
    usernameInput: "(//input[@name='username'])[2]",
    passwordInput: "(//input[@name='password'])[2]",
    signInBtn: "(//input[@type='Submit'])[2]"
  };

  async authorizeUser() {
    await this.base.goto(process.env.BASEURL);

    await expect(this.page).toHaveTitle('Signin');
    await this.page.fill(this.elements.usernameInput, process.env.USERNAME);
    await this.page.fill(this.elements.passwordInput, process.env.PASSWORD);

    await this.base.waitAndClick(this.elements.signInBtn);
  }
}
