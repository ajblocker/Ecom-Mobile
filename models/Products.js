const mongoose = require('mongoose')
const bcrypt = require('bcrypt-nodejs')

const db_Schema = new mongoose.Schema({
		product_name: { type: String },
        category: { type: String, required: true, unique: true },
        prod_description: { type: String, required: true, unique: true },
        img: { type: String, required: true, unique: true }
	})

const Products = mongoose.model('Products', db_Schema)
module.exports = Products