const Strategy = require('passport-local').Strategy
const User = require('../../users/model')

async function verify (username, password, done) {
  const user = await User.findOne({ username })

  if (!user || await !user.validPassword(password)) {
    return done(null, false, { message: 'Incorrect credentials' })
  }

  return done(null, user)
}

const strategy = new Strategy(verify)

module.exports = strategy
