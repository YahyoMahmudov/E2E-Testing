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
      state: 'attached',
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

  async pressEnter() {
    await this.page.keyboard.press('Enter');
  }

  async scrollDown() {
    await this.page.evaluate(() => {
      window.scrollTo(0, document.body.scrollHeight);
    });
  }

  async waitForElementText(
    element: Locator,
    expectedText: string,
  ): Promise<boolean> {
    const isTextMatch = async () => {
      if (!element) return false;
      const elementText = await element.innerText();
      return elementText.trim() === expectedText;
    };
  
    const startTime = Date.now();
    while (Date.now() - startTime < 15000) {
      if (await isTextMatch()) {
        return true;
      }
      await this.page.waitForTimeout(1000);
    }
  
    return false;
  }

}
