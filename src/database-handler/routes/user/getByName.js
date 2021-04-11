import client from '../../client.js'

export default (req, res) => {
	client.hgetall(`user:${req.params.name}`, (err, user) => {
		if (err) {
			res.statusCode = 500
			res.end(JSON.stringify({ error: err }))
		} else res.end(JSON.stringify(user ? user : {}))
	})
}