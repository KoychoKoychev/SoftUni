const mapErrors = require("../utils/mappers");
const { isGuest, isUser } = require("../middleware/guards");
const { getAllPubs } = require("../services/pubs");
const { getUserById } = require("../services/user");

const router = require("express").Router();

router.get('/', async (req, res) => {
    const pubsArr = await getAllPubs();
    const pubs = pubsArr.map(el => ({
        _id: el._id,
        title: el.title,
        shares: el.shares.length
    }));
    res.render('home', { title: 'Home Page', pubs })
})

router.get('/gallery', async (req, res) => {
    const pubs = await getAllPubs();
    res.render('gallery', { title: 'Gallery', pubs })
})

router.get('/profile', isUser(), async (req, res) => {
    const userId = req.session.user._id;

    const user = await getUserById(userId);
    user.publications?user.pubsStr=user.publications.map(el=>el.title).join(', '):null;
    user.sharedPubs?user.shareStr=user.sharedPubs.map(el=>el.title).join(', '):null;
    res.render('profile',{title:`${user.username}'s profile`, user})
})

module.exports = router;