import client from '../../client.js'

export default (req, res) => {
	client.hgetall(`user:${req.params.name}`, (err, user) => {
		if (!user) {
			client.hmset(`user:${req.body.name}`, {
				password: req.body.password
			}, (err, redisResponse) => {
				res.end(JSON.stringify({ message: redisResponse }))
			})
		} else res.end(JSON.stringify({error: 'user already exists'}))
	})
}