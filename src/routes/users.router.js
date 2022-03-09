const { Router } = require('express')
const { usersController } = require('../controllers')

const usersRouter = Router()

// history
usersRouter.get('/:id/history', async (req, res) => {
  const result = await usersController.history(req.params)
  res.json(result)
})

// enable
usersRouter.delete('/:id/rollback', async (req, res) => {
  const result = await usersController.enable(req.params)
  res.json(result)
})

// get
usersRouter.get('/:id', async (req, res) => {
  const result = await usersController.get(req.params)
  res.json(result)
})

// edit
usersRouter.put('/:id', async (req, res) => {
  const result = await usersController.edit(req.params, req.body)
  res.json(result)
})

// disable
usersRouter.delete('/:id', async (req, res) => {
  await usersController.disable(req.params)
  res.send()
})

// add
usersRouter.post('/', async (req, res) => {
  const result = await usersController.add(req.body)
  res.status(201).json(result)
})

// list
usersRouter.get('/', async (_, res) => {
  const result = await usersController.list()
  res.json(result)
})

module.exports = { usersRouter }