const faker = require('faker')

function getFirstName(){
    return faker.name.firstName();
}

console.log('first name is '+ getFirstName())