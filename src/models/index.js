const Sequelize = require('sequelize')
const sequelize = require('../config/sequelize')
const task = require('./Task')

const Task = task(sequelize, Sequelize.DataTypes)

const db = {
	Task,
	sequelize
}

module.exports = db
