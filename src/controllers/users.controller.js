const { usersService } = require("../services")
const { userValidation } = require("../validations")

const usersController = {
  history: async (params) => {
    const { id } = await userValidation.paramId(params)
    const result = await usersService.history(id)
    return result
  },
  enable: async (params) => {
    console.log("enable - params ---->", params)
    const { id } = await userValidation.paramId(params)

    const result = await usersService.enable(id)
    return result
  },
  get: async (params) => {
    const { id } = await userValidation.paramId(params)
    const result = await usersService.get(id)
    return result
  },
  edit: async (params, body) => {
    const [{ id }, changes] = await Promise.all([
      userValidation.paramId(params),
      userValidation.bodyEdit(body)
    ])
    const result = await usersService.edit(id, changes)
    return result
  },
  disable: async (params) => {
    const { id } = await userValidation.paramId(params)
    const result = await usersService.disable(id)
    return result
  },
  add: async (body) => {
    const data = await userValidation.bodyAdd(body)
    const result = await usersService.add(data)
    return result
  },
  list: async () => {
    const result = await usersService.list()
    return result
  },
}

module.exports = { usersController }