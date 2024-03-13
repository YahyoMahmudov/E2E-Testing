import {Given, When, Then} from '@cucumber/cucumber';
import {expect} from '@playwright/test';
import basePage from '../../pages/basePage';

Given('User passes the authorization', async function () {
  await basePage.authPage.authorizeUser();

  const pageTitle = await basePage.page.title();
  expect(pageTitle).toContain('Core Ad Manager');
});

Given('User clicks Log in button', async function () {
  await basePage.wrapper.waitAndClick(basePage.loginPage.logInBtn);
});

When('User enters email', async function () {
  await basePage.wrapper.waitForUrl(process.env.LOGIN_PAGE_URL);
  await basePage.wrapper.type(basePage.loginPage.emailInput, process.env.ADMIN_EMAIL);
});

When('User clicks Log in with email button', async function () {
  await basePage.wrapper.waitAndClick(basePage.loginPage.submitBtn);
});

When('User enters password', async function () {
  await basePage.wrapper.type(basePage.loginPage.passwordInput, process.env.ADMIN_PASSWORD);
});

When('User clicks Submit button', async function () {
  await basePage.wrapper.waitAndClick(basePage.loginPage.submitBtn);
});

Then('User is in Dashboard page', async function () {
  await basePage.wrapper.waitForUrl(process.env.DASHBOARD_PAGE_URL);

  const pageTitle = await basePage.page.title();
  expect(pageTitle).toContain('Dashboard');
});