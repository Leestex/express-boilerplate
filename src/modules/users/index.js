const express = require('express')
const User = require('./model')

const router = express.Router()

router.get('/:id', async (req, res) => {
  const user = await User.findById(req.params.id)

  if (!user) {
    return res.status(404).send('Not found')
  }

  res.status(200).json(user)
})

router.get('/', async (req, res) => {
  const users = await User.find()

  res.status(200).json(users)
})

module.exports = router
