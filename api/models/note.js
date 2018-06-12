const uuid = require('uuid')
const ShortUniqueId = require('short-unique-id')
const uid = new ShortUniqueId()
const mongoose = require('mongoose')

let note = new mongoose.Schema({
  _id: {
    type: String,
    default: uuid.v4()
  },
  author: {
    type: String,
    ref: "User"
  },
  content: {
    type: String,
    required: true
  },
  archived: Boolean,
  title: {
    type: String,
    default: '' + Date.now(),
    required: true
  },
  shared: Boolean,
  shortUrl: {
    type: String,
    default: uid.randomUUID(6)
  }
})
module.exports = mongoose.model('Note', note)
