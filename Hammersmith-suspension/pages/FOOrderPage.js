const config = require('../utils/config');
const { expect } = require('@playwright/test');
class FOOrderPage {

    constructor(page) {
        

        this.page = page;
         this.ApplyBtn = page.locator('(//div[@class="form__button blue-button-links"])[2]');
         this.Suspension = page.locator('(//span[@class="text"])');
         this.suspensionReason = '#suspensionReason';
         this.calendarIcon = page.locator('(//i[@class="fa fa-calendar"])[1]');
         this.endDate =  'input[name="endDate"]';
        this.mapRegion = '.mapboxgl-canvas';
       this.searchBox = page.locator('//input[@placeholder="Search for an address"]');
       this.Proceedbtn = page.locator('//button[@class="form__button proceed"]');
       this.bayDescription = page.locator('//input[@id="houseNumberAndOtherInfo"]');
       this.updateBtn = page.locator('//button[@id="updateMultiBayDecription"]');
        this.proceedBtn = page.locator('//button[@class="form__button proceed baysValidateBtn"]');  
        this.paymentmthd = page.locator('//select[@id="orgPaymentMethod"]');
        this.checkboxBtn = page.locator('//input[@id="termsAndCondition"]');  
        this.nextBtn = page.locator('//button[@class="form__button proceed mr-3"]');
        this.areaField = page.locator('//input[@id="cardholder.address.area"]');
         this.testingtoolButton = page.locator('//button[@class="btn btn-outline-danger dropdown-toggle"]');
        this.firstDropdownItem = page.locator('(//a[@class="dropdown-item"])[1]');
        this.processButton = page.locator('//button[@id="process"]');
         this.authenticateBtn = page.frameLocator('#acsframe').getByRole('button', { name: 'Authenticate' });
    
    
        
        
}
    
  
    

    async createFOOrder() {
 const user = config.FOOrderData;

    console.log('FO Order Started');

    await expect(this.ApplyBtn).toBeVisible();
    await this.ApplyBtn.click();

    await expect(this.Suspension).toBeVisible();
    await this.Suspension.click();

    await this.page.locator(this.suspensionReason).selectOption(user.suspensionReason);

    // Calendar
    await expect(this.calendarIcon).toBeVisible();
    await this.calendarIcon.click();

    const calendar = this.page.locator('.calendar, .datepicker, [role="dialog"]');
    await expect(calendar).toBeVisible();

    // Extract day from start date
    const startDay = user.startDate.split('/')[0];

    await calendar
    .locator('td.day:not(.old):not(.new):not(.disabled)')
    .filter({ hasText: startDay })
    .click();

    // End Date
    await this.page.locator(this.endDate).fill(user.endDate);

    // Address Search
     
    await expect(this.searchBox).toBeVisible();
    await this.searchBox.click();
    

    await this.searchBox.pressSequentially(user.searchAddress);
    await this.page.waitForTimeout(5000);
    await this.page.keyboard.press('Enter'); 
    await this.page.waitForLoadState('domcontentloaded');
    await this.page.waitForTimeout(8000);

    await this.page.keyboard.press('Escape'); 
    await this.page.waitForTimeout(5000);
    
    //await this.page.pause();
   await this.page.mouse.click( 556,601 );
    await this.page.waitForTimeout(3000);
     await this.Proceedbtn.click();
    await expect(this.bayDescription).toBeVisible();
    await this.bayDescription.fill(user.bayDescription);

    await expect(this.updateBtn).toBeVisible();
    await this.page.waitForTimeout(2000);
    await this.updateBtn.click();

    await expect(this.proceedBtn).toBeVisible();
    await this.proceedBtn.click();

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
    await this.page.waitForTimeout(5000);
    await this.testingtoolButton.click({ state: 'visible', timeout: 9000 });
    
    await this.page.waitForTimeout(7000);
    await this.firstDropdownItem.click();
    await this.page.waitForTimeout(9000);
    await this.page.keyboard.press('Tab');
     await this.page.waitForTimeout(4000);
    
    await this.processButton.click();
   await this.page.waitForTimeout(5000);

    await this.authenticateBtn.waitFor({ state: 'visible', timeout: 20000 });
    await this.authenticateBtn.click();
    await this.page.waitForTimeout(5000);
    }
}


module.exports = FOOrderPage;
