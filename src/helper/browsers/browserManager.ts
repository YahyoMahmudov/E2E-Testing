import { chromium, firefox, webkit } from '@playwright/test';

export const invokeBrowser = (isHeadless: boolean) => {
  const browserType = process.env.BROWSER;
  switch (browserType) {
    case 'chrome':
      return chromium.launch({ headless: isHeadless });
    case 'firefox':
      return firefox.launch({ headless: isHeadless });
    case 'webkit':
      return webkit.launch({ headless: isHeadless });
    default:
      throw new Error('Please set the proper browser');
  }
};
