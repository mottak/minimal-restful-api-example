const express = require('express')
require('express-async-errors')
const {
  bodyParserMiddleware,
  compressionMiddleware,
  corsMiddleware,
  errorHandlerMiddleware,
  requestLoggerMiddleware,
  securityMiddleware,
  urlParserMiddleware
} = require('./middlewares')
const {
  usersRouter
} = require('./routes')

const app = express()

// middleware request
app.use(bodyParserMiddleware)
app.use(compressionMiddleware)
app.use(corsMiddleware)
app.use(requestLoggerMiddleware)
app.use(securityMiddleware)
app.use(urlParserMiddleware)

// routes
app.use('/users', usersRouter)
app.use('/', (_, res) => res.send())

// middlewares response
app.use(errorHandlerMiddleware)

module.exports = app
