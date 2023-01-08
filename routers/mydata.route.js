const route = require('express').Router()
const ExpenseControllers = require('../controllers/expense.controller')


route.get('/mydata',ExpenseControllers.getMydataPage)

module.exports = route