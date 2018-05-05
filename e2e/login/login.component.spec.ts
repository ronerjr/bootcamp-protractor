import { browser, by, element } from 'protractor';
import { LoginPage } from './login.page';
import { LoginData } from './login.data';
import * as using from 'jasmine-data-provider';

describe('Login page', () => {
    const page = new LoginPage();
    const data = new LoginData();
    const errorMessage = 'Invalid username and/or password';

    beforeEach(() => {
        browser.get('http://localhost:4200/#/login');
    });

    afterEach(() => {
        browser.executeScript('window.localStorage.clear();');
    });

    using(data.valid, (login) => {
        it('can execute login with the field filled correctly', () => {
            page.executeLogin(login.username, login.password);
            expect(element(by.id('buttonLeave')).isDisplayed()).toBeTruthy();
        });
    });

    using(data.invalid, (login) => {
        it(`cannot execute login with invalid data -> login ${login.username}`, () => {
            page.executeLogin(login.username, login.password);
            expect(page.getText(page.invalidMessage)).toEqual(errorMessage);
        });
    });

    it('has the right placeholders to guide user', () => {
        expect(page.getPlaceholder(page.username)).toBe('Username');
        expect(page.getPlaceholder(page.password)).toBe('Password');
    });
});
