const cookie = require('cookie')
const tokenSecret = process.env.tokenSecret || 'Please oh please set a real secret in env'
const jwt = require('jwt-simple')
const User = require('../models/user')

module.exports = (express) => {
  const router = express.Router()
  router.use((req, res, next) => {
    if (!req.headers.cookies && !req.headers.cookie) {
      console.log('no cookie. headers:', req.headers)
      return res.status(403).json({
        user: 'Unauthorized'
      })
    }
    try {
      const token = cookie.parse(req.headers.cookies || req.headers.cookie).Authorization
      const decoded = jwt.decode(token, tokenSecret)
      // user
      User.findById(decoded.id)
      .then(user => {
        const session = user.activeSessions.indexOf(token)
        if (session > -1) {
          // user.activeSessions.splice(session, 1)
          req.user = user
          next()
        }
      }).catch(e => {
        console.log('no session to remove?')
        return res.status(200).json({msg: 'not signed in'})
      })
    } catch (e) {
      console.log("uh oh, failed to parse cookie, aborting:")
      return res.status(500).json({msg: 'Internal server error'})
    }
  })
  return router
}
