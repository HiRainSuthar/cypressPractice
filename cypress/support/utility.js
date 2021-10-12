const faker = require('faker')

function getFirstName() {
    return faker.name.firstName();
}

function getLastName() {
    return faker.name.lastName();
}

function emailGenerator() {
    var email = "vuetestuser_";
    var charset = "abcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < 6; i++)
        email += charset.charAt(Math.floor(Math.random() * charset.length));
    return email + '@mailsac.com';
}


export {getFirstName, getLastName, emailGenerator}