import { Page } from '@playwright/test';
import PlaywrightWrapper from '../helper/wrapper/playwrightWrappers';

export default class DashboardPage {
  private base: PlaywrightWrapper;

  constructor(private page: Page) {
    this.base = new PlaywrightWrapper(page);
  }

  reportsTab = this.page.locator("//i/following-sibling::span[.='Reports']");
  settingsTab = this.page.locator("//li[@class='el-menu-item can_publisher_settings']//a[1]");
  dashboardTab = this.page.locator("(//a[@data-element='link-layout-navigation-menu'])[1]");
  createCampaignButton = this.page.locator("//button[.=' Create Campaign ']");
}