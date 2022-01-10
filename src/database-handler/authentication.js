// dev key %YSHu5SX~NJ7kh`;5C/!`<&+?m#SLQc
import client from './client.js'

/**
 * Handles authentication for the API. An application must have a valid API key to access the API.
 */
export default (req, res, next) => {
	// Get the API key from the request header
	const apiKey = req.header('api-key')
	// If there is no API key, return an error
	if (!apiKey) {
		res.statusCode = 400
		res.json({ message: 'No API key given' }, true)
	} else {
		// If there is an API key, get all the API keys from the database
		client.hgetall('api-key', (err, apiKeys) => {
			// If there is an error, return an error
			if (err) {
				res.statusCode = 500
				res.json({ error: err }, true)
				return
			}
			// Loop through all the API keys and check if the given API key is valid
			let valid = false
			for (const leviathanModule of Object.entries(apiKeys)) {
				if (leviathanModule[1] === apiKey) {
					// todo log module: leviathanModule[0]
					console.info(`${new Date().toISOString().slice(0, -5).replace('T', ' ')}: ${leviathanModule[0]} API key used`)
					valid = true
					break
				}
			}
			// If the API key is not valid, return an error, otherwise continue with the request
			if (!valid) {
				res.statusCode = 401
				res.json({ message: 'Invalid API key' }, true)
			} else next()
		})
	}
}