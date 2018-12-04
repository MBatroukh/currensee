// ! File to be removed

// Require post and comment models
const Collectable = require('../models/Collectable')
// Require our fake users
const groups = require('./groups')

// Create Array to store our fake coins
const collectables = []

// Create fake coins
const coin = new Collectable({
    name: 'Curling Coin',
    year: '2007',
    country: 'Canada',
    denomination: '0.25',
    note: 'This is a test note',
    group: groups[0]
})

// Add Curling coin to array
collectables.push(coin)

// Create fake coins
const oCoin = new Collectable({
    name: 'Olympic Nickel',
    year: '2012',
    country: 'Greece',
    denomination: '0.05',
    group: groups[0]
})

// Add Curling coin to array
collectables.push(oCoin)

module.exports = collectables