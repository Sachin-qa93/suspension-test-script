const { expect } = require('@playwright/test');
const config = require('../utils/config');
class FoAmendmentPage {

    constructor(page) {

        this.page = page;
        this.searchorderId = page.locator('//input[@type="search"]');
        this.selforderId = page.locator('//a[@target="_self"]');
        this.changeBtn = page.locator('//div[@class="btn btn-outline-info btn-block btn-sm editOtherDetailsBtn"]');
        this.endBtn = page.locator('//input[@data-target="#endDate"]');
        this.confirmBtn1 = page.locator('//button[@class="btn btn-outline-info cofirmAdditionalBayBtn"]');
        this.confirmBtn2 = page.locator('//button[@data-bb-handler="confirm"]');


        //
        this.paymentmthd = page.locator('//select[@id="orgPaymentMethod"]');
        this.checkboxBtn = page.locator('//input[@id="termsAndCondition"]');  
        this.nextBtn = page.locator('//button[@class="form__button proceed mr-3"]');
        this.areaField = page.locator('//input[@id="cardholder.address.area"]');
         this.testingtoolButton = page.locator('//button[@class="btn btn-outline-danger dropdown-toggle"]');
        this.firstDropdownItem = page.locator('(//a[@class="dropdown-item"])[1]');
        this.processButton = page.locator('//button[@id="process"]');
         this.authenticateBtn = page.frameLocator('#acsframe').getByRole('button', { name: 'Authenticate' });
    
        //common Locators
       

        // ==========================
        // Date Extend Locators
        // ==========================

        

        // ==========================
        // Date Reduce Locators
        // ==========================

        
    }

    async dateExtend() {
    const user = config.foamendmentextendData; 
        console.log("Date Extend Flow started");
      
     await this.searchorderId.click();
    await this.searchorderId.pressSequentially(user.suspensionId);
    await this.page.waitForTimeout(2000);
    await this.selforderId.click();
    
    await this.page.waitForTimeout(5000);
    await this.changeBtn.click();
    await this.endBtn.click({State: 'visible', timeout: 5000});
    await this.endBtn.clear();
    await this.endBtn.fill(user.endDate);
   await this.confirmBtn1.click({State: 'visible', timeout: 5000});
    await this.page.waitForTimeout(2000);
   await this.confirmBtn2.click({State: 'visible', timeout: 5000});
   //
    
   await expect(this.paymentmthd).toBeVisible();
    await this.paymentmthd.selectOption(user.paymentMethod);

    const [newPage] = await Promise.all([
        this.page.context().waitForEvent('page'),
        this.checkboxBtn.check()
    ]);

    await newPage.waitForLoadState('domcontentloaded');
    await newPage.close();

    await this.page.bringToFront();

    await expect(this.nextBtn).toBeVisible();

    await this.nextBtn.click();

    await this.page.waitForLoadState('domcontentloaded');
    await this.areaField.waitFor({ state: 'visible', timeout: 15000 });
    await this.areaField.fill('London');
    await this.page.waitForTimeout(3000);
    await this.testingtoolButton.click({ state: 'visible', timeout: 9000 });
    
    await this.page.waitForTimeout(5000);
    await this.firstDropdownItem.click();
    await this.page.waitForTimeout(9000);
    await this.page.keyboard.press('Tab');
     await this.page.waitForTimeout(4000);
    
    await this.processButton.click();
   await this.page.waitForTimeout(5000);

    await this.authenticateBtn.waitFor({ state: 'visible', timeout: 20000 });
    await this.authenticateBtn.click();
    await this.page.waitForTimeout(5000);
   
//await this.page.pause();
    

    }

    async dateReduce() {
     const user = config.foamendmentreduceData; 
    

        console.log("Date Reduce Flow");

       await this.searchorderId.click(); 
      await this.searchorderId.pressSequentially(user.suspensionId);
    await this.page.waitForTimeout(2000);
    await this.selforderId.click();
    
    await this.page.waitForTimeout(5000);
    await this.changeBtn.click();
    await this.endBtn.click({State: 'visible', timeout: 5000});
    await this.endBtn.clear();
     await this.endBtn.fill(user.endDate);
   await this.confirmBtn1.click({State: 'visible', timeout: 5000});
    await this.page.waitForTimeout(2000);
   await this.confirmBtn2.click({State: 'visible', timeout: 5000});
   console.log("Date Reduce successfully completed");
    await this.page.waitForTimeout(5000);
       //await this.page.pause();
    }

}

module.exports = FoAmendmentPage;