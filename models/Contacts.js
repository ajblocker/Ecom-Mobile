const mongoose = require('mongoose')

//contacts schema
const contacts_schema = new mongoose.Schema({
    contact_name: { type: String },
    contact_address: { type: String, required: true, unique: true },
    contact_email: { type: String, required: true, unique: true },
    contact_number: { type: String, required: true, unique: true },
    contact_message: { type: String, required: true, unique: true }
	},{collection: 'contacts'})

const Contacts = mongoose.model('Contacts', contacts_schema)
module.exports = Contacts