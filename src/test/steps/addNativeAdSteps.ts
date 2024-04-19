import { When, Then } from '@cucumber/cucumber';
import basePage from '../../pages/basePage';

When('User uploads {string} file to the native ad', async function (filePath) {
    await basePage.creativesPage.uploadCreativeImage(filePath);
});

Then('New {string} is displayed on {string}', async function (element, page) {
    const [elementName, pageName] = basePage.wrapper.toCamelCase(element, page);

    await basePage.wrapper.waitForElementVisible(basePage[pageName][elementName]);
});