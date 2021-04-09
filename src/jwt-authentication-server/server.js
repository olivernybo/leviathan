// docker build -t olivernybo/leviathan-jwt-authentication-server .
const jwt = require('jsonwebtoken')
const express = require('express')
const app = express()

app.use(express.json())

app.post('/generate', (req, res) => {
	res.setHeader('Content-Type', 'application/json')
	const name = req.body.name
	const pass = req.body.password
	if (name && pass) {
		if (validUser(name, pass)) {
			res.statusCode = 200
			res.end(JSON.stringify({ key: jwt.sign({
				data: name
			}, 'secret', { expiresIn: '1h' }) }))
		} else {
			res.statusCode = 401
			res.end(JSON.stringify({ message: 'invalid credentials' }))
		}
	} else {
		res.statusCode = 400
		res.end(JSON.stringify({ message: 'missing credentials' }))
	}
})

function validUser(name, pass) {
	return name == 'leviathan' && pass == '1234'
}

app.listen(3000)