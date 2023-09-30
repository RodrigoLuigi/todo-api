'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
	class Users extends Model {
		static associate(models) {
			Users.hasMany(models.Tasks, { foreignKey: 'user_id' })
		}
	}
	Users.init(
		{
			name: {
				type: DataTypes.STRING,
				allowNull: false
			},
			email: {
				type: DataTypes.STRING,
				allowNull: false
			},
			password: {
				type: DataTypes.STRING,
				allowNull: false
			}
		},
		{
			sequelize,
			modelName: 'Users',
			timestamps: true
		}
	)
	return Users
}
