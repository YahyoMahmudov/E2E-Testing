import { Given, When, Then } from "@cucumber/cucumber";
import { chromium, Page, Browser } from "@playwright/test";

let browser: Browser;
let page: Page;

Given('User navigates to the application', async function () {
    browser = await chromium.launch({headless: false});
    page = await browser.newPage();
    await page.goto("https://px-stage.self-service.danads.com");
});

Given('User clicks login button', async function () {
    //await page.locator("//a/*[text()='Log in']").click();
})

Given('User enters username', async function () {
    page.locator("(//input[@name='username'])[2]").type("Username");
});

When('User enters log in with email button', async function () {
    //page.locator("//span[text()=' Log in with email ']").click();
});

When('User enters password', async function () {
    page.locator("(//input[@name='password'])[2]").type("Password");
});

When('User clicks Login button', async function () {
    page.locator("(//input[@type='Submit'])[2]").click();
});

Then('User is in Dashboard page', async function () {
    console.log("User logged in")
});