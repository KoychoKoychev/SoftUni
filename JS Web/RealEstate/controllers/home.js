const { isGuest, isUser } = require("../middleware/guards");
const { createOffer, loadOffers, loadOfferById } = require("../services/offers");

const mapErrors = require("../utils/mappers");

const router = require("express").Router();

router.get('/', async (req, res) => {
    const offers = await loadOffers();
    res.render('home', { title: 'Home page', offers })
})

router.get('/catalog', async (req, res) => {
    const offers = await loadOffers();
    res.render('catalog', { title: 'Building listings', offers })
})

router.get('/details/:id', async (req, res) => {
    const offerId = req.params.id;
    const offer = await loadOfferById(offerId);
    offer.isOwner = req.session.user && req.session.user._id == offer.owner;
    offer.hasSpace = offer.available > 0;
    offer.alreadyRented = req.session.user && offer.renters.map(el => el._id).some(el => el == req.session.user._id);
    offer.rentersArr = offer.renters.map(el => el.name);
    offer.rentersStr = offer.rentersArr.join(' ,');

    res.render('details', { title: `${offer.name} details`, offer })
})

module.exports = router;