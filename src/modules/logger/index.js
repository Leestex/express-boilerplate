const winston = require('winston')
const config = require('config')

const logger = new winston.Logger({
  level: config.get('logs.level'),
  transports: [
    new winston.transports.Console({ colorize: true }),
  ],
})

logger.stream = {
  write (message) {
    logger.debug(message)
  },
}

module.exports = logger
