import {Given, When, Then} from '@cucumber/cucumber';
import {pageFixture} from '../../hooks/pageFixture';
import {expect} from '@playwright/test';
import AuthPage from '../../pages/basicAuthPage';
import LoginPage from '../../pages/loginPage';
//import { loginPage } from '../../pages/pageInstance';
//import { authPage } from '../../pages/pageInstance';
let authPage: AuthPage;
let loginPage: LoginPage;

Given('User passes the authorization', async function () {
  authPage = new AuthPage(pageFixture.page);
  await authPage.authorizeUser();

  const pageTitle = await pageFixture.page.title();
  expect(pageTitle).toContain('Core Ad Manager');
});

Given('User clicks Log in button', async function () {
  loginPage = new LoginPage(pageFixture.page);
  console.log(loginPage.elements.logInBtn);

  await pageFixture.page.waitForSelector(loginPage.elements.logInBtn, {timeout: 30000});
  await pageFixture.page.locator(loginPage.elements.logInBtn).click();
});

When('User enters email', async function () {
  await pageFixture.page.waitForSelector(loginPage.elements.emailInput, {timeout: 30000});
  await pageFixture.page.locator(loginPage.elements.emailInput).fill(process.env.ADMIN_EMAIL);
});

When('User clicks Log in with email button', async function () {
  await pageFixture.page.waitForSelector(loginPage.elements.submitBtn, {timeout: 30000});
  await pageFixture.page.locator(loginPage.elements.submitBtn).click();
});

When('User enters password', async function () {
  await pageFixture.page.waitForSelector(loginPage.elements.passwordInput, {timeout: 30000});
  await pageFixture.page.locator(loginPage.elements.passwordInput).fill(process.env.ADMIN_PASSWORD);
});

When('User clicks Submit button', async function () {
  await pageFixture.page.waitForSelector(loginPage.elements.submitBtn, {timeout: 30000});
  await pageFixture.page.locator(loginPage.elements.submitBtn).click();
});

Then('User is in Dashboard page', async function () {
  await pageFixture.page.waitForURL(process.env.DASHBOARD_PAGE_URL, {timeout: 30000});
  const pageTitle = await pageFixture.page.title();
  expect(pageTitle).toContain('Dashboard');
});
