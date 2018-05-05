import { element, by } from 'protractor';
import { Page } from '../page';

export class HomePage extends Page {
    firstPhrase = element(by.tagName('h1'));
    lastPhrase = element(by.tagName('h3'));
    leaveBtn = element(by.id('buttonLeave'));
}
