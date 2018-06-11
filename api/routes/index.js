module.exports = (express) => {
  const router = express.Router()

  router.use('/auth', require('./auth')(express))

  router.get('/', (req, res, next) => {
    return res.json({msg: 'Welcome to the api'})
  })
  return router
}
