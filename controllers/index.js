const User = require('../models/User.js')
const signToken = require('../auth').signToken

module.exports = {
	// list all users
	index: (req, res) => {
		User.find({}, (err, users) => {
			res.json(users)
		})
	},

	products: (req, res) => {
		Products.find({}, (err, users) => {
			res.json(users)
		})
	},

	// get one user
	show: (req, res) => {		
		User.findById(req.params.id, (err, user) => {
			res.json(user)
		})
	},

	// create a new user
	create: (req, res) => {
		console.log("about to create new user")
		User.create(req.body, (err, user) => {
			console.log(err)
			if(err) return res.json({success: false, code: err.code})
			// once user is created, generate a JWT and return to client"
			console.log("created new user")
			console.log(user)
			const token = signToken(user)
			res.json({success: true, message: "The user has been created. Token attached.", token})
		})
	},

	// update an existing user
	update: (req, res) => {
		User.findById(req.params.id, (err, user) => {
			Object.assign(user, req.body)
			user.save((err, updatedUser) => {
				res.json({success: true, message: "The user has been updated.", user})
			})
		})
	},

	// delete an existing user
	destroy: (req, res) => {
		User.findByIdAndRemove(req.params.id, (err, user) => {
			res.json({success: true, message: "The user has been deleted.", user})
		})
	},

	// the login route
	authenticate: (req, res) => {
		// check if the user exists
		User.findOne({email: req.body.email}, (err, user) => {
			console.log(req.body)
			// if there's no user or the password is invalid
			if(!user || !user.validPassword(req.body.password)) {
				// deny access
				console.log(user)
				return res.json({success: false, message: "Invalid credentials."})
			}
			console.log(user)
			const token = signToken(user)
			res.json({success: true, message: "The Token has been attached.", token})
		})
	}
}