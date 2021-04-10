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
				data: getUserToken(name)
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

app.post('/verify', (req, res) => {
	res.setHeader('Content-Type', 'application/json')
	if (req.body.token) {
		jwt.verify(req.body.token, 'secret', (err, decoded) => {
			if (err) {
				res.statusCode = 401
				res.end(JSON.stringify({ message: 'invalid token' }))
			} else if (validUserToken(decoded.data)) {
				res.statusCode = 200
				res.end(JSON.stringify({ message: 'valid token' }))
			} else {
				res.statusCode = 401
				res.end(JSON.stringify({ message: 'invalid token' }))
			}
		})
	} else {
		res.statusCode = 400
		res.end(JSON.stringify({ message: 'missing token' }))
	}
})

function validUser(name, pass) {
	return name == 'leviathan' && pass == '1234'
}

function getUserToken(name) {
	return name
}

function validUserToken(token) {
	return token == 'leviathan'
}

app.listen(3000, () => console.log('JWT Authentication Server started'))