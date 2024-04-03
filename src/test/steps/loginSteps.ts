import { Given, When } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import basePage from '../../pages/basePage';

Given('User passes the authorization on {string}', async function (page) {
  const [pageType] = await basePage.wrapper.toCamelCase(page);
  await basePage[pageType].authorizeUser();

  const isPageTitleCorrect = await basePage.wrapper.verifyPageTitle('Core Ad Manager');
  expect(isPageTitleCorrect).not.toBe(false);
});

Given('User is in {string} page', async function (pageTitle) {
  const isPageTitleCorrect = await basePage.wrapper.verifyPageTitle(pageTitle);
  expect(isPageTitleCorrect).not.toBe(false);
});

When('User logins as a {string}', async function (userRole: string) {
  await basePage.loginPage.logIn(userRole);
});