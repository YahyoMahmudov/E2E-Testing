import { When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import basePage from '../../pages/basePage';

When('User navigates to sign up page by clicking the sign-up button', async function () {
  await basePage.signUpPage.navigateToRegisterPage();
});

When('User fill out the account registration form with valid information', async function () {
  await basePage.signUpPage.registerUser();
});

Then('The user should see a success message', async function () {
  const isSuccessMessageVisible = await basePage.signUpPage.getSuccessMessage();
  expect(isSuccessMessageVisible).toBe(true);
});