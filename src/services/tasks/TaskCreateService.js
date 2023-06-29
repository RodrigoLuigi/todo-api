class TaskCreateService {
	constructor(taskRepository) {
		this.taskRepository = taskRepository
	}

	async execute({ title, description, status }) {
		try {
			const createdTask = await this.taskRepository.create({
				title,
				description,
				status
			})

			return createdTask
		} catch (error) {
			console.error('Erro ao cadastrar tarefa:', error)
			throw error
		}
	}
}

module.exports = TaskCreateService
