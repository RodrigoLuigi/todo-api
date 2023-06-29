const { Router } = require('express')

const taskRoutes = require('./tasks.routes')

const routes = Router()

routes.use('/tasks', taskRoutes)

module.exports = routes
