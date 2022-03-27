const req = require("express/lib/request");
const { isUser } = require("../middleware/guards");
const { createOffer, deleteOffer, loadOfferById, editOffer } = require("../services/offers");

const mapErrors = require("../utils/mappers");

const router = require("express").Router();

router.get('/create', isUser(), (req, res) => {
    res.render('create', { title: 'Create offer' })
})

router.post('/create', isUser(), async (req, res) => {
    const userId = req.session.user._id;

    const offer = {
        name: req.body.name,
        type: req.body.type,
        year: req.body.year,
        city: req.body.city,
        image: req.body.image,
        description: req.body.description,
        available: req.body.available,
    }

    try {
        await createOffer(offer, userId);
        res.redirect('/catalog');
    } catch (err) {
        const errors = mapErrors(err);
        res.render('create', { title: 'Create offer', offer, errors });
    }
})

router.get('/edit/:id', isUser(), async (req, res) => {
    const offerId = req.params.id;
    const offer = await loadOfferById(offerId);

    res.render('edit', { title: `Edit ${offer.name}`, offer })
});

router.post('/edit/:id', isUser(), async (req, res) => {
    const offerId = req.params.id;
    const offer = {
        _id: offerId,
        name: req.body.name,
        type: req.body.type,
        year: req.body.year,
        city: req.body.city,
        image: req.body.image,
        description: req.body.description,
        available: req.body.available,
    }

    try {
        const currOffer = await loadOfferById(offerId);
        if (currOffer.owner != req.session.user._id) {
            throw new Error('You are not the author of this offer');
        }
        await editOffer(offerId, offer);
        res.redirect(`/details/${offerId}`);
    } catch (err) {
        const errors = mapErrors(err);
        res.render('edit', { title: `Edit ${offer.name}`, offer, errors })
    }

})

router.get('/delete/:id', isUser(), async (req, res) => {
    const offerId = req.params.id;
    try {
        const currOffer = await loadOfferById(offerId);
        if (currOffer.owner != req.session.user._id) {
            throw new Error('You are not the author of this offer');
        }
        await deleteOffer(offerId);
        res.redirect('/catalog');
    } catch (err) {
        console.error(err)
        res.redirect('/catalog');
    }
})


module.exports = router;
