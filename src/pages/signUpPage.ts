import { Locator, Page } from '@playwright/test';
import PlaywrightWrapper from '../helper/wrapper/playwrightWrappers';

export default class SignUpPage {
  private base: PlaywrightWrapper;

  constructor(private page: Page) {
    this.base = new PlaywrightWrapper(page);
  }
  fullNameInput = this.page.locator("(//input[@class='el-input__inner'])[1]");
  companyNameInput = this.page.locator("(//input[@class='el-input__inner'])[2]");
  companyEmailInput = this.page.locator("(//input[@class='el-input__inner'])[3]");
  confirmEmailInput = this.page.locator("//input[@data-element='email_confirm']");
  country = this.page.locator("(//i[contains(@class,'el-select__caret el-input__icon')])[1]");
  countryList = this.page.locator("(//ul[@class='el-scrollbar__view el-select-dropdown__list'])[3]");
  currency = this.page.locator("(//input[@name='currency'])[2]");
  currencyList = this.page.locator("(//ul[@class='el-scrollbar__view el-select-dropdown__list'])[3]");
  industry = this.page.locator("(//span[text()='Industry']/following::input)[2]");
  industrylist = this.page.locator("(//ul[@class='el-scrollbar__view el-select-dropdown__list'])[3]");
  phoneNumberInput = this.page.locator("(//span[text()='Phone']/following::input)[1]");
  termsAndConditions = this.page.locator("(//span[@class='el-checkbox__inner'])[1]");
  privacyPolicy = this.page.locator("(//span[@class='el-checkbox__inner'])[2]");
  registerButton = this.page.locator("//button[contains(@class,'el-button el-button--primary')]");
  accountDetailsInput = this.page.locator("(//span[text()='Account details Label *']/following::input)[1]");
  companyDetailsInput = this.page.locator("(//span[text()='Company details Label edited *']/following::input)[1]");
  successMessage = this.page.locator('.open-access__title');
  public selectOption(option: string): Locator {
    return this.page.locator(`//ul/li/span[text()='${option}']`);
  }
}