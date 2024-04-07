import PlaywrightWrapper from '../helper/wrapper/playwrightWrappers';
import { Page } from '@playwright/test';
import AuthPage from './basicAuthPage';
import LoginPage from './loginPage';
import SignUpPage from './signUpPage';
import LandingPage from './landingPage';
import DashboardPage from './dashboardPage';
import ReportsPage from './reportsPage';
import SettingsPage from './settingsPage';
import PromoCodePage from './promoCodePage';
import CampaignWizardPage from './campaignWizard';

class BasePage {
  page = null;
  wrapper: PlaywrightWrapper;
  authPage: AuthPage;
  loginPage: LoginPage;
  signUpPage: SignUpPage;
  landingPage: LandingPage;
  dashboardPage: DashboardPage;
  reportsPage: ReportsPage;
  settingsPage: SettingsPage;
  promoCodePage: PromoCodePage;
  campaignWizardPage: CampaignWizardPage;

  public createInstances(page: Page) {
    this.page = page;
    this.wrapper = new PlaywrightWrapper(page);
    this.authPage = new AuthPage(page);
    this.loginPage = new LoginPage(page);
    this.signUpPage = new SignUpPage(page);
    this.landingPage = new LandingPage(page);
    this.dashboardPage = new DashboardPage(page);
    this.reportsPage = new ReportsPage(page);
    this.settingsPage = new SettingsPage(page);
    this.promoCodePage = new PromoCodePage(page)
    this.campaignWizardPage = new CampaignWizardPage(page)
  }
}

const basePageInstance = new BasePage();
export default basePageInstance;