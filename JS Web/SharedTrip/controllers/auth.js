const { isGuest, isUser } = require("../middleware/guards");
const { register, login } = require("../services/user");
const { mapErrors } = require("../utils/mappers");

const router = require("express").Router();

router.get("/register", isGuest(), (req, res) => {
    res.render("register");
})

router.post("/register", isGuest(), async (req, res) => {
    try {
        if (req.body.password.length < 4) {
            throw new Error("Passwords must be at least 4 characters long");
        }
        if (req.body.password != req.body.rePass) {
            throw new Error("Passwords dont match");
        }
        const user = await register(req.body.email, req.body.password, req.body.gender);
        req.session.user = user;
        res.redirect("/");
    } catch (err) {
        const errors = mapErrors(err);
        res.render("register", { data: { email: req.body.email }, errors });
    }
});

router.get("/login", isGuest(), (req, res) => {
    res.render("login");
})

router.post("/login", isGuest(), async (req, res) => {
    try {
        const user = await login(req.body.email, req.body.password);
        req.session.user = {
            _id: user._id,
            email: user.email,
            gender: user.gender,
            tipsHistory: user.tipsHistory,
        };
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
