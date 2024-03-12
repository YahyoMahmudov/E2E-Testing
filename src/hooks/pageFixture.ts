import {Page} from '@playwright/test';

export const pageFixture = {
  page: undefined as Page | undefined,

  // Function to initialize the page fixture
  initialize(page: Page) {
    this.page = page;
  }
};