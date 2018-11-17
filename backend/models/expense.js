const moongose = require('mongoose')
const Schema = moongose.Schema

const ExpenseSchema = new Schema({
  title: String,
  value: Number,
  currency: Number,
  categoryId: String
})

module.exports = moongose.model('Expense', ExpenseSchema)
