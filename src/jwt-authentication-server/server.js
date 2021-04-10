import express from 'express'
import { generate, verify } from './routes/index.js'

const app = express()

app.use(express.json())

app.post('/generate', generate)
app.post('/verify', verify)

app.listen(3000, () => console.log('JWT Authentication Server started'))