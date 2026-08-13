const { test, chromium } = require('@playwright/test');
const config = require('../utils/config');
const UserRegistrationPage = require('../pages/UserRegistrationPage');

test('Register User', async () => {

    test.setTimeout(0);

    const browser = await chromium.launch({
        channel: 'chrome',
        headless: false,
        args: ['--start-maximized']
    });

    const context = await browser.newContext({
        viewport: null
    });

    const page = await context.newPage();

    console.log('Opening FO Website');

    await page.goto(config.FO.url);

    const userRegistrationPage = new UserRegistrationPage(page);
    await userRegistrationPage.RegisterUser();

    //await page.pause();
});