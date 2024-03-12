import {Given, When, Then} from '@cucumber/cucumber';
import {pageFixture} from '../../hooks/pageFixture';
import {expect} from '@playwright/test';
import basePage from '../../pages/basePage';

Given('User passes the authorization', async function () {
  await basePage.authPage.authorizeUser();

  const pageTitle = await pageFixture.page.title();
  expect(pageTitle).toContain('Core Ad Manager');
});

Given('User clicks Log in button', async function () {
  await basePage.loginPage.logInBtn.waitFor({state: 'visible', timeout: 30000});
  await basePage.loginPage.logInBtn.click();
});

When('User enters email', async function () {
  await basePage.loginPage.emailInput.waitFor({state: 'visible', timeout: 30000});
  await basePage.loginPage.emailInput.fill(process.env.ADMIN_EMAIL);
});

When('User clicks Log in with email button', async function () {
  await basePage.loginPage.emailInput.waitFor({state: 'visible', timeout: 30000});
  await basePage.loginPage.submitBtn.click();
});

When('User enters password', async function () {
  await basePage.loginPage.passwordInput.waitFor({state: 'visible', timeout: 30000});
  await basePage.loginPage.passwordInput.fill(process.env.ADMIN_PASSWORD);
});

When('User clicks Submit button', async function () {
  await basePage.loginPage.submitBtn.waitFor({state: 'visible', timeout: 30000});
  await basePage.loginPage.submitBtn.click();
});

Then('User is in Dashboard page', async function () {
  await pageFixture.page.waitForURL(process.env.DASHBOARD_PAGE_URL, {timeout: 30000});
  const pageTitle = await pageFixture.page.title();
  expect(pageTitle).toContain('Dashboard');
});