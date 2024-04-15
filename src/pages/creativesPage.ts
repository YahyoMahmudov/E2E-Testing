import { Page } from '@playwright/test';
import PlaywrightWrapper from '../helper/wrapper/playwrightWrappers';

export default class CreativesPage {
  private base: PlaywrightWrapper;

  constructor(private page: Page) {
    this.base = new PlaywrightWrapper(page);
  }

  newCreativeButton = this.page.locator("//span[text()=' New Creative ']");
  buildYourCreativeButton = this.page.locator("//p[text()=' Build your Creative ']");
  nextButton = this.page.locator("//button[.='Next']");
  fileUploadInput = this.page.locator("//input[@name='file']");
  creativeNameInput = this.page.locator("//input[@name='name']");
  destinationUrlInput = this.page.locator("//input[@name='destination_url']");
  advertiserNameInput = this.page.locator("//textarea[@name='AdvertiserName']");
  captionInput = this.page.locator("//textarea[@name='Caption']");
  callToActionDropdown = this.page.locator("//div[@data-test='CalltoactionType']");
  learMoreOption = this.page.locator("//li[.='Learn More']");
  completeButton = this.page.locator("//button[.='Complete']");
  nativeCreative = this.page.locator("//tr/td[.='Native']");
  creativesTab = this.page.locator("//div[@id='tab-creatives']");
  previewPage = this.page.locator("//div[@class='preview-layout tile-panel__col tile-panel__col--preview is-wide']");

  async addNativeCreative(params:string){
    await this.base.waitAndClick(this.buildYourCreativeButton);

    await this.fileUploadInput.setInputFiles("C:/Users/Admin/OneDrive/Pictures/coffee_logo.jpg");
    await this.base.waitForElementVisible(this.previewPage);
    await this.base.waitAndClick(this.nextButton);

    await this.fileUploadInput.setInputFiles("C:/Users/Admin/OneDrive/Pictures/main_page.jpg");
    await this.base.waitForElementVisible(this.previewPage);
    await this.base.waitAndClick(this.nextButton);

    const keys = Object.keys(params);
    const actionValue = this.page.locator(`//li[.='${params[keys[4]]}']`);

    await this.base.type(this.creativeNameInput, params[keys[0]]);
    await this.base.type(this.destinationUrlInput, params[keys[1]]);
    await this.base.type(this.advertiserNameInput, params[keys[2]]);
    await this.base.type(this.captionInput, params[keys[3]]);
    await this.base.waitAndClick(this.callToActionDropdown);
    await this.base.waitAndClick(actionValue);

    await this.base.waitAndClick(this.completeButton);
  }
}