const { test, chromium } = require('@playwright/test');

const BOLoginPage = require('../pages/BOLoginPage');

const BoOrderCancelPage = require('../pages/BoOrderCancelPage');



const config = require('../utils/config');

test('BO Order Cancel Flow', async () => {

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

    const cancelPage = new BoOrderCancelPage(page);

    // LOGIN

    await loginPage.navigate(config.BO.url);

    await loginPage.login(

        config.BO.username,

        config.BO.password
    );

    // FLOW

    await cancelPage.OrderCancelFlow(

    
    );
//console.log('Successfully Cancelled');
   // await page.pause();
});