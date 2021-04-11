// dev key %YSHu5SX~NJ7kh`;5C/!`<&+?m#SLQc
import client from './client.js'

export default (req, res, next) => {
	const apiKey = req.header('api-key')
	if (!apiKey) {
		res.statusCode = 400
		res.end(JSON.stringify({ message: 'No API key given' }))
	} else {
		client.hgetall('api-key', (err, apiKeys) => {
			if (err) {
				res.statusCode = 500
				res.end(JSON.stringify({ error: err }))
				return
			}
			let valid = false
			for (const leviathanModule of Object.entries(apiKeys)) {
				if (leviathanModule[1] === apiKey) {
					// todo log module: leviathanModule[0]
					console.info(`${new Date().toISOString().slice(0, -5).replace('T', ' ')}: ${leviathanModule[0]} API key used`)
					valid = true
					break
				}
			}
			if (!valid) {
				res.statusCode = 401
				res.end(JSON.stringify({ message: 'Invalid API key' }))
			} else next()
		})
	}
}