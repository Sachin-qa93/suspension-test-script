const { expect } = require('@playwright/test');
const config = require('../utils/config');
class BOOrdercreationPage {

    constructor(page) {
        this.page = page;
        this.newOrder = page.locator('//a[@title="New order"]');
        this.applySuspension =  page.locator('//span[text()="Apply to suspend parking space(s)"]');
        this.radioBtn = page.locator('//label[text()="Use existing customer"]');
        this.existingCustomer = page.locator('//input[@placeholder="Enter name, phone number or email"]');
        this.customerName = page.locator('//li[@email="sachin.rathi@sysnomy.com"]');
        this.proceedBtn1 = page.locator('//button[@class="form__button existingCustBtn"]');
        this.suspensionReason = page.locator('(//div[@class="filter-option-inner-inner"])[1]');
        this.dropDown = page.locator('//span[text()="Access"]');
        this.permitNumber = page.locator('//input[@id="permitLicenceNumber"]');
         this.calendarIcon = page.locator('(//i[@class="fa fa-calendar"])[2]');
         this.endDate =  page.locator('input[name="endDate"]');
         this.searchAddress = page.locator('//input[@placeholder="Search for an address"]');
        this.Proceedbtn2 = page.locator('//button[@class="form__button proceed"]');
        this.descriptionText = page.locator('//input[@id="houseNumberAndOtherInfo"]');
        this.updateBtn = page.locator('//button[@id="updateMultiBayDecription"]');
        this.proceedBtn3 = page.locator('//button[@class="form__button proceed baysValidateBtn"]'); 
        this.checkboxBtn = page.locator('//input[@id="termsAndCondition"]'); 
        this.proceedBtn4 = page.locator('//button[@class="form__button proceed mr-3"]');
    }

    async createOrder() {
        const user = config.BOOrderData;
        await this.newOrder.click();
        await this.applySuspension.click();
        await this.page.waitForTimeout(2000);
        await this.radioBtn.click();
        await this.page.waitForTimeout(2000);
        await this.existingCustomer.pressSequentially(user.customerName);
        await this.page.waitForLoadState('networkidle');
        await this.customerName.click({State: 'visible'});
        await this.proceedBtn1.click();
        await this.suspensionReason.click();
        await this.dropDown.click({State: 'visible', timeout: 5000});
        await this.permitNumber.fill(user.permitNumber);
        //calender handling 
         await expect(this.calendarIcon).toBeVisible();
    await this.calendarIcon.click();
    //await this.page.pause();
    //
     const calendar = this.page.locator('.calendar, .datepicker, [role="dialog"]');
    await expect(calendar).toBeVisible();

    // Extract day from start date
    const startDay = user.startDate.split('/')[0];

    await calendar
    .locator('td.day:not(.old):not(.new):not(.disabled)')
    .filter({ hasText: startDay })
    .click();


    // End Date
    await this.endDate.fill(user.endDate);
    await this.page.waitForTimeout(4000);
    await this.page.mouse.wheel(0, -1000);
    await this.searchAddress.pressSequentially(user.searchAddress);
    await this.page.waitForTimeout(5000);
    await this.page.keyboard.press('Enter'); 
    await this.page.waitForLoadState('domcontentloaded');
    await this.page.waitForTimeout(8000);

    await this.page.keyboard.press('Escape'); 
    await this.page.waitForTimeout(5000);
    
   
   await this.page.mouse.click( 556,601 );
   
   await this.Proceedbtn2.click();
   await this.page.waitForTimeout(3000);
   await expect(this.descriptionText).toBeVisible({timeout: 5000});
    await this.descriptionText.fill(user.descriptionText);
    await this.page.waitForTimeout(3000);
    await this.updateBtn.click();
    await this.proceedBtn3.click();
     
    ///////
    const [newPage] = await Promise.all([
        this.page.context().waitForEvent('page'),
        this.checkboxBtn.check()
    ]);

    await newPage.waitForLoadState('domcontentloaded');
    await newPage.close();

    await this.page.bringToFront();
   await this.page.waitForTimeout(2000);
   await this.proceedBtn4.click();

   // await this.page.pause();
    



        await this.page.waitForTimeout(5000);
      

        
    }
}




module.exports = BOOrdercreationPage;
