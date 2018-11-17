const moongose = require('mongoose')
const Schema = moongose.Schema

const CategorySchema = new Schema({
  title: String,
  userId: String
})

module.exports = moongose.model('Category', CategorySchema)
