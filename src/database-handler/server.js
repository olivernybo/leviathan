import express, { json } from 'express'
import { jsonHeader, jsonResponse } from './middleware.js'
import authentication from './authentication.js'
import userRouter from './routes/user/router.js'
import apiKeyRouter from './routes/api-key/router.js'
import messageRouter from './routes/message/router.js'

const app = express()

app.use(json())
app.use(jsonHeader)
app.use(jsonResponse)
app.use(authentication)

app.use('/user', userRouter)
app.use('/api-key', apiKeyRouter)
app.use('/message', messageRouter)

app.listen(5000, () => console.log('Database Handler started'))