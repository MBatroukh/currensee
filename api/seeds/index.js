const mongoose = require('mongoose')

const { Group } = require('../models/Group')
// const Collectable = require('../models/Collectable')
const groups = require('./groups')
// const collectables = require('./collectables')
const uri = 'mongodb://localhost:27017/currensee'

// Database truncation
const truncateDatabase = async () => {
    return Promise.all([Group.deleteMany()/* , Collectable.deleteMany() */])
}

const makeSeeds = async () => {
    // Connect to our DB
    await mongoose.connect(uri)

    // once connected, delete all old cruft
    await truncateDatabase()

    // Once cruft is gone add fake collections to db
    await Promise.all(groups.map(group => group.save()))

    // Save our seeded post into the database
    // await Promise.all(collectables.map(collectable => collectable.save()))

    // Once finished, close connection
    mongoose.connection.close()
}

makeSeeds()