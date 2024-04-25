import { When, Then, Given } from '@cucumber/cucumber';
import { Locator, expect } from '@playwright/test';
import basePage from '../../pages/basePage';
import { getPromoCode, setPromoCode } from '../../pages/promoCodePage';
import { dataUtil } from '../../utils/dateUtil';

When('User selects {string} from {string} on {string}', async function (option, selectTab, page) {
  const [dropDownButton, pageName] = basePage.wrapper.toCamelCase(selectTab, page);
  await basePage.wrapper.waitAndClick(basePage[pageName][dropDownButton]);
  await basePage[pageName].selectChannelsList(option);
  await basePage.wrapper.waitAndClick(basePage[pageName][dropDownButton]);
});

When('User named Promo code to {string} on {string}', async function (input, page) {
  const promoCodeName = basePage.promoCodePage.generateUniquePromoCodeName();
  const [codeInput, pageName] = basePage.wrapper.toCamelCase(input, page);
  await setPromoCode(promoCodeName);
  await basePage.wrapper.type(basePage[pageName][codeInput], promoCodeName);
});

When('User selects 1 day for Promo Code duration to {string} and {string} on {string}', async function (firstInput, secondInput, page) {
  const date = dataUtil.getTodayFormatted();
  const [startDayInput, endDateInput, pageName] = basePage.wrapper.toCamelCase(firstInput, secondInput, page);
  await basePage.wrapper.type(basePage[pageName][startDayInput], date);
  await basePage.wrapper.type(basePage[pageName][endDateInput], date);
});

When('User select {string} from {string} on {string}', async function (option, list, page) {
  const [openList, pageName] = basePage.wrapper.toCamelCase(list, page);
  await basePage.wrapper.waitAndClick(basePage[pageName][openList]);
  await basePage[pageName].selectPromoCodeCurrency(option);
});

When('User clicks {string} for activate Promo Code on {string}', async function (button, page) {
  await basePage.promoCodePage.hoverOverAndClickActiveButton();
  const [activateButton, pageName] = basePage.wrapper.toCamelCase(button, page);
  await basePage.wrapper.waitAndClick(basePage[pageName][activateButton]);
});

Then('User enters Promo Code to {string} on {string}', async function (input, page) {
  const uniqueCodeName = getPromoCode();
  const [codeInput, pageName] = basePage.wrapper.toCamelCase(input, page);
  await basePage.wrapper.type(basePage[pageName][codeInput], uniqueCodeName);
});
