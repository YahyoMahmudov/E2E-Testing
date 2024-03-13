import PlaywrightWrapper from '../helper/wrapper/playwrightWrappers';
import {pageFixture} from '../hooks/pageFixture';
import AuthPage from './basicAuthPage';
import LoginPage from './loginPage';

class BasePage {
  wrapper: PlaywrightWrapper;
  authPage: AuthPage;
  loginPage: LoginPage;

  public createInstances() {
    this.wrapper = new PlaywrightWrapper(pageFixture.page);
    this.authPage = new AuthPage(pageFixture.page);
    this.loginPage = new LoginPage(pageFixture.page);
  }
}

const basePageInstance = new BasePage();
export default basePageInstance;
