import express, { json } from 'express'
import cors from 'cors'
import session from 'express-session'
import redis from 'redis'
import connectRedis from 'connect-redis'

import { jsonHeader, jsonResponse } from './middleware.js'

import devRouter from './routes/dev/router.js' // ! not suitable for prouduction
import contactRouter from './routes/contact/router.js'

const app = express()
const Store = connectRedis(session)
const client = redis.createClient({
	port: 6380
})

client.on('error', err => console.log(err))

app.use(cors({
	origin: 'http://localhost:4200',
	credentials: true
}))
app.use(json())
app.use(jsonHeader)
app.use(jsonResponse)
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

app.use('/dev', devRouter)
app.use('/contact', contactRouter)

app.listen(4000, () => console.log('Website API started'))