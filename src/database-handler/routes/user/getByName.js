import client from '../../client.js'

export default (req, res) => {
	client.hgetall(`user:${req.params.name}`, (err, user) => {
		res.end(JSON.stringify(user ? user : {}))
	})
}