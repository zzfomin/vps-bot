const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TochkaSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
    type_gl: {
    type: String,
    required: true
  },
  uuid: {
    type: String,
    required: true
  },
  year: {
    type: String
  },
  address: {
    type: String
  },
  location: {
    type: Schema.Types.Mixed
    },
    rejim: {
    type: String
  },
  osob_1: {
    type: String
  },
  osob_2: {
    type: String
  },  
    oplata_id: {
    type: String
  },  
  oplata_status: {
    type: String
  },
  link: {
    type: String,
      required: true,
      default: 'https://yandex.ru/'
  },
  picture: {
    type: String
  },
  glavys: {
    type: [String],
    default: []
  }
})

mongoose.model('tochkas', TochkaSchema)