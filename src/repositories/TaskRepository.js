const { Tasks } = require('../database/models')

class TaskRepository {
	async create({ title, description, user_id }) {
		const task_id = await Tasks.create({ title, description, user_id })

		return task_id
	}

	async update(taskToUpdate) {
		const updatedTask = await Tasks.update(
			{ title: taskToUpdate.title, description: taskToUpdate.description },
			{
				where: { id: taskToUpdate.id }
			}
		)

		return updatedTask
	}

	async findById(id) {
		const taskFound = await Tasks.findOne({ where: { id } })

		return taskFound
	}

	async index() {
		const tasks = await Tasks.findAll({
			order: [['id', 'ASC']]
		})

		return tasks
	}

	async updateStatus({ id, status }) {
		const updatedTask = await Tasks.update(
			{ status: status },
			{
				where: { id: id }
			}
		)
		return updatedTask
	}

	async delete(id) {
		await Tasks.destroy({ where: { id: id } })
	}
}

module.exports = TaskRepository
