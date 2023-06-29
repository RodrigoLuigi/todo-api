const { Router } = require('express')
const TasksController = require('../controller/TasksController')

const tasksController = new TasksController()

const taskRoutes = Router()

taskRoutes.get('/', tasksController.index)
taskRoutes.post('/', tasksController.create)
taskRoutes.put('/:id', tasksController.update)
taskRoutes.patch('/:id', tasksController.updateStatus)
taskRoutes.delete('/:id', tasksController.delete)

module.exports = taskRoutes
