const { test, chromium } = require('@playwright/test');
test.setTimeout(180000);
const BOLoginPage = require('../pages/BOLoginPage');
const BoAmendmentPage = require('../pages/BoAmendmentPage');

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

    const loginPage = new BOLoginPage(page);

    amendmentPage = new BoAmendmentPage(page);

    console.log("Opening Website");

    await loginPage.navigate(config.BO.url);

    console.log("Login Started");

    await loginPage.login(
        config.BO.username,
        config.BO.password
    );

    console.log("Login Successful");

});

test.afterEach(async () => {

    await browser.close();

});

test("BO - Date Extend", async () => {

    await amendmentPage.dateExtend();

});

test("BO - Date Reduce", async () => {

    await amendmentPage.dateReduce();
    console.log("Date reduce successfully");

});