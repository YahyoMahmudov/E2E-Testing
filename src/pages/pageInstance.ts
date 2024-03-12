import {pageFixture} from '../hooks/pageFixture';
import AuthPage from '../pages/basicAuthPage';
import LoginPage from '../pages/loginPage';

export const authPage: AuthPage = new AuthPage(pageFixture.page);
export const loginPage: LoginPage = new LoginPage(pageFixture.page);
