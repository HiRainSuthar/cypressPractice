const datefns = require('date-fns')
// console.log(datefns.getTime(new Date()))
// console.log(datefns.getHours(new Date()))
// console.log(datefns.getMinutes(new Date()))


// console.log(datefns.format(datefns.addHours(new Date(), 1), 'hh').toString())

function getFutureMins() {
    console.log(datefns.format(datefns.addMinutes(new Date(), 30), 'mm').toString())
}

getFutureMins()