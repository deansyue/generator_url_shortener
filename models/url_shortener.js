// require mongoose module
const mongoose = require('mongoose')

// define Schema
const Schema = mongoose.Schema

// define url_shortener Schema
const urlShortenerSchema = new Schema({
  shortenerID: {
    type: String,
    required: true
  },
  url_source: {
    type: String,
    required: true
  }
})

// export Schema
module.exports = mongoose.model('urlShortenerSchema', urlShortenerSchema)