const express = require('express')
const routes = require('./routes')
const { sequelize } = require('./models')

sequelize.sync().then(() => {
	console.log('conectado com o banco de dados')
})

const app = express()

app.use(express.json())
app.use(routes)

const PORT = 3333
try {
	app.listen(PORT, () => console.log(`server is running on Port ${PORT}`))
} catch (error) {
	console.error('Erro ao iniciar o servidor:', error)
}
