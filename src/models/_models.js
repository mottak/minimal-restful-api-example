const makeSnapshot = (snapshots, obj) => {
  snapshots.data.push({
    ...obj,
    _id: ++snapshots.index,
    _ref: obj._id,
    _ttl: new Date(Date.now() + (1000 * 60 * 60 * 24 * 90))
  })
}

const models = {
  makeSnapshot
}

module.exports = models