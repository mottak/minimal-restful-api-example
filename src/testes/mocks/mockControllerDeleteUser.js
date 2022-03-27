const Joi = require('joi')

const deleteSchema = Joi.object({
  id: Joi.number().required().integer().positive()
})


const mockDeleteUser = async (_id) => {
  console.log('mock Delete - id--------->', _id)
  const deleteValidation = deleteSchema.validate(_id)
  console.log(' delete validation ---------->', deleteValidation)
  return { id: deleteValidation };
}

const deleteUser = () => {
  return undefined;
}

module.exports = {
  deleteUser,
  mockDeleteUser
}