const { urlencoded } = require('express')

const urlParserMiddleware = urlencoded({ extended: true })

module.exports = { urlParserMiddleware }