class SuspensionPage {

    constructor(page) {

        this.page = page;

        this.newOrder = '//a[@title="New order"]';
        this.applySuspension = '//span[text()="Apply to suspend parking space(s)"]';
        this.useExistingCustomer = '//label[text()="Use existing customer"]';
        this.keyword = '//input[@id="keywords"]';
        this.customer = '//li[@email="sachin.rathi@sysnomy.com"]';
        this.proceedButton = '//button[text()="Proceed"]';
        this.suspensionReason = '#suspensionReason';
        this.startDate = 'input[name="startDate"]';
        this.startTime = '#eachDaySuspensionStartAt';
        this.endDate =  'input[name="endDate"]';
        this.endTime = '#eachDaySuspensionEndAt';
        this.mapRegion = '.mapboxgl-canvas';
       this.searchBox = page.locator('//input[@placeholder="Search"]');
      // this.mapBox = page.locator('canvas');
        this.houseNumber = '//textarea[@id="houseNumberAndOtherInfo"]';
        this.evidenceChecked = '//input[@id="evidenceChecked"]';
        this.noVehicle = page.locator('//input[@id="noVehicle"]');
        this.proceedbutton = page.locator('(//button[@type="button"])[3]');
        this.termsAndCondition = page.locator('//input[@id="termsAndCondition"]');
        this.proceedBtn = page.locator('//button[@class="btn btn-outline-info proceed"]');
        this.transactionNumber = page.locator('//input[@id="transactionNumber"]');
        this.button = page.locator('//button[@type="button"]');
    }
   



    async createSuspension() {

        await this.page.locator(this.newOrder).click();

        await this.page.locator(this.applySuspension).click();

        await this.page.waitForLoadState('networkidle');

        await this.page.locator(this.useExistingCustomer).click();

        await this.page.locator(this.keyword).fill('sachin.rathi');

        await this.page.waitForLoadState('networkidle');

        await this.page.locator(this.customer).click();

        await this.page.waitForLoadState('networkidle');

        await this.page.locator(this.proceedButton).click();

        await this.page.locator(this.suspensionReason) .selectOption('DOMESTIC_REMOVE');
          
        await this.page.locator(this.startDate).fill('17/06/2026');  
        await this.page.waitForTimeout(2000);
        await this.page.locator(this.startTime).fill('09:30');
        await this.page.waitForTimeout(2000);
        await this.page.locator(this.endDate) .fill('18/06/2026');
   
        //await this.page.keyboard.press('Tab');

        await this.page.waitForTimeout(2000);

       await this.page.locator(this.endTime).fill('18:30');
       await this.searchBox.click();

       await this.searchBox.click();

        await this.searchBox.pressSequentially('Mowll Street');

        await this.page.waitForTimeout(5000);

       // await this.page.keyboard.press('ArrowDown');

         await this.page.keyboard.press('Enter');
         await this.page.waitForTimeout(3000);
                 // REMOVE SEARCH FOCUS

        await this.page.keyboard.press('Escape');

        await this.page.waitForTimeout(2000);

          await this.page.mouse.click(
        900,
        618
   
    
);
await this.page.waitForTimeout(2000);
await this.page.locator(this.houseNumber).click();

await this.page.locator(this.houseNumber)
    .fill('test');
    await this.page.waitForTimeout(2000);
    await this.page.locator(this.evidenceChecked).click();
    await this.noVehicle.click();
    
    await this.proceedbutton.click();
    await this.termsAndCondition.check();
    await this.proceedBtn.click();
    await this.transactionNumber.click();

await this.transactionNumber.fill('test');
await this.button.click();
await this.page.waitForTimeout(2000);
    }

}

module.exports = SuspensionPage;

