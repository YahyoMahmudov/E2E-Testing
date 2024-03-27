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
  fullNameInput: Locator = this.page.locator("(//input[@class='el-input__inner'])[1]");
  companyName: Locator = this.page.locator("(//input[@class='el-input__inner'])[2]");
  companyEmail: Locator = this.page.locator("(//input[@class='el-input__inner'])[3]");
  confirmEmail: Locator = this.page.locator("//input[@data-element='email_confirm']");
  openCountryList: Locator = this.page.locator("(//i[contains(@class,'el-select__caret el-input__icon')])[1]");
  openCurrencyList: Locator = this.page.locator("(//input[@name='currency'])[2]");
  openIndustryList: Locator = this.page.locator("(//span[text()='Industry']/following::input)[2]");
  phoneNumber: Locator = this.page.locator("(//span[text()='Phone']/following::input)[1]");
  firstCheckbox: Locator = this.page.locator("(//span[@class='el-checkbox__inner'])[1]");
  secondCheckbox: Locator = this.page.locator("(//span[@class='el-checkbox__inner'])[2]");
  registerButton: Locator = this.page.locator("//button[contains(@class,'el-button el-button--primary')]");
  accountDetailsLabel: Locator = this.page.locator("(//span[text()='Account details Label *']/following::input)[1]");
  companyDetailsLabel: Locator = this.page.locator("(//span[text()='Company details Label edited *']/following::input)[1]");
  successMessage: Locator = this.page.locator('.open-access__title');

  async navigateToRegisterPage() {
    await this.base.waitAndClick(basePage.signUpPage.getStartBtn);
    await this.base.waitAndClick(basePage.signUpPage.registerWithEmailBtn);
  }

  async typeIntoInput(inputLocator: Locator, text: string) {
    await this.base.type(inputLocator, text);
  }
  
  async clickElements(...locators: Locator[]) {
    for (const locator of locators) {
      await this.base.waitAndClick(locator);
    }
  }

  async genereteEmail(){
    const randomNumber = Math.floor(Math.random() * 1000);
    const email = `${process.env.EMAIL_FOR_SET_PASSWORD}+${randomNumber}@gmail.com`;
    await this.typeIntoInput(this.companyEmail, email);
    await this.typeIntoInput(this.confirmEmail, email);
  }

  async selectCountry( country){
    await this.base.waitAndClick(this.openCountryList);
    const option = this.page.locator(`//ul/li/span[text()='${country}']`);
    await this.base.waitAndClick(option);
  }
  async selectIndustry( industry){
    await this.base.waitAndClick(this.openIndustryList);
    const industryType = this.page.locator(`//ul/li/span[text()='${industry}']`);
    await this.base.waitAndClick(industryType);
  }
  
  async selectCurrency( currency){
    await this.base.waitAndClick(this.openCurrencyList);
    const currencyType = this.page.locator(`//ul/li/span[text()='${currency}']`);
    await this.base.waitAndClick(currencyType);
  }
  async fillInputs(FullName,CompanyName,PhoneNumber,CompanyDetails,AccountDetails) {
    await this.typeIntoInput(this.accountDetailsLabel, AccountDetails);
    await this.typeIntoInput(this.companyDetailsLabel, CompanyDetails);
    await this.typeIntoInput(this.fullNameInput, FullName);
    await this.typeIntoInput(this.companyName, CompanyName);
    await this.typeIntoInput(this.phoneNumber, PhoneNumber);
  }

  async agreePrivacyPolicy() {
    await this.clickElements(this.firstCheckbox, this.secondCheckbox);
  }

  async clickRegisterButton() {
    await this.clickElements(this.registerButton);
  }

  async getSuccessMessage(): Promise<boolean> {
    return await this.successMessage.isVisible();
  }
}