import { pageFixture } from '../hooks/pageFixture';
import AuthPage from './basicAuthPage';
import LoginPage from './loginPage';

class BasePage {
    authPage: AuthPage;
    loginPage: LoginPage;

    public createInstances() {
        this.authPage = new AuthPage(pageFixture.page);
        this.loginPage = new LoginPage(pageFixture.page);
    }
}

const basePageInstance = new BasePage();
export default basePageInstance;