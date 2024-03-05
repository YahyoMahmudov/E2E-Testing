import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { pageFixture } from '../../hooks/pageFixture';
import Assert from "../../helper/wrapper/assert";
import AuthPage from '../../pages/basicAuthPage';
import LoginPage from '../../pages/loginPage';

let authPage: AuthPage;
let loginPage: LoginPage;
let assert: Assert;

Given('User passes the authorization', async function () {
  authPage = new AuthPage(pageFixture.page);
  assert = new Assert(pageFixture.page);
  await authPage.authorizeUser();
  await assert.assertTitleContains("Core Ad Manager");
});

Given('User clicks Log in button', async function () {
  loginPage = new LoginPage(pageFixture.page);
  await loginPage.clickLogInButton();
});

When('User enters email', async function () {
  await loginPage.enterEmail(process.env.ADMIN_EMAIL);
});

When('User clicks Log in with email button', async function () {
  await loginPage.clickSubmitButton();
});

When('User enters password', async function () {
  await loginPage.enterPassword(process.env.ADMIN_PASSWORD);
});

When('User clicks Submit button', async function () {
  await loginPage.clickSubmitButton();
});

Then('User is in Dashboard page', async function () {
  await pageFixture.page.waitForTimeout(2000);
  await assert.assertTitleContains("Dashboard");
});
