const { usersModel, userSnapshotModel } = require('../models')
const services = require('./_services')

const usersService = {
  history: async (_id) => {
    const result = await userSnapshotModel.history(_id)
    return result
  },
  enable: async (_id) => {
    const oldDoc = await usersModel.get(_id)
    if (!oldDoc || !oldDoc._disabledAt) services.throwNotFound()
    await Promise.all([
      userSnapshotModel.add(oldDoc),
      usersModel.edit(_id, { ...oldDoc, _disabledAt: null })
    ])
    const newDoc = await usersModel.get(_id)
    return newDoc
  },
  get: async (_id) => {
    const exists = await usersModel.get(_id)
    if (!exists) services.throwNotFound()
    return exists
  },
  edit: async (_id, changes) => {
    const oldDoc = await usersModel.get(_id)
    if (!oldDoc) services.throwNotFound()
    await Promise.all([
      userSnapshotModel.add(oldDoc),
      usersModel.edit(_id, changes)
    ])
    const newDoc = await usersModel.get(_id)
    return newDoc
  },
  disable: async (_id) => {
    const oldDoc = await usersModel.get(_id)
    if (!oldDoc || oldDoc._disabledAt) services.throwNotFound()
    await Promise.all([
      userSnapshotModel.add(oldDoc),
      usersModel.edit(_id, { ...oldDoc, _disabledAt: new Date() })
    ])
  },
  add: async (data) => {
    const _id = await usersModel.add(data)
    const newDoc = await usersModel.get(_id)
    return newDoc
  },
  list: async () => {
    const result = await usersModel.list()
    return result
  },
}

module.exports = { usersService }