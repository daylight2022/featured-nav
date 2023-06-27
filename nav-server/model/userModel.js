const mongoose = require('mongoose')

var userSchema = new mongoose.Schema({
  username: String,
  password: String,
  isAdmin: Boolean
}, {collection: 'user'})

module.exports = mongoose.model('user', userSchema)