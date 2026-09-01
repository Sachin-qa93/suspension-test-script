const { test, chromium } = require('@playwright/test');

const BOLoginPage = require('../pages/BOLoginPage');

const BOOrdercreationPage = require('../pages/BOOrdercreationPage');
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

const orderPage = new BOOrdercreationPage(page);
    console.log('Opening Website');

    await loginPage.navigate(config.BO.url);

    console.log('Login Started');

    await loginPage.login(
    config.BO.username,
    config.BO.password
    );

    console.log('Login Successful');

    await orderPage.createOrder();

    console.log('order successfully booked from bo');
    //await page.pause();


const orderRef = await orderPage.getOrderReference();
    console.log('✅ Created Order Reference:', orderRef);


});
