import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import basePage from '../../pages/basePage';

Given('User passes the authorization', async function () {
  await basePage.authPage.authorizeUser();

  const pageTitle = await basePage.page.title();
  expect(pageTitle).toContain('Core Ad Manager');
});

Given('User is in landing page', async function () {
  const pageTitle = await basePage.page.title();
  expect(pageTitle).toContain('Core Ad Manager');
});

When('User logins as a {string}', async function (userRole: string) {
  await basePage.loginPage.logIn(userRole);
});

Then('User is in Dashboard page', async function () {
  await basePage.wrapper.waitForUrl(process.env.DASHBOARD_PAGE_URL);

  const pageTitle = await basePage.page.title();
  expect(pageTitle).toContain('Dashboard');
});