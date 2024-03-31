import { Locator, Page, expect } from '@playwright/test';

export default class PlaywrightWrapper {
  constructor(private page: Page) { }

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
      state: 'visible',
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

  async pressKeyboard(button: string) {
    await this.page.keyboard.press(button);
  }

  async verifyPageTitle(title: string): Promise<boolean> {
    try {
      await this.page.waitForURL(process.env[`${title.toUpperCase()}_PAGE_URL`]);

      const pageTitle = await this.page.title();
      return pageTitle.includes(title);
    } catch (error) {
      return false;
    }
  }

  toCamelCase(...inputs: string[]): string[] {
    return inputs.map(input =>
        input.toLowerCase()
            .split(' ')
            .map((word, index) => (index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)))
            .join('')
    );
  }
}