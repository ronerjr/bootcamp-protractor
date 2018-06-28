import * as faker from 'faker';

export class LoginData {
    valid = [
        {
            username: 'admin@venturus.org.br',
            password: 'admin'
        }
    ];
    invalid = [];
    constructor() {
        for (let index = 0; index < 5; index++) {
            const data = {};
            data['username'] = faker.internet.email();
            data['password'] = faker.internet.password();
            this.invalid.unshift(data);
        }
    }
}
