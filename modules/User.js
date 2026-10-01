const {Schema, model} = require('mongoose');

const userSchema = new Schema({
    username: {
        type: String
    },
    displayName: {
        type: String
    },
    emails: {
        type: String
    },
    password: {
        type: String
    },
});

module.exports = model('User', userSchema);