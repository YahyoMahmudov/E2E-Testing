import { When } from '@cucumber/cucumber';
import basePage from '../../pages/basePage';

When('User selects {string} for {string} on {string}', async function (company, type, page) {
    const [companyType, pageName] = basePage.wrapper.toCamelCase(type, page);
    await basePage.wrapper.waitAndClick(basePage[pageName][companyType]) 

    await basePage[pageName].selectCompany(company);
});
