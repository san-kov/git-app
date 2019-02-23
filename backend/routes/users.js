import { Router } from 'express'
import passport from 'passport'

import * as UsersController from '../controllers/UsersController'

const router = new Router()

router.post(
  '/auth/github',
  passport.authenticate('github-token', { session: false }),
  UsersController.authGithub
)

router.get(
  '/me',
  passport.authenticate('jwt', { session: false }),
  UsersController.me
)
export default router
