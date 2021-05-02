import client from '../../client.js'
import { generateKey } from '../../utils.js'

export default (req, res) => {
	const name = req.body.name
	client.hgetall('api-key', (err, apiKeys) => {
		if (err) {
			res.statusCode = 500
			res.json({ error: err }, true)
			return
		}
		for (const moduleName of Object.keys(apiKeys)) {
			if (moduleName === name) {
				res.statusCode = 400
				res.json({ message: 'Name already exists' }, true)
				return
			}
		}
		
		const newKey = generateKey()
		client.hmset('api-key', name, newKey, (err, redisResponse) => {
			if (err) {
				res.statusCode = 500
				res.json({ error: err }, true)
				return
			}
			res.json({ message: redisResponse, key: newKey }, true)
		})
	})
}