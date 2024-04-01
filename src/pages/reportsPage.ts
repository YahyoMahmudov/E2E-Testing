import { Page, Keyboard } from '@playwright/test';
import PlaywrightWrapper from '../helper/wrapper/playwrightWrappers';

export default class ReportsPage {
  private base: PlaywrightWrapper;

  constructor(private page: Page) {
    this.base = new PlaywrightWrapper(page);
  }

  newReportButton = this.page.locator("//button//span[text()=' New Report ']");
  reportsLabel = this.page.locator("//div[text()=' Report details ']");
  advertisersButton = this.page.locator("//div[@data-element='radio-group-report-general-section']/*[1]/label");
  reportNameInput = this.page.locator("//input[@name='Report name']");
  dateFormatDropdown = this.page.locator("//input[@name='Date format' and @class='el-input__inner']");
  companiesInput = this.page.locator("(//div[@data-element='publisher-report-company']//input)[1]");
  timePeriodDropdown = this.page.locator("//input[@name='T']");
  exportOptionDropdown = this.page.locator("//input[@name='Export options' and @class='el-input__inner']");
  monthDayYearOption = this.page.locator("//span[contains(text(),'MM/DD/YYYY')]");
  directOption = this.page.locator("//span[contains(text(),'Direct')]");
  saveButton = this.page.locator("//button//span[text()=' Save ']");
  lastWeekOption = this.page.locator("//button[text()='Last week']");
  statusLabel = this.page.locator('//tbody//tr[1]/td[7]/*');
}
