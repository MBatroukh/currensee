// Require User Model so we can create new users
const { Group } = require('../models/Group')

// Create array to store fake users
const groups = []

// Create Fake user
const Coins = new Group({
    name: "Coins",
    description: "My Coin Collection",
    collectables: [
        {
            name: 'Curling Coin',
            year: '2007',
            country: 'Canada',
            denomination: '0.25',
            note: 'This is a test note'
        },
        {
            name: 'Olympic Nickel',
            year: '2012',
            country: 'Greece',
            denomination: '0.05',
        },
        {
            name: 'Veteran Penny',
            year: '2005',
            country: 'Canada',
            denomination: '0.01',
            note: 'Commemmoration Penny'
        },
    ]
})

// Add to our fake user array
groups.push(Coins)

const HotWheels = new Group({
    name: 'Hot Wheels'
})

groups.push(HotWheels)

// Make out fake users available outside of this file
module.exports = groups