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