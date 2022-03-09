const expressWinston = require('express-winston')
const logger = require('../logger')

const requestLoggerMiddleware = expressWinston.logger({
  winstonInstance: logger,
  ignoreRoute: (req) => req.url === '/'
})

module.exports = { requestLoggerMiddleware }