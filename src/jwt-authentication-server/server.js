// docker build -t olivernybo/leviathan-jwt-authentication-server .
const express = require('express')
const app = express()

app.get('/', (req, res) => {
	res.send('Hello World')
})

app.listen(3000)