import client from '../../client.js'

export default (req, res) => {
	const name = req.body.name
	const email = req.body.email
	const message = req.body.message
	
	if (
		!name || !name.firstName || !name.lastName
		|| !email || typeof email !== 'string' || !email.length || !email.contains('@')
		|| !message || typeof message !== 'string' || !message.length
	) {
		res.statusCode = 400
		res.json({ error: 'Not a valid message' })
		return
	}
	
	client.rpush('messages', JSON.stringify({ name, email, message }), (err, redisResponse) => {
		if (err) {
			res.statusCode = 500
			res.json({ error: err }, true)
			return
		}
		res.json({ message: redisResponse }, true)
	})
}