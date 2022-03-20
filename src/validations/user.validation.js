const Joi = require('joi')
const validations = require('./_validations')

const userValidation = {
  paramId: validations.runSchema(Joi.object({
    id: Joi.number().required().integer().positive()
  })),
  bodyEdit: validations.runSchema(Joi.object({
    displayName: Joi.string(),
    email: Joi.string().email(),
    photoURL: Joi.string(),
    password: Joi.string().min(6)
  })),
  bodyAdd: validations.runSchema(
    Joi.object({
      displayName: Joi.string().required(),
      email: Joi.string().email().required(),
      photoURL: Joi.string().required(),
      password: Joi.string().min(6).required()
    })
  )
}

module.exports = { userValidation }

// {
//   "displayName": "Zé",
//     "email": "ze@gmail.com",
//     "photoURL": "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimg.freepik.com%2Ffotos-gratis%2F3d-rendem-de-uma-mesa-de-madeira-com-uma-imagem-defocussed-de-um-barco-em-um-lago_1048-3432.jpg&imgrefurl=https%3A%2F%2Fbr.freepik.com%2Ffotos%2Fimagem-3d&tbnid=UJHtvU5kmexrpM&vet=12ahUKEwintMn81dT2AhXPnpUCHbAXCpQQMygCegUIARDYAQ..i&docid=2FnZBLCCcMHAHM&w=626&h=470&q=imagem&ved=2ahUKEwintMn81dT2AhXPnpUCHbAXCpQQMygCegUIARDYAQ",
//         "password": "123456"}