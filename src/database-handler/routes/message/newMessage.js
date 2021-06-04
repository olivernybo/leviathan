import client from '../../client.js'

export default (req, res) => {
	const name = req.body.name
	const email = req.body.email
	const message = req.body.message
	
	// todo validation
	
	client.rpush('messages', JSON.stringify({ name, email, message }), (err, redisResponse) => {
		if (err) {
			res.statusCode = 500
			res.json({ error: err }, true)
			return
		}
		res.json({ message: redisResponse }, true)
	})
}