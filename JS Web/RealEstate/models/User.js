const { Schema, model } = require("mongoose");

const NAME_PATTERN = /^[A-Z][a-z]+ [A-Z][a-z]+/;

const userSchema = new Schema({
    name:{type:String, validate:{
        validator(value){
            return NAME_PATTERN.test(value);
        },
        message:'Capitalised first and last name need to be added.'
    }},
    username:{type:String, minLength:[5,"Username must be atleast 5 characters long"], required:true},
    hashedPassword:{type:String, required:true},
});

userSchema.index({username:1},{
    unique:true,
    collation:{
        locale:"en",
        strength:2
    }
});

const User = model("User",userSchema);

module.exports = User;