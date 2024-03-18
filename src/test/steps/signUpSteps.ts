import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import basePage from '../../pages/basePage';

Given('User passes the authorization', async function () {
  await basePage.authPage.authorizeUser();
});

Given('User is in landing page', async function () {
  const pageTitle = await basePage.page.title();
  expect(pageTitle).toContain('Core Ad Manager');
});

When('User clicks navigate to sign up page', async function () {
  await basePage.signUpPage.navigateToRegisterPage();
});

When('I fill out the account registration form with valid information', async function () {
  await basePage.signUpPage.registerUser();
});
