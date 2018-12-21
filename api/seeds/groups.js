// Require User Model so we can create new users
const { Group } = require('../models/Group')

// Create array to store fake users
const groups = []

// Create Fake user
const Canadian = new Group({
    name: "Canadian",
    description: "Canadian coin collection",
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
            country: 'Canada',
            denomination: '0.05',
            measurement: '20mm',
            weight: '2 grams'
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
groups.push(Canadian)

const Foreigns = new Group({
    name: 'Foreigns'
})

groups.push(Foreigns)

// Make out fake users available outside of this file
module.exports = groups