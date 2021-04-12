import jwt from 'jsonwebtoken'
import { getUserToken } from '../user.js'
import { JWT_SECRET } from '../environment.js'

export default (req, res) => {
	const { name, password } = req.body
	if (name && password) {
		const validToken = getUserToken(name, password)
		if (validToken) {
			res.statusCode = 200
			res.end(JSON.stringify({ key: jwt.sign({
				data: { name,  token: validToken }
			}, JWT_SECRET, { expiresIn: '1h' }) }))
		} else {
			res.statusCode = 401
			res.end(JSON.stringify({ message: 'invalid credentials' }))
		}
	} else {
		res.statusCode = 400
		res.end(JSON.stringify({ message: 'missing credentials' }))
	}
}