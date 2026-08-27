const { v4: uuid } = require('uuid');

class User {
    constructor( mail = '' ) {
        this.id = uuid();
        this.mail = mail
    }
}

module.exports = User;