module.exports = (express) => {
  const router = express.Router()

  router.use('/', require('./read')(express))
  router.use('/', require('./create')(express))
  router.use('/:id', require('./update')(express))
  router.use('/:id', require('./delete')(express))

  router.get('/', (req, res, next) => {
    return res.json({msg: 'this is not the end point you are looking for'})
  })
  return router
}
