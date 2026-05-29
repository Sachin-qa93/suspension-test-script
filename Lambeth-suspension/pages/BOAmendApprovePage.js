class BOAmendApprovePage {

    constructor(page) {

        this.page = page;
         this.ordersmenu = page.locator('//a[@title="Order"]');
        this.checkbox = page.locator('//input[@id="WAITING_APPROVAL"]');
        this.searchBox = page.locator('(//input[@placeholder])[2]');
        
        this.orderId = page.locator('//a[@target="_self"]');
        this.amendButton = page.locator('//button[@id="amend_status_btn"]');
        this.inspectionNotes = page.locator('//textarea[@id="inspectionNotes"]');
        this.proceedBtn = page.locator('(//button[@type="button"])[4]');
        this.proceedBtn2 = page.locator('//button[@type="button"]'); 
        // if status is awaiting payment then make payment using mark as paid button 
        this.markPaid = page.locator('(//button[@type="button"])[8]');

    }


    // METHODS

    async amendApproveFlow() {
         await this.ordersmenu.click();
        await this.checkbox.click();
        await this.page.waitForTimeout(5000);
        
        await this.searchBox.click();
         await this.page.waitForTimeout(2000);
      await this.searchBox.fill('LSS0135359');

       await this.page.keyboard.press('Enter');
       await this.page.waitForTimeout(5000);
       await this.orderId.click();
       await this.page.waitForTimeout(2000);
         await this.amendButton.click();
        await this.inspectionNotes.click();
        await this.inspectionNotes.fill('test'); 
        await this.proceedBtn.click();
        await this.proceedBtn2.click();

        //mark as paid started 
        await this.markPaid.click();
        
    }

}

module.exports = BOAmendApprovePage;
