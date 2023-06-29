const { Task } = require('../models')

class TaskRepository {
	async create({ title, description }) {
		const task_id = await Task.create({ title, description })

		return task_id
	}

	async update(taskToUpdate) {
		const updatedTask = await Task.update(
			{ title: taskToUpdate.title, description: taskToUpdate.description },
			{
				where: { id: taskToUpdate.id }
			}
		)

		return updatedTask
	}

	async findById(id) {
		const taskFound = await Task.findOne({ where: { id } })

		return taskFound
	}

	async index() {
		const tasks = await Task.findAll({
			order: [['id', 'ASC']]
		})

		return tasks
	}

	async updateStatus({ id, status }) {
		const updatedTask = await Task.update(
			{ status: status },
			{
				where: { id: id }
			}
		)
		return updatedTask
	}

	async delete(id) {
		await Task.destroy({ where: { id: id } })
	}
}

module.exports = TaskRepository
