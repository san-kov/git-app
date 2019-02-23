import jwt from 'jsonwebtoken'
import { jwtSecret } from '../config/keys'
export default user => {
  return jwt.sign({ userId: user.id, iat: 1000 * 60 * 60 * 24 * 7 }, jwtSecret)
}
