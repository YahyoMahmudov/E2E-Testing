import { When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import basePage from '../../pages/basePage';

When('User navigates to {string} from {string}', async function (tab, page) {
  const tabName = await basePage.wrapper.toCamelCase(tab);
  const pageName = await basePage.wrapper.toCamelCase(page);
  await basePage[pageName][tabName].click();
});

When('User clicks {string} on {string}', async function (button, page) {
  const buttonName = await basePage.wrapper.toCamelCase(button);
  const pageName = await basePage.wrapper.toCamelCase(page);
  await basePage.wrapper.waitAndClick(basePage[pageName][buttonName]);
});

When('User chooses {string} for {string}', async function (value, type) {
  await basePage.reportsPage.selectReportOption(value, type);
});

When('User enters {string} as {string} on {string}', async function (placeholder, input, page) {
  const placeholderName = await basePage.wrapper.toCamelCase(placeholder);
  const pageName = await basePage.wrapper.toCamelCase(page);
  await basePage.wrapper.type(basePage[pageName][placeholderName], input);
});

Then('Report is generated', async function () {
  await basePage.wrapper.waitForElementTextVisible(basePage.reportsPage.statusLabel, 'COMPLETED');

  const status = await basePage.reportsPage.statusLabel.innerText();
  expect(status).toEqual('COMPLETED');
});
