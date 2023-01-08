const route = require('express').Router()
const AuthController = require('../controllers/auth.controller')
const GuardAuth = require('./gardAuth')
const body = require('express').urlencoded({extended:true})

route.get('/',GuardAuth.notAuth,AuthController.getRegisterPage)
route.post('/',body,AuthController.postRegisterData)

module.exports = route