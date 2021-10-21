const faker = require('faker')
const datefns = require('date-fns')

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

function getFormattedDate() {
    // let year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
    // let month = new Intl.DateTimeFormat('en', { month: 'numeric' }).format(d);
    // let day = new Intl.DateTimeFormat('en', { day: 'numeric' }).format(d);
    // return `${year}/${month}/${day}`;
    return datefns.format(new Date(), 'YYYY-MM-DD').toString()
}

function getFutureDate() {
    return datefns.format(datefns.addDays(new Date(), 10), 'YYYY/MM/DD').toString()
}


export {getFirstName, getLastName, emailGenerator, getFormattedDate, getFutureDate}