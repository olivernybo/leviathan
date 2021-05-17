const COOLDOWN_TIME_MS = 5000

export default (req, res) => {
	const now = new Date().getTime()
	if (req.session.contactedAt && new Date(req.session.contactedAt).getTime() + COOLDOWN_TIME_MS > now) {
		res.json({ message: 'no' }, true)
		return
	}
	console.log(req.body) // TODO save to db
	req.session.contactedAt = now
	res.json({ message: 'ok' }, true)
}