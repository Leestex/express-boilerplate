const Boom = require('boom')

module.exports = {

  authenticated: (req, res, next) => {
    if (req.isAuthenticated()) {
      next()
      return
    }
    next(Boom.unauthorized())
  },

}
