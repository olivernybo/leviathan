import client from '../../client.js'
import { generateKey } from '../../utils.js'

export default (req, res) => {
	client.hgetall(`user:${req.body.name}`, (err, user) => {
		if (err) {
			res.statusCode = 500
			res.json({ error: err }, true)
			return
		}
		if (!user) {
			client.hmset(`user:${req.body.name}`, {
				password: req.body.password,
				token: generateKey()
			}, (err, redisResponse) => {
				if (err) {
					res.statusCode = 500
					res.json({ error: err }, true)
					return
				}
				res.json({ message: redisResponse }, true)
			})
		} else {
			res.statusCode = 400
			res.json({ error: 'user already exists' }, true)
		}
	})
}