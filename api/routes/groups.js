const express = require('express')
// const Router = express.Router
const router = express.Router()
const Group = require('../models/Group')

// Get /collections
router.get('/', async (req, res, next) => {
    try {
        const docs = await Group.find()
        // Collections.find().populate('coin')
        res.status(200).send({
            data: docs
        })
    } catch (e) {
        next(e)
    }
})

module.exports = router