const Strategy = require('passport-local').Strategy
const User = require('../../users/model')

const localStrategy = new Strategy(async (username, password, done) => {
  const user = await User.findOne({ username })

  if (!user) {
    return done(null, false, { message: 'Incorrect username' })
  }

  if (!user.validPassword(password)) {
    return done(null, false, { message: 'Incorrect password' })
  }

  return done(null, user)
})
