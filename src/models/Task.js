const Task = (sequelize, DataTypes) => {
	const task = sequelize.define(
		'Task',
		{
			id: {
				type: DataTypes.INTEGER,
				autoIncrement: true,
				primaryKey: true
			},
			title: {
				type: DataTypes.TEXT,
				allowNull: false
			},
			description: {
				type: DataTypes.TEXT,
				allowNull: false
			},
			status: {
				type: DataTypes.BOOLEAN,
				defaultValue: false
			}
		},
		{
			tableName: 'Tasks'
		}
	)

	return task
}

module.exports = Task
