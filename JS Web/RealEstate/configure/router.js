const authController = require("../controllers/auth");
const homeController = require("../controllers/home");
const offerController = require("../controllers/offers");

module.exports = (app)=>{
    app.use(authController);
    app.use(homeController);
    app.use(offerController);

    app.get('*', (req,res)=>{
        res.render('404',{title:'Page not found'})
    })
}