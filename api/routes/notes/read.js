const Mongoose = require('mongoose')
const User = require('../../models/user')
const Note = require('../../models/note')

module.exports = (express) => {
  const router = express.Router()
  router.get('/', (req, res, next) => {
    Note.find({author: req.user._id, archived: {"$ne" : true }})
      .then(notes => {
        console.log('user:', req.user)
        console.log('notes:', notes)
        return res.status(200).json(notes)
      })
      .catch(e => {
        return res.status(500).json({msg: 'Internal Server error', err: e})
      })
  })
  router.get('/shared/:id', (req, res, next) => {
    Note.findOne({ shortUrl: req.params.id})
      .then(note => {
        console.log('note:', note)
        return res.status(200).json(note)
      })
      .catch(e => {
        return res.status(500).json({msg: 'Internal Server error', err: e})
      })
  })
  router.use('/:id', require('../../middleware/authorizer')(express))
  router.get('/:id', (req, res, next) => {
    Note.findOne({author: req.user.id, _id: req.params.id})
      .then(note => {
        console.log('note:', note)
        return res.status(200).json(note)
      })
      .catch(e => {
        return res.status(500).json({msg: 'Internal Server error', err: e})
      })
  })
  return router
}
