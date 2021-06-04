import client from '../../client.js'

export default (_, res) => {
	client.lrange('messages', 0, -1, (err, redisResponse) => {
		if (err) {
			res.statusCode = 500
			res.json({ error: err }, true)
			return
		}
		for (let i = 0; i < redisResponse.length; i++)
			redisResponse[i] = JSON.parse(redisResponse[i])
		res.json(redisResponse, true)
	})
}