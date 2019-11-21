
const express =     require('express')
const usersCtrl =   require('../controllers')
const verifyToken = require('../auth').verifyToken

const usersRouter = new express.Router()

//unprotected routes
usersRouter.route('/').get(usersCtrl.index)

usersRouter.route('/products', usersCtrl.products)

usersRouter.route('/').post(usersCtrl.create)

usersRouter.post('/authenticate', usersCtrl.authenticate)

usersRouter.use(verifyToken)

//protected routes
usersRouter.route('/users').get(usersCtrl.show)

usersRouter.route('/contact').get(usersCtrl.show)

usersRouter.route('/:id').get(usersCtrl.show)

usersRouter.route('/:id').patch(usersCtrl.update)

usersRouter.route('/:id').delete(usersCtrl.destroy)

module.exports = usersRouter