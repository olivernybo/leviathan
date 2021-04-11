import { Router } from 'express'
import getByName from './getByName.js'
import newUser from './newUser.js'

const router = Router()

router.get('/:name', getByName)
router.post('/', newUser)

export default router