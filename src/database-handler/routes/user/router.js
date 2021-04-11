import { Router } from 'express'
import getByName from './getByName.js'
import newUser from './newUser.js'
import deleteByName from './deleteByName.js'

const router = Router()

router.get('/:name', getByName)
router.post('/', newUser)
router.delete('/:name', deleteByName)

export default router