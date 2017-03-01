const express = require('express')
const config = require('config')
const passport = require('passport')
const mongoose = require('mongoose')
const helmet = require('helmet')
const session = require('express-session')

mongoose.Promise = require('bluebird')

const router = require('./routes')
const errorHandler = require('./middlewares/error.handler')

const app = express()

app.use(helmet())
app.use(session(config.get('session')))
app.use(passport.initialize())
app.use(passport.session())
app.use(router)
app.use(errorHandler)

mongoose.connect(config.get('database.mongodb.uri'))

app.listen(config.get('server.port'), () => {
  console.log(`Server is running on ${config.get('server.port')} port`)
})
