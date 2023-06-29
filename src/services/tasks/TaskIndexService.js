class TaskIndexService {
	constructor(taskRepository) {
		this.taskRepository = taskRepository
	}

	async execute() {
		try {
			const tasks = await this.taskRepository.index()

			return tasks
		} catch (error) {
			console.error('Erro ao buscar tarefas:', error)
		}
	}
}

module.exports = TaskIndexService
