const mongoose = require('mongoose')

var navSchema = new mongoose.Schema({
  categoryId: String,
  name: String,
  href: String,
  desc: String,
  logo: String
}, {collection: 'nav'})

module.exports = mongoose.model('nav', navSchema)