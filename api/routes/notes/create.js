const Mongoose = require('mongoose')
const User = require('../../models/user')
const Note = require('../../models/note')
const uuid = require('uuid')

module.exports = (express) => {
  const router = express.Router()
  // router.use('/', require('../../middleware/authorizer')(express))
  router.post('/', (req, res, next) => {
    const note = new Note({
      _id:  uuid.v4(Math.random()),
      author: req.user._id,
      content: req.body.content,
      shared: req.body.shared,
      archived: false,
      title: req.body.title ? req.body.title : Date.now()
    })
    note.save()
      .then(note => {
        return res.status(200).json(note)
      })
      .catch(e => {
        console.warn('error', e)
        return res.status(500).json({msg: 'Internal Server error', err: e})
      })
  })
  return router
}
