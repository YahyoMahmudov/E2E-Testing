import { When, Then } from '@cucumber/cucumber';
import basePage from '../../pages/basePage';

let randomNum;
Then('User clicks {string} on {string}', async function (button, page) {
  const [buttonName, pageName] = basePage.wrapper.toCamelCase(button, page);
  await basePage.wrapper.waitAndClick(basePage[pageName][buttonName]);
});
Then('User fills {string} as {string} on {string}', async function (placeholder, input, page) {
  const [placeholderName, pageName] = basePage.wrapper.toCamelCase(placeholder, page);
  await basePage.wrapper.type(basePage[pageName][placeholderName], input);
});

Then('User enters {string} as {string} on {string}', async function (email, input, page) {
  if (!randomNum) {
    randomNum = Math.floor(Math.random() * 10000);
  }
  const [pageName, placeholderName] = basePage.wrapper.toCamelCase(page, email);
  const updatedInput = `${input}${randomNum}@gmail.com`;
  await basePage.wrapper.type(basePage[pageName][placeholderName], updatedInput);
});

When('User {string} as {string} from {string} on {string}', async function (selectTab, option, dropdownList, page) {
  const [openList, pageName] = basePage.wrapper.toCamelCase(selectTab, page);
  await basePage.wrapper.waitAndClick(basePage[pageName][openList]);
  await basePage.wrapper.waitAndClick(basePage[pageName].selectOption(option));
});

Then('User should agree to {string} on {string}', async function (button, page) {
  const [checkbox, pageName] = basePage.wrapper.toCamelCase(button, page);
  await basePage.wrapper.waitAndClick(basePage[pageName][checkbox]);
});

Then('User should see {string} on {string}', async function (successMessage, page) {
  const [message, pageName] = basePage.wrapper.toCamelCase(successMessage, page);
  const successElement = basePage[pageName][message];
  await successElement.waitFor({ state: 'visible' });
});