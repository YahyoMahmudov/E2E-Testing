import { When } from '@cucumber/cucumber';
import basePage from '../../pages/basePage';

When('User enters {string} as {string} and selects {string} from list on {string}', async function (placeholder, input, company, page) {
    const [placeholderName, companyName, pageName] = basePage.wrapper.toCamelCase(placeholder, company, page);
    await basePage.wrapper.waitAndClick(basePage[pageName][placeholderName.substring(0, placeholderName.length - 5)]) 
    await basePage.wrapper.type(basePage[pageName][placeholderName], input);
    await basePage.wrapper.pressKeyboard('Enter');
    await basePage.wrapper.waitAndClick(basePage[pageName][companyName]);
});

When('User clears {string} and enters {string} on {string}', async function (placeholder, input, page) {
    const [placeholderName, pageName] = basePage.wrapper.toCamelCase(placeholder, page);
    await basePage.wrapper.clearAndType(basePage[pageName][placeholderName], input);
});