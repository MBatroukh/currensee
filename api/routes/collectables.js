const express = require('express')
// const Router = express.Router
const router = express.Router()
const Collectable = require('../models/Collectable')

router.get('/', async (req, res, next) => {
    try {
        const docs = await Collectable.find().populate('group')
        // Collections.find().populate('coin')
        res.status(200).send({
            data: docs
        })
    } catch (e) {
        next(e)
    }
})


// // Get /collectables
// router.get('/', async (req, res, next) => {
//     try {
//         // 1. Find all posts in DB
//         const docs = await Collectable.find().populate('group')

//         // 2. If successfull send back 200 status code with users
//         res.status(200).send({
//             data: docs
//         })
//     } catch (e) {
//         // 3. If unsuccessful send error into eror handler
//         next(e)
//     }
// })

module.exports = router