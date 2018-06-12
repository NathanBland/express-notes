const Mongoose = require('mongoose')
const passport = require('passport')
const User = require('../../../models/user')
const jwt = require('jwt-simple')
const cookie = require('cookie')
const LocalStrategy = require('passport-local').Strategy
const tokenSecret = process.env.tokenSecret || 'Please oh please set a real secret in env'

module.exports = (express) => {
  const router = express.Router()
  router.post('/', (req, res, next) => {
    User.register(new User({
      displayName: '',
      email: req.body.username,
      username: req.body.username
    }), req.body.password)
    .then(user => {
      const authenticate = User.authenticate()
      return authenticate(req.body.username, req.body.password)
    })
    .then((result) => {
      if (!result.user) {
        console.log('no user')
        return res.status(403).json({msg: 'invalid username or password'})
      }
      let expiresDate = new Date()
      expiresDate = new Date(expiresDate.setHours(expiresDate.getHours()+ (24 * 7)))
      const token = jwt.encode({
        id: result.user.id,
        username: result.user.username,
        email: result.user.email,
        displayName: result.user.displayName,
        expiresAt: expiresDate,
      }, tokenSecret)
      const activeCookie = cookie.serialize('Authorization', token, {
        httpOnly: true,
        domain: process.env.NODE_ENV === 'production' ? 'nathanbland.github.io' : '127.0.0.1',
        secure: process.env.NODE_ENV === 'production' ? 'true' : 'false',
        expires: expiresDate,
        maxAge: 60 * 60 * 24 * 7 // 1 week
      })
      result.user.activeSessions.push(token)
      result.user.save()
      .then(savedUser => {
        res.setHeader('Set-Cookie', activeCookie)
        return res.status(201).json({user: {
          id: savedUser.id,
          username: savedUser.username,
          email: savedUser.email,
          displayName: savedUser.displayName,
          isAuthenticated: true
        }})
      }).catch(e => {
        return res.status(500).json({msg: 'Internal Server error'})
      })
    })
    // return res.json({msg: 'Welcome to the api'})
  })
  return router
}
