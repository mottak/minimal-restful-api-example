const { validUser } = require('./newUsersMock');

const mockUserServiceList = () => {
  return [validUser]
}

const mockUserServiceListNoUsers = async () => {
  return Promise.resolve([])
}

module.exports = {
  mockUserServiceList,
  mockUserServiceListNoUsers
}