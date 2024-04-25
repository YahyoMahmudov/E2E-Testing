import { expect, Page } from '@playwright/test';
import PlaywrightWrapper from '../helper/wrapper/playwrightWrappers';

export default class CampaignDetailsPage {
  private base: PlaywrightWrapper;

  constructor(private page: Page) {
    this.base = new PlaywrightWrapper(page);
  }
  optionsButton = this.page.locator("(//button[contains(@class,'el-button button-ui--icon')]//i)[2]");
  editButton = this.page.locator("//span[text()='Edit']");
  checkoutButton = this.page.locator("(//button[contains(@class,'el-button el-button--primary')]//span)[2]");
  addPromoCodeButton = this.page.locator("//button[contains(@class,'el-button button-ui--icon')]//i[1]");
  promoCodeInput = this.page.locator("//div[contains(@class,'el-input el-input-group')]//input[1]");
  applyButton = this.page.locator("//div[@class='el-input-group__append']//a[1]");
  discountInfoText = this.page.locator("(//span[@class='ui-money'])[3]");
}
