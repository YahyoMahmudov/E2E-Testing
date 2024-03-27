import PlaywrightWrapper from '../helper/wrapper/playwrightWrappers';
import { Page } from '@playwright/test';
import AuthPage from './basicAuthPage';
import LoginPage from './loginPage';
import SignUpPage from './signUp';

class BasePage {
  page = null;
  wrapper: PlaywrightWrapper;
  authPage: AuthPage;
  loginPage: LoginPage;
  signUpPage: SignUpPage;

  public createInstances(page: Page) {
    this.page = page;
    this.wrapper = new PlaywrightWrapper(page);
    this.authPage = new AuthPage(page);
    this.loginPage = new LoginPage(page);
    this.signUpPage = new SignUpPage(page);
  }
}

const basePageInstance = new BasePage();
export default basePageInstance;