import { Router } from 'express'
import getAllMessages from './getAllMessages.js'
import newMessage from './newMessage.js'
import deleteMessage from './deleteMessage.js'

const router = Router()

router.get('/', getAllMessages)
router.post('/', newMessage)
router.delete('/', deleteMessage)

export default router