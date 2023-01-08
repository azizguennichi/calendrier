const router = require('express').Router()
const ExpenseControllers = require('../controllers/expense.controller')
const GuardAuth = require('./gardAuth')
const body = require('express').urlencoded({extended:true})


router.get('/home',GuardAuth.isAuth,ExpenseControllers.getExpensePage)

router.post('/home',body,ExpenseControllers.postAddExpenseController)


module.exports = router