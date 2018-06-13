const uuid = require('uuid')
const mongoose = require('mongoose')

let user = new mongoose.Schema({
  _id: {
    type: String,
    default: uuid.v4(Math.random())
  },
  displayName: String,
  email: String,
  username: {
    type: String,
    unique: true
  },
  activeSessions: []
})
user.plugin(require('passport-local-mongoose'))

module.exports = mongoose.model('User', user)
