const express = require("express");
const databaseConfig = require("./configure/database");
const expressConfig = require("./configure/express");
const routerConfig = require("./configure/router");


start();

async function start() {
    const app = express();

    expressConfig(app);
    databaseConfig(app);
    routerConfig(app);

    app.all("*", (req,res)=>{
    res.render("404")
    })

    app.listen(3000, ()=> console.log("Server started on port 3000"))
}