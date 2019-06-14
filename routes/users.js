var express = require('express');
var router = express.Router();
var UserModel = require("../models/user")
/*

/* GET users listing. */
router.post('/sign-up', function(req, res, next) {
    UserModel.findOne({email:req.body.email} ,function(error,users){
        if (users == null){
            var newuser = new UserModel({
            username:req.body.nom,
            email:req.body.email.toLowerCase(),
            password:req.body.password });

            newuser.save(function (error, users) {
                req.session.user = users;
                res.redirect('/cities');
            });
            
        }else{
            res.redirect('/');
        }
    });
});


router.post('/sign-in', function(req, res, next) {
    UserModel.findOne({email:req.body.email.toLowerCase(),password:req.body.password},function(error,users){
        console.log("1     1", users)
        console.log("2     2", req.body.email)
        console.log("3     3", req.body.password)
        
        if (users == null){
            res.redirect('/');
            
        }else{
            req.session.user = users;
            res.redirect('/cities');
        }
    });
        
});

router.get('/logout', function(req, res, next) {
    
    req.session.user = null;
    res.redirect('/');
    
});


module.exports = router;
