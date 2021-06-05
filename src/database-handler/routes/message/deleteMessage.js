import client from '../../client.js'

export default (req, res) => {
	const message = req.body.message
	
	// todo validation
	
	client.lrem('messages', 0, JSON.stringify(message), (err, redisResponse) => {
		if (err) {
			res.statusCode = 500
			res.json({ error: err }, true)
			return
		}
		res.json({ message: redisResponse }, true)
	})
}