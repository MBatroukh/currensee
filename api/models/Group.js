const mongoose = require('mongoose')
const Schema = mongoose.Schema

const collectableSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    denomination: {
        type: String,
        required: true
    },
    note: {
        type: String,
        required: false
    },
    measurement: {
        type: String,
        required: false
    },
    weight: {
        type: String,
        required: false
    }
})

const groupSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    collectables: [collectableSchema]
})

module.exports = {
    Group: mongoose.model('Group', groupSchema),
    Collectable: mongoose.model('Collectable', collectableSchema)
}

// module.exports = mongoose.model('Group', groupSchema)