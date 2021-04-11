import jwt from 'jsonwebtoken'
import { validUserToken } from '../user.js'
import { JWT_SECRET } from '../environment.js'

export default (req, res) => {
	if (req.body.token) {
		jwt.verify(req.body.token, JWT_SECRET, (err, decoded) => {
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
}