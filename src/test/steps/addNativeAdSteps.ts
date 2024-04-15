import { When } from '@cucumber/cucumber';
import basePage from '../../pages/basePage';

When('User adds a new native creative and selects the following options for it', async function (params: string) {
    const parameters = JSON.parse(params);

    await basePage.creativesPage.addNativeCreative(parameters);

    await basePage.wrapper.waitForElementVisible(basePage.creativesPage.nativeCreative);
});