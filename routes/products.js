const router = require('express').Router();
let Products = require('../models/Products.js');


// 1. get all users on record
// GET: /
// ========================================
//block of statements to try and what to do if thrown, finds user by id
router.get("/", (req, res) => {
    console.log(req.url, "hello world")
    try {
        Products.find({})
        .then(result => {
            console.log(result)
            res.json(result)
        })
    }
    catch(err) {
        console.log(err)
        res.json(err);
    }
}),

module.exports = router;