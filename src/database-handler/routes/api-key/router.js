import { Router } from 'express'
import getAllApiKeys from './getAllApiKeys.js'
import newApiKey from './newApiKey.js'

const router = Router()

router.get('/', getAllApiKeys)
router.post('/', newApiKey)

export default router