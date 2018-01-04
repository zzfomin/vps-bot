const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SubrazdelSchema = new Schema({
  uuid: {
    type: String,
    required: true
  },
  id_name: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
    gl_gl: {
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

mongoose.model('subrazdels', SubrazdelSchema)