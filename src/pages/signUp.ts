import { Locator, Page } from '@playwright/test';
import PlaywrightWrapper from '../helper/wrapper/playwrightWrappers';
import basePage from './basePage';

export default class SignUpPage {
  private base: PlaywrightWrapper;

  constructor(private page: Page) {
    this.base = new PlaywrightWrapper(page);
  }

  getStartBtn: Locator = this.page.locator("(//span[text()='Get started'])[1]");
  registerWithEmailBtn: Locator = this.page.locator("//span[text()=' Register with email ']");

  async navigateToRegisterPage() {
    await this.base.waitAndClick(basePage.signUpPage.getStartBtn);
    await this.base.waitAndClick(basePage.signUpPage.registerWithEmailBtn);
  }

  async typeIntoInput(inputLocator: Locator, text: string) {
    await this.base.type(inputLocator, text);
  }

  async selectDropdown(dropdownLocator: Locator, optionLocator: Locator) {
    await this.base.waitAndClick(dropdownLocator);
    await this.base.waitAndClick(optionLocator);
  }

  async clickElements(...locators: Locator[]) {
    for (const locator of locators) {
      await this.base.waitAndClick(locator);
    }
  }

  fullNameInput: Locator = this.page.locator("(//input[@class='el-input__inner'])[1]");
  companyName: Locator = this.page.locator("(//input[@class='el-input__inner'])[2]");
  companyEmail: Locator = this.page.locator("(//input[@class='el-input__inner'])[3]");
  confirmEmail: Locator = this.page.locator("//input[@data-element='email_confirm']");
  openCountryList: Locator = this.page.locator("(//i[contains(@class,'el-select__caret el-input__icon')])[1]");
  chooseCountry: Locator = this.page.locator("//span[text()='Uzbekistan']");
  openCurrencyList: Locator = this.page.locator("(//input[@name='currency'])[2]");
  chooseCurrency: Locator = this.page.locator("//span[text()='USD']");
  openIndustryList: Locator = this.page.locator("(//span[text()='Industry']/following::input)[2]");
  chooseIndustry: Locator = this.page.locator("//span[text()='Shopping']");
  phoneNumber: Locator = this.page.locator("(//span[text()='Phone']/following::input)[1]");
  firstCheckbox: Locator = this.page.locator("(//span[@class='el-checkbox__inner'])[1]");
  secondCheckbox: Locator = this.page.locator("(//span[@class='el-checkbox__inner'])[2]");
  registerButton: Locator = this.page.locator("//button[contains(@class,'el-button el-button--primary')]");
  accountDetailsLabel: Locator = this.page.locator("(//span[text()='Account details Label *']/following::input)[1]");
  companyDetailsLabel: Locator = this.page.locator("(//span[text()='Company details Label *']/following::input)[1]");



  async registerUser() {
    const randomNumber = Math.floor(Math.random() * 1000);
    const email = `${process.env.EMAIL_FOR_SET_PASSWORD}+${randomNumber}@gmail.com`;

    await this.typeIntoInput(this.accountDetailsLabel, 'Test');
    await this.typeIntoInput(this.companyDetailsLabel, 'Test');
    await this.typeIntoInput(this.fullNameInput, 'Test name');
    await this.typeIntoInput(this.companyName, 'Test Company');
    await this.typeIntoInput(this.companyEmail, email);
    await this.typeIntoInput(this.confirmEmail, email);
    await this.selectDropdown(this.openCountryList, this.chooseCountry);
    await this.selectDropdown(this.openCurrencyList, this.chooseCurrency);
    await this.selectDropdown(this.openIndustryList, this.chooseIndustry);
    await this.typeIntoInput(this.phoneNumber, '12345678');
    await this.clickElements(this.firstCheckbox, this.secondCheckbox, this.registerButton);
  }
  successMessage: Locator = this.page.locator('.open-access__title');

  async getSuccessMessage(): Promise<boolean> {
    return await this.successMessage.isVisible();
  }
}