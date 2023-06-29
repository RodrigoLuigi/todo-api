const TaskRepository = require('../repositories/TaskRepository')

const TaskIndexService = require('../services/tasks/TaskIndexService')
const TaskDeleteService = require('../services/tasks/TaskDeleteService')
const TaskCreateService = require('../services/tasks/TaskCreateService')
const TaskUpdateService = require('../services/tasks/TaskUpdateService')
const TaskUpdateStatusService = require('../services/tasks/TaskUpdateStatusService')

class TasksController {
	async create(request, response) {
		const { title, description } = request.body

		const taskRepository = new TaskRepository()
		const taskCreateService = new TaskCreateService(taskRepository)

		const task = await taskCreateService.execute({ title, description })

		return response.status(201).json(task)
	}

	async update(request, response) {
		const { title, description } = request.body
		const { id } = request.params

		const taskRepository = new TaskRepository()
		const taskUpdateService = new TaskUpdateService(taskRepository)

		const updatedTask = await taskUpdateService.execute({
			id,
			title,
			description
		})

		return response.status(200).json(updatedTask)
	}

	async index(request, response) {
		const taskRepository = new TaskRepository()
		const taskIndexService = new TaskIndexService(taskRepository)

		const tasks = await taskIndexService.execute()

		return response.status(200).json(tasks)
	}

	async updateStatus(request, response) {
		const { status } = request.body
		const { id } = request.params

		const taskRepository = new TaskRepository()
		const taskUpdateStatusService = new TaskUpdateStatusService(taskRepository)

		const updatedTaskStatus = await taskUpdateStatusService.execute({
			id,
			status
		})

		return response.status(200).json(updatedTaskStatus)
	}

	async delete(request, response) {
		const { id } = request.params

		const taskRepository = new TaskRepository()
		const taskDeleteService = new TaskDeleteService(taskRepository)

		await taskDeleteService.execute(id)

		return response.status(200).json()
	}
}

module.exports = TasksController
