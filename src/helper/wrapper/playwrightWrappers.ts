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

    await locator.clear();
    await locator.fill(word);
  }

  async navigateTo(link: string) {
    await Promise.all([this.page.waitForNavigation(), this.page.click(link)]);
  }

  async waitForUrl(link: string) {
    await this.page.waitForURL(link, { timeout: 60000 });
  }

  async pressKeyboard(button: string) {
    await this.page.keyboard.press(button);
  }

  async verifyPageTitle(title: string): Promise<boolean> {
    try {
      await this.page.waitForFunction(`document.title.includes('${title}')`, { timeout: 10000 });
      return true;
    } catch (error) {
      return false;
    }
  }

  async waitForElementTextVisible(element: Locator, expectedText: string): Promise<boolean> {
    const isTextMatch = async () => {
      if (!element) return false;
      const elementText = await element.innerText();
      return elementText.trim() === expectedText;
    };

    const timeout = 30000;
    const interval = 1000;

    let elapsedTime = 0;
    while (elapsedTime < timeout) {
      if (await isTextMatch()) {
        return true;
      }
      await this.page.waitForTimeout(interval);
      elapsedTime += interval;
    }

    return false;
  }

  toCamelCase(...inputs: string[]): string[] {
    return inputs.map((input) =>
      input
        .toLowerCase()
        .split(' ')
        .map((word, index) => (index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)))
        .join('')
    );
  }

  async waitForElementVisible(locator: Locator, timeout: number = 30000): Promise<void> {
    try {
      await locator.waitFor({ state: 'visible', timeout });
    } catch (error) {
      throw new Error(`Element ${locator} did not become visible within ${timeout} milliseconds.`);
    }
  }
}