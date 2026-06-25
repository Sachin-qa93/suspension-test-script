const { expect } = require('@playwright/test');
const config = require('../utils/config');

class BoOrderCancelPage {

    constructor(page) {

        this.page = page;

        this.OrderBtn = page.locator('//a[@title="Order"]');
        this.ApprovedCheckbox = page.locator('//input[@id="ORDER_APPROVED"]');
        this.searchBox = page.locator('(//input[@placeholder])[2]');
        this.orderId = page.locator('//a[@target="_self"]');
        this.cancelBtn = page.locator('//button[@id="cancel_btn"]');
        this.canceldate = page.locator('(//input[@type="text"])[13]');
        this.yesBtn = page.locator('//button[@id="scheduleCancel"]');
        this.confirmBtn = page.locator('//button[@class="btn btn btn-outline-info"]');
        this.okBtn = page.locator('(//button[@class="btn btn-outline-info"])[2]');
    }

    async OrderCancelFlow() {

        await expect(this.OrderBtn).toBeVisible();
        await this.OrderBtn.click();

        await expect(this.ApprovedCheckbox).toBeVisible();
        await this.ApprovedCheckbox.check();

        await expect(this.searchBox).toBeVisible();
        await this.searchBox.click();
        await this.searchBox.fill(config.data.suspensionId);
        await this.page.keyboard.press('Enter');

        await expect(this.orderId).toBeVisible({ timeout: 15000 });
        await this.orderId.click();

        await expect(this.cancelBtn).toBeVisible({ timeout: 15000 });
        await this.cancelBtn.click();

        await expect(this.canceldate).toBeVisible();
        await this.canceldate.fill(config.data.canceldate);

        await expect(this.yesBtn).toBeVisible();
        await this.yesBtn.click();

        await expect(this.confirmBtn).toBeVisible({ timeout: 10000 });
        await this.confirmBtn.click();

        await expect(this.okBtn).toBeVisible({ timeout: 10000 });
        await this.okBtn.click();

         await this.page.waitForTimeout(5000);  

    }
}

module.exports = BoOrderCancelPage;