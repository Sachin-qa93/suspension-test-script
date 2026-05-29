class LoginPage {

    constructor(page) {

        this.page = page;

        this.username = '//input[@id="email"]';
        this.password = '//input[@id="password"]';
        this.loginButton = '//button[@type="submit"]';

    }

    async navigate(url) {

        await this.page.goto(url, {
            waitUntil: 'domcontentloaded',
            timeout: 60000
        });

    }

    async login(user, pass) {

        await this.page.locator(this.username).fill(user);

        await this.page.locator(this.password).fill(pass);

        await this.page.locator(this.loginButton).click();

        await this.page.waitForLoadState('networkidle', {
            timeout: 50000
        });

    }

}

module.exports = LoginPage;
