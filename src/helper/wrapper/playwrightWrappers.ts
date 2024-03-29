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

  async verifyPageTitle(title: string) {
    await this.page.waitForURL(process.env[`${title.toUpperCase()}_PAGE_URL`])

    const pageTitle = await this.page.title();
    expect(pageTitle).toContain(title);
  }

  async waitForElementTextVisible(element: Locator, expectedText: string): Promise<boolean> {
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

  async toCamelCase(input: string): Promise<string> {
    return input
      .toLowerCase()
      .split(' ')
      .map((word, index) => index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1))
      .join('');
  }
}
