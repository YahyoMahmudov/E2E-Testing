import { Page, Keyboard } from '@playwright/test';
import PlaywrightWrapper from '../helper/wrapper/playwrightWrappers';

export default class ReportsPage {
  private base: PlaywrightWrapper;

  constructor(private page: Page) {
    this.base = new PlaywrightWrapper(page);
  }

  newReportButton = this.page.locator("//button//span[text()=' New Report ']");
  reportsLabel = this.page.locator("//div[text()=' Report details ']");
  advertisersBtn = this.page.locator("//div[@data-element='radio-group-report-general-section']/*[1]/label");
  reportNameInput = this.page.locator("//input[@name='Report name']");
  dateFormatInput = this.page.locator("//input[@name='Date format' and @class='el-input__inner']");
  companiesInput = this.page.locator("(//div[@data-element='publisher-report-company']//input)[1]");
  startDateInput = this.page.locator("//input[@name='T']");
  endDateInput = this.page.locator("//input[@name='T']");
  exportOptionsInput = this.page.locator("//input[@name='Export options' and @class='el-input__inner']");
  dateFormatMM = this.page.locator("//span[contains(text(),'MM/DD/YYYY')]");
  exportOptionDirect = this.page.locator("//span[contains(text(),'Direct')]");
  saveButton = this.page.locator("//button//span[text()=' Save ']");
  lastWeek = this.page.locator("//button[text()='Last week']")
  statusLabel = this.page.locator('//tbody//tr[1]/td[7]/*');

  async selectReportOption(optionValue: string, optionType: string) {
    const optionMap = {
      reportType: {
        'Advertisers': { option: this.advertisersBtn }
      },
      dateFormat: {
        'MM/DD/YYYY': { option: this.dateFormatMM, button: this.dateFormatInput }
      },
      timePeriod: {
        'week': { option: this.lastWeek, button: this.startDateInput },
      },
      exportOption: {
        'Direct' : { option: this.exportOptionDirect, button: this.exportOptionsInput }
      }
    };

    try {
      const type = await this.base.toCamelCase(optionType);
      const selectors = optionMap[type];
      if (selectors && selectors[optionValue]) {
        const { option, button } = selectors[optionValue];
        if (button) {
          await this.base.waitAndClick(button);
        }
        await this.base.waitAndClick(option); 
      } else {
        console.error(`Unsupported option type: ${optionType} or value: ${optionValue}`);
      }
    } catch (error) {
      console.error(`Failed to select option: ${optionType} - ${optionValue}`, error);
    }
  }
}
