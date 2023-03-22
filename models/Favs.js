const mongoose = require('mongoose')

const FavSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: false,
  },
  title: {
    type: String,
    required: false,
  },
  artist: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: false,
  },
  culture: {
    type: String,
    required: false,
  },
  link: {
    type: String,
    required: false,
  },
})

module.exports = mongoose.model('Fav', FavSchema)