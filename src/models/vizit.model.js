const mongoose = require('mongoose')
const Schema = mongoose.Schema

const VizitSchema = new Schema({
  telegramId: {
    type: Number,
    required: true
  },
  fio: {
    type: String,
    required: true,
	default: '0'
  },
    curdate: {
    type: Date
    },
    chat_id: {
    type: Number
    },
    glavys: {
    type: [String],
    default: []
    }
})

mongoose.model('vizits', VizitSchema)