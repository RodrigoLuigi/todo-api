const TaskCreateService = require('./TaskCreateService')
const TaskDeleteService = require('./TaskDeleteService')
const TaskIndexService = require('./TaskIndexService')
const TaskUpdateService = require('./TaskUpdateService')
const TaskUpdateStatusService = require('./TaskUpdateStatusService')

module.exports = {
	TaskIndexService,
	TaskCreateService,
	TaskUpdateService,
	TaskDeleteService,
	TaskUpdateStatusService
}
