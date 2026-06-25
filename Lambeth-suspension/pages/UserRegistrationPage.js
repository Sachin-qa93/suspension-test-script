
 const config = require('../utils/config');
class UserRegistrationPage {

    constructor(page) {

        this.page = page;
        this.ApplyBtn = page.locator('//a[@class="btn btn-outline-info"]');
       this.suspensionBtn = page.locator('//span[@class="text"]');
              this.FirstName = page.locator('//input[@placeholder="First name"]');
         this.ContactNumber = page.locator('//input[@placeholder="Applicant contact number"]');
       this.email = page.locator('//input[@id="customerEmail"]');
       this.Password = page.locator('//input[@id="password"]');
       this.LastName = page.locator('//input[@id="lastName"]');
     this.SecondaryContactNumber = page.locator('//input[@placeholder="Secondary contact number"]');
      this.RepeatEmail = page.locator('//input[@id="repeatCustomerEmail"]');
        this.RepeatPassword = page.locator('//input[@id="repeatPassword"]');
        this.Clickhere = page.locator('//a[@id="manualAddressLink"]');
        this.Adreessline1 = page.locator('//input[@id="address1_manual"]');
       this.Adreessline2 = page.locator('//input[@id="address2_manual"]');
       this.City = page.locator('//input[@id="city_manual"]');
       this.Postalcode = page.locator('//input[@id="postalCode_manual"]');

        this.Proceedbtn = page.locator('(//button[@type="button"])[2]');

    }
   



    async RegisterUser() {
    const user = config.Registration; 
 await this.ApplyBtn.click();
    await this.suspensionBtn.click();

    await this.FirstName.fill(user.firstName);
    await this.ContactNumber.fill(user.contactNumber);
    await this.email.fill(user.email);
    await this.Password.fill(user.password);
    await this.LastName.fill(user.lastName);
    await this.SecondaryContactNumber.fill(user.secondaryContactNumber);
    await this.RepeatEmail.fill(user.email);
    await this.RepeatPassword.fill(user.password);

    await this.Clickhere.click();
    await this.page.waitForTimeout(5000);

    await this.Adreessline1.fill(user.addressLine1);
    await this.Adreessline2.fill(user.addressLine2);
    await this.City.fill(user.city);
    await this.Postalcode.fill(user.postalCode);

    await this.Proceedbtn.click();

    await this.page.waitForTimeout(10000);
    console.log('User Registration Completed');

    }

}

module.exports = UserRegistrationPage;

