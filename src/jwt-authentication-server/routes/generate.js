import jwt from 'jsonwebtoken'
import { validUser, getUserToken } from '../user.js'

export default (req, res) => {
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
}