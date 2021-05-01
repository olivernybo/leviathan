import express from 'express'
import session from 'express-session'
import redis from 'redis'
import connectRedis from 'connect-redis'

const app = express()
const Store = connectRedis(session)
const client = redis.createClient({
	port: 6380
})

client.on('error', err => console.log(err))

app.use(session({
	secret: 'password',
	name: 'web_api_session',
	resave: false,
	saveUninitialized: false,
	cookie: {
		secure: false
	},
	store: new Store({ client: client })
}))

app.listen(5000, () => console.log('Website API started'))