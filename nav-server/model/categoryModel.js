const mongoose = require('mongoose')

var categorySchema = new mongoose.Schema({
  categoryId: String,
  name: String,
  createAt: Number,
  children: [{
    categoryId: String,
    name: String,
    createAt: Number,
  }]
}, {collection: 'category'})

module.exports = mongoose.model('category', categorySchema)