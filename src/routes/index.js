const express = require('express')

const auth = require('../modules/auth')
const users = require('../modules/users')

const { authenticated } = require('../middlewares/policy')

const router = express.Router()

router.use('/auth', auth)
router.use('/users', authenticated, users)

module.exports = router
