const runSchema = (schema) => async (value) => {
  const result = await schema.validateAsync(value)
  return result
}

const validations = {
  runSchema
}

module.exports = validations