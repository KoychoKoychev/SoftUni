const { redirect } = require("express/lib/response");
const { isUser } = require("../middleware/guards");
const { createTrip, editTrip, getTripById, deleteTrip, joinTrip } = require("../services/trip");
const { mapErrors, mapTrip } = require("../utils/mappers");

const router = require("express").Router();

router.get("/create", isUser(), (req, res) => {
    res.render("create", { title: "Create" })
})

router.post("/create", isUser(), async (req, res) => {
    const userId = req.session.user._id
    const data = {
        startPoint: req.body.startPoint,
        endPoint: req.body.endPoint,
        date: req.body.date,
        time: req.body.time,
        carImg: req.body.carImg,
        carBrand: req.body.carBrand,
        seats: req.body.seats,
        price: req.body.price,
        description: req.body.description,
        creator: req.session.user._id
    }
    try {
        const trip = await createTrip(data, userId);
        res.redirect("/catalog");
    } catch (err) {
        const errors = mapErrors(err);
        console.log(errors);
        res.render("create", { title: "Create", errors, data })
    }
})


router.get("/edit/:id", isUser(), async (req, res) => {
    const id = req.params.id;
    const trip = mapTrip(await getTripById(id));

    res.render("edit", { title: "Edti Trip", trip })
})

router.post("/edit/:id", isUser(), async (req, res) => {
    const id = req.params.id;
    const trip = {
        startPoint: req.body.startPoint,
        endPoint: req.body.endPoint,
        date: req.body.date,
        time: req.body.time,
        carImg: req.body.carImg,
        carBrand: req.body.carBrand,
        seats: req.body.seats,
        price: req.body.price,
        description: req.body.description,
        creator: req.session.user._id
    }

    try {
        await editTrip(id, trip);
        res.redirect(`/details/${id}`);
    } catch (err) {
        const errors = mapErrors(err)
        res.render("edit", { title: "Edit Trip", errors, trip })
    }
});

router.get("/delete/:id", isUser(), async (req, res) => {
    const id = req.params.id;
    await deleteTrip(id);
    res.redirect(`/catalog`);
})

router.get("/join/:id", isUser(), async (req, res) => {
    const id = req.params.id;
    const userId = req.session.user._id
    await joinTrip(id, userId);
    res.redirect(`/details/${id}`);
})


module.exports = router;