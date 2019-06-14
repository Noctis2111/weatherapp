var express = require('express');
var router = express.Router();
var request = require('request');

var CityModel = require("../models/city")
var UserModel = require("../models/user")



/* GET home page. */
router.get('/cities', function(req, res, next) {
     if (req.session.user == null){
        res.redirect('/')
         
    }else{
    CityModel.find ( function (err, cities) {
        res.render('index',{cities, user:req.session.user})
    });
    }
});

router.post('/add-City', function(req, res, next) {
    request(`http://api.openweathermap.org/data/2.5/weather?q=${req.body.name}&units=metric&lang=fr&appid=b9766b8c51a9ce221a34e1ac776f49de`, function(error, response, body) {
        
        body = JSON.parse(body);
        
        if (body.cod == "400" || body.cod == "404"){
            CityModel.find ( function (err, cities) {
                res.render('index',{cities,user:req.session.user})
            });
        }else{
            
            var newcitie = new CityModel({
                name:body.name,
                desc:body.weather[0].description,
                img:"https://openweathermap.org/img/w/" + body.weather[0].icon + ".png",
                temp_min:body.main.temp_min,
                temp_max:body.main.temp_max,
                lat:body.coord.lat,
                long:body.coord.lon
            });
            
            newcitie.save(function (error, cities) {
                console.log("new cities",cities)
                CityModel.find ( function (err, cities) {
                    res.render('index',{cities,user:req.session.user})
                });
            });
        };
    });
});

router.get('/delete-City', function(req, res, next) {
    console.log(req.query.id)
    //cityList.splice(req.query.position,1);
    CityModel.deleteOne({_id:req.query.id}, 
    function(error) {
        CityModel.find( function (err, cities) {
            res.render('index',{cities,user:req.session.user})
        });
        }
    );

});
router.get('/', function(req, res, next) {
    res.render('login',{})

});




module.exports = router;