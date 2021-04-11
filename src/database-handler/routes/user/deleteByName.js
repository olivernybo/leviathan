import client from '../../client.js'

export default (req, res) => {
	client.hgetall(`user:${req.params.name}`, (err, user) => {
		if (err) {
			res.statusCode = 500
			res.end(JSON.stringify({ error: err }))
			return
		}
		if (user) {
			client.del(`user:${req.params.name}`, (err, redisResponse) => {
				res.end(JSON.stringify({ message: redisResponse }))
			})
		} else {
			res.statusCode = 400
			res.end(JSON.stringify({ error: 'user does not exists' }))
		}
	})
}