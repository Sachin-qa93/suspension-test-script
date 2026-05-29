class FOOrderPage {

    constructor(page) {

        this.page = page;
             this.ApplyButton = page.locator('(//a[@role="button"])[3]');
             this.textSpan = page.locator('//span[@class="text"]');
            this.suspensionReason = '#suspensionReason';
            this.startDate = 'input[name="startDate"]';
        this.startTime = '#eachDaySuspensionStartAt';
        this.endDate =  'input[name="endDate"]';
        this.endTime = '#eachDaySuspensionEndAt';
         this.mapRegion = '.mapboxgl-canvas';
       this.searchBox = page.locator('//input[@placeholder="Search"]');
      // this.mapBox = page.locator('canvas');
        this.houseNumber = '//textarea[@id="houseNumberAndOtherInfo"]';
        
        this.noVehicle = page.locator('//input[@id="noVehicle"]');
        this.proceedbutton = page.locator('(//button[@type="button"])[4]');
        this.termsAndCondition = page.locator('//input[@id="termsAndCondition"]');
        this.proceedBtn = page.locator('//button[@class="btn btn-outline-info proceed"]');
        this.OrderproceedButton = page.locator('//button[@type="button"]');
        this.body = page.locator('body');
        this.testingtoolButton = page.locator('(//button[@type="button"])[2]');
        this.firstDropdownItem = page.locator('(//a[@class="dropdown-item"])[1]');
        this.processButton = page.locator('//button[@id="process"]');
        this.authenticateBtn = page.frameLocator('#acsframe').locator('//button[text()="Authenticate"]');

    }

    async createFOOrder() {

        console.log('FO Order Started');
        await this.ApplyButton.click();
        await this.textSpan.click();
        await this.page.locator(this.suspensionReason) .selectOption('DOMESTIC_REMOVE');
        await this.page.locator(this.startDate).fill('02/06/2026');  
        await this.page.waitForTimeout(2000);
        await this.page.locator(this.startTime).fill('09:30');
        await this.page.waitForTimeout(2000);
        await this.page.locator(this.endDate) .fill('02/06/2026');
   
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
    
    await this.noVehicle.click();
    
    await this.proceedbutton.click();
    await this.termsAndCondition.check();
    await this.proceedBtn.click();
    
    
    await this.OrderproceedButton.click();
    await this.page.waitForTimeout(5000);
    await this.body.click({

    position: {

        x: 1500,

        y: 200

    },

    force: true

});

await this.page.waitForTimeout(2000);
    await this.testingtoolButton.click();
    await this.page.waitForTimeout(2000);
    await this.firstDropdownItem.click();
    await this.processButton.click();
    await this.authenticateBtn.waitFor({ state: 'visible', timeout: 3000 });
    await this.authenticateBtn.click();
    }
}

module.exports = FOOrderPage;
