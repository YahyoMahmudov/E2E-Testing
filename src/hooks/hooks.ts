import { Before, After, BeforeAll, AfterAll, setDefaultTimeout } from '@cucumber/cucumber';
import { Browser, BrowserContext } from '@playwright/test';
import { invokeBrowser } from '../helper/browsers/browserManager';
import { getEnv } from '../helper/env/env';
import basePage from '../pages/basePage';

let browser: Browser;
let context: BrowserContext;

setDefaultTimeout(120 * 1000);
BeforeAll(async function () {
  getEnv();
  browser = await invokeBrowser(false);
});

Before(async function () {
  context = await browser.newContext();
  const page = await context.newPage();
  await basePage.createInstances(page);
});

After(async function () {
  if (basePage.page) {
    await basePage.page.close();
  }
  await context.close();
});

AfterAll(async function () {
  await browser.close();
});