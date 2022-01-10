import client from '../../client.js'
import { generateKey } from '../../utils.js'

/**
 * Creates a new API key.
 */
export default (req, res) => {
	// Get the module name from the request body
	const name = req.body.name
	// Get all the API keys from the database
	client.hgetall('api-key', (err, apiKeys) => {
		// If there is an error, return an error
		if (err) {
			res.statusCode = 500
			res.json({ error: err }, true)
			return
		}
		// If the module name already exists, return an error
		if (apiKeys && apiKeys[name]) {
			res.statusCode = 400
			res.json({ message: 'Name already exists' }, true)
			return
		}
		
		// Generate a new API key
		const newKey = generateKey()
		// Add the new API key to the database
		client.hmset('api-key', name, newKey, (err, redisResponse) => {
			// If there is an error, return an error
			if (err) {
				res.statusCode = 500
				res.json({ error: err }, true)
				return
			}
			// Otherwise, return the new API key
			res.json({ message: redisResponse, key: newKey }, true)
		})
	})
}