import client from '../../client.js'

export default (req, res) => {
	client.hgetall(`user:${req.params.name}`, (err, user) => {
		if (err) {
			res.statusCode = 500
			res.json({ error: err }, true)
			return
		}
		if (user) {
			client.del(`user:${req.params.name}`, (err, redisResponse) => {
				// todo handle err
				res.json({ message: redisResponse }, true)
			})
		} else {
			res.statusCode = 400
			res.json({ error: 'user does not exists' }, true)
		}
	})
}