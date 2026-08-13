const { test, chromium } = require('@playwright/test');
test.setTimeout(180000);
const FOLoginPage = require('../pages/FOLoginPage');
const FoAmendmentPage = require('../pages/FoAmendmentPage');

const config = require('../utils/config');

let browser;
let context;
let page;
let amendmentPage;

test.beforeEach(async () => {

    browser = await chromium.launch({
        channel: 'chrome',
        headless: false,
        args: ['--start-maximized']
    });

    context = await browser.newContext({
        viewport: null
    });

    page = await context.newPage();

    const loginPage = new FOLoginPage(page);

    amendmentPage = new FoAmendmentPage(page);

    console.log("Opening Website");

    await loginPage.navigate(config.FO.url);

    console.log("Login Started");

    await loginPage.login(
        config.FO.username,
        config.FO.password
    );

    console.log("Login Successful");

});

test.afterEach(async () => {

    await browser.close();

});

test("FO - Date Extend", async () => {

    await amendmentPage.dateExtend();

});

test("FO - Date Reduce", async () => {

    await amendmentPage.dateReduce();

});