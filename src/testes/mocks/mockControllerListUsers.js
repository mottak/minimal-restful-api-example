const { validUser } = require('./newUsersMock');
const Joi = require('joi')


const deleteSchema = Joi.object({
  id: Joi.number().required().integer().positive()
})


const verifyUser = async (_id) => {

  const deleteValidation = deleteSchema.validate(_id)

  return { id: deleteValidation };
}

const mockUserServiceList = () => {
  return [validUser]
}

const mockUserNotFound = () => {
  // throw Error({ "message": "not found" })
  return { "status": "404", "message": "not found" }
}


module.exports = {
  mockUserServiceList,
  verifyUser,
  mockUserNotFound
}