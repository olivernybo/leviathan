import fetch from 'node-fetch'
import { DB_API_KEY } from '../../environment.js'

const COOLDOWN_TIME_MS = 20000

export default async (req, res) => {
	const now = new Date().getTime()
	if (req.session.contactedAt && new Date(req.session.contactedAt).getTime() + COOLDOWN_TIME_MS > now) {
		res.statusCode = 429
		res.json({ message: 'Too many messages' }, true)
		return
	}
	
	const name = req.body.name
	const email = req.body.email
	const message = req.body.message
	
	if (
		!name || !name.firstName || !name.lastName
		|| !email || typeof email !== 'string' || !email.length || !email.includes('@')
		|| !message || typeof message !== 'string' || !message.length
	) {
		res.statusCode = 400
		res.json({ error: 'Not a valid message' })
		return
	}

	await fetch('http://localhost:5000/message', {
		headers: {
			'Api-Key': DB_API_KEY,
			'Content-Type': 'application/json'
		},
		method: 'post',
		body: JSON.stringify(req.body)
	}).then(res => res.json()).then(dbRes => {
		req.session.contactedAt = now
		res.json(dbRes, true)
	}).catch(err => {
		console.error(err)
		res.statusCode = 500
		res.json({ error: 'Internal server error' })
	})
}