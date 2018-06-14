const uuid = require('uuid')
const ShortUniqueId = require('short-unique-id')
const mongoose = require('mongoose')

let note = new mongoose.Schema({
  _id: {
    type: String,
    default: uuid.v4(Math.random())
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
  shared: {
    type: Boolean,
    default: false
  },
  shortUrl: {
    type: String,
    default: () => new ShortUniqueId().randomUUID(6)
  }
})
module.exports = mongoose.model('Note', note)
