import { expect, Page } from '@playwright/test';
import PlaywrightWrapper from '../helper/wrapper/playwrightWrappers';

export default class LandingPage {
  private base: PlaywrightWrapper;

  constructor(private page: Page) {
    this.base = new PlaywrightWrapper(page);
  }
  getStartedButton = this.page.locator("(//span[text()='Get started'])[1]");
  registerWithEmailButton = this.page.locator("//span[text()=' Register with email ']");
}