import { element, by } from 'protractor';
import { Page } from '../page';

export class LoginPage extends Page {
    username = element(by.id('inputUsername'));
    password = element(by.id('inputPassword'));
    loginBtn = element(by.id('loginBtn'));
    invalidMessage = element(by.id('invalidCredentialsError'));

    executeLogin(username, password) {
        this.fillInput(this.username, username);
        this.fillInput(this.password, password);
        this.clickOnButton(this.loginBtn);
    }
}
