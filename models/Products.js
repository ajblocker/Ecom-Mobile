const mongoose = require('mongoose')

const products_schema = new mongoose.Schema({
		product_name: { type: String },
        category: { type: String, required: true, unique: true },
        prod_description: { type: String, required: true, unique: true },
        img: { type: String, required: true, unique: true }
	},{collection: 'products'})

const Products = mongoose.model('Products', products_schema)
module.exports = Products