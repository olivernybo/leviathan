import client from '../../client.js'

const generateKey = () => {
	const length = 32
	const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'

	let retVal = ''
	for (let i = 0, n = charset.length; i < length; ++i)
		retVal += charset.charAt(Math.floor(Math.random() * n))
	
	return retVal
}

export default (req, res) => {
	const name = req.body.name
	client.hgetall('api-key', (err, apiKeys) => {
		if (err) {
			res.statusCode = 500
			res.end(JSON.stringify({ error: err }))
			return
		}
		for (const moduleName of Object.keys(apiKeys)) {
			if (moduleName === name) {
				res.statusCode = 400
				res.end(JSON.stringify({ message: 'Name already exists' }))
				return
			}
		}
		
		const newKey = generateKey()
		client.hmset('api-key', name, newKey, (err, redisResponse) => {
			if (err) {
				res.statusCode = 500
				res.end(JSON.stringify({ error: err }))
				return
			}
			res.end(JSON.stringify({ message: redisResponse, key: newKey }))
		})
	})
}