import { expect, Locator, Page } from '@playwright/test';
import PlaywrightWrapper from '../helper/wrapper/playwrightWrappers';

export default class PromoCodePage {
  private base: PlaywrightWrapper;

  constructor(private page: Page) {
    this.base = new PlaywrightWrapper(page);
  }

  newPromoCodeButton = this.page.locator("(//div[@class='control-item']//button)[2]");
  channelListDropdown = this.page.locator("(//span[@class='el-input__suffix-inner']//i)[3]");
  discountTypeDropdown =this.page.locator("(//span[text()='Discount type *']/following::input)[2]")
  promoCodeInput = this.page.locator("(//span[text()='Code *']/following::input)[1]")
  startDateInput = this.page.locator("(//span[text()='Start date *']/following::input)[2]")
  endDateInput = this.page.locator("(//span[text()='End date *']/following::input)[2]")
  discountValueInput  = this.page.locator("(//span[text()='Discount value *']/following::input)[1]")
  minBudgetInput =this.page.locator("(//span[text()='Min budget *']/following::input)[1]")
  maxBudgetInput = this.page.locator("(//span[text()='Max budget *']/following::input)[1]")
  currencyListDropdown = this.page.locator("(//span[text()='Currency *']/following::input)[2]")
  theCodeCanBeUsed = this.page.locator("(//span[text()='The code can be used *']/following::input)[1]")
  saveButton =this.page.locator("//span[text()=' Save ']")
  activeButton =  this.page.locator("(//i[@class='icon-play'])[1]")
  hoverLocator = this.page.locator("(//td[contains(@class,'el-table_1_column_7 ')]//div)[1]")
  publishButton = this.page.locator("//span[text()=' Ok ']")

  public generateUniquePromoCodeName() {
    const currentDate = new Date();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const day = currentDate.getDate().toString().padStart(2, '0');
    const year = currentDate.getFullYear().toString().slice(-2);
    const hour = currentDate.getHours().toString().padStart(2, '0');
    const minute = currentDate.getMinutes().toString().padStart(2, '0');
    const promoCode = `AU${month}${day}${year}${hour}${minute}`;
    return promoCode;
  }

  public setPromoCodeDate() {
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let today = new Date();
    let month = months[today.getMonth()];
    let day = today.getDate();
    let year = today.getFullYear();
    return month + ' ' + day + ', ' + year;
  }

  public async hoverOverElementAndClickButton(): Promise<void> {
    await this.hoverLocator.waitFor();
    await this.hoverLocator.hover();
    await this.activeButton.waitFor();
    await this.activeButton.click();
  }

  public selectOption(option: string): Locator {
    return  this.page.locator(`(//span[text()='${option}'])`)
  }
  public promoCodeCurrency(option: string): Locator {
    return  this.page.locator(`(//span[text()='${option}'])[2]`)
  }
}
export const { getPromoCode, setPromoCode } = (function promoCodeCache() {
  let promoCode = null;

  return {
    setPromoCode: (newPromoCode: string | null) => (promoCode = newPromoCode),
    getPromoCode: () => promoCode
  };
})()