
const User=require('../models/user');
const fs=require('fs');
const path=require('path');




module.exports.signUpPage=function(req,res){
    if(req.isAuthenticated())
    {
        return res.redirect('/');
    }
    return res.render('signup',{
        title:'Socially Sign-Up Page'
    });
}
module.exports.signInPage=function(req,res){
    if(req.isAuthenticated())
    {
        return res.redirect('/');
    }
    return res.render('signin',{
        title:'Socially Sign-In Page'
    });
}
module.exports.sign_up=function(req,res){
    if(req.body.password!=req.body.confirm_password)
    {
        return res.redirect('sign-up-page');
    }
    User.findOne({email:req.body.email},function(err,user){
        if(err){
            return;
        }
        if(!user){
            User.create(req.body,function(err,newUser){
                if(err){
                    return res.redirect('/');
                }
                else
                {
                    return res.redirect('sign-in-page');
                }
            })
        }
        else{
            console.log('Email exists!!');
            return res.redirect('sign-in-page');
        }
    })
    
}
    

module.exports.sign_in=function(req,res){
    return res.redirect('/');
}

module.exports.sign_out=function(req,res){
    req.logout();
    return res.redirect('/');
}

