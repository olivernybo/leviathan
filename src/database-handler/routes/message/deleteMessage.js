import client from '../../client.js'

export default (req, res) => {
	const message = req.body.message
	
	if (
		! message || typeof message !== 'object'
		|| !message.name || !message.name.firstName || !message.name.lastName
		|| !message.email || typeof message.email !== 'string' || !message.email.length || !message.email.includes('@')
		|| !message.message || typeof message.message !== 'string' || !message.message.length
	) {
		res.statusCode = 400
		res.json({ error: 'Not a valid message' })
		return
	}
	
	client.lrem('messages', 0, JSON.stringify(message), (err, redisResponse) => {
		if (err) {
			res.statusCode = 500
			res.json({ error: err }, true)
			return
		}
		res.json({ message: redisResponse }, true)
	})
}