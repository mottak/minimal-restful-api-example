const throwError = (name, defaultMessage = '') => (message = defaultMessage) => {
  const error = new Error(message)
  error.name = name
  throw error
}

const services = {
  throwNotFound: throwError('NotFoundError', 'not found'),
}

module.exports = services