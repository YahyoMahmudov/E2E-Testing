import { Locator, Page, expect } from '@playwright/test';

export default class PlaywrightWrapper {
  constructor(private page: Page) {
    this.page = page;
  }

  async goto(url: string) {
    await this.page.goto(url, {
      waitUntil: 'domcontentloaded'
    });
  }

  async waitAndClick(locator: Locator) {
    await this.page.waitForLoadState('networkidle');

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
}