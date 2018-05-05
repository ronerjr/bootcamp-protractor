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
        for (let index = 0; index < 10; index++) {
            let data = {};
            data['username'] = faker.internet.email();
            data['password'] = faker.internet.password();
            this.invalid.unshift(data);
        }
    }
}
