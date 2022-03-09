module.exports = {
  ...require('./body-parser.middleware'),
  ...require('./compression.midleware'),
  ...require('./cors.middleware'),
  ...require('./error-handler.middleware'),
  ...require('./request-logger.middleware'),
  ...require('./security.middleware'),
  ...require('./url-parser.middleware')
}
