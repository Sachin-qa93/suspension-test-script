const { test, chromium } = require('@playwright/test');

const BOLoginPage = require('../pages/BOLoginPage');

const BoOrderCreationPage = require('../pages/BoOrderCreationPage');
const config = require('../utils/config');

test('Create Suspension Order Flow', async () => {

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

    const loginPage = new BOLoginPage(page);

const suspensionPage = new BoOrderCreationPage(page);
    console.log('Opening Website');

    await loginPage.navigate(config.BO.url);

    console.log('Login Started');

    await loginPage.login(
    config.BO.username,
    config.BO.password
    );

    console.log('Login Successful');

    await suspensionPage.createOrder();

    console.log('Order Flow started');

    await page.waitForTimeout(5000);
    console.log('Order Flow completed successfully and order is created ');
//await page.pause();
});
