const logger = require('../logger')

const errorHandlerMiddleware = (err, _, res, next) => {
  const { name, message, details } = err

  switch (name) {
    case 'ValidationError':
      res.status(400).json({ message: details[0].message })
      break
    case 'NotFoundError':
      res.status(404).json({ message })
      break
    default:
      logger.error({ name, message })
      res.status(500).json({ message })
  }

  next()
}

module.exports = { errorHandlerMiddleware }