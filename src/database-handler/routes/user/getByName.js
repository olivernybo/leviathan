import client from '../../client.js'

export default (req, res) => {
	client.hgetall(`user:${req.params.name}`, (err, user) => {
		if (err) {
			res.statusCode = 500
			res.json({ error: err }, true)
		} else res.json(user ? user : { }, true)
	})
}