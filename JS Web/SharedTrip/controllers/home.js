const { isUser } = require("../middleware/guards");
const { getAllTrips, getTripById } = require("../services/trip");
const { getUserById } = require("../services/user");
const { mapTrip, mapUser } = require("../utils/mappers");

const router = require("express").Router();

router.get("/", (req, res) => {
    res.render("home");
});

router.get("/catalog", async (req, res) => {
    const trips = (await getAllTrips()).map(mapTrip);
    res.render("catalog", { title: "Catalog", trips })
})

router.get("/details/:id", async (req, res) => {
    const id = req.params.id
    const trip = mapTrip(await getTripById(id));
    const isAuthor = (req.session.user && req.session.user._id == trip.creator._id);
    const hasJoined = (req.session.user && trip.buddies.map(e => e.email).includes(req.session.user.email));
    const hasSeats = trip.seats > 0;
    const buddyList = trip.buddies.map(e => e.email).join(", ")
    res.render("details", { title: "Trip", trip, isAuthor, hasJoined, hasSeats, buddyList })
});

router.get("/profile/:id", isUser(), async (req, res) => {
    const userId = req.params.id;
    const user = mapUser(await getUserById(userId));
    const trips = user.tripsHistory;
    const tripsCount = trips.length
    res.render("profile", { title: "Profile Page", trips, tripsCount})
})

module.exports = router;