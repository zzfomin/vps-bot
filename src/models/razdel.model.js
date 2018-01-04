const mongoose = require('mongoose')
const Schema = mongoose.Schema

const RazdelSchema = new Schema({
  uuid: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  is_kon: {
    type: String,
    required: true,
	default: '0'
  },
  points: {
    type: [String],
    default: []
  }
})

mongoose.model('razdels', RazdelSchema)