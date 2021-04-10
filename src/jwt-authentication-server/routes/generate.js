import jwt from 'jsonwebtoken'
import { validUser, getUserToken } from '../user.js'

export default (req, res) => {
	const { name, password } = req.body
	if (name && password) {
		if (validUser(name, password)) {
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