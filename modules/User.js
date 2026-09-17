const { randomUUID } = require('crypto');

class User {
    constructor( mail = '' ) {
        this.id = randomUUID();
        this.mail = mail
    }
}

module.exports = User;