class TaskUpdateService {
	constructor(taskRepository) {
		this.taskRepository = taskRepository
	}

	async execute({ id, title, description }) {
		try {
			const taskFound = await this.taskRepository.findById(id)

			taskFound.title = title ?? taskFound.title
			taskFound.description = description ?? taskFound.description

			const updatedTask = await this.taskRepository.update(taskFound)

			return updatedTask
		} catch (error) {
			console.error('Erro ao atualizar tarefa:', error)
			throw error
		}
	}
}

module.exports = TaskUpdateService
