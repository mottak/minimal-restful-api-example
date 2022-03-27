const Joi = require('joi')

const userValidation = Joi.object({
  displayName: Joi.string().required(),
  email: Joi.string().email().required(),
  photoURL: Joi.string().required(),
  password: Joi.string().min(6).required()
})

const mockUserValidate = (newUser) => {
  const validUser = userValidation.validate(newUser);
  return validUser;
}

const mockUserServiceCreate = (newUser) => {
  const mockCreatedUser = { _id: 1, ...newUser }
  return mockCreatedUser;
}

module.exports = {
  mockUserValidate,
  mockUserServiceCreate,

}