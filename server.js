const express = require('express')
const homeRoute = require('./routers/home.route')
const loginRoute = require('./routers/auth.route')
const userRouter = require('./routers/user.router')
const mydataRouter = require('./routers/mydata.route')


const session = require('express-session')
const MongoDbStore = require('connect-mongodb-session')(session)
const flash = require('connect-flash')
const app = express()




app.set('view engine','ejs')
app.set('views','views')

var Store = new MongoDbStore({
    uri:'mongodb://127.0.0.1:27017/calandrie',
    Collection:'session'
})
app.use(flash())
app.use(session({
    secret:'this is my secret key kjfslqmsdfnqlsf',
    store:Store,
    resave:true,
    saveUninitialized:true
    
}))






app.use('/',homeRoute)
app.use('/',loginRoute)
app.use('/',userRouter)
app.use('/',mydataRouter)
app.listen(3000,()=>{console.log('server running')})