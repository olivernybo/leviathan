import jwt from 'jsonwebtoken'
import { validUserToken } from '../user.js'
import { JWT_SECRET } from '../environment.js'

export default (req, res) => {
	if (req.body.token) {
		jwt.verify(req.body.token, JWT_SECRET, async (err, decoded) => {
			if (err) {
				res.statusCode = 401
				res.json({ message: 'invalid token' }, true)
				return
			}
			
			const validToken = await validUserToken(decoded.data.name, decoded.data.token)
			if (validToken) {
				res.statusCode = 200
				res.json({ message: 'valid token' }, true)
			} else {
				res.statusCode = 401
				res.json({ message: 'invalid token' }, true)
			}
		})
	} else {
		res.statusCode = 400
		res.json({ message: 'missing token' }, true)
	}
}