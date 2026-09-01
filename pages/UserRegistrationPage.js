const config = require('../utils/config');
class UserRegistrationPage {

    constructor(page) {

        this.page = page;
       this.ApplyBtn = page.locator('//a[@class="btn btn-outline-info, authentication__button theme__button"]');
       this.suspensionBtn = page.locator('//span[@class="text"]');
       this.FirstName = page.locator('//input[@placeholder="First name"]');
        this.ContactNumber = page.locator('//input[@placeholder="Applicant contact number"]');
        this.companyName = page.locator('//input[@id="companyName"]');
        this.email = page.locator('//input[@id="customerEmail"]');
        this.Password = page.locator('//input[@id="password"]');
        this.Adress = page.locator('//input[@id="postalCodeSearch"]');
        this.LastName = page.locator('//input[@id="lastName"]');
        this.SecondaryContactNumber = page.locator('//input[@placeholder="Secondary contact number"]');
        this.RepeatEmail = page.locator('//input[@id="repeatCustomerEmail"]');
        this.RepeatPassword = page.locator('//input[@id="repeatPassword"]');
        this.termsAndCondition = page.locator('//input[@id="termsAndCondition"]');
        this.Proceedbtn = page.locator('(//button[@type="button"])[2]');
    }
   



    async RegisterUser() {
        const user = config.registrationData;
     await this.ApplyBtn.click();
        await this.suspensionBtn.click();
      await this.FirstName.fill(user.firstName);
      await this.ContactNumber.fill(user.contactNumber);
        await this.companyName.fill(user.companyName);
        await this.email.fill(user.email);
        await this.Password.fill(user.password);
        await this.Adress.fill(user.address);
        await this.LastName.fill(user.lastName);
        await this.SecondaryContactNumber.fill(user.secondaryContactNumber);
        await this.RepeatEmail.fill(user.repeatEmail);
        await this.RepeatPassword.fill(user.repeatPassword);
        const [termsPage] = await Promise.all([
    this.page.context().waitForEvent('page'),
    this.termsAndCondition.click()
]);

await termsPage.waitForLoadState();


console.log(await termsPage.title());

// Close Terms & Conditions tab
await termsPage.close();

// Back to main registration page
await this.page.bringToFront();
await this.Proceedbtn.click();

await this.page.waitForTimeout(10000);
console.log('User Registration Completed');

    }

}

module.exports = UserRegistrationPage;

