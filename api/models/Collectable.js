// ! File to be removed

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CollectableSchema = new Schema({
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
    },
    group: {
        type: Schema.Types.ObjectId,
        ref: 'Group'
    }
})

module.exports = mongoose.model('Collectable', CollectableSchema)