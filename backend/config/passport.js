import passport from 'passport'
import GithubTokenStrategy from 'passport-github-token'
import User from '../models/User'
import { githubClientID, githubClientSecret, jwtSecret } from './keys'
import JWTStrategy from 'passport-jwt'

passport.use(
  'jwt',
  new JWTStrategy.Strategy(
    {
      jwtFromRequest: JWTStrategy.ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: jwtSecret
    },
    async (payload, done) => {
      try {
        const user = await User.findOne({ _id: payload.userId })

        if (!user) {
          return done(null, false)
        }

        done(null, user)
      } catch (error) {
        done(error, false)
      }
    }
  )
)

passport.use(
  'github-token',
  new GithubTokenStrategy(
    {
      clientID: githubClientID,
      clientSecret: githubClientSecret
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const { id, username } = profile
        const user = await User.findOne({
          github_id: id
        })

        if (user) {
          return done(null, user)
        }

        console.log(profile)
        const newUser = await User.create({
          github_id: id,
          name: username,
          avatar: profile._json.avatar_url
        })

        done(null, newUser)
      } catch (error) {
        done(error)
      }
    }
  )
)
