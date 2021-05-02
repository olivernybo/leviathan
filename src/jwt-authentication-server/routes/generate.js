import jwt from 'jsonwebtoken'
import { getUserToken } from '../user.js'
import { JWT_SECRET } from '../environment.js'

export default async (req, res) => {
	const { name, password } = req.body
	if (name && password) {
		const validToken = await getUserToken(name, password)
		if (validToken) {
			res.statusCode = 200
			res.json({
				key: jwt.sign({
					data: { name,  token: validToken }
				}, JWT_SECRET, { expiresIn: '1h' })
			}, true)
		} else {
			res.statusCode = 401
			res.json({ message: 'invalid credentials' }, true)
		}
	} else {
		res.statusCode = 400
		res.json({ message: 'missing credentials' }, true)
	}
}