const config = require('../utils/config');
class MarkasPaidPage {

    constructor(page) {

        this.page = page;

        this.ordersmenu = page.locator('//a[@title="Order"]');

        this.searchBox = page.locator('(//input[@placeholder])[2]');

        this.orderId = page.locator('//a[@target="_self"]');
       this.markpaidbtn = page.locator('//button[@id="mark_as_paid"]');
       this.fullyPaidCheckbox = page.locator('//input[@id="markAsPaid"]');
       this.paymentMthd = page.locator('//select[@id="paymentType"]');
       
       this.paymentRefTextbox = page.locator('//input[@id="paymentReference"]');
       this.ProceedBtn = page.locator('//button[@id="submitPaymentNotice"]');


    }

    async markaspaidflow() {
        const user = config.MarkasPaidData;
        await this.ordersmenu.click();

        await this.searchBox.click();

        await this.page.waitForTimeout(2000);

        await this.searchBox.fill(user.orderId);

        await this.page.keyboard.press('Enter');

        await this.page.waitForTimeout(2000);

        await this.orderId.click();
        await this.page.waitForTimeout(2000);
        await this.markpaidbtn.click();
        await this.fullyPaidCheckbox.check();
        
       await this.paymentMthd.waitFor({ state: 'visible' });

        await this.paymentMthd.click();

         await this.paymentMthd.selectOption(user.paymentType);
         await this.paymentRefTextbox.fill(user.paymentRef);
         await this.page.waitForTimeout(5000);
        
        await this.ProceedBtn.click();
        await this.page.waitForTimeout(5000);
    }
}

module.exports = MarkasPaidPage;