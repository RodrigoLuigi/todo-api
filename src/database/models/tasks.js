'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
	class Tasks extends Model {
		static associate(models) {
			Tasks.belongsTo(models.Users, {
				foreignKey: 'user_id',
				onDelete: 'CASCADE',
				onUpdate: 'CASCADE',
				allowNull: false
			})
		}
	}
	Tasks.init(
		{
			title: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notEmpty: {
						msg: 'O campo title não pode ser vazio'
					}
				}
			},
			description: {
				type: DataTypes.STRING
			},
			status: {
				type: DataTypes.ENUM('start', 'progress', 'complete'),
				defaultValue: 'start',
				allowNull: false
			}
		},
		{
			sequelize,
			modelName: 'Tasks',
			timestamps: true
		}
	)
	return Tasks
}
