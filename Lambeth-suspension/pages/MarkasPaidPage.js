class MarkasPaidPage {

    constructor(page) {

        this.page = page;

        this.ordersmenu = page.locator('//a[@title="Order"]');

        this.searchBox = page.locator('(//input[@placeholder])[2]');

        this.orderId = page.locator('//a[@target="_self"]');
       this .markpaidbtn = page.locator('//button[@data-target="#processingPendingPayment"]');
       this.paymentTypeDropdown = page.locator('//select[@id="paymentType"]');
       this.paymentRefTextbox = page.locator('//input[@id="paymentRef"]');
        this.fullyPaidCheckbox = page.locator('//input[@id="fullyPaidCheck"]');
        this.confirmPaymentBtn = page.locator('//button[@id="confirmProcessingPendingPayment"]');



    }

    async markaspaidflow() {

        await this.ordersmenu.click();

        await this.searchBox.click();

        await this.page.waitForTimeout(2000);

        await this.searchBox.fill('LSS0135530');

        await this.page.keyboard.press('Enter');

        await this.page.waitForTimeout(5000);

        await this.orderId.click();
        await this.page.waitForTimeout(2000);
        await this.markpaidbtn.click();
        await this.paymentTypeDropdown.click();

        await this.paymentTypeDropdown.selectOption({ index: 1 });
        await this.paymentRefTextbox.click();

         await this.paymentRefTextbox.fill('test 123');

        await this.page.waitForTimeout(2000);
        await this.fullyPaidCheckbox.click();
        await this.confirmPaymentBtn.click();
        await this.page.waitForTimeout(8000);
    }
}

module.exports = MarkasPaidPage;