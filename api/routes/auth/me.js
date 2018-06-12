module.exports = (express) => {
  const router = express.Router()

  router.use('/', require('./../../middleware/authorizer')(express))
  router.post('/', (req, res, next) => {

    const  {activeSessions, ...user } =  req.user._doc
    const authedUser = {...user, isAuthenticated: true}
    return res.status(200).json(authedUser)
  })
  return router
}
