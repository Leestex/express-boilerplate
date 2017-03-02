const express = require('express')
const passport = require('passport')

const router = express.Router()

router.post('/login', passport.authenticate('local'), (req, res) => {
  res.status(200).send()
})

router.get('/logout', (req, res) => {
  req.logout()
  res.status(200).send()
})

module.exports = router
