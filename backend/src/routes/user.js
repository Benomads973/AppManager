const express = require('express')
const router = express.Router()
const userCtrl = require('../controllers/user')

router.post('/sendToMongo', userCtrl.sendToMongo)

module.exports = router