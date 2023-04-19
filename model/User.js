const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Users = new Schema(
  {
    username: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    },
    email: {
      type: String,
    }
  },
  { versionKey: false}
)

const User = mongoose.model('User', Users)
module.exports = User