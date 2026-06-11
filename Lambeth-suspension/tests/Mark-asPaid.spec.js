const { test, chromium } = require('@playwright/test');

const BOLoginPage = require('../pages/BOLoginPage');

const MarkasPaidPage = require('../pages/MarkasPaidPage');

const config = require('../utils/config');

test('Mark as Paid Flow', async () => {

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

    // PAGE OBJECTS

    const loginPage = new BOLoginPage(page);

    const markasPaidPage = new MarkasPaidPage(page);

    // LOGIN

    await loginPage.navigate(config.BO.url);

    await loginPage.login(

        config.BO.username,

        config.BO.password
    );

    // FLOW

    await markasPaidPage.markaspaidflow(

    
    );
console.log('\x1b[32m%s\x1b[0m', 'Payment is successfull by mark as paid button ');
    //await page.pause();
});