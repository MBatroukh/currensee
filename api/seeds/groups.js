// Require User Model so we can create new users
const Group = require('../models/Group')

// Create array to store fake users
const groups = []

// Create Fake user
const Coins = new Group({
    name: "Coins",
    description: "My Coin Collection"
})

// Add to our fake user array
groups.push(Coins)

const HotWheels = new Group({
    name: 'Hot Wheels'
})

groups.push(HotWheels)

// Make out fake users available outside of this file
module.exports = groups