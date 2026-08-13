const { expect } = require('@playwright/test');
const config = require('../utils/config');
class OrderApprovePage {

    constructor(page) {
       this.page = page; 
       this.ordersmenu = page.locator('//a[@title="Order"]');
        this.awaitingApproval = page.locator('//input[@id="APP_AWAITING_APPR"]');
        this.searchButton = page.locator('(//input[@placeholder])[2]');
        this.OrderId = page.locator('//a[@target="_self"]');
      this.approveButton = page.locator('//button[@id="approve_sus"]');
      this.approveConfirmButton = page.locator('//button[@id="approveSus"]');
    }


    // METHODS

    async ApproveFlow() {
      const user = config.orderApproveData;
       await this.ordersmenu.click();  
       await this.page.waitForLoadState('domcontentloaded');
       await this.awaitingApproval.check();
       await this.page.waitForTimeout(3000);
       await this.searchButton.fill(user.suspensionId);
       await this.page.waitForTimeout(3000);
       await this.OrderId.click();
       await expect(this.approveButton).toBeVisible({timeout: 10000}); 
       await this.approveButton.click();
       await expect(this.approveConfirmButton).toBeVisible({timeout: 10000});
       await this.approveConfirmButton.click();
      await this.page.waitForTimeout(5000);



    }

}

module.exports = OrderApprovePage;
