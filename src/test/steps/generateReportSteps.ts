import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import basePage from '../../pages/basePage';

When('User navigates to Reports tab', async function () {
  await basePage.dashboardPage.reportsTab.click();

  const pageTitle = await basePage.page.title();
  expect(pageTitle).toContain('Reports');
});

When('User clicks New Report button', async function () {
  await basePage.wrapper.waitAndClick(basePage.reportsPage.newReportBtn);
});

When('User chooses {string} report type', async function (reportType) {
  await basePage.reportsPage.selectReportType(reportType);
});

When('User enters report name as {string}', async function (reportName) {
  await basePage.wrapper.type(basePage.reportsPage.reportNameInput, reportName);
});

When('User selects date format as {string}', async function (dateFormat) {
  await basePage.wrapper.waitAndClick(basePage.reportsPage.dateFormatInput);
  await basePage.reportsPage.selectDropdownOption(dateFormat);
});

When('User chooses export option as {string}', async function (exportOption) {
  await basePage.wrapper.scrollDown();

  await basePage.wrapper.waitAndClick(basePage.reportsPage.exportOptionsInput);
  await basePage.reportsPage.selectDropdownOption(exportOption);
});

When('User enters time period as {string}', async function (date) {
  await basePage.wrapper.waitAndClick(basePage.reportsPage.startDateInput);
  await basePage.reportsPage.selectReportDate(date);
});

When('User clicks Save button', async function () {
  await basePage.wrapper.waitAndClick(basePage.reportsPage.saveBtn);
});

Then('Report is generated', async function () {
  await basePage.wrapper.waitForElementText(basePage.reportsPage.statusLabel, 'COMPLETED');

  const status = await basePage.reportsPage.statusLabel.innerText();
  expect(status).toEqual('COMPLETED');
});
