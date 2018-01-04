const mongoose = require('mongoose')
const Schema = mongoose.Schema

const OplataSchema = new Schema({
  uuid: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
    default: '0'	
  },
  user_id: {
    type: String,
    required: true,
	default: '0'
  },
tochka_id: {
    type: String,
    required: true,
	default: '0'
  },  
summa_oplaty: {
    type: Number
  },  
  oplata_data_nach: {
    type: String,
    required: true,	
    default: '0'
  },
oplata_data_kon: {
    type: String,
    required: true,	
    default: '0'
  }  
})

mongoose.model('oplatas', OplataSchema)