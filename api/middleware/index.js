module.exports = (express) => {
  const router = express.Router()

  router.use('/', require('./authorizer')(express))
  return router
}
