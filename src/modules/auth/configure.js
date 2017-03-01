const passport = require('passport')
const localStrategy = require('./strategies/local')
const User = require('../users/model')

passport.use(localStrategy)

passport.serializeUser((user, done) => {
  done(null, user._id)
})

passport.deserializeUser((id, done) => {
  User.findById(id, done)
})
