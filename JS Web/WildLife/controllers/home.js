const { isUser } = require("../middleware/guards");
const { getAllPosts, getPostById, getMyPosts } = require("../services/posts");
const { postMap } = require("../utils/mappers");

const router = require("express").Router();

router.get("/", (req, res) => {
    res.render("home", { title: "Home Page" })
})

router.get("/catalog", async (req, res) => {
    const posts = await getAllPosts();
    const mapedPosts = posts.map(postMap);
    res.render("catalog", { title: "All Posts", mapedPosts })
})

router.get("/details/:id", async (req, res) => {
    const id = req.params.id;
    const post = await getPostById(id);
    const mappedPost = postMap(post);
    const isAuthor = (req.session.user && mappedPost.author.id == req.session.user._id) ? true : false;
    const hasVoted = (req.session.user && mappedPost.votes.map(e=>e.email).includes(req.session.user.email)) ? true : false;
    const voters = mappedPost.votes.map(e=>e.email).join(", ");
    res.render("details", { title: mappedPost.title, mappedPost, isAuthor, hasVoted, voters })
})

router.get("/my-posts", isUser(), async (req, res) => {
    const id = req.session.user._id;
    const posts = (await getMyPosts(id)).map(postMap);
    res.render("my-posts", { title: `${req.session.user.email}/'s posts`, posts })
})

module.exports = router;