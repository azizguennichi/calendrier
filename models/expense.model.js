const mongoose = require('mongoose')


const ExpenseShema = mongoose.Schema({
    amount: Number,
    description:String,
    created: Date,
    userId:String
})
 
const Expense = mongoose.model("Expense", ExpenseShema);
var url ='mongodb://127.0.0.1:27017/calandrie'

exports.postDataExpenseModel=(amount,description,created,userId)=>{
    return new Promise((resolve,reject)=>{
        mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
            let expense = new Expense({
                amount:amount,
                description:description,
                created:created,
                userId:userId
            })
           return expense.save()
        }).then(()=>{
            mongoose.disconnect()
            resolve('added !')
        }).catch((err)=>{
            mongoose.disconnect()
            reject(err)
        })
    })
}

exports.getmyExpense=(userId)=>{
    return new Promise((resolve,reject)=>{
         mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
            return Expense.find({userId:userId})
 }).then(Expense=>{
     mongoose.disconnect()
     resolve(Expense)
 }).catch(err=>reject(err))
 
 
     })
 }
