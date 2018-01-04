const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  telegramId: {
    type: Number,
    required: true
  },
  status_id: {
    type: String,
    required: true,
	default: '0'
  },   
  tochkas_oplat: {
    type: [String],
    default: []
  },
    tochkas: {
        type: [String],
        default: []
    }
})

mongoose.model('users', UserSchema)