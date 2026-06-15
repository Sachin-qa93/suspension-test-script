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
     
 await this.ApplyBtn.click();
 await this.suspensionBtn.click();
 await this.FirstName.fill('dev');
 await this.ContactNumber.fill('67654676656');
 await this.email.fill('dev@gmail.com');
 await this.Password.fill('Pass@123');
 await this.LastName.fill('rathi');
 await this.SecondaryContactNumber.fill('1234346565');
 await this.RepeatEmail.fill('dev@gmail.com');
 await this.RepeatPassword.fill('Pass@123');
 await this.Clickhere.click();
 await this.page.waitForTimeout(5000);
 await this.Adreessline1.fill('1 Brixton Hill');
 await this.Adreessline2.fill('Lambeth');
 await this.City.fill('London');
  await this.Postalcode.fill('SW2 5SG');
  await this.Proceedbtn.click();
 
await this.page.waitForTimeout(10000);
console.log('User Registration Completed');

    }

}

module.exports = UserRegistrationPage;

