const express = require('express')
// const Router = express.Router
const router = express.Router()
const { Group } = require('../models/Group')

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

// Get collection items
router.get('/:group_id', async (req, res, next) => {
    // 1. Get group_id out of params
    const groupId = req.params.group_id

    try {
        // 2. look up a user by that is
        const doc = await Group.findById(groupId).populate('collectables')

        // 3. If we fins that specific user, send back 200 + the user doc
        res.status(200).send({
            data: [doc]
        })
    } catch (e) {
        // 4. If we dont, handle the error
        next(e)
    }
})

module.exports = router