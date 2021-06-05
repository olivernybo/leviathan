import client from '../../client.js'

export default (_, res) => {
	client.hgetall('api-key', (err, apiKeys) => {
		if (err) {
			res.statusCode = 500
			res.json({ error: err }, true)
			return
		}
		res.json(apiKeys, true)
	})
}