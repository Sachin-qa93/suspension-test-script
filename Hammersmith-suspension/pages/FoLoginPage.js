class FOLoginPage {

    constructor(page) {

        this.page = page;

        this.username = page.locator('//input[@id="email"]');

        this.password = page.locator('//input[@type="password"]');

        this.loginButton = page.locator('//button[@type="submit"]');
    }

    async navigate(url) {

        await this.page.goto(url);
    }

    async login(username, password) {

        await this.username.fill(username);

        await this.password.fill(password);

        await this.loginButton.click();
    }
}

module.exports = FOLoginPage;