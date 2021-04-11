import { Router } from 'express'
import newApiKey from './newApiKey.js'

const router = Router()

router.post('/', newApiKey)

export default router