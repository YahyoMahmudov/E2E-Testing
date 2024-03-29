import { Given, When} from '@cucumber/cucumber';
import basePage from '../../pages/basePage';

Given('User passes the authorization on {string}', async function (page) {
  const pageType = await basePage.wrapper.toCamelCase(page);
  await basePage[pageType].authorizeUser();

  await basePage.wrapper.verifyPageTitle('Core Ad Manager');
});

Given('User is in {string} page', async function (pageTitle) {
  await basePage.wrapper.verifyPageTitle(pageTitle);
});

When('User logins as a {string}', async function (userRole: string) {
  await basePage.loginPage.logIn(userRole);
});
