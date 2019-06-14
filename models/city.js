var mongoose = require('mongoose');


var villeSchema = mongoose.Schema({
    name: String,
    desc: String,
    img: String,
    temp_min: Number,
    temp_max: Number,
    lat: Number,
    long: Number   
});

/*var CityModel = mongoose.model('cities', villeSchema);*/


module.exports = mongoose.model('cities', villeSchema);