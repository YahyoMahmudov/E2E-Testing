import { Page } from '@playwright/test';
import PlaywrightWrapper from '../helper/wrapper/playwrightWrappers';

export default class CampaignWizardPage {
  private base: PlaywrightWrapper;

  constructor(private page: Page) {
    this.base = new PlaywrightWrapper(page);
  }

  advertiserType = this.page.locator("//label/*[.=' Direct Advertiser ']");
  companyNameInput = this.page.locator("//input[@name='select_advertiser']");
  campaignNameInput = this.page.locator("//input[@name='campaign_name']");
  ymCompany = this.page.locator("//li/*[.='YM']");
  nextButton = this.page.locator("//button[.=' Next ']");
  creativesCampaignType = this.page.locator("//div[.=' Creatives ']");
  displayCreativeCategory = this.page.locator("(//div[.=' Display '])[2]");
  yahyaTestProduct = this.page.locator("//h3[.=' Yahya_Test ']");
  totalBudgetInput = this.page.locator("//input[@placeholder='Add Budget']");
  addCreativeLaterButton = this.page.locator("//button[.=' Add Creative Later ']");
  poNumberInput = this.page.locator("//input[@name='po_number']");
  checkoutButton = this.page.locator("//button[.=' Checkout ']");
}