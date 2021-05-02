const senders = {} // TODO find a way to use redis session, maybe timestamps

export default (req, res) => {
	if (senders[req.sessionID]) {
		res.end('no')
		return
	}
	console.log(req.body) // TODO save to db
	senders[req.sessionID] = req.body
	setTimeout(() => {
		delete senders[req.sessionID]
	}, 5000)
	res.end('ok')
}