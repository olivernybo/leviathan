import { Router } from 'express'
import send from './send.js'

const router = Router()

router.post('/send', send)

export default router