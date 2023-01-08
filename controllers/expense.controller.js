const expenseModel = require('../models/expense.model')
exports.getExpensePage=(req,res,next)=>{
    res.render('home',{verifUser:req.session.userId,Smessage:req.flash('Successmessage')[0],Emessage:req.flash('Errormessage')[0]})
}



exports.postAddExpenseController=(req,res,next)=>{
   
   
    expenseModel.postDataExpenseModel(req.body.amount,req.body.description,req.body.created,req.session.userId).then((msg)=>{
        req.flash('Successmessage',msg)
        res.redirect('/home')
    }).catch((err)=>{
        req.flash('Errormessage',err)
        res.redirect('/home')
    })
}


exports.getMydataPage=(req,res,next)=>{
    expenseModel.getmyExpense(req.session.userId).then((expense)=>{
        res.render('mydata',{verifUser:req.session.userId,myexpense:expense,Smessage:req.flash('Successmessage')[0],Emessage:req.flash('Errormessage')[0]})
    })
    
}
