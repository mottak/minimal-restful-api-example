const compression = require('compression')

const compressionMiddleware = compression({ threshold: 0 })

module.exports = { compressionMiddleware }