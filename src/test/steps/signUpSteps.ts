import { When, Then } from '@cucumber/cucumber';
import basePage from '../../pages/basePage';

let randomNum;
Then('User fills {string} as {string} on {string}', async function (inputLocator, fillInput, page) {
  let gmail = fillInput;
  if (inputLocator.includes('Email Input')) {
    if (!randomNum) {
      randomNum = Math.floor(Math.random() * 10000);
    }
    gmail = fillInput + '+' + randomNum + '@gmail.com';
  }
  const [placeholderName, pageName] = basePage.wrapper.toCamelCase(inputLocator, page);
  await basePage.wrapper.type(basePage[pageName][placeholderName], gmail);
});

When('User chooses {string} from {string} on {string}', async function (option,selectTab, page) {
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