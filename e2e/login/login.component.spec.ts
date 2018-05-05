import { browser, by, element } from 'protractor';
import { LoginPage } from './login.page';

describe('validate login', () => {
    const page = new LoginPage();

    beforeEach(() => {
        browser.get('http://localhost:4200/#/login');
    });

    afterEach(() => {
        browser.executeScript('window.localStorage.clear();');
    });

    it('valid login', () => {
        page.fillLoginFields('admin@venturus.org.br', 'admin');
        expect(element(by.id('buttonLeave')).isDisplayed()).toBeTruthy();
    });

    it('login with invalid username ', () => {
        page.fillLoginFields('admin', 'admin');
        expect(element(by.id('invalidCredentialsError')).getText()).toEqual('Invalid username and/or password');
    });

    it('login with invalid password ', () => {
        page.fillLoginFields('admin@venturus.org.br', 'venturus');
        expect(element(by.id('invalidCredentialsError')).getText()).toEqual('Invalid username and/or password');
    });

    it('valid placeholders', () => {
        expect(page.getPlaceholder(page.username)).toBe('Username');
        expect(page.getPlaceholder(page.password)).toBe('Password');
    });
});
