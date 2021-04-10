import jwt from 'jsonwebtoken'
import { validUserToken } from '../user.js'

export default (req, res) => {
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
}