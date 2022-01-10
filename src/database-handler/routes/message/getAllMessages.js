import client from '../../client.js'

/**
 * Gets all the messages from the database.
 */
export default (_, res) => {
	// Get all the messages from the database
	client.lrange('messages', 0, -1, (err, redisResponse) => {
		// If there is an error, return an error
		if (err) {
			res.statusCode = 500
			res.json({ error: err }, true)
			return
		}
		// Otherwise, return the messages as a JSON array
		for (let i = 0; i < redisResponse.length; i++)
			redisResponse[i] = JSON.parse(redisResponse[i])
		res.json(redisResponse, true)
	})
}