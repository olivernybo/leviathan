import express from 'express'
import { jsonHeader } from './middleware.js'
import authentication from './authentication.js'
import userRouter from './routes/user/router.js'
import apiKeyRouter from './routes/api-key/router.js'

const app = express()

app.use(express.json())
app.use(jsonHeader)
app.use(authentication)

app.use('/user', userRouter)
app.use('/api-key', apiKeyRouter)

app.listen(5000, () => console.log('Database Handler started'))