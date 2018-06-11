const Mongoose = require('mongoose')
const passport = require('passport')
const User = require('../../models/user')
const jwt = require('jwt-simple')
const cookie = require('cookie')
const LocalStrategy = require('passport-local').Strategy
const tokenSecret = process.env.tokenSecret || 'Please oh please set a real secret in env'

module.exports = (express) => {
  const router = express.Router()
  router.post('/', (req, res, next) => {
    if (!req.headers.cookies && !req.headers.cookie) {
      console.log('no cookie. headers:', req.headers)
      return res.status(403).json({
        user: 'Unauthorized'
      })
    }
    try {
      const token = cookie.parse(req.headers.cookies || req.headers.cookie).Authorization
      const decoded = jwt.decode(token, tokenSecret)
      console.log('cookie parsed:', decoded)
      // user
      User.findById(decoded.id)
      .then(user => {
        const session = user.activeSessions.indexOf(token)
        if (session > -1) {
          user.activeSessions.splice(session, 1)
        }
        return user.save()
      })
      .then(updatedUser => {
        console.log('removed session:', updatedUser)
        return res.status(200).json({msg: 'Logged out.'})
      }).catch(e => {
        console.log('no session to remove?')
        return res.status(200).json({msg: 'Logged out.'})
      })
    } catch (e) {
      console.log("uh oh, failed to parse cookie, aborting:")
      return res.status(500).json({msg: 'Internal server error'})
    }
  })
  return router
}
