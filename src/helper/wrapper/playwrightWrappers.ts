import { Locator, Page } from '@playwright/test';

export default class PlaywrightWrapper {
  constructor(private page: Page) {}

  async goto(url: string) {
    await this.page.goto(url, {
      waitUntil: 'domcontentloaded'
    });
  }

  async waitAndClick(locator: Locator) {
    await locator.waitFor({
      state: 'visible',
      timeout: 30000
    });
    await locator.click();
  }

  async type(locator: Locator, word: string) {
    await locator.waitFor({
      state: 'attached',
      timeout: 30000
    });
    await locator.fill(word);
  }
  async navigateTo(link: string) {
    await Promise.all([this.page.waitForNavigation(), this.page.click(link)]);
  }

  async waitForUrl(link: string) {
    await this.page.waitForURL(link, { timeout: 30000 });
  }
}
