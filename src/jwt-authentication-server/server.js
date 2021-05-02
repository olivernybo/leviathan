import express, { json } from 'express'
import { jsonHeader, jsonResponse } from './middleware.js'
import { generate, verify } from './routes/index.js'

const app = express()

app.use(json())
app.use(jsonHeader)
app.use(jsonResponse)

app.post('/generate', generate)
app.post('/verify', verify)

app.listen(3000, () => console.log('JWT Authentication Server started'))