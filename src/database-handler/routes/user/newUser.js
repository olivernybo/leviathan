import client from '../../client.js'
import { generateKey } from '../../utils.js'

export default (req, res) => {
	client.hgetall(`user:${req.body.name}`, (err, user) => {
		if (err) {
			res.statusCode = 500
			res.end(JSON.stringify({ error: err }))
			return
		}
		if (!user) {
			client.hmset(`user:${req.body.name}`, {
				password: req.body.password,
				token: generateKey()
			}, (err, redisResponse) => {
				if (err) {
					res.statusCode = 500
					res.end(JSON.stringify({ error: err }))
					return
				}
				res.end(JSON.stringify({ message: redisResponse }))
			})
		} else {
			res.statusCode = 400
			res.end(JSON.stringify({ error: 'user already exists' }))
		}
	})
}