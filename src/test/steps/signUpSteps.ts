import { When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import basePage from '../../pages/basePage';

When('User navigates to sign up page', async function () {
  await basePage.signUpPage.navigateToRegisterPage();
});

When('User fill out the account registration form with valid information', async function () {
  await basePage.signUpPage.registerUser();
});

Then('User navigates to Login page', async function () {
  await basePage.wrapper.waitForUrl(process.env.LOGIN_PAGE_URL);
  const pageTitle = await basePage.page.title();
  expect(pageTitle).toContain('Login');
});
