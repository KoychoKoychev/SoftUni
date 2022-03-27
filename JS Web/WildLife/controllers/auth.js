const { isGuest, isUser } = require("../middleware/guards");
const { register, login } = require("../services/user");
const { mapErrors } = require("../utils/mappers");

const router = require("express").Router();

router.get("/register", isGuest(), (req, res) => {
    res.render("register");
})

router.post("/register", isGuest(), async (req, res) => {
    try {
        if (!req.body.password) {
            throw new Error("Please insert a password");
        }
        if (req.body.password != req.body.rePass) {
            throw new Error("Passwords dont match");
        }
        const user = await register(req.body.firstName, req.body.lastName, req.body.email, req.body.password);
        req.session.user = user;
        res.redirect("/");
    } catch (err) {
        const errors = mapErrors(err);
        const data = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email
        }
        res.render("register", { data, errors });
    }
});

router.get("/login", isGuest(), (req, res) => {
    res.render("login");
})

router.post("/login", isGuest(), async (req, res) => {
    try {
        const user = await login(req.body.email, req.body.password);
        req.session.user = user;
        res.redirect("/");
    } catch (err) {
        const errors = mapErrors(err);
        res.render("login", { data: { email: req.body.email }, errors })
    }
});

router.get("/logout", isUser(), (req, res) => {
    delete req.session.user;
    res.redirect("/");
})

module.exports = router;
