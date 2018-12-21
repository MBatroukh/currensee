const express = require('express')
// const Router = express.Router
const router = express.Router()
const { Group, Collectable } = require('../models/Group')

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

// Get list of all collections
router.get('/list', async (req, res, next) => {
    try {
        const docs = await Group.find({}, { name: 1 })

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

//DELETE /post/:post_id
router.delete('/:group_id', async (req, res, next) => {
    const { group_id } = req.params
    try {
        const doc = await Group.findByIdAndRemove(group_id)
        res.status(204).send({ data: [doc] })
    } catch (e) {
        next(e)
    }
})

//POST /posts
router.post('/', async (req, res, next) => {
    const { name, description } = req.body
    try {
        const doc = new Group({ name, description })
        await doc.save()
        res.status(201).send({ data: [doc] })
    } catch (e) {
        next(e)
    }
})

// COLLECTABLES
// Get collection items
router.get('/:group_id/:collectable_id', async (req, res, next) => {
    // 1. Get group_id out of params
    const groupId = req.params.group_id
    const collectableId = req.params.collectable_id
    try {
        // 2. look up a user by that is
        // const doc = await Group.findById(groupId).find({ "collectables._id": collectableId })

        const doc = await Group.find({
            _id: groupId
        },
            {
                collectables: {
                    $elemMatch: {
                        _id: collectableId
                    }
                }
            })

        // 3. If we fins that specific user, send back 200 + the user doc
        res.status(200).send({
            data: doc
        })
    } catch (e) {
        // 4. If we dont, handle the error
        next(e)
    }
})

// Add collection item
router.post('/:group_id', async (req, res, next) => {
    const { name, year, country, denomination, note, measurement, weight } = req.body
    const groupId = req.params.group_id
    try {
        const doc = new Collectable({ name, year, country, denomination, note, measurement, weight })
        await doc.save()

        // get group
        const group = await Group.findById(groupId)

        //update group
        group.collectables.push(doc)

        // save group
        await group.save()

        res.status(201).send({ data: group })
    } catch (e) {
        next(e)
    }

})

module.exports = router