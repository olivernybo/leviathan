import { Router } from 'express'
import clearSession from './clearSession.js'

const router = Router()

router.delete('/clearSession', clearSession)

export default router