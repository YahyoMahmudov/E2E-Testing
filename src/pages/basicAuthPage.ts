import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/playwrightWrappers";
import Assert from "../helper/wrapper/assert";

export default class BasicAuthPage {

    private base: PlaywrightWrapper;
    private assert: Assert;

    constructor(private page: Page) {
        this.base = new PlaywrightWrapper(page);
    }

    public Elements = {
        usernameInput: "(//input[@name='username'])[2]",
        passwordInput: "(//input[@name='password'])[2]",
        signInBtn: "(//input[@type='Submit'])[2]"
    }

    async authorizeUser() {
        await this.base.goto(process.env.BASEURL);
        
        await expect(this.page).toHaveTitle("Signin");
        await this.page.fill(this.Elements.usernameInput, process.env.USERNAME);
        await this.page.fill(this.Elements.passwordInput, process.env.PASSWORD);

        await this.base.waitAndClick(this.Elements.signInBtn);
    }

}