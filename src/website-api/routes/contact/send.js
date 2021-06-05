import fetch from 'node-fetch'
import { DB_API_KEY } from '../../environment.js'

const COOLDOWN_TIME_MS = 5000

export default async (req, res) => {
	const now = new Date().getTime()
	if (req.session.contactedAt && new Date(req.session.contactedAt).getTime() + COOLDOWN_TIME_MS > now) {
		res.json({ message: 'no' }, true)
		return
	}
	console.log(req.body)
	// todo validation

	const dbRes = await fetch('http://localhost:5000/message', {
		headers: {
			'Api-Key': DB_API_KEY,
			'Content-Type': 'application/json'
		},
		method: 'post',
		body: JSON.stringify(req.body)
	}).then(res => res.json())

	req.session.contactedAt = now
	res.json(dbRes, true)
}