import express from 'express'
import { jsonResponse } from './middleware.js'
import userRouter from './routes/user/router.js'

const app = express()

app.use(express.json())
app.use(jsonResponse)

app.use('/user', userRouter)

app.listen(5000, () => console.log('Database Handler started'))