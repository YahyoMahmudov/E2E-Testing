import PlaywrightWrapper from '../helper/wrapper/playwrightWrappers';
import { Page } from '@playwright/test';
import AuthPage from './basicAuthPage';
import LoginPage from './loginPage';
import DashboardPage from './dashboardPage';
import ReportsPage from './reportsPage';

class BasePage {
  page = null;
  wrapper: PlaywrightWrapper;
  authPage: AuthPage;
  loginPage: LoginPage;
  dashboardPage: DashboardPage;
  reportsPage: ReportsPage;

  public createInstances(page: Page) {
    this.page = page;
    this.wrapper = new PlaywrightWrapper(page);
    this.authPage = new AuthPage(page);
    this.loginPage = new LoginPage(page);
    this.dashboardPage = new DashboardPage(page);
    this.reportsPage = new ReportsPage(page);
  }
}

const basePageInstance = new BasePage();
export default basePageInstance;
