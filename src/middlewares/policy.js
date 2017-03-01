const Boom = require('boom')

module.exports = {

  authenticated: (req, res) => {
    if (req.isAuthenticated()) {
      return next()
    }
    next(Boom.unauthorized())
  }

}
