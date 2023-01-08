const authModel = require('../models/auth.model')
exports.getRegisterPage=(req,res,next)=>{
    res.render('index',{verifUser:req.session.userId,Smessage:req.flash('Successmessage')[0],Emessage:req.flash('Errormessage')[0]})
}


exports.postRegisterData=(req,res,next)=>{
    authModel.registerFunctionModel(req.body.name,req.body.email,req.body.password).then((user)=>{
        
        res.redirect('/login')

    }).catch((err)=>{
        // console.log(msg)
        req.flash('Errormessage',err)
        res.redirect('/')
    })
}

exports.getLoginPage=(req,res,next)=>{
    res.render('login',{verifUser:req.session.userId,Smessage:req.flash('Successmessage')[0],Emessage:req.flash('Errormessage')[0]})
}

exports.postLoginData=(req,res,next)=>{

    authModel.loginFunctionModel(req.body.email,req.body.password).then((id)=>{
        
        req.session.userId=id
        res.redirect('/home')
    }).catch((err)=>{
        req.flash('Errormessage',err)
        res.redirect('/login')
      
    })
  
  
}

exports.logoutFunctionController=(req,res,next)=>{
    req.session.destroy(()=>{
        res.redirect('/login')
    })
}