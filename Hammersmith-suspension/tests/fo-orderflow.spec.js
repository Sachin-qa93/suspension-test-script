const { test, chromium } = require('@playwright/test');

const FOLoginPage = require('../pages/FOLoginPage');

const FOOrderPage = require('../pages/FOOrderPage');

const config = require('../utils/config');

test('Create FO Order Flow', async () => {

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

    const loginPage = new FOLoginPage(page);

    const orderPage = new FOOrderPage(page);

    console.log('Opening FO Website');

    await loginPage.navigate(config.FO.url);

    console.log('FO Login Started');

    await loginPage.login(

        config.FO.username,

        config.FO.password
    );

    console.log('FO Login Successful');

    await orderPage.createFOOrder();
console.log('order Successfully created');
    //await page.pause();
});