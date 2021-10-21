const User = require('../models/user');


module.exports.home_page=function(req,res){
    return res.render('home_page',{
        title:'Socially | Home'
    })
}
