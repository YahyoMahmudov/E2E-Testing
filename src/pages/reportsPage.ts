import { Page, Keyboard } from '@playwright/test';
import PlaywrightWrapper from '../helper/wrapper/playwrightWrappers';

export default class ReportsPage {
  private base: PlaywrightWrapper;

  constructor(private page: Page) {
    this.base = new PlaywrightWrapper(page);
  }

  newReportBtn = this.page.locator("//button//span[text()=' New Report ']");
  reportsLabel = this.page.locator("//div[text()=' Report details ']");
  advertisersBtn = this.page.locator("//div[@data-element='radio-group-report-general-section']/*[1]/label");
  ordersBtn = this.page.locator("//div[@data-element='radio-group-report-general-section']/*[2]/label");
  campaignsBtn = this.page.locator("//div[@data-element='radio-group-report-general-section']/*[3]/label");
  reportNameInput = this.page.locator("//input[@name='Report name']");
  dateFormatInput = this.page.locator("//input[@name='Date format' and @class='el-input__inner']");
  companiesInput = this.page.locator("(//div[@data-element='publisher-report-company']//input)[1]");
  startDateInput = this.page.locator("//input[@name='T']");
  endDateInput = this.page.locator("//input[@name='T']");
  exportOptionsInput = this.page.locator("//input[@name='Export options' and @class='el-input__inner']");
  saveBtn = this.page.locator("//button//span[text()=' Save ']");
  lastWeek = this.page.locator("//button[text()='Last week']");
  lastMonth = this.page.locator("//button[text()='Last Month']");
  last3Month = this.page.locator("//button[text()='Last 3 months']");
  allPeriod = this.page.locator("//button[text()='All period']");
  statusLabel = this.page.locator('//tbody//tr[1]/td[7]/*');

  async selectReportType(type: string) {
    switch (type) {
      case 'Advertisers': {
        await this.base.waitAndClick(this.advertisersBtn);
        break;
      }
      case 'Orders': {
        await this.base.waitAndClick(this.ordersBtn);
        break;
      }
      case 'Campaigns': {
        await this.base.waitAndClick(this.campaignsBtn);
        break;
      }
      default: {
        console.error(`Unsupported report type: ${type}`);
        break;
      }
    }
  }

  async selectDropdownOption(format: string) {
    await this.base.waitAndClick(this.page.locator(`//span[contains(text(),'${format}')]`));
  }

  async selectReportDate(date: string) {
    switch (date) {
      case 'week': {
        await this.base.waitAndClick(this.lastWeek);
        break;
      }
      case 'month': {
        await this.base.waitAndClick(this.lastMonth);
        break;
      }
      case '3 month': {
        await this.base.waitAndClick(this.last3Month);
        break;
      }
      case 'all': {
        await this.base.waitAndClick(this.allPeriod);
        break;
      }
      default: {
        console.error(`Unsupported report type: ${date}`);
        break;
      }
    }
  }
}
