import { Page, expect } from '@playwright/test';
import PlaywrightWrapper from '../helper/wrapper/playwrightWrappers';
import basePage from './basePage';


export default class SignUpPage {
  private base: PlaywrightWrapper;

  constructor(private page: Page) {
    this.base = new PlaywrightWrapper(page);
  }
  getStartBtn = this.page.locator("(//span[text()='Get started'])[1]");
  registerWithEmailBtn = this.page.locator('//span[text()=\' Register with email \']');

  async navigateToRegisterPage() {
    await this.base.waitAndClick(basePage.signUpPage.getStartBtn);
    await this.base.waitAndClick(basePage.signUpPage.registerWithEmailBtn);
  }

  async registerUser() {
    const email = process.env.EMAIL_FOR_SET_PASSWORD
    let fullNameInput = this.page.locator("(//input[@class='el-input__inner'])[1]")
    let companyName =this.page.locator("(//input[@class='el-input__inner'])[2]")
    let companyEmail = this.page.locator("(//input[@class='el-input__inner'])[3]")
    let confirmEmail = this.page.locator("//input[@data-element='email_confirm']")
    let selectCountry = this.page.locator("(//i[contains(@class,'el-select__caret el-input__icon')])[1]")
    let chooseCountry = this.page.locator("//span[text()='Uzbekistan']")
    let defaultCurrency = this.page.locator("(//input[@name='currency'])[2]")
    let chooseCurrency = this.page.locator("//span[text()='USD']")
    let industry = this.page.locator("(//span[text()='Industry']/following::input)[2]")
    let chooseindustry = this.page.locator("//span[text()='Shopping']")
    let phoneNumber = this.page.locator("(//span[text()='Phone']/following::input)[1]")
    let firstCheckbox = this.page.locator("(//span[@class='el-checkbox__inner'])[1]")
    let secondCheckbox = this.page.locator("(//span[@class='el-checkbox__inner'])[2]")
    let registerButton = this.page.locator("//button[contains(@class,'el-button el-button--primary')]")


    await this.base.type(fullNameInput, 'Test name');
    await this.base.type(companyName, 'Test Company');
    await this.base.type(companyEmail, email);
    await this.base.type(confirmEmail,email )
    await this.base.waitAndClick(selectCountry)
    await this.base.waitAndClick(chooseCountry)
    await this.base.waitAndClick(defaultCurrency)
    await this.base.waitAndClick(chooseCurrency)
    await this.base.waitAndClick(industry)
    await this.base.waitAndClick(chooseindustry)
    await this.base.type(phoneNumber, '12345678')
    await (firstCheckbox).check()
    await (secondCheckbox).check()
    await this.base.waitAndClick(registerButton)
  }

}
