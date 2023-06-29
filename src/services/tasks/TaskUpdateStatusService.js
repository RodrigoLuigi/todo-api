class TaskUpdateStatusService {
	constructor(taskRepository) {
		this.taskRepository = taskRepository
	}

	async execute({ id, status }) {
		try {
			const updatedTaskStatus = await this.taskRepository.updateStatus({
				id,
				status
			})

			return updatedTaskStatus
		} catch (error) {
			console.error('Erro ao atualizar o status da tarefa.', error)
			throw error
		}
	}
}

module.exports = TaskUpdateStatusService
