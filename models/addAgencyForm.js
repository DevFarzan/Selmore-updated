const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Define model
const addSchema = new Schema({
billBoardImgs:{type:String},
companyId:{type:String},
companyName:{type:String},
facing:{type:Array},
type:{type:Array},
size:{type:Array},
latitude:{type:Array},
longitude:{type:Array},
traffic:{type:Array},
width:{type:Array},
height:{type:Array},
lightning:{type:Array},
description:{type:Array},
status:{type:Array},
dailyRate:{type:Array},
monthlyRate:{type:Array},
weeklyRate:{type:Array},
monthlyRate:{type:Array},
yearlyRate:{type:Array},
audianceType:{type:Array},
dailyVisitor:{type:Array},
nearBy:{type:Array},
address:{type:Array},
city:{type:Array},
state:{type:Array},
country:{type:Array},

});


//model class
const ModelClass = mongoose.model('addSchema',addSchema);

//export model
module.exports = ModelClass;
