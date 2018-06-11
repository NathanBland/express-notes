module.exports = (express) => {
  const router = express.Router()

  router.get('/', (req, res, next) => {
    return res.json({msg: 'this is not the end point you are looking for'})
  })
  return router
}
