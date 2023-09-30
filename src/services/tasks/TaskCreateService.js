const AppError = require('../../utils/AppError')

class TaskCreateService {
	constructor(taskRepository) {
		this.taskRepository = taskRepository
	}

	async execute({ title, description, user_id }) {
		try {
			const createdTask = await this.taskRepository.create({
				title,
				description,
				user_id
			})

			return createdTask
		} catch (error) {
			console.error('ERROR --> ', error.message)

			throw new AppError(error.message)
		}
	}
}

module.exports = TaskCreateService
