const Mongoose = require('mongoose')
const User = require('../../models/user')
const Note = require('../../models/note')

module.exports = (express) => {
  const router = express.Router()
  router.put('/:id', (req, res, next) => {
    console.log('params:', req.params)
    Note.findOneAndUpdate({_id: req.params.id, author: req.user._id}, req.body)
    .then(note => {
      return res.status(200).json(note)
    })
    .catch(e => {
      console.log('error upadting:', e)
      return res.status(500).json({msg: 'Internal server error.', err: e})
    })

  })
  return router
}
