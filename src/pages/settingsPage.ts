import { expect, Page } from '@playwright/test';
import PlaywrightWrapper from '../helper/wrapper/playwrightWrappers';

export default class SettingsPage {
  private base: PlaywrightWrapper;

  constructor(private page: Page) {
    this.base = new PlaywrightWrapper(page);
  }

  promoCodesTab = this.page.locator("(//div[contains(@class,'el-tabs__item is-left')])[2]");
}