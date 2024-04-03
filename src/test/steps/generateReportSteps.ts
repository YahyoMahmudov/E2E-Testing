import { When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import basePage from '../../pages/basePage';

When('User navigates to {string} from {string}', async function (tab, page) {
  const [tabName, pageName] = basePage.wrapper.toCamelCase(tab, page);
  await basePage[pageName][tabName].click();
});

When('User clicks {string} on {string}', async function (button, page) {
  const [buttonName, pageName] = basePage.wrapper.toCamelCase(button, page);
  await basePage.wrapper.waitAndClick(basePage[pageName][buttonName]);
});

When('User chooses {string} for {string} on {string}', async function (option, dropdown, page) {
  const [optionName, dropdownName, pageName] = basePage.wrapper.toCamelCase(option, dropdown, page);
  await basePage.wrapper.waitAndClick(basePage[pageName][dropdownName]);
  await basePage.wrapper.waitAndClick(basePage[pageName][optionName]);
});

When('User enters {string} as {string} on {string}', async function (placeholder, input, page) {
  const [placeholderName, pageName] = basePage.wrapper.toCamelCase(placeholder, page);
  await basePage.wrapper.type(basePage[pageName][placeholderName], input);
});

Then('Report is generated', async function () {
  await basePage.wrapper.waitForElementTextVisible(basePage.reportsPage.statusLabel, 'COMPLETED');

  const status = await basePage.reportsPage.statusLabel.innerText();
  expect(status).toEqual('COMPLETED');
});