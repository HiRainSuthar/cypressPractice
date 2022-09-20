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

//Returns today's date in format YYYY-MM-DD
function getFormattedDate() {
    return datefns.format(new Date(), 'YYYY-MM-DD').toString()
}

//Adds days to current date
function getFutureDate(daysToAdd) {
    return datefns.format(datefns.addDays(new Date(), daysToAdd), 'YYYY/MM/DD').toString()
}

//Adds hours to current time
function getFuturHour(hourToAdd){
    return datefns.format(datefns.addHours(new Date(), hourToAdd), 'hh').toString()
}

//Adds mins to current time
function getFutureMins(minsToAdd) {
    console.log(datefns.format(datefns.addMinutes(new Date(), minsToAdd), 'mm').toString())
}

export {getFirstName, getLastName, emailGenerator, getFormattedDate, getFutureDate, getFuturHour, getFutureMins}