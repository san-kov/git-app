import { Router } from 'express'
import UsersController from '../controllers/UsersController'

const router = new Router()

router.get('/', UsersController.rootPath)

export default router
