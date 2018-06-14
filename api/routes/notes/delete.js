const Mongoose = require('mongoose')
const User = require('../../models/user')
const Note = require('../../models/note')

module.exports = (express) => {
  const router = express.Router()
  // router.use('/', require('../../middleware/authorizer')(express))
  router.delete('/:id', (req, res, next) => {
    console.log('params:', req.params)
    Note.findOneAndRemove({_id: req.params.id, author: req.user._id})
    .then((note) => {
      console.log('data from delete?', note)
      return res.status(200).json({msg: 'Note deleted.'})
    })
    .catch(e => {
      console.log('Error', e)
      return res.status(500).json({msg: 'Internal server error.', err: e})
    })
  })
  return router
}
