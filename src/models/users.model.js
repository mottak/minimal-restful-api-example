const { users, users_snapshots } = require('../db')
const models = require('./_models')

const usersModel = {
  get: async (_id) => {
    const doc = users.data.find(item => item._id === _id)
    return doc
  },
  edit: async (_id, changes) => {
    const index = users.data.findIndex(item => item._id === _id)
    if (~index) users.data[index] = {
      ...users.data[index],
      ...changes,
      _updatedAt: new Date()
    }
  },
  add: async (data) => {
    users.data.push({
      ...data,
      _createdAt: new Date(),
      _id: ++users.index
    })
    return users.index
  },
  list: async () => {
    const result = users.data.filter(item => !item._disabledAt)
    return result
  }
}

const userSnapshotModel = {
  history: async (_ref) => {
    const result = users_snapshots.data
      .filter(item => item._ref === _ref)
    return result
  },
  add: async (data) => {
    models.makeSnapshot(users_snapshots, data)
  }
}

module.exports = {
  usersModel,
  userSnapshotModel
}