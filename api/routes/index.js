module.exports = (express) => {
  const router = express.Router()

  router.use('/auth', require('./auth')(express))

  router.use('/notes', require('../middleware/authorizer')(express))
  router.use('/notes', require('./notes')(express))

  router.get('/', (req, res, next) => {
    return res.json({msg: 'Welcome to the api'})
  })
  return router
}
