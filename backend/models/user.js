const moongose = require('mongoose')
const Schema = moongose.Schema

const UserSchema = new Schema({
  email: String
})

module.exports = moongose.model('User', UserSchema, 'users')
