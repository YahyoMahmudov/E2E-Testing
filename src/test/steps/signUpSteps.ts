import { When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import basePage from '../../pages/basePage';

When('User navigates to sign up page by clicking the sign-up button', async function () {
  await basePage.signUpPage.navigateToRegisterPage();
});

When('User fill out the account registration form with valid information', async function (dataTable) {
  const data = dataTable.rowsHash();
  const country = data['Country'];
  const currency = data['Default Currency'];
  const industry = data['Industry'];


  await basePage.signUpPage.fillInputs(data['Full Name'], data['Company Name'], data['Phone'],data['CompanyDetails'], data['AccountDetails'])
  await basePage.signUpPage.genereteEmail();
  await basePage.signUpPage.agreePrivacyPolicy();
  await basePage.signUpPage.selectCountry(country);
  await basePage.signUpPage.selectCurrency(currency);
  await basePage.signUpPage.selectIndustry(industry);
  await basePage.signUpPage.clickRegisterButton();


});

Then('The user should see a success message', async function () {
  const isSuccessMessageVisible = await basePage.signUpPage.getSuccessMessage();
  expect(isSuccessMessageVisible).toBe(true);
});
