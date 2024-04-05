import { When } from '@cucumber/cucumber';
import basePage from '../../pages/basePage';

When('User selects {string} for {string} on {string}', async function (company, type, page) {
    const [companyName, companyType, pageName] = basePage.wrapper.toCamelCase(company, type, page);
    await basePage.wrapper.waitAndClick(basePage[pageName][companyType]) 

    await basePage.wrapper.waitAndClick(basePage[pageName].companyNameInput) 
    await basePage.wrapper.type(basePage[pageName].companyNameInput, company);
    await basePage.wrapper.pressKeyboard('Enter');
    await basePage.wrapper.waitAndClick(basePage[pageName][companyName]);
});