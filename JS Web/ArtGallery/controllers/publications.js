const { isGuest, isUser } = require("../middleware/guards");
const { createPub, getPubById, editPub, deletePub, sharePub } = require("../services/pubs");
const mapErrors = require("../utils/mappers");

const router = require("express").Router();

router.get('/create', isUser(), (req, res) => {
    res.render('create', { title: 'Create' })
})

router.post('/create', isUser(), async (req, res) => {
    const userId = req.session.user._id;
    const pub = {
        title: req.body.title,
        tech: req.body.tech,
        certificate: req.body.certificate,
        picture: req.body.picture,
    }
    try {
        await createPub(pub, userId);
        res.redirect('/gallery')
    } catch (err) {
        const errors = mapErrors(err);
        res.render('create', { title: 'Create', pub, errors })
    }
})

router.get('/details/:id', async (req, res) => {
    const pubId = req.params.id;
    const pub = await getPubById(pubId);
    pub.isAuthor = req.session.user && pub.author._id == req.session.user._id;
    const userHasLiked = req.session.user ? pub.shares.map(el => el._id).some(el => el == req.session.user._id):null;
    res.render('details', { title: pub.title, pub, userHasLiked })
})

router.get('/edit/:id', isUser(), async (req, res) => {
    const pubId = req.params.id;
    const data = await getPubById(pubId);
    const pub = {
        _id: data._id,
        title: data.title,
        tech: data.tech,
        certificate: data.certificate,
        picture: data.picture,
    }
    res.render('edit', { title: 'Edit publictaion', pub })
})

router.post('/edit/:id', isUser(), async (req, res) => {
    const pubId = req.params.id;
    const pub = {
        title: req.body.title,
        tech: req.body.tech,
        certificate: req.body.certificate,
        picture: req.body.picture,
    }
    try {
        await editPub(pubId, pub);
        res.redirect(`/details/${pubId}`);
    } catch (err) {
        const errors = mapErrors(err);
        pub._id = pubId;
        res.render('edit', { title: `Edit Publication`, pub, errors })
    }
});

router.get('/delete/:id', isUser(), async (req, res) => {
    const pubId = req.params.id;

    await deletePub(pubId);

    res.redirect(`/gallery`);
})

router.get('/share/:id', isUser(), async (req,res)=>{
    const pubId = req.params.id;
    const userId = req.session.user._id

    await sharePub(pubId,userId);

    res.redirect(`/details/${pubId}`);
})

module.exports = router;