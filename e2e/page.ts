export class Page {
    clickOnButton(button) {
        button.click();
    }

    fillInput(field, value) {
        field.sendKeys(value);
    }

    getPlaceholder(field) {
        return field.getAttribute('placeholder');
    }
}