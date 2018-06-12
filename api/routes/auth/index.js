module.exports = (express) => {
  const router = express.Router()

  router.use('/login', require('./local/login')(express))
  router.use('/register', require('./local/register')(express))
  router.use('/signup', require('./local/register')(express))
  router.use('/logout', require('./logout')(express))
  router.use('/me', require('./me')(express))

  router.get('/', (req, res, next) => {
    return res.json({msg: 'this is not the end point you are looking for'})
  })
  return router
}
