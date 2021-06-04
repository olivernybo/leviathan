import { Router } from 'express'
import getAllMessages from './getAllMessages.js'
import newMessage from './newMessage.js'

const router = Router()

router.get('/', getAllMessages)
router.post('/', newMessage)

export default router