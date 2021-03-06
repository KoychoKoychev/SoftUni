const dbName = "artgallery";
const connectionString = `mongodb://localhost:27017/${dbName}`;

const mongoose = require("mongoose");

require("../models/User");

module.exports = async (app)=>{
    try{
        await mongoose.connect(connectionString,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        });
        console.log("Database connected!");

        mongoose.connection.on("error",(err)=>{
            console.error("Database error");
            console.error(err);
        })
    }catch(err){
        console.log("Error connectiong to the database");
        process.exit(1)
    }
}