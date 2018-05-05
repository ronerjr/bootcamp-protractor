import { browser, by, element } from 'protractor';
import { HomePage } from './home.page';
import { LoginPage } from '../login/login.page';

describe('Home screen', () => {
    const page = new HomePage();
    const firstPhrase = 'You shall not p...!';
    const lastPhrase = 'Oh, well. You already did.';

    beforeAll(() => {
        browser.get('http://localhost:4200/#/login');
        const login = new LoginPage();
        login.executeLogin('admin@venturus.org.br', 'admin');
    });

    afterAll(() => {
        browser.executeScript('window.localStorage.clear();');
    });

    beforeEach(() => {
        browser.get('http://localhost:4200/#/');
    });

    it('with all fields displayed correctly', () => {
        const allDisplayed = page.isDisplayed(page.firstPhrase) && page.isDisplayed(page.lastPhrase) && page.isDisplayed(page.leaveBtn);
        expect(allDisplayed).toBeTruthy();
    });
});
