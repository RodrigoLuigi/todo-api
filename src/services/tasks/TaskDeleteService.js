class TaskDeleteService {
	constructor(taskRepository) {
		this.taskRepository = taskRepository
	}

	async execute(id) {
		try {
			await this.taskRepository.delete(id)
		} catch (error) {
			console.error('Erro ao deletar a tarefa.', error)
			throw error
		}
	}
}

module.exports = TaskDeleteService
