import {Before, After, BeforeAll, AfterAll, Status} from '@cucumber/cucumber';
import {Browser, BrowserContext} from '@playwright/test';
import {pageFixture} from './pageFixture';
import {invokeBrowser} from '../helper/browsers/browserManager';
import {getEnv} from '../helper/env/env';

let browser: Browser;
let context: BrowserContext;

BeforeAll(async function () {
  getEnv();
  browser = await invokeBrowser(false);
});

Before(async function () {
  context = await browser.newContext();
  const page = await context.newPage();
  pageFixture.page = page;
});

After(async function () {
  await pageFixture.page.close();
  await context.close();
});

AfterAll(async function () {
  await browser.close();
});
