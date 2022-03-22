const Joi = require('joi')

const userValidation = Joi.object({
  displayName: Joi.string().required(),
  email: Joi.string().email().required(),
  photoURL: Joi.string().required(),
  password: Joi.string().min(6).required()
})

const validNewUser = {
  "displayName": "Zé",
  "email": "ze@gmail.com",
  "photoURL": "UrlImage",
  "password": "123456"
}

const invalidNameNewUser = {
  "displayName": "",
  "email": "ze@gmail.com",
  "photoURL": "UrlImage",
  "password": "123456"
}

const invalidNoNameNewUser = {
  "email": "ze@gmail.com",
  "photoURL": "UrlImage",
  "password": "123456"
}

const invalidemailNewUser = {
  "displayName": "Zé",
  "email": "zegmail.com",
  "photoURL": "UrlImage",
  "password": "123456"
}

const invalidNoEmailNewUser = {
  "displayName": "Zé",
  "photoURL": "UrlImage",
  "password": "123456"
}


const mockUserValidate = (newUser) => {

  const validUser = userValidation.validate(newUser);
  return validUser;
}

const mockUserService = (newUser) => {
  const mockCreatedUser = { _id: 1, ...newUser }
  return mockCreatedUser;
}

module.exports = {
  mockUserValidate,
  mockUserService,
  validNewUser,
  invalidNameNewUser,
  invalidNoNameNewUser,
  invalidemailNewUser,
  invalidNoEmailNewUser
}