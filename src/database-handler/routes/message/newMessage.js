import client from '../../client.js'
import { emailRegex } from '../../utils.js'

/**
 * Create a new message.
 */
export default (req, res) => {
	// Get the name, email, and message from the request body
	const name = req.body.name
	const email = req.body.email
	const message = req.body.message
	
	// Validate the name, email, and message
	if (
		!name || !name.firstName || !name.lastName
		|| !email || typeof email !== 'string' || !email.length || !emailRegex.test(email)
		|| !message || typeof message !== 'string' || !message.length
	) {
		res.statusCode = 400
		res.json({ error: 'Not a valid message' })
		return
	}
	
	// Add the message to the database
	client.rpush('messages', JSON.stringify({ name, email, message }), (err, redisResponse) => {
		if (err) {
			res.statusCode = 500
			res.json({ error: err }, true)
			return
		}
		res.json({ message: redisResponse }, true)
	})
}