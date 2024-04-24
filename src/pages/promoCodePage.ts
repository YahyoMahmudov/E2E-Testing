import { expect, Locator, Page } from '@playwright/test';
import PlaywrightWrapper from '../helper/wrapper/playwrightWrappers';
import { dataUtil } from '../utils/dateUtil';

export default class PromoCodePage {
  private base: PlaywrightWrapper;

  constructor(private page: Page) {
    this.base = new PlaywrightWrapper(page);
  }

  newPromoCodeButton = this.page.locator("(//div[@class='control-item']//button)[2]");
  channelListDropdown = this.page.locator("(//span[@class='el-input__suffix-inner']//i)[3]");
  discountTypeDropdown = this.page.locator("(//span[text()='Discount type *']/following::input)[2]");
  promoCodeInput = this.page.locator("(//span[text()='Code *']/following::input)[1]");
  startDateInput = this.page.locator("(//span[text()='Start date *']/following::input)[2]");
  endDateInput = this.page.locator("(//span[text()='End date *']/following::input)[2]");
  discountValueInput = this.page.locator("(//span[text()='Discount value *']/following::input)[1]");
  minBudgetInput = this.page.locator("(//span[text()='Min budget *']/following::input)[1]");
  maxBudgetInput = this.page.locator("(//span[text()='Max budget *']/following::input)[1]");
  currencyListDropdown = this.page.locator("(//span[text()='Currency *']/following::input)[2]");
  codeCanBeUsedInput = this.page.locator("(//span[text()='The code can be used *']/following::input)[1]");
  saveButton = this.page.locator("//span[text()=' Save ']");
  activeButton = this.page.locator("(//i[@class='icon-play'])[1]");
  hoverLocator = this.page.locator("(//td[contains(@class,'el-table_1_column_7 ')]//div)[1]");
  publishButton = this.page.locator("//span[text()=' Ok ']");

  public async hoverOverAndClickActiveButton(): Promise<void> {
    await this.hoverLocator.waitFor();
    await this.hoverLocator.hover();
    await this.activeButton.waitFor();
    await this.activeButton.click();
  }

  public generateUniquePromoCodeName() {
    return `AU${new Date().valueOf().toString().substring(5)}`;
  }

  async selectChannelsList(option: string) {
    const channelList = this.page.locator(`(//span[text()='${option}'])`);
    await this.base.waitAndClick(channelList);
  }

  async selectPromoCodeCurrency(option: string) {
    const promocodeCurrency = this.page.locator(`(//span[text()='${option}'])[2]`);
    await this.base.waitAndClick(promocodeCurrency);
  }
}

export const { getPromoCode, setPromoCode } = (function promoCodeCache() {
  let promoCode = null;
  return {
    setPromoCode: (newPromoCode: string | null) => (promoCode = newPromoCode),
    getPromoCode: () => promoCode
  };
})();