const { expect } = require('@playwright/test');
const config = require('../utils/config');

class BoAmendmentPage {

    constructor(page) {

        this.page = page;
        this.ordersmenu = page.locator('//a[@title="Order"]');

        this.searchBox = page.locator('(//input[@placeholder])[2]');

        this.orderId = page.locator('//a[@target="_self"]'); 
        this.changeBtn = page.locator('//div[@class="btn btn-outline-info btn-block btn-sm editOtherDetailsBtn"]');
        this.endBtn = page.locator('(//input[@data-target="#endDate"])[1]');
        this.confirmBtn1 = page.locator('//button[@class="btn btn-outline-info cofirmAdditionalBayBtn"]');
        this.confirmBtn2 = page.locator('//button[@data-bb-handler="confirm"]');
        this.checkboxBtn = page.locator('//input[@id="termsAndCondition"]');
        this.proceedBtn = page.locator('//button[@class="form__button proceed mr-3"]');
        

    
        //common Locators
       

        // ==========================
        // Date Extend Locators
        // ==========================

        

        // ==========================
        // Date Reduce Locators
        // ==========================

        
    }

    async dateExtend() {
     const user = config.boamendmentextendData; 
     
    await this.ordersmenu.click();

        await this.searchBox.click();

        

        await this.searchBox.fill(user.orderId);
await this.page.waitForTimeout(2000);
    await this.orderId.click();
    await this.page.waitForTimeout(5000);
    await this.changeBtn.click();
    await this.endBtn.click({State: 'visible', timeout: 5000});
    await this.endBtn.clear();
    await this.endBtn.fill(user.endDate);
   await this.confirmBtn1.click({State: 'visible', timeout: 5000});
    await this.page.waitForTimeout(2000);
   await this.confirmBtn2.click({State: 'visible', timeout: 5000});
   const [newPage] = await Promise.all([
        this.page.context().waitForEvent('page'),
        this.checkboxBtn.check()
    ]);

    await newPage.waitForLoadState('domcontentloaded');
    await newPage.close();

    await this.page.bringToFront();
    await this.proceedBtn.click();
  await this.page.waitForTimeout(5000);
  console.log('Successfully date extend');
   //await this.page.pause();

    }

    async dateReduce() {
     
const user = config.boamendmentreduceData; 
    

        console.log("Date Reduce Flow");

      
    await this.ordersmenu.click();

        await this.searchBox.click();

        

        await this.searchBox.fill(user.orderId);
await this.page.waitForTimeout(2000);
    await this.orderId.click();
    await this.page.waitForTimeout(5000);
    await this.changeBtn.click();
    await this.endBtn.click({State: 'visible', timeout: 5000});
    await this.endBtn.clear();
    await this.endBtn.fill(user.endDate);
   await this.confirmBtn1.click({State: 'visible', timeout: 5000});
    await this.page.waitForTimeout(2000);
   await this.confirmBtn2.click({State: 'visible', timeout: 5000});
   await this.page.waitForTimeout(5000);

    }

}

module.exports = BoAmendmentPage;