require('dotenv').config()

const express = require('express')
const logger = require('morgan')
const mongoose = require('mongoose')
const usersRoutes = require('./routes')

const Product = require("./models/Products")

const app = express()


const MONGODB_URI = process.env.ATLAS_URI || 'mongodb://localhost/auth'
const PORT = process.env.PORT || 5000

mongoose.set('useCreateIndex', true)
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
	console.log(err || `Connected to MongoDB.`)
})

app.use(express.static(`${__dirname}/client/build`))
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

// app.use('/users', usersRoutes)
//app.use('/api', productsRouter)

app.use('/api', (req, res, next) => {
	//res.json({message: "API root"})
	console.log(`New http transaction`)
	console.log(req.url)
	console.log(req.method)
	next()
})

app.use('/api/users', usersRoutes)


//gets and finds products by endpoint, catches error
app.get('/api/products', (req, res) => {
	Product.find().then(dbUser => {
		console.log(dbUser)
		res.json(dbUser)})
	.catch(err => {
		console.log(err)
		res.send(err)})
})


//gets contaacts by endpoint and display message 
app.get('/api/contacts', (req, res) => {
	// var products = 
	res.json({message: "API contacts"})
})

app.use('*', (req, res) => {
	res.sendFile(`${__dirname}/client/build/index.html`)
})

app.listen(PORT, (err) => {
	console.log(err || `Server running on port ${PORT}.`)
})
