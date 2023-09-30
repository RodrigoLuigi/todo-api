const express = require('express')
const db = require('./src/database/models')
const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.get('/', (req, res) => {
	res.send('Hello World!')
})

app.post('/users', async (req, res) => {
	const data = req.body

	console.log(data)
	const users = await db.Users.create(data)

	return res.status(201).json(users)
})


app.listen(3000)
