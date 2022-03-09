const { json } = require('express')

const bodyParserMiddleware = json()

module.exports = { bodyParserMiddleware }