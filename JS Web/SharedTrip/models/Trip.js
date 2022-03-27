const { Schema, model, Types:{ObjectId} } = require("mongoose");

const URL_PATTERN = /^https?:\/\//;


const tripSchema = new Schema({
    startPoint:{type:String, minLength:[4,"The location must be at least 4 characters long."], required:true},
    endPoint:{type:String, minLength:[4,"The location must be at least 4 characters long."], required:true},
    date:{type:String, required:true},
    time:{type:String, required:true},
    description:{type:String, minLength:[10,"The description must be at least 10 characters long."], required:true},
    carImg:{type:String, validate:{
        validator(value){
            return URL_PATTERN.test(value);
        },
        message:"The image must have a valid URL."
    }},
    carBrand:{type:String, minLength:[4,"The car brand must be at least 4 characters long."], required:true},
    seats:{type:Number, required:true},
    price:{type:Number, min:[1,"Price must be at least 1 lev"], max:[50,"Price must not be greater than 50 lev"]},
    creator:{type:ObjectId, ref:"User"},
    buddies :{type:[ObjectId], ref:"User", default:[]},
})

const Trip = model("Trip", tripSchema);

module.exports = Trip;